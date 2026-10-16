/* Each catalogue index is local and loaded only when a reader searches or filters. */
(function () {
  'use strict';
  var root = document.getElementById('catalogue-search');
  if (!root) return;
  var form = root.querySelector('form');
  var input = root.querySelector('input');
  var clear = root.querySelector('[type="reset"]');
  var sizeControl = root.querySelector('#catalogue-page-size');
  var facetNames = ['subjects', 'providers', 'completion_estimates', 'models'];
  var facetParams = { subjects: 'subject', providers: 'tag', completion_estimates: 'completion', models: 'model' };
  var facetControls = {};
  facetNames.forEach(function (name) { facetControls[name] = root.querySelector('[data-catalogue-filter="' + name + '"]'); });
  var status = document.getElementById('catalogue-search-status');
  var staticRecords = document.getElementById('catalogue-static-records');
  var results = document.getElementById('catalogue-search-results');
  var heading = document.getElementById('catalogue-results-heading');
  var list = results.querySelector('ul');
  var empty = results.querySelector('.catalogue-search-empty');
  var pagination = results.querySelector('nav');
  var previous = results.querySelector('[data-search-previous]');
  var next = results.querySelector('[data-search-next]');
  var pageLabel = results.querySelector('[data-search-page]');
  var initialStatus = status.textContent;
  var basePath = root.dataset.basePath || '';
  var classificationScheme = normalized(root.dataset.classificationScheme).trim();
  var classificationCode = normalized(root.dataset.classificationCode).trim();
  var defaultPageSize = validPageSize(root.dataset.pageSize);
  var pageSize = defaultPageSize;
  var page = 0;
  var matches = [];
  var request = null;
  var searchVersion = 0;
  var classificationCodes = new Set();

  function normalized(value) {
    return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function strings(value) {
    return Array.isArray(value) ? value.filter(function (item) { return typeof item === 'string'; }) : [];
  }

  function validPageSize(value) {
    var size = Number(value);
    return [50, 100, 500].includes(size) ? size : 50;
  }

  function selectedFacets() {
    var facets = {};
    facetNames.forEach(function (name) {
      facets[name] = facetControls[name] ? facetControls[name].value : '';
    });
    return facets;
  }

  function hasFilters(facets) {
    return facetNames.some(function (name) { return Boolean(facets[name]); });
  }

  function problemHref(value) {
    // Index records contain site-relative problem paths, never external URLs.
    if (typeof value !== 'string' || !/^\/problems\/[A-Za-z0-9][A-Za-z0-9_.-]*\/$/.test(value)) return null;
    return basePath + value;
  }

  function loadIndex() {
    if (request) return request;
    request = Promise.resolve().then(function () {
      var indexURL = new URL(root.dataset.indexUrl, window.location.href);
      if (indexURL.origin !== window.location.origin || !indexURL.pathname.startsWith(basePath + '/')) {
        throw new Error('Invalid catalogue index path');
      }
      return fetch(indexURL.href, { credentials: 'same-origin' });
    }).then(function (response) {
      if (!response.ok) throw new Error('Catalogue unavailable');
      return response.json();
    }).then(function (data) {
      if (!data || !Array.isArray(data.problems)) throw new Error('Invalid catalogue index');
      classificationCodes = new Set();
      return data.problems.filter(function (record) {
        return record && typeof record.alias === 'string' && typeof record.title === 'string' && problemHref(record.url);
      }).map(function (record) {
        var classifications = Array.isArray(record.classifications) ? record.classifications.filter(function (item) {
          return item && typeof item.scheme === 'string' && typeof item.code === 'string';
        }).map(function (item) {
          return {
            scheme: item.scheme,
            label: typeof item.label === 'string' ? item.label : item.scheme.toUpperCase(),
            code: item.code,
            ancestors: (Array.isArray(item.ancestors) ? strings(item.ancestors) : [item.code]).map(normalized),
            name: typeof item.name === 'string' ? item.name : ''
          };
        }) : [];
        classifications.forEach(function (item) {
          item.ancestors.forEach(function (code) { classificationCodes.add(code); });
        });
        var displayLabel = typeof record.display_label === 'string' && record.display_label ? record.display_label : record.alias;
        var displayLabels = strings(record.display_labels).concat([displayLabel]);
        if (Number.isInteger(record.problem_number)) displayLabels.push('WS-' + record.problem_number);
        var facets = {};
        var providers = strings(record.providers);
        var facetText = providers.slice();
        facetNames.forEach(function (name) {
          if (name === 'completion_estimates') {
            facets[name] = (Array.isArray(record[name]) ? record[name] : []).filter(function (value) {
              return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 100;
            }).map(String);
          } else {
            facets[name] = strings(record[name]);
            if (name === 'models' || name === 'providers') facets[name] = Array.from(new Set(facets[name].map(function (value) { return value.toLowerCase(); })));
          }
          facetText = facetText.concat(facets[name]);
        });
        return {
          alias: record.alias,
          displayLabel: displayLabel,
          displayLabels: displayLabels.map(normalized),
          title: record.title,
          href: problemHref(record.url),
          classifications: classifications,
          facets: facets,
          providers: providers,
          status: typeof record.status === 'string' ? record.status : '',
          llmStatus: typeof record.llm_status === 'string' ? record.llm_status : '',
          attempts: Number.isInteger(record.attempts) && record.attempts >= 0 ? record.attempts : 0,
          searchText: normalized([record.alias, record.title, record.search_terms || ''].concat(displayLabels,
            strings(record.source_aliases), facetText, classifications.map(function (item) {
              return item.scheme + ' ' + item.label + ' ' + item.code + ' ' + item.name;
            })).join(' '))
        };
      }).filter(function (record) {
        if (!classificationScheme && !classificationCode) return true;
        return record.classifications.some(function (item) {
          if (classificationScheme && normalized(item.scheme) !== classificationScheme) return false;
          return !classificationCode || item.ancestors.includes(classificationCode);
        });
      });
    }).catch(function (error) {
      request = null; // A subsequent search can retry without reloading the page.
      throw error;
    });
    return request;
  }

  function element(tag, className, value) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }

  function resultRow(record) {
    var row = element('li', 'row');
    var alias = element('a', 'identifier', record.displayLabel);
    alias.href = record.href;
    var title = element('a', 'row-title', record.title);
    title.href = record.href;
    var metadata = [];
    record.classifications.forEach(function (item) {
      metadata.push(item.label + ' ' + item.code + (item.name ? ' — ' + item.name : ''));
    });
    if (record.facets.subjects.length) metadata.push(record.facets.subjects.join(', '));
    if (record.status) metadata.push(record.status);
    if (record.llmStatus) metadata.push('LLM status: ' + record.llmStatus);
    metadata.push(record.attempts + (record.attempts === 1 ? ' attempt' : ' attempts'));
    if (record.providers.length) metadata.push('Providers: ' + record.providers.join(', '));
    if (record.facets.models.length) metadata.push('Models: ' + record.facets.models.join(', '));
    row.append(alias, title, element('span', 'row-meta', metadata.join(' · ')));
    return row;
  }

  function updateURL(mode) {
    if (!mode) return;
    var current = new URL(window.location.href);
    var values = { q: input.value.trim(), per_page: pageSize === defaultPageSize ? '' : String(pageSize), page: page ? String(page + 1) : '' };
    var facets = selectedFacets();
    facetNames.forEach(function (name) { values[facetParams[name]] = facets[name]; });
    current.searchParams.delete('provider');
    Object.keys(values).forEach(function (key) {
      if (values[key]) current.searchParams.set(key, values[key]);
      else current.searchParams.delete(key);
    });
    var target = current.pathname + current.search + current.hash;
    if (target === window.location.pathname + window.location.search + window.location.hash) return;
    window.history[mode === 'push' ? 'pushState' : 'replaceState'](null, '', target);
  }

  function render(focusHeading) {
    page = Math.min(page, Math.max(0, Math.ceil(matches.length / pageSize) - 1));
    var start = page * pageSize;
    var fragment = document.createDocumentFragment();
    matches.slice(start, start + pageSize).forEach(function (record) { fragment.appendChild(resultRow(record)); });
    list.replaceChildren(fragment);
    empty.hidden = matches.length !== 0;
    list.hidden = matches.length === 0;
    pagination.hidden = matches.length <= pageSize;
    previous.disabled = page === 0;
    next.disabled = start + pageSize >= matches.length;
    pageLabel.textContent = 'Page ' + (page + 1) + ' of ' + Math.max(1, Math.ceil(matches.length / pageSize));
    status.textContent = matches.length.toLocaleString() + (matches.length === 1 ? ' matching problem' : ' matching problems') +
      (matches.length ? ' · Showing ' + (start + 1) + '–' + Math.min(start + pageSize, matches.length) : '') + '.';
    heading.textContent = input.value.trim() || hasFilters(selectedFacets()) ? 'Search results' : 'Problems';
    staticRecords.hidden = true;
    results.hidden = false;
    if (focusHeading) heading.focus();
  }

  function search(urlMode, keepPage) {
    var query = input.value.trim();
    var facets = selectedFacets();
    var version = ++searchVersion;
    if (!keepPage) page = 0;
    clear.disabled = !input.value && !hasFilters(facets);
    updateURL(urlMode);
    if (!query && !hasFilters(facets) && pageSize === defaultPageSize && !keepPage) {
      results.hidden = true;
      staticRecords.hidden = false;
      status.textContent = initialStatus;
      return;
    }
    status.textContent = 'Loading catalogue…';
    loadIndex().then(function (records) {
      if (version !== searchVersion) return;
      var fullQuery = normalized(query);
      var terms = fullQuery.split(/\s+/).filter(Boolean);
      var filtered = records.filter(function (record) {
        return facetNames.every(function (name) {
          if (name === 'completion_estimates' && facets[name] === 'unreported') return record.facets[name].length === 0;
          return !facets[name] || record.facets[name].some(function (value) { return normalized(value) === normalized(facets[name]); });
        });
      });
      // Row labels and permanent identifiers select the matching problem before broader text matching.
      var exactLabels = fullQuery ? filtered.filter(function (record) { return record.displayLabels.includes(fullQuery); }) : [];
      var exactTitles = fullQuery ? filtered.filter(function (record) { return normalized(record.title) === fullQuery; }) : [];
      matches = exactLabels.length ? exactLabels : exactTitles.length ? exactTitles : filtered.filter(function (record) {
        return terms.every(function (term) {
          // A known code searches its hierarchy, not incidental letters in an alias.
          if (classificationCodes.has(term)) {
            return record.classifications.some(function (item) { return item.ancestors.includes(term); });
          }
          return record.searchText.includes(term);
        });
      });
      render(false);
      updateURL(urlMode ? 'replace' : null);
    }).catch(function () {
      if (version !== searchVersion) return;
      results.hidden = true;
      staticRecords.hidden = false;
      status.textContent = 'Search could not load. Browse the catalogue, subject, and classification links, or try again.';
    });
  }

  function readURL() {
    var params = new URLSearchParams(window.location.search);
    input.value = params.get('q') || '';
    facetNames.forEach(function (name) {
      var value = params.get(facetParams[name]) || '';
      if (name === 'providers') value = value || params.get('provider') || '';
      if (name === 'models' || name === 'providers') value = value.toLowerCase();
      if (name === 'completion_estimates' && value !== '' && Number.isFinite(Number(value))) value = String(Number(value));
      if (facetControls[name]) facetControls[name].value = value;
    });
    pageSize = validPageSize(params.get('per_page') || defaultPageSize);
    sizeControl.value = String(pageSize);
    var requestedPage = Number(params.get('page'));
    page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage - 1 : 0;
    search(false, page > 0);
  }

  input.addEventListener('input', function () { search('replace'); });
  facetNames.forEach(function (name) {
    if (facetControls[name]) facetControls[name].addEventListener('change', function () { search('push'); });
  });
  sizeControl.addEventListener('change', function () {
    pageSize = validPageSize(sizeControl.value);
    search('push');
  });
  form.addEventListener('submit', function (event) { event.preventDefault(); search('push'); });
  form.addEventListener('reset', function (event) {
    event.preventDefault();
    input.value = '';
    facetNames.forEach(function (name) { if (facetControls[name]) facetControls[name].value = ''; });
    search('push');
    input.focus();
  });
  previous.addEventListener('click', function () {
    if (page > 0) { page -= 1; render(true); updateURL('push'); }
  });
  next.addEventListener('click', function () {
    if ((page + 1) * pageSize < matches.length) { page += 1; render(true); updateURL('push'); }
  });
  window.addEventListener('popstate', readURL);
  root.hidden = false;
  readURL();
}());
