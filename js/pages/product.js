/* ==========================================================================
   SWIS JEWELS — Page 03: Product Details Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('collections');

    var container = document.getElementById('product-detail-container');
    var relatedGrid = document.getElementById('related-products-grid');
    var products = window.SWIS_DATA.products;
    var productId = window.SWIS_UTILS.getQueryParam('id') || products[0].id;

    var product = products.find(function (p) { return p.id === productId; });

    if (!product) {
      if (container) {
        container.innerHTML =
          '<div class="state-panel">' +
          '<h1>Creation Not Found</h1>' +
          '<p>The requested ornament could not be found in our catalogue. Browse our collections or contact our Karathur showroom directly.</p>' +
          '<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">' +
          '<a href="collections.html" class="btn btn--gold">Explore Collections</a>' +
          '<a href="' + window.SWIS_UTILS.buildWhatsAppUrl() + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline">WhatsApp Showroom</a>' +
          '</div>' +
          '</div>';
      }
      return;
    }

    document.title = product.name + ' | SWIS JEWELS – Karathur, Tirur';
    var esc = window.SWIS_UTILS.escapeHtml;
    var waHref = window.SWIS_UTILS.buildProductWhatsAppUrl(product);

    var thumbsHtml = product.images
      .map(function (imgSrc, idx) {
        return (
          '<button type="button" class="product-thumb' + (idx === 0 ? ' is-active' : '') + '" data-thumb-index="' + idx + '" aria-label="View image ' + (idx + 1) + '">' +
          '<img src="' + esc(imgSrc) + '" alt="' + esc(product.name) + ' view ' + (idx + 1) + '">' +
          '</button>'
        );
      })
      .join('');

    var specsRows = (product.specs || [])
      .map(function (spec) {
        return (
          '<div class="spec-row">' +
          '<span class="spec-row__label">' + esc(spec.label) + '</span>' +
          '<span class="spec-row__value">' + esc(spec.value) + '</span>' +
          '</div>'
        );
      })
      .join('');

    var skuRow = product.sku
      ? '<div class="spec-row"><span class="spec-row__label">Reference / SKU</span><span class="spec-row__value">' + esc(product.sku) + '</span></div>'
      : '';

    var breadcrumbEl = document.getElementById('product-breadcrumb-name');
    if (breadcrumbEl) breadcrumbEl.textContent = product.name;

    if (container) {
      container.innerHTML =
        '<div class="product-detail-layout">' +
        '<div>' +
        '<div class="product-gallery__main" id="product-main-trigger" title="Click to enlarge">' +
        '<img id="product-main-img" src="' + esc(product.images[0]) + '" alt="' + esc(product.name) + '">' +
        '</div>' +
        '<div class="product-gallery__thumbs" id="product-thumbs">' +
        thumbsHtml +
        '</div>' +
        '</div>' +

        '<div>' +
        '<span class="eyebrow">' + esc(product.categoryName) + (product.isSwaDiamond ? ' · SWA DIAMONDS' : '') + '</span>' +
        '<h1 class="section-title" style="font-size:var(--text-4xl);">' + esc(product.name) + '</h1>' +
        '<p class="section-lead" style="margin-bottom:1.5rem;">' + esc(product.description) + '</p>' +

        '<div class="spec-box" aria-label="Product specifications">' +
        skuRow +
        specsRows +
        '<div class="spec-row">' +
        '<span class="spec-row__label">Pricing &amp; Weight</span>' +
        '<span class="spec-row__value">Shared directly upon enquiry</span>' +
        '</div>' +
        '</div>' +

        '<div style="display:flex;flex-wrap:wrap;gap:1rem;">' +
        '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="btn btn--gold">Enquire on WhatsApp</a>' +
        '<a href="contact.html" class="btn btn--outline">Book Showroom Viewing</a>' +
        '</div>' +
        '<p class="text-muted" style="font-size:0.84rem;margin-top:1rem;">' +
        'Visit SWIS JEWELS in Karathur, Tirur, Kerala to experience this creation in person.' +
        '</p>' +
        '</div>' +
        '</div>';
    }

    /* Gallery Thumbnail Switching & Zoom Lightbox */
    var mainImg = document.getElementById('product-main-img');
    var activeImgIndex = 0;
    document.querySelectorAll('[data-thumb-index]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeImgIndex = Number(btn.getAttribute('data-thumb-index'));
        if (mainImg) mainImg.src = product.images[activeImgIndex];
        document.querySelectorAll('[data-thumb-index]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });

    var zoomTrigger = document.getElementById('product-main-trigger');
    if (zoomTrigger) {
      zoomTrigger.addEventListener('click', function () {
        var lbItems = product.images.map(function (src, i) {
          return {
            image: src,
            title: product.name,
            caption: 'View ' + (i + 1) + ' · ' + (product.sku || product.categoryName)
          };
        });
        window.SWIS_LIGHTBOX.open(lbItems, activeImgIndex);
      });
    }

    /* Related Products */
    if (relatedGrid) {
      var related = products
        .filter(function (p) { return p.id !== product.id; })
        .sort(function (a, b) {
          var aSame = a.categorySlug === product.categorySlug ? 1 : 0;
          var bSame = b.categorySlug === product.categorySlug ? 1 : 0;
          return bSame - aSame;
        })
        .slice(0, 3);
      relatedGrid.innerHTML = related.map(window.SWIS_CARDS.renderProductCard).join('');
    }

    window.SWIS_UTILS.initReveals();
  });
})();
