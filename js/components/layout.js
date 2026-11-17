/* ==========================================================================
   SWIS JEWELS — Shared Header, Mobile Drawer, Brand Logo & Footer Component
   ========================================================================== */

(function () {
  function renderBrandLogo(extraClass) {
    var cfg = window.SWIS_DATA.siteConfig;
    var cls = 'brand-logo' + (extraClass ? ' ' + extraClass : '');
    if (cfg.logoSrc) {
      return (
        '<a href="index.html" class="' + cls + '" aria-label="SWIS JEWELS Home">' +
        '<img src="' + cfg.logoSrc + '" alt="' + window.SWIS_UTILS.escapeHtml(cfg.logoAlt) + '" class="brand-logo__img">' +
        '</a>'
      );
    }
    /* Wordmark-only slot until exact SWIS logo artwork is supplied (no invented emblem) */
    return (
      '<a href="index.html" class="' + cls + '" aria-label="SWIS JEWELS Home">' +
      '<span class="brand-logo__wordmark">' +
      '<span class="brand-logo__title">SWIS JEWELS</span>' +
      '<span class="brand-logo__sub">Karathur · Tirur</span>' +
      '</span>' +
      '</a>'
    );
  }

  function renderHeader(activePageId) {
    var cfg = window.SWIS_DATA.siteConfig;
    var desktopLinks = cfg.navigation
      .map(function (item) {
        var active = item.id === activePageId ? ' is-active' : '';
        var aria = item.id === activePageId ? ' aria-current="page"' : '';
        return '<a href="' + item.href + '" class="nav-link' + active + '"' + aria + '>' + item.label + '</a>';
      })
      .join('');

    var mobileLinks = cfg.navigation
      .concat([{ label: 'Offers & Updates', href: 'offers.html', id: 'offers' }])
      .map(function (item) {
        var active = item.id === activePageId ? ' is-active' : '';
        return (
          '<a href="' + item.href + '" class="mobile-nav__link' + active + '">' +
          '<span>' + item.label + '</span>' +
          '<span aria-hidden="true">→</span>' +
          '</a>'
        );
      })
      .join('');

    var waHref = window.SWIS_UTILS.buildWhatsAppUrl();

    var headerHtml =
      '<a class="skip-link" href="#main-content">Skip to main content</a>' +
      '<header class="site-header" id="site-header">' +
      '<div class="container header-inner">' +
      renderBrandLogo('') +
      '<nav class="nav-desktop" aria-label="Primary navigation">' +
      desktopLinks +
      '</nav>' +
      '<div class="header-actions">' +
      '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="btn btn--gold btn--sm header-cta">' +
      'WhatsApp Enquiry' +
      '</a>' +
      '<button type="button" class="nav-toggle" id="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
      '<line x1="3" y1="7" x2="21" y2="7"></line>' +
      '<line x1="3" y1="12" x2="21" y2="12"></line>' +
      '<line x1="3" y1="17" x2="21" y2="17"></line>' +
      '</svg>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</header>' +
      '<div class="mobile-backdrop" id="mobile-backdrop" hidden></div>' +
      '<aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation" aria-hidden="true" hidden>' +
      '<div>' +
      '<div class="mobile-drawer__top">' +
      renderBrandLogo('') +
      '<button type="button" class="mobile-drawer__close" id="mobile-drawer-close" aria-label="Close navigation menu">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
      '<line x1="18" y1="6" x2="6" y2="18"></line>' +
      '<line x1="6" y1="6" x2="18" y2="18"></line>' +
      '</svg>' +
      '</button>' +
      '</div>' +
      '<nav class="mobile-nav" aria-label="Mobile links">' +
      mobileLinks +
      '</nav>' +
      '</div>' +
      '<div class="mobile-drawer__footer">' +
      '<p class="text-muted" style="margin:0;font-size:0.82rem;">' + cfg.locationFull + '</p>' +
      '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="btn btn--gold btn--full">Enquire on WhatsApp</a>' +
      '</div>' +
      '</aside>';

    var mount = document.getElementById('site-header-mount');
    if (mount) {
      mount.innerHTML = headerHtml;
    }
  }

  function renderFooter() {
    var cfg = window.SWIS_DATA.siteConfig;
    var waHref = window.SWIS_UTILS.buildWhatsAppUrl();

    var footerHtml =
      '<footer class="site-footer">' +
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div>' +
      renderBrandLogo('brand-logo--lg') +
      '<p class="text-muted" style="margin-top:1.1rem;max-width:34ch;font-size:0.9rem;">' +
      'Fine gold, traditional Kerala bridal jewellery, and curated SWA DIAMONDS collections in Karathur, Tirur, Kerala.' +
      '</p>' +
      '<div class="swa-pill">Official Showcase · SWA DIAMONDS</div>' +
      '</div>' +

      '<div>' +
      '<h2 class="footer-heading">Explore</h2>' +
      '<ul class="footer-links">' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="collections.html">Collections</a></li>' +
      '<li><a href="swa-diamonds.html">SWA Diamonds</a></li>' +
      '<li><a href="bridal.html">Bridal Collection</a></li>' +
      '<li><a href="offers.html">Offers &amp; Updates</a></li>' +
      '</ul>' +
      '</div>' +

      '<div>' +
      '<h2 class="footer-heading">The House</h2>' +
      '<ul class="footer-links">' +
      '<li><a href="about.html">About SWIS JEWELS</a></li>' +
      '<li><a href="gallery.html">Gallery</a></li>' +
      '<li><a href="contact.html">Contact &amp; Visit</a></li>' +
      '<li><a href="collections.html?category=gold-jewellery">Gold Jewellery</a></li>' +
      '<li><a href="collections.html?category=diamond-jewellery">Diamond Jewellery</a></li>' +
      '</ul>' +
      '</div>' +

      '<div>' +
      '<h2 class="footer-heading">Visit Showroom</h2>' +
      '<ul class="footer-links">' +
      '<li><strong style="color:var(--ivory);font-weight:500;">SWIS JEWELS</strong></li>' +
      '<li>' + cfg.contact.address + '</li>' +
      '<li>Showroom &amp; WhatsApp Enquiries</li>' +
      '</ul>' +
      '<div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:0.65rem;">' +
      '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="btn btn--gold btn--sm">WhatsApp</a>' +
      '<a href="' + cfg.contact.googleMapsDirectionsUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">Directions</a>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<div class="footer-bottom">' +
      '<span>&copy; <span id="footer-year"></span> SWIS JEWELS · Karathur, Tirur, Kerala, India.</span>' +
      '<span>Featuring SWA DIAMONDS</span>' +
      '</div>' +
      '</div>' +
      '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="mobile-touch-wa" aria-label="Enquire on WhatsApp">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>' +
      '</svg>' +
      '<span>Enquire</span>' +
      '</a>' +
      '</footer>';

    var mount = document.getElementById('site-footer-mount');
    if (mount) {
      mount.innerHTML = footerHtml;
      var yr = document.getElementById('footer-year');
      if (yr) yr.textContent = String(new Date().getFullYear());
    }
  }

  function bindNavigationBehavior() {
    var header = document.getElementById('site-header');
    var toggle = document.getElementById('nav-toggle');
    var drawer = document.getElementById('mobile-drawer');
    var backdrop = document.getElementById('mobile-backdrop');
    var closeBtn = document.getElementById('mobile-drawer-close');

    function onScroll() {
      if (!header) return;
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.hidden = false;
      backdrop.hidden = false;
      requestAnimationFrame(function () {
        drawer.classList.add('is-open');
        backdrop.classList.add('is-open');
      });
      drawer.setAttribute('aria-hidden', 'false');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(function () {
        drawer.hidden = true;
        backdrop.hidden = true;
      }, 360);
      if (toggle) toggle.focus();
    }

    if (toggle) toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });

    /* Mobile Touch Gesture: Swipe right to close drawer */
    var touchStartX = 0;
    var touchStartY = 0;
    if (drawer) {
      drawer.addEventListener('touchstart', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].clientX;
          touchStartY = e.changedTouches[0].clientY;
        }
      }, { passive: true });

      drawer.addEventListener('touchend', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          var diffX = e.changedTouches[0].clientX - touchStartX;
          var diffY = e.changedTouches[0].clientY - touchStartY;
          if (diffX > 45 && Math.abs(diffX) > Math.abs(diffY)) {
            closeDrawer();
          }
        }
      }, { passive: true });

      var mobileLinks = drawer.querySelectorAll('.mobile-nav__link');
      mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          closeDrawer();
        });
      });
    }
  }

  window.SWIS_LAYOUT = {
    init: function (activePageId) {
      renderHeader(activePageId);
      renderFooter();
      bindNavigationBehavior();
      window.SWIS_UTILS.initReveals();
    },
    renderBrandLogo: renderBrandLogo
  };
})();
