/* ==========================================================================
   SWIS JEWELS — Core Utilities, WhatsApp Builder, Reveal & Lightbox
   ========================================================================== */

(function () {
  window.SWIS_UTILS = {
    getQueryParam: function (key) {
      var params = new URLSearchParams(window.location.search);
      return params.get(key) || '';
    },

    buildWhatsAppUrl: function (customMessage) {
      var cfg = window.SWIS_DATA.siteConfig;
      var digits = (cfg && cfg.contact && cfg.contact.whatsappDigits) ? cfg.contact.whatsappDigits.replace(/\D/g, '') : '';
      var defaultMsg = 'Hello SWIS JEWELS (Karathur, Tirur), I would like to enquire about your jewellery collections.';
      var text = encodeURIComponent(customMessage || defaultMsg);
      if (digits) {
        return 'https://wa.me/' + digits + '?text=' + text;
      }
      return 'https://wa.me/?text=' + text;
    },

    buildProductWhatsAppUrl: function (product) {
      if (!product) return this.buildWhatsAppUrl();
      var refPart = product.sku ? ' (Ref: ' + product.sku + ')' : '';
      var msg =
        'Hello SWIS JEWELS, I would like to enquire about "' +
        product.name +
        '"' +
        refPart +
        ' from your ' +
        product.categoryName +
        ' collection.';
      return this.buildWhatsAppUrl(msg);
    },

    escapeHtml: function (str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },

    initReveals: function () {
      var nodes = document.querySelectorAll('[data-reveal]');
      if (!nodes.length) return;
      if (!('IntersectionObserver' in window)) {
        nodes.forEach(function (el) { el.classList.add('is-visible'); });
        return;
      }
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      nodes.forEach(function (el) { observer.observe(el); });
    }
  };
})();
