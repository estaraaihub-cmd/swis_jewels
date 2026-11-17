/* ==========================================================================
   SWIS JEWELS — Page 06: About Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('about');
    var cfg = window.SWIS_DATA.siteConfig;

    var extImg = document.getElementById('about-storefront-img');
    var extNote = document.getElementById('about-storefront-note');
    if (extImg) extImg.src = cfg.storefrontImage;
    if (extNote && cfg.storefrontIsPreview) {
      extNote.textContent = cfg.storefrontCaption;
      extNote.hidden = false;
    }

    var intImg = document.getElementById('about-interior-img');
    if (intImg) intImg.src = cfg.interiorImage;

    document.querySelectorAll('[data-wa-link]').forEach(function (el) {
      var msg = el.getAttribute('data-wa-message') || '';
      el.setAttribute('href', window.SWIS_UTILS.buildWhatsAppUrl(msg));
    });
  });
})();
