/* ==========================================================================
   SWIS JEWELS — Page 09: Contact & Visit Controller
   Includes validated contact enquiry form + Google Maps slot + placeholders
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    window.SWIS_LAYOUT.init('contact');
    var cfg = window.SWIS_DATA.siteConfig;

    /* Populate Brand Logo, Storefront Photo & Contact Details */
    var logoSlot = document.getElementById('contact-brand-logo');
    if (logoSlot) {
      logoSlot.innerHTML = window.SWIS_LAYOUT.renderBrandLogo('brand-logo--lg');
    }

    var storeImg = document.getElementById('contact-storefront-img');
    var storeNote = document.getElementById('contact-storefront-note');
    if (storeImg) storeImg.src = cfg.storefrontImage;
    if (storeNote && cfg.storefrontIsPreview) {
      storeNote.textContent = cfg.storefrontCaption;
      storeNote.hidden = false;
    }

    var addrEl = document.getElementById('contact-address');
    var waTextEl = document.getElementById('contact-whatsapp');
    var igEl = document.getElementById('contact-instagram');
    var dirBtn = document.getElementById('get-directions-btn');
    var mapMount = document.getElementById('map-embed-slot');

    if (addrEl) addrEl.textContent = cfg.contact.address;
    if (waTextEl && cfg.contact.whatsappDigits) {
      waTextEl.textContent = cfg.contact.whatsappDisplay;
    }
    if (igEl) {
      if (cfg.contact.instagramUrl) {
        igEl.innerHTML = '<a href="' + cfg.contact.instagramUrl + '" target="_blank" rel="noopener noreferrer" class="text-gold">' + window.SWIS_UTILS.escapeHtml(cfg.contact.instagramLabel) + '</a>';
      } else {
        igEl.textContent = cfg.contact.instagramLabel;
      }
    }
    if (dirBtn) dirBtn.setAttribute('href', cfg.contact.googleMapsDirectionsUrl);

    if (mapMount) {
      if (cfg.contact.googleMapsEmbedUrl) {
        mapMount.innerHTML =
          '<iframe title="SWIS JEWELS Karathur Location Map" src="' +
          cfg.contact.googleMapsEmbedUrl +
          '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
      } else {
        mapMount.innerHTML =
          '<div style="max-width:44ch;">' +
          '<span class="eyebrow eyebrow--center">Map Location Ready</span>' +
          '<h3 style="font-size:1.6rem;margin-bottom:0.6rem;">Karathur, Tirur, Kerala, India</h3>' +
          '<p class="text-muted" style="font-size:0.9rem;margin-bottom:1.5rem;">' +
          'The interactive Google Maps embed activates automatically as soon as the exact showroom pin URL is added to <code>site-config.js</code>.' +
          '</p>' +
          '<a href="' + cfg.contact.googleMapsDirectionsUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline">Open Tirur · Karathur in Google Maps</a>' +
          '</div>';
      }
    }

    document.querySelectorAll('[data-wa-link]').forEach(function (el) {
      var msg = el.getAttribute('data-wa-message') || '';
      el.setAttribute('href', window.SWIS_UTILS.buildWhatsAppUrl(msg));
    });

    /* Validated Contact Form */
    var form = document.getElementById('contact-enquiry-form');
    if (!form) return;

    var statusBox = document.getElementById('contact-form-status');
    var nameInput = document.getElementById('enquiry-name');
    var phoneInput = document.getElementById('enquiry-phone');
    var emailInput = document.getElementById('enquiry-email');
    var interestInput = document.getElementById('enquiry-interest');
    var messageInput = document.getElementById('enquiry-message');

    function setError(input, errId, msg) {
      var errEl = document.getElementById(errId);
      if (msg) {
        input.setAttribute('aria-invalid', 'true');
        if (errEl) errEl.textContent = msg;
        return false;
      }
      input.setAttribute('aria-invalid', 'false');
      if (errEl) errEl.textContent = '';
      return true;
    }

    function validateForm() {
      var ok = true;
      var nameVal = nameInput.value.trim();
      var phoneVal = phoneInput.value.trim();
      var emailVal = emailInput.value.trim();
      var msgVal = messageInput.value.trim();

      if (nameVal.length < 2) {
        ok = setError(nameInput, 'err-name', 'Please enter your full name (at least 2 characters).') && ok;
      } else {
        setError(nameInput, 'err-name', '');
      }

      if (!phoneVal || phoneVal.replace(/\D/g, '').length < 7) {
        ok = setError(phoneInput, 'err-phone', 'Please enter a valid contact or WhatsApp number.') && ok;
      } else {
        setError(phoneInput, 'err-phone', '');
      }

      if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        ok = setError(emailInput, 'err-email', 'Please enter a valid email address or leave blank.') && ok;
      } else {
        setError(emailInput, 'err-email', '');
      }

      if (msgVal.length < 10) {
        ok = setError(messageInput, 'err-message', 'Please share a brief note about your jewellery enquiry (at least 10 characters).') && ok;
      } else {
        setError(messageInput, 'err-message', '');
      }

      return ok;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) {
        statusBox.className = 'form-status is-error';
        statusBox.textContent = 'Please review the highlighted fields above before submitting.';
        return;
      }

      var summaryText =
        'Hello SWIS JEWELS, I am ' +
        nameInput.value.trim() +
        ' (' +
        phoneInput.value.trim() +
        '). Enquiry Category: ' +
        interestInput.value +
        '. Message: ' +
        messageInput.value.trim();

      var waUrl = window.SWIS_UTILS.buildWhatsAppUrl(summaryText);

      statusBox.className = 'form-status is-success';
      statusBox.innerHTML =
        '<strong>Thank you, ' +
        window.SWIS_UTILS.escapeHtml(nameInput.value.trim()) +
        '.</strong> Your enquiry has been validated. ' +
        '<a href="' +
        waUrl +
        '" target="_blank" rel="noopener noreferrer" style="color:var(--gold-light);text-decoration:underline;">Send directly via WhatsApp →</a>';

      form.reset();
    });
  });
})();
