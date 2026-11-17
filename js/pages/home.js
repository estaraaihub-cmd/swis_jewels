/* ==========================================================================
   SWIS JEWELS — Page 01: Home Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('home');

    var cfg = window.SWIS_DATA.siteConfig;
    var categories = window.SWIS_DATA.categories;
    var products = window.SWIS_DATA.products;

    /* Featured Categories (6 curated cards linking to Collections) */
    var catGrid = document.getElementById('home-featured-categories');
    if (catGrid) {
      var featuredCats = categories.filter(function (c) { return c.featured; }).slice(0, 6);
      catGrid.innerHTML = featuredCats.map(window.SWIS_CARDS.renderCategoryCard).join('');
    }

    /* New Arrivals (4 latest products) */
    var arrivalsGrid = document.getElementById('home-new-arrivals');
    if (arrivalsGrid) {
      var newArrivals = products.filter(function (p) { return p.isNewArrival; }).slice(0, 4);
      arrivalsGrid.innerHTML = newArrivals.map(window.SWIS_CARDS.renderProductCard).join('');
    }

    /* Why Choose SWIS JEWELS Pillars */
    var pillarsGrid = document.getElementById('home-why-choose');
    if (pillarsGrid) {
      pillarsGrid.innerHTML = cfg.whyChoose
        .map(function (pillar) {
          return (
            '<article class="pillar-card" data-reveal>' +
            '<div class="pillar-card__index">' + pillar.index + '</div>' +
            '<h3 class="pillar-card__title">' + window.SWIS_UTILS.escapeHtml(pillar.title) + '</h3>' +
            '<p class="pillar-card__text">' + window.SWIS_UTILS.escapeHtml(pillar.text) + '</p>' +
            '</article>'
          );
        })
        .join('');
    }

    /* Storefront Image & Caption */
    var storeImg = document.getElementById('home-storefront-img');
    var storeNote = document.getElementById('home-storefront-note');
    if (storeImg) {
      storeImg.src = cfg.storefrontImage;
    }
    if (storeNote && cfg.storefrontIsPreview) {
      storeNote.textContent = cfg.storefrontCaption;
      storeNote.hidden = false;
    }

    /* Social / Instagram Preview Tiles */
    var socialGrid = document.getElementById('home-social-grid');
    if (socialGrid) {
      var socialPhotos = window.SWIS_DATA.gallery.slice(0, 4);
      socialGrid.innerHTML = socialPhotos
        .map(function (item, idx) {
          return (
            '<button type="button" class="social-tile" data-social-index="' + idx + '" aria-label="View ' + window.SWIS_UTILS.escapeHtml(item.title) + '">' +
            '<img src="' + item.image + '" alt="' + window.SWIS_UTILS.escapeHtml(item.title) + '" loading="lazy" decoding="async">' +
            '</button>'
          );
        })
        .join('');

      socialGrid.querySelectorAll('[data-social-index]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var i = Number(btn.getAttribute('data-social-index'));
          window.SWIS_LIGHTBOX.open(socialPhotos, i);
        });
      });
    }

    /* Dynamic WhatsApp CTAs */
    document.querySelectorAll('[data-wa-link]').forEach(function (el) {
      var customMsg = el.getAttribute('data-wa-message') || '';
      el.setAttribute('href', window.SWIS_UTILS.buildWhatsAppUrl(customMsg));
    });

    window.SWIS_UTILS.initReveals();
  });
})();
