/* ==========================================================================
   SWIS JEWELS — Page 04: SWA DIAMONDS Showcase Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('swa-diamonds');

    var products = window.SWIS_DATA.products.filter(function (p) {
      return p.isSwaDiamond;
    });

    var grid = document.getElementById('swa-featured-products');
    if (grid) {
      grid.innerHTML = products.map(window.SWIS_CARDS.renderProductCard).join('');
    }

    document.querySelectorAll('[data-wa-link]').forEach(function (el) {
      var msg = el.getAttribute('data-wa-message') || 'Hello SWIS JEWELS, I would like to enquire about SWA DIAMONDS collections.';
      el.setAttribute('href', window.SWIS_UTILS.buildWhatsAppUrl(msg));
    });

    window.SWIS_UTILS.initReveals();
  });
})();
