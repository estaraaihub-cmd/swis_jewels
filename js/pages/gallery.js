/* ==========================================================================
   SWIS JEWELS — Page 07: Gallery & Lightbox Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('gallery');

    var items = window.SWIS_DATA.gallery;
    var grid = document.getElementById('gallery-grid');
    var filterBar = document.getElementById('gallery-filter-pills');
    var activeFilter = 'all';

    var filters = [
      { id: 'all', label: 'All Photographs' },
      { id: 'jewellery', label: 'Jewellery' },
      { id: 'bridal', label: 'Bridal Collections' },
      { id: 'diamond', label: 'Diamond Collections' },
      { id: 'interior', label: 'Store Interiors' },
      { id: 'exterior', label: 'Store Exterior' },
      { id: 'campaigns', label: 'Campaigns' }
    ];

    function renderFilters() {
      if (!filterBar) return;
      filterBar.innerHTML = filters
        .map(function (f) {
          var active = activeFilter === f.id ? ' is-active' : '';
          return '<button type="button" class="filter-pill' + active + '" data-gfilter="' + f.id + '">' + f.label + '</button>';
        })
        .join('');

      filterBar.querySelectorAll('[data-gfilter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeFilter = btn.getAttribute('data-gfilter');
          renderFilters();
          renderGallery();
        });
      });
    }

    function renderGallery() {
      if (!grid) return;
      var filtered = items.filter(function (item) {
        return activeFilter === 'all' || item.category === activeFilter;
      });

      grid.innerHTML = filtered
        .map(function (item, idx) {
          var esc = window.SWIS_UTILS.escapeHtml;
          return (
            '<button type="button" class="gallery-item" data-reveal data-gal-idx="' + idx + '" aria-label="View ' + esc(item.title) + '">' +
            '<img src="' + esc(item.image) + '" alt="' + esc(item.title) + '" loading="lazy" decoding="async">' +
            '<div class="gallery-item__overlay">' +
            '<span class="gallery-item__tag">' + esc(item.categoryLabel) + '</span>' +
            '<h2 class="gallery-item__title">' + esc(item.title) + '</h2>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      grid.querySelectorAll('[data-gal-idx]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          window.SWIS_LIGHTBOX.open(filtered, Number(btn.getAttribute('data-gal-idx')));
        });
      });

      window.SWIS_UTILS.initReveals();
    }

    renderFilters();
    renderGallery();
  });
})();
