/* ==========================================================================
   SWIS JEWELS — Central Brand, Content & CMS Configuration
   Owner / CMS Integration Point:
   Replace placeholder strings or fetch this object from a headless CMS API.
   ========================================================================== */

window.SWIS_DATA = window.SWIS_DATA || {};

window.SWIS_DATA.siteConfig = {
  brandName: 'SWIS JEWELS',
  diamondPartner: 'SWA DIAMONDS',
  tagline: 'Fine Gold, Bridal & Diamond Jewellery',
  locationShort: 'Karathur, Tirur, Kerala',
  locationFull: 'Karathur, Tirur, Kerala, India',

  /*
   * BRAND ASSET SLOT:
   * Place the exact extracted original SWIS logo at `assets/images/brand/swis-logo.png`
   * and set `logoSrc` to that path (e.g., 'assets/images/brand/swis-logo.png').
   * Leave as null until the official logo asset is added; never invent a replacement emblem.
   */
  logoSrc: null,
  logoAlt: 'SWIS JEWELS original logo',

  /*
   * STOREFRONT PHOTO SLOT:
   * Replace `storefrontImage` with the actual SWIS JEWELS storefront photograph
   * (e.g., 'assets/images/brand/storefront.jpg') once supplied.
   */
  storefrontImage: 'assets/images/showroom-exterior-preview.jpg',
  storefrontIsPreview: true,
  storefrontCaption: 'Temporary architectural showroom preview — replace with the official SWIS JEWELS storefront photograph.',
  interiorImage: 'assets/images/showroom-interior.jpg',

  contact: {
    address: 'Karathur, Tirur, Kerala, India',
    whatsappDisplay: 'Direct Showroom Enquiries via WhatsApp',
    /* Enter digits with country code (e.g., '919876543210') once confirmed.
       When empty, WhatsApp enquiry links open WhatsApp share composer with pre-filled message. */
    whatsappDigits: '',
    emailDisplay: 'Enquiries via showroom or WhatsApp',
    instagramLabel: '@swisjewels',
    instagramUrl: '',
    /* Set exact Google Maps embed iframe URL once exact showroom pin is provided */
    googleMapsEmbedUrl: '',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Karathur+Tirur+Kerala+India'
  },

  hero: {
    eyebrow: 'Karathur, Tirur · Kerala',
    title: 'Where Every Moment Becomes Precious.',
    subtitle: "Discover exquisite jewellery collections that celebrate life's most beautiful moments.",
    image: 'assets/images/hero-gold-luxury.jpg',
    imageAlt: 'Handcrafted gold bridal necklace and matching earrings presented on dark velvet',
    primaryCtaLabel: 'Explore Collections',
    primaryCtaHref: 'collections.html',
    secondaryCtaLabel: 'SWA DIAMONDS',
    secondaryCtaHref: 'swa-diamonds.html'
  },

  swaCampaign: {
    eyebrow: 'Official Diamond Showcase',
    brandTitle: 'SWA DIAMONDS',
    headline: 'Radiance Crafted for Life’s Defining Chapters.',
    description:
      'SWIS JEWELS proudly presents SWA DIAMONDS in Karathur, Tirur — a refined curation of solitaire rings, luminous diamond necklaces, statement earrings, and bridal diamond creations.',
    heroImage: 'assets/images/swa-diamond-campaign.jpg',
    heroImageAlt: 'SWA DIAMONDS diamond necklace and solitaire ring on dark obsidian stone'
  },

  whyChoose: [
    {
      index: '01',
      title: 'Curated Craftsmanship',
      text: 'Every ornament is thoughtfully selected for balanced proportions, timeless form, and enduring appeal across generations.'
    },
    {
      index: '02',
      title: 'Official SWA DIAMONDS',
      text: 'Explore dedicated SWA DIAMONDS collections at our Karathur showroom with personalised consultation for every milestone.'
    },
    {
      index: '03',
      title: 'Kerala Bridal Heritage',
      text: 'From traditional bridal gold ensembles to contemporary wedding suites, curated to honour Kerala’s celebratory traditions.'
    },
    {
      index: '04',
      title: 'Personal Showroom Guidance',
      text: 'Receive attentive one-on-one assistance in-store or via WhatsApp for availability, design details, and private viewings.'
    }
  ],

  navigation: [
    { label: 'Home', href: 'index.html', id: 'home' },
    { label: 'Collections', href: 'collections.html', id: 'collections' },
    { label: 'SWA Diamonds', href: 'swa-diamonds.html', id: 'swa-diamonds' },
    { label: 'Bridal', href: 'bridal.html', id: 'bridal' },
    { label: 'About', href: 'about.html', id: 'about' },
    { label: 'Gallery', href: 'gallery.html', id: 'gallery' },
    { label: 'Contact', href: 'contact.html', id: 'contact' }
  ]
};
