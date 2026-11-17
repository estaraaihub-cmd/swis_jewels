# SWIS JEWELS – Owner & CMS Integration Guide

This 9-page website is structured cleanly so the owner or developer can update all brand assets, jewellery products, promotions, and contact details from one data layer (`js/data/`) or connect a headless CMS without rewriting page templates.

## 1. Replacing the Official SWIS Logo & Storefront Photo
1. **Original SWIS Logo (`assets/images/brand/swis-logo.png`)**:
   - Place the extracted official SWIS logo file at `assets/images/brand/swis-logo.png` (or `.svg` / `.webp`).
   - Open `js/data/site-config.js` and set:
     ```js
     logoSrc: 'assets/images/brand/swis-logo.png',
     ```
   - Until `logoSrc` is provided, the header, footer, mobile drawer, and contact card display a clean typographic wordmark (`SWIS JEWELS`) with zero invented emblem graphics.

2. **Actual Storefront Photograph (`assets/images/brand/storefront.jpg`)**:
   - Save the real SWIS JEWELS Karathur storefront photograph at `assets/images/brand/storefront.jpg`.
   - In `js/data/site-config.js`, update:
     ```js
     storefrontImage: 'assets/images/brand/storefront.jpg',
     storefrontIsPreview: false,
     ```

## 2. Updating Contact Info, WhatsApp & Google Maps Pin
Edit `contact` inside `js/data/site-config.js`:
- `phoneDisplay`: Official showroom phone number.
- `whatsappDisplay` & `whatsappDigits`: Enter country code + digits (e.g. `'919876543210'`). All WhatsApp enquiry buttons across all 9 pages update automatically.
- `openingHours`: Showroom hours.
- `instagramLabel` & `instagramUrl`: Official Instagram handle and profile URL.
- `googleMapsEmbedUrl`: Paste the Google Maps Embed `iframe` `src` URL once the exact pin is confirmed.

## 3. Managing Products, Categories, Gallery & Offers
- **Categories (12)**: `js/data/categories.js`
- **Products & SWA DIAMONDS items**: `js/data/products.js`
- **Gallery images**: `js/data/gallery.js` (`window.SWIS_DATA.gallery`)
- **Offers & Updates**: `js/data/gallery.js` (`window.SWIS_DATA.promotions`)

## 4. Connecting a Headless CMS (Strapi / Sanity / Contentful)
Replace the static assignments in `js/data/*.js` with an async `fetch()` loader before calling `SWIS_LAYOUT.init(...)`, preserving the exact property names (`siteConfig`, `categories`, `products`, `gallery`, `promotions`).
