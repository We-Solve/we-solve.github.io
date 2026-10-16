/* Consent-aware Google Analytics (ADR 0018). Rendered only when a measurement ID is configured.
 * Decides in the browser, without contacting any service, whether to ask, load or skip; Google's
 * script is injected from here, never written into the page HTML. */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.start(root);
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  var STORAGE_KEY = 'we-solve-analytics';
  var EXTRA_ZONES = [
    'Atlantic/Reykjavik', 'Atlantic/Madeira', 'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Faroe',
    'Africa/Ceuta', 'Arctic/Longyearbyen', 'Asia/Nicosia', 'Asia/Famagusta',
    'Indian/Reunion', 'Indian/Mayotte', 'America/Guadeloupe', 'America/Martinique', 'America/Cayenne'
  ];

  function zoneInPrivacyRegion(zone) {
    // Unknown, unreadable or masked (UTC, as privacy-hardened browsers report) timezones: ask rather than assume.
    if (!zone || /^(UTC|UCT|GMT|Zulu|Etc\/.*)$/.test(zone)) return true;
    return zone.indexOf('Europe/') === 0 || EXTRA_ZONES.indexOf(zone) !== -1;
  }

  function languageRegions(languages) {
    var found = [];
    (languages || []).forEach(function (tag) {
      var parts = String(tag).split(/[-_]/).slice(1);
      for (var i = 0; i < parts.length; i++) {
        if (/^[A-Za-z]{2}$/.test(parts[i])) { found.push(parts[i].toUpperCase()); break; }
      }
    });
    return found;
  }

  function isPrivacyRegion(env) {
    if (zoneInPrivacyRegion(env.timezone)) return true;
    var regions = (env.regions || []).map(function (r) { return String(r).toUpperCase(); });
    return languageRegions(env.languages).some(function (r) { return regions.indexOf(r) !== -1; });
  }

  /* 'none' (do not load or ask), 'load' (load now), 'ask' (show the choice). */
  function decide(env) {
    if (env.gpc) return 'none';
    if (env.stored === 'denied') return 'none';
    if (!isPrivacyRegion(env)) return 'load';
    return env.stored === 'granted' ? 'load' : 'ask';
  }

  function readStored(storage) {
    try {
      var value = storage.getItem(STORAGE_KEY);
      return value === 'granted' || value === 'denied' ? value : null;
    } catch (error) { return null; }
  }

  function writeStored(storage, value) {
    try { storage.setItem(STORAGE_KEY, value); } catch (error) { /* the choice then lasts for this page only */ }
  }

  function start(win) {
    var script = win.document.currentScript || win.document.querySelector('script[data-analytics-id]');
    if (!script) return;
    var id = script.dataset.analyticsId;
    if (!/^G-[A-Z0-9]{8,12}$/.test(id || '')) return;
    var mode = script.dataset.analyticsMode === 'advanced' ? 'advanced' : 'basic';
    var regions = (script.dataset.analyticsRegions || '').split(',').filter(Boolean);
    var privacyUrl = script.dataset.analyticsPrivacy || '/policies/privacy/';
    var doc = win.document;
    var loaded = false;

    function environment() {
      var zone = '';
      try { zone = win.Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (error) { zone = ''; }
      var languages = win.navigator.languages && win.navigator.languages.length ? Array.prototype.slice.call(win.navigator.languages) : [win.navigator.language];
      return {timezone: zone, languages: languages, gpc: win.navigator.globalPrivacyControl === true, stored: readStored(win.localStorage),
              regions: regions, mode: mode};
    }

    function gtag() { win.dataLayer.push(arguments); }

    function pageAddress(value) {
      return String(value || '').split(/[?#]/)[0];
    }

    function load(consented) {
      if (loaded) return;
      loaded = true;
      win.dataLayer = win.dataLayer || [];
      win.gtag = gtag;
      var grant = consented ? 'granted' : 'denied';
      gtag('consent', 'default', {analytics_storage: grant, ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
      if (mode === 'advanced' && regions.length) gtag('consent', 'default', {analytics_storage: 'denied', region: regions});
      gtag('js', new Date());
      // Limit automatic page-view addresses. Disable enhanced measurement in GA Admin too:
      // its site-search and outbound-click events can collect query parameters independently.
      gtag('config', id, {
        allow_google_signals: false, allow_ad_personalization_signals: false,
        cookie_flags: 'SameSite=Lax;Secure', cookie_expires: 34128000,
        page_location: win.location.origin + win.location.pathname,
        page_referrer: pageAddress(doc.referrer)
      });
      var tag = doc.createElement('script');
      tag.async = true;
      tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
      doc.head.appendChild(tag);
    }

    function banner() {
      var box = doc.createElement('section');
      box.className = 'analytics-banner';
      box.setAttribute('aria-label', 'Analytics choice');
      box.setAttribute('data-analytics-banner', '');
      var text = doc.createElement('p');
      text.textContent = 'We use Google Analytics to understand site usage and spot unusual traffic. It sets cookies. ';
      var link = doc.createElement('a');
      link.href = privacyUrl;
      link.textContent = 'Privacy';
      text.appendChild(link);
      var actions = doc.createElement('div');
      actions.className = 'analytics-actions';
      ['Accept', 'Decline'].forEach(function (label) {
        var button = doc.createElement('button');
        button.type = 'button';
        button.className = 'button analytics-button';
        button.textContent = label;
        button.addEventListener('click', function () { choose(label === 'Accept' ? 'granted' : 'denied'); });
        actions.appendChild(button);
      });
      box.appendChild(text);
      box.appendChild(actions);
      doc.body.appendChild(box);
    }

    function removeBanner() {
      var existing = doc.querySelector('[data-analytics-banner]');
      if (existing) existing.remove();
    }

    function clearCookies() {
      // Withdrawing consent removes Google's first-party cookies (_ga and _ga_<ID>) for this host.
      doc.cookie.split(';').forEach(function (cookie) {
        var name = cookie.split('=')[0].trim();
        if (name === '_ga' || name.indexOf('_ga_') === 0) doc.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax';
      });
    }

    function choose(value) {
      writeStored(win.localStorage, value);
      removeBanner();
      if (value === 'granted') {
        win['ga-disable-' + id] = false;
        if (loaded) { gtag('consent', 'update', {analytics_storage: 'granted'}); }
        else load(true);
      } else {
        win['ga-disable-' + id] = true;
        if (loaded) gtag('consent', 'update', {analytics_storage: 'denied'});
        clearCookies();
      }
    }

    function run() {
      var action = decide(environment());
      removeBanner();
      if (action === 'load') load(true);
      else if (action === 'ask') {
        if (mode === 'advanced') load(false);
        banner();
      } else {
        win['ga-disable-' + id] = true;
      }
    }

    function init() {
      run();
      var link = doc.querySelector('[data-analytics-choice]');
      // A Global Privacy Control signal is honoured everywhere, so there is nothing to choose.
      if (link && !environment().gpc) {
        link.hidden = false;
        link.addEventListener('click', function () {
          // Reopen the choice. Withdrawing after loading stops collection; granting loads it.
          removeBanner();
          banner();
        });
      }
    }

    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
    else init();
    win.weSolveAnalytics = {decide: decide, reset: function () { try { win.localStorage.removeItem(STORAGE_KEY); } catch (error) { /* ignore */ } run(); }};
  }

  return {decide: decide, isPrivacyRegion: isPrivacyRegion, languageRegions: languageRegions, start: start, STORAGE_KEY: STORAGE_KEY};
});
