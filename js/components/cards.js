/* ==========================================================================
   SWIS JEWELS — Reusable Card & Lightbox Components
   ========================================================================== */

(function () {
  window.SWIS_CARDS = {
    renderCategoryCard: function (cat) {
      var esc = window.SWIS_UTILS.escapeHtml;
      return (
        '<article class="category-card" data-reveal>' +
        '<a href="collections.html?category=' + esc(cat.slug) + '" class="category-card__media" aria-label="Explore ' + esc(cat.name) + '">' +
        '<img src="' + esc(cat.image) + '" alt="' + esc(cat.name) + ' at SWIS JEWELS" loading="lazy" decoding="async">' +
        '</a>' +
        '<div class="category-card__body">' +
        '<div>' +
        '<h3 class="category-card__title">' + esc(cat.name) + '</h3>' +
        '<p class="category-card__meta">' + esc(cat.shortDesc) + '</p>' +
        '</div>' +
        '<a href="collections.html?category=' + esc(cat.slug) + '" class="category-card__arrow">' +
        'Explore <span aria-hidden="true">→</span>' +
        '</a>' +
        '</div>' +
        '</article>'
      );
    },

    renderProductCard: function (product) {
      var esc = window.SWIS_UTILS.escapeHtml;
      var waHref = window.SWIS_UTILS.buildProductWhatsAppUrl(product);
      var detailHref = 'product.html?id=' + encodeURIComponent(product.id);
      var badge = product.isSwaDiamond
        ? '<span class="product-card__badge">SWA DIAMONDS</span>'
        : product.isNewArrival
        ? '<span class="product-card__badge">New Arrival</span>'
        : '';

      return (
        '<article class="product-card" data-reveal>' +
        '<a href="' + detailHref + '" class="product-card__media">' +
        '<img src="' + esc(product.images[0]) + '" alt="' + esc(product.name) + '" loading="lazy" decoding="async">' +
        badge +
        '</a>' +
        '<div class="product-card__body">' +
        '<div class="product-card__category">' + esc(product.categoryName) + '</div>' +
        '<h3 class="product-card__title"><a href="' + detailHref + '">' + esc(product.name) + '</a></h3>' +
        '<p class="product-card__desc">' + esc(product.shortDesc) + '</p>' +
        '<div class="product-card__actions">' +
        '<a href="' + detailHref + '" class="btn btn--outline btn--sm">View Details</a>' +
        '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="btn btn--gold btn--sm">WhatsApp</a>' +
        '</div>' +
        '</div>' +
        '</article>'
      );
    }
  };

  /* Lightbox Controller */
  window.SWIS_LIGHTBOX = {
    items: [],
    currentIndex: 0,
    el: null,

    ensureMounted: function () {
      if (this.el) return;
      var html =
        '<div class="lightbox" id="swis-lightbox" role="dialog" aria-modal="true" aria-label="Image Viewer" hidden>' +
        '<button type="button" class="lightbox__close" id="lb-close" aria-label="Close image viewer">✕</button>' +
        '<button type="button" class="lightbox__nav lightbox__nav--prev" id="lb-prev" aria-label="Previous image">←</button>' +
        '<div class="lightbox__dialog">' +
        '<img src="" alt="" class="lightbox__media" id="lb-img">' +
        '<div class="lightbox__caption">' +
        '<div class="lightbox__title" id="lb-title"></div>' +
        '<div class="lightbox__sub" id="lb-sub"></div>' +
        '</div>' +
        '</div>' +
        '<button type="button" class="lightbox__nav lightbox__nav--next" id="lb-next" aria-label="Next image">→</button>' +
        '</div>';
      document.body.insertAdjacentHTML('beforeend', html);
      this.el = document.getElementById('swis-lightbox');

      var self = this;
      document.getElementById('lb-close').addEventListener('click', function () { self.close(); });
      document.getElementById('lb-prev').addEventListener('click', function () { self.step(-1); });
      document.getElementById('lb-next').addEventListener('click', function () { self.step(1); });
      this.el.addEventListener('click', function (e) {
        if (e.target === self.el) self.close();
      });
      document.addEventListener('keydown', function (e) {
        if (!self.el || !self.el.classList.contains('is-open')) return;
        if (e.key === 'Escape') self.close();
        if (e.key === 'ArrowLeft') self.step(-1);
        if (e.key === 'ArrowRight') self.step(1);
      });

      /* Mobile Phone Touch Swipe Gestures for Lightbox */
      var lbTouchX = 0;
      var lbTouchY = 0;
      this.el.addEventListener('touchstart', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          lbTouchX = e.changedTouches[0].clientX;
          lbTouchY = e.changedTouches[0].clientY;
        }
      }, { passive: true });

      this.el.addEventListener('touchend', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          var deltaX = e.changedTouches[0].clientX - lbTouchX;
          var deltaY = e.changedTouches[0].clientY - lbTouchY;
          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
              self.step(1); // Swipe left -> Next
            } else {
              self.step(-1); // Swipe right -> Previous
            }
          }
        }
      }, { passive: true });
    },

    open: function (items, index) {
      this.ensureMounted();
      this.items = items || [];
      this.currentIndex = index || 0;
      this.renderCurrent();
      this.el.hidden = false;
      requestAnimationFrame(() => {
        this.el.classList.add('is-open');
      });
      document.body.style.overflow = 'hidden';
    },

    close: function () {
      if (!this.el) return;
      this.el.classList.remove('is-open');
      document.body.style.overflow = '';
      var el = this.el;
      setTimeout(function () { el.hidden = true; }, 320);
    },

    step: function (delta) {
      if (!this.items.length) return;
      this.currentIndex = (this.currentIndex + delta + this.items.length) % this.items.length;
      this.renderCurrent();
    },

    renderCurrent: function () {
      var item = this.items[this.currentIndex];
      if (!item) return;
      var img = document.getElementById('lb-img');
      var title = document.getElementById('lb-title');
      var sub = document.getElementById('lb-sub');
      img.src = item.image;
      img.alt = item.title || 'SWIS JEWELS photograph';
      title.textContent = item.title || '';
      sub.textContent = item.caption || '';
      var single = this.items.length <= 1;
      document.getElementById('lb-prev').style.display = single ? 'none' : 'inline-flex';
      document.getElementById('lb-next').style.display = single ? 'none' : 'inline-flex';
    }
  };
})();
