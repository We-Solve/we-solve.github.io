/* Pagefind is loaded only on the search route and requests its local index on demand. */
(function () {
  'use strict';
  var container = document.getElementById('search');
  if (!container) return;
  var catalogueMatch = document.getElementById('search-catalogue-match');
  var catalogueRequest = null;
  var labelVersion = 0;
  function matchCatalogueLabel(query) {
    var version = ++labelVersion;
    if (!catalogueMatch) return;
    catalogueMatch.hidden = true;
    catalogueMatch.replaceChildren();
    var label = String(query || '').trim().toUpperCase();
    if (!/^[A-Z][A-Z0-9]{1,9}-[1-9][0-9]*$/.test(label)) return;
    if (!catalogueRequest) {
      catalogueRequest = fetch(container.dataset.catalogueIndex, { credentials: 'same-origin' })
        .then(function (response) {
          if (!response.ok) throw new Error('Catalogue unavailable');
          return response.json();
        }).then(function (data) {
          if (!data || !Array.isArray(data.problems)) throw new Error('Invalid catalogue');
          return data.problems;
        }).catch(function (error) { catalogueRequest = null; throw error; });
    }
    catalogueRequest.then(function (records) {
      if (version !== labelVersion) return;
      // Field rank labels select canonical records; full text may quote source aliases.
      records.filter(function (record) {
        return record && Array.isArray(record.display_labels) && record.display_labels.some(function (value) { return String(value).toUpperCase() === label; }) &&
          typeof record.title === 'string' && typeof record.url === 'string' &&
          /^\/problems\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(record.url);
      }).forEach(function (record) {
        var line = document.createElement('p');
        var link = document.createElement('a');
        line.appendChild(document.createTextNode('Catalogue rank: '));
        var shownLabel = record.display_labels.find(function (value) { return String(value).toUpperCase() === label; });
        link.textContent = shownLabel + ' · ' + record.title;
        link.href = (container.dataset.basePath || '') + record.url;
        line.appendChild(link);
        catalogueMatch.appendChild(line);
      });
      catalogueMatch.hidden = !catalogueMatch.childElementCount;
    }).catch(function () { /* Full-text search remains available. */ });
  }
  var status = document.getElementById(container.dataset.searchStatus);
  if (!window.PagefindUI) {
    if (status) status.textContent = 'Search could not load. Browse the discipline catalogues below.';
    return;
  }
  try {
    var search = new window.PagefindUI({
      element: '#search',
      bundlePath: container.dataset.pagefindBase,
      showSubResults: true,
      showImages: false,
      pageSize: 15,
      resetStyles: false,
      autofocus: true,
      translations: { placeholder: 'Search problems, contributions, and reviews' },
      showEmptyFilters: false
    });
    if (status) status.textContent = 'Use the filters to narrow your results.';
    var query = new URLSearchParams(window.location.search).get('q');
    if (query) { search.triggerSearch(query); matchCatalogueLabel(query); }
    var formInput = container.querySelector('input[type="text"], input[type="search"]');
    if (formInput) formInput.addEventListener('input', function () {
      var current = new URL(window.location.href);
      if (formInput.value) current.searchParams.set('q', formInput.value);
      else current.searchParams.delete('q');
      window.history.replaceState(null, '', current.pathname + current.search + current.hash);
      matchCatalogueLabel(formInput.value);
    });
    container.addEventListener('click', function (event) {
      // Pagefind's clear button resets its own state without emitting input.
      if (!event.target.closest('.pagefind-ui__search-clear')) return;
      matchCatalogueLabel('');
      var current = new URL(window.location.href);
      current.searchParams.delete('q');
      window.history.replaceState(null, '', current.pathname + current.search + current.hash);
    });
  } catch (_) {
    if (status) status.textContent = 'Search could not load. Browse the discipline catalogues below.';
  }
}());
