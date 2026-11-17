/* ==========================================================================
   SWIS JEWELS — Page 08: Offers & Updates Controller
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('offers');

    var promos = window.SWIS_DATA.promotions;
    var container = document.getElementById('offers-list');
    var esc = window.SWIS_UTILS.escapeHtml;

    if (container) {
      container.innerHTML = promos
        .map(function (item) {
          var href = item.ctaType === 'whatsapp'
            ? window.SWIS_UTILS.buildWhatsAppUrl(item.whatsappMessage)
            : item.ctaHref;
          var targetAttrs = item.ctaType === 'whatsapp' ? ' target="_blank" rel="noopener noreferrer"' : '';

          return (
            '<article class="promo-card" data-reveal>' +
            '<div class="promo-card__media">' +
            '<img src="' + esc(item.image) + '" alt="' + esc(item.title) + '" loading="lazy" decoding="async">' +
            '</div>' +
            '<div class="promo-card__body">' +
            '<span class="eyebrow">' + esc(item.tag) + '</span>' +
            '<h2 class="section-title" style="font-size:var(--text-2xl);">' + esc(item.title) + '</h2>' +
            '<p class="text-muted" style="margin-bottom:1.75rem;">' + esc(item.summary) + '</p>' +
            '<div>' +
            '<a href="' + href + '"' + targetAttrs + ' class="btn btn--gold">' + esc(item.ctaLabel) + '</a>' +
            '</div>' +
            '</div>' +
            '</article>'
          );
        })
        .join('');
    }

    window.SWIS_UTILS.initReveals();
  });
})();
