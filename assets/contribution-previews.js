/* Full mathematical previews from their existing, permanent revision pages. */
(function (root) {
  'use strict';
  var script = document.currentScript;
  var base;
  try {
    base = new URL(script.dataset.contributionBase, root.location.href);
    if (base.origin !== root.location.origin || !/\/contributions\/$/.test(base.pathname) || base.search || base.hash) return;
  } catch (_) { return; }

  function revisionURL(value) {
    if (typeof value !== 'string' || /[\\%?#\s\x00-\x1f\x7f]/.test(value) || value.indexOf('//') === 0 || /(?:^|\/)\.{1,2}(?:\/|$)/.test(value)) throw new Error('Unsafe preview address');
    var url = new URL(value, root.location.href);
    if (url.origin !== base.origin || url.username || url.password || url.search || url.hash || url.pathname.indexOf(base.pathname) !== 0) throw new Error('Unsafe preview address');
    var suffix = url.pathname.slice(base.pathname.length);
    var canonical = /^[a-z0-9]+(?:-[a-z0-9]+)*\/(?:(?:attempt|review)-[1-9][0-9]*|contribution-[0-9a-f]{32})\/r[1-9][0-9]*\/$/;
    var legacy = /^[A-Z][A-Z0-9]{1,9}-[A-Z0-9][A-Z0-9.-]{0,80}\/r[1-9][0-9]*\/$/;
    if (!canonical.test(suffix) && !legacy.test(suffix)) throw new Error('Preview requires a permanent contribution revision');
    return url;
  }

  // Canonical manuscripts have already passed the server's HTML sanitizer.
  // Fail closed on unexpected active markup rather than executing or silently
  // removing any part of the complete mathematics or claim scope.
  var tags = new Set('p h1 h2 h3 h4 h5 h6 a em strong u code pre blockquote ul ol li table thead tbody tr td th span div br hr wbr sup sub section'.split(' '));
  function inspect(node) {
    [node].concat(Array.prototype.slice.call(node.querySelectorAll('*'))).forEach(function (element) {
      if (!tags.has(element.tagName.toLowerCase())) throw new Error('Unexpected manuscript markup');
      Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
        var name = attribute.name.toLowerCase(), value = attribute.value;
        if (/^on/.test(name) || /^(?:src|srcdoc|action|formaction|background|xlink:href)$/.test(name)) throw new Error('Unexpected active manuscript attribute');
        if (name === 'style' && /[\\@]|url\s*\(|expression\s*\(/i.test(value)) throw new Error('Unexpected manuscript style');
        if (name === 'href') {
          var target = new URL(value, base);
          if (['http:', 'https:', 'mailto:'].indexOf(target.protocol) === -1) throw new Error('Unexpected manuscript link');
        }
      });
    });
  }

  function extract(source, revision, prefix) {
    var page = new DOMParser().parseFromString(source, 'text/html');
    var manuscripts = page.querySelectorAll('#manuscript');
    var claims = page.querySelectorAll('section.claim');
    if (manuscripts.length !== 1 || claims.length > 1) throw new Error('Revision manuscript is unavailable');
    var nodes = (claims.length ? [claims[0]] : []).concat([manuscripts[0]]).map(function (node) { return node.cloneNode(true); });
    var ids = new Map();
    nodes.forEach(function (node) {
      inspect(node);
      [node].concat(Array.prototype.slice.call(node.querySelectorAll('[id]'))).forEach(function (element) {
        if (!element.id) return;
        if (ids.has(element.id)) throw new Error('Duplicate manuscript anchor');
        ids.set(element.id, prefix + '-' + element.id);
      });
    });
    nodes.forEach(function (node) {
      [node].concat(Array.prototype.slice.call(node.querySelectorAll('*'))).forEach(function (element) {
        if (element.id) element.id = ids.get(element.id);
        ['aria-labelledby', 'aria-describedby', 'headers'].forEach(function (name) {
          if (!element.hasAttribute(name)) return;
          element.setAttribute(name, element.getAttribute(name).split(/\s+/).map(function (id) { return ids.get(id) || id; }).join(' '));
        });
        if (element.tagName.toLowerCase() === 'a' && element.hasAttribute('href')) {
          var link = new URL(element.getAttribute('href'), revision);
          var id;
          try { id = decodeURIComponent(link.hash.slice(1)); } catch (_) { throw new Error('Invalid manuscript anchor'); }
          element.setAttribute('href', link.origin === revision.origin && link.pathname === revision.pathname && ids.has(id)
            ? '#' + ids.get(id) : link.href);
        }
      });
    });
    return nodes;
  }

  document.querySelectorAll('[data-contribution-preview]').forEach(function (article) {
    var button = article.querySelector('[data-preview-toggle]');
    var body = article.querySelector('[data-preview-body]');
    var status = article.querySelector('[data-preview-status]');
    var revision;
    try { revision = revisionURL(article.dataset.contributionPreview); } catch (_) { return; }
    if (!button || !body || !status) return;
    var loaded = false;
    button.hidden = false;
    button.addEventListener('click', function () {
      if (loaded) {
        body.hidden = !body.hidden;
        button.textContent = body.hidden ? 'View more' : 'View less';
        button.setAttribute('aria-expanded', body.hidden ? 'false' : 'true');
        return;
      }
      button.disabled = true;
      status.textContent = 'Loading full contribution…';
      fetch(revision.href, { credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer' }).then(function (response) {
        if (!response.ok || response.redirected || response.url !== revision.href || !/^text\/html\b/i.test(response.headers.get('Content-Type') || '')) throw new Error('Revision could not be loaded');
        return response.text();
      }).then(function (source) {
        var nodes = extract(source, revision, body.id);
        nodes.forEach(function (node) { body.appendChild(node); });
        body.hidden = false;
        loaded = true;
        button.textContent = 'View less';
        button.setAttribute('aria-expanded', 'true');
        status.textContent = '';
        if (root.ProblemHunting && root.ProblemHunting.typesetTeXContainers) {
          return root.ProblemHunting.typesetTeXContainers(body.querySelectorAll('.tex-content.mathjax-process'));
        }
      }).catch(function () {
        status.textContent = loaded ? 'Mathematical display is unavailable; the full notation remains visible below.'
          : 'Preview unavailable. Use “Read full contribution” to open the complete revision.';
      }).then(function () { button.disabled = false; });
    });
  });
}(window));
