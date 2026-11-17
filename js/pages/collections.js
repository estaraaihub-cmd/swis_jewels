/* ==========================================================================
   SWIS JEWELS — Page 02: Collections Catalogue Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('collections');

    var categories = window.SWIS_DATA.categories;
    var products = window.SWIS_DATA.products;

    var catGrid = document.getElementById('all-categories-grid');
    var productGrid = document.getElementById('collections-product-grid');
    var filterBar = document.getElementById('category-filter-pills');
    var searchInput = document.getElementById('catalogue-search');
    var sortSelect = document.getElementById('catalogue-sort');
    var countEl = document.getElementById('catalogue-count');
    var clearBtn = document.getElementById('catalogue-reset');

    var state = {
      category: window.SWIS_UTILS.getQueryParam('category') || 'all',
      search: window.SWIS_UTILS.getQueryParam('q') || '',
      sort: window.SWIS_UTILS.getQueryParam('sort') || 'featured'
    };

    if (searchInput && state.search) searchInput.value = state.search;
    if (sortSelect && state.sort) sortSelect.value = state.sort;

    /* Render All 12 Category Showcase Cards */
    if (catGrid) {
      catGrid.innerHTML = categories.map(window.SWIS_CARDS.renderCategoryCard).join('');
    }

    /* Render Filter Pills */
    function renderPills() {
      if (!filterBar) return;
      var pills = [{ slug: 'all', name: 'All Jewellery' }].concat(categories);
      filterBar.innerHTML = pills
        .map(function (c) {
          var active = state.category === c.slug ? ' is-active' : '';
          return (
            '<button type="button" class="filter-pill' + active + '" data-cat="' + c.slug + '">' +
            window.SWIS_UTILS.escapeHtml(c.name) +
            '</button>'
          );
        })
        .join('');

      filterBar.querySelectorAll('[data-cat]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          state.category = btn.getAttribute('data-cat');
          renderPills();
          renderProducts();
          var target = document.getElementById('catalogue-products-section');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    function filterAndSort() {
      var q = state.search.trim().toLowerCase();
      var list = products.filter(function (p) {
        var matchesCat =
          state.category === 'all' ||
          p.categorySlug === state.category ||
          (state.category === 'gold-jewellery' && !p.isSwaDiamond && p.categorySlug !== 'silver-jewellery') ||
          (state.category === 'diamond-jewellery' && p.isSwaDiamond) ||
          (state.category === 'bridal-jewellery' && p.isBridal);

        var matchesSearch =
          !q ||
          p.name.toLowerCase().indexOf(q) !== -1 ||
          p.categoryName.toLowerCase().indexOf(q) !== -1 ||
          p.shortDesc.toLowerCase().indexOf(q) !== -1 ||
          (p.sku && p.sku.toLowerCase().indexOf(q) !== -1);

        return matchesCat && matchesSearch;
      });

      if (state.sort === 'newest') {
        list.sort(function (a, b) {
          return Number(b.isNewArrival) - Number(a.isNewArrival) || a.collectionOrder - b.collectionOrder;
        });
      } else if (state.sort === 'name-asc') {
        list.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      } else {
        list.sort(function (a, b) {
          return Number(b.featured) - Number(a.featured) || a.collectionOrder - b.collectionOrder;
        });
      }

      return list;
    }

    function renderProducts() {
      if (!productGrid) return;
      var list = filterAndSort();

      if (countEl) {
        countEl.textContent = list.length + (list.length === 1 ? ' creation shown' : ' creations shown');
      }

      if (!list.length) {
        productGrid.innerHTML =
          '<div class="state-panel" style="grid-column: 1 / -1;">' +
          '<h3>No matching creations found</h3>' +
          '<p>Try clearing your search term or selecting another jewellery category, or contact our Karathur showroom directly on WhatsApp.</p>' +
          '<button type="button" class="btn btn--gold" id="empty-reset-btn">Show All Jewellery</button>' +
          '</div>';
        var emptyReset = document.getElementById('empty-reset-btn');
        if (emptyReset) {
          emptyReset.addEventListener('click', resetFilters);
        }
        return;
      }

      productGrid.innerHTML = list.map(window.SWIS_CARDS.renderProductCard).join('');
      window.SWIS_UTILS.initReveals();
    }

    function resetFilters() {
      state.category = 'all';
      state.search = '';
      state.sort = 'featured';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      renderPills();
      renderProducts();
    }

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        state.search = e.target.value;
        renderProducts();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function (e) {
        state.sort = e.target.value;
        renderProducts();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', resetFilters);
    }

    renderPills();
    renderProducts();
    window.SWIS_UTILS.initReveals();
  });
})();
