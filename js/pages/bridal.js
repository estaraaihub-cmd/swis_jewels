/* ==========================================================================
   SWIS JEWELS — Page 05: Bridal Collection Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('bridal');

    var bridalProducts = window.SWIS_DATA.products.filter(function (p) {
      return p.isBridal;
    });

    var grid = document.getElementById('bridal-products-grid');
    if (grid) {
      grid.innerHTML = bridalProducts.map(window.SWIS_CARDS.renderProductCard).join('');
    }

    var inspirationPhotos = [
      {
        image: 'assets/images/bridal-kerala-gold.jpg',
        title: 'Kerala Traditional Bridal Suite',
        caption: 'Layered heritage necklaces, jhumkas, and sculpted gold bangles.'
      },
      {
        image: 'assets/images/hero-gold-luxury.jpg',
        title: 'Sculpted Reception Necklace',
        caption: 'Signature bridal collar crafted for evening wedding receptions.'
      },
      {
        image: 'assets/images/gold-bangles-bracelets.jpg',
        title: 'Bridal Bangle Stacking',
        caption: 'Ornate filigree bangles paired for auspicious wedding ceremonies.'
      },
      {
        image: 'assets/images/swa-diamond-campaign.jpg',
        title: 'Bridal Diamond Ensemble',
        caption: 'SWA DIAMONDS necklaces and solitaire pairings for modern brides.'
      }
    ];

    var inspGrid = document.getElementById('bridal-inspiration-grid');
    if (inspGrid) {
      inspGrid.innerHTML = inspirationPhotos
        .map(function (item, i) {
          return (
            '<button type="button" class="gallery-item" data-bridal-idx="' + i + '" aria-label="Enlarge ' + window.SWIS_UTILS.escapeHtml(item.title) + '">' +
            '<img src="' + item.image + '" alt="' + window.SWIS_UTILS.escapeHtml(item.title) + '" loading="lazy" decoding="async">' +
            '<div class="gallery-item__overlay">' +
            '<span class="gallery-item__tag">Wedding Inspiration</span>' +
            '<h3 class="gallery-item__title">' + window.SWIS_UTILS.escapeHtml(item.title) + '</h3>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      inspGrid.querySelectorAll('[data-bridal-idx]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          window.SWIS_LIGHTBOX.open(inspirationPhotos, Number(btn.getAttribute('data-bridal-idx')));
        });
      });
    }

    document.querySelectorAll('[data-wa-link]').forEach(function (el) {
      var msg = el.getAttribute('data-wa-message') || 'Hello SWIS JEWELS, I would like to book a Bridal Jewellery consultation at your Karathur showroom.';
      el.setAttribute('href', window.SWIS_UTILS.buildWhatsAppUrl(msg));
    });

    window.SWIS_UTILS.initReveals();
  });
})();
