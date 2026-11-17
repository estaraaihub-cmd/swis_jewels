/* ==========================================================================
   SWIS JEWELS — Product Catalogue Data
   Strictly avoids invented prices, gold weights, purities, or diamond grades.
   ========================================================================== */

window.SWIS_DATA = window.SWIS_DATA || {};

window.SWIS_DATA.products = [
  {
    id: 'kasu-bridal-haram',
    sku: 'SWIS-BR-001',
    name: 'Heritage Kerala Bridal Haram',
    categorySlug: 'bridal-jewellery',
    categoryName: 'Bridal Jewellery',
    shortDesc: 'Traditional tiered bridal gold necklace designed for timeless Kerala wedding celebrations.',
    description:
      'An heirloom-inspired bridal statement combining classic South Indian motifs with balanced weight distribution for effortless wedding wear. Visit our Karathur showroom or enquire via WhatsApp for full design details and availability.',
    images: [
      'assets/images/bridal-kerala-gold.jpg',
      'assets/images/hero-gold-luxury.jpg',
      'assets/images/gold-necklace-editorial.jpg'
    ],
    featured: true,
    isNewArrival: true,
    isBridal: true,
    isSwaDiamond: false,
    collectionOrder: 1,
    specs: [
      { label: 'Collection', value: 'Bridal Heritage' },
      { label: 'Availability', value: 'Enquire at Karathur Showroom or WhatsApp' }
    ]
  },
  {
    id: 'lumiere-swa-solitaire-ring',
    sku: 'SWA-DR-014',
    name: 'SWA Lumière Solitaire Ring',
    categorySlug: 'diamond-jewellery',
    categoryName: 'Diamond Jewellery',
    shortDesc: 'Refined solitaire diamond ring from the SWA DIAMONDS showcase at SWIS JEWELS.',
    description:
      'Crafted to highlight crisp light return and understated elegance, the SWA Lumière Solitaire Ring celebrates engagements and milestone promises. Contact our diamond consultants for in-store viewing and individual piece specifications.',
    images: [
      'assets/images/diamond-ring-solitaire.jpg',
      'assets/images/swa-diamond-campaign.jpg',
      'assets/images/diamond-earrings-pendant.jpg'
    ],
    featured: true,
    isNewArrival: true,
    isBridal: true,
    isSwaDiamond: true,
    swaSubcategory: 'Diamond Rings',
    collectionOrder: 2,
    specs: [
      { label: 'Showcase', value: 'SWA DIAMONDS' },
      { label: 'Category', value: 'Diamond Rings' },
      { label: 'Specifications', value: 'Shared on showroom & WhatsApp enquiry' }
    ]
  },
  {
    id: 'aurelia-sculpted-gold-necklace',
    sku: 'SWIS-GN-021',
    name: 'Aurelia Sculpted Collar Necklace',
    categorySlug: 'gold-necklaces',
    categoryName: 'Gold Necklaces',
    shortDesc: 'Contemporary gold collar necklace with softly contoured links and warm satin finish.',
    description:
      'Designed to transition gracefully from festive evenings to formal receptions, the Aurelia Collar sits effortlessly along the collarbone. Enquire via WhatsApp to preview matching earrings and showroom availability.',
    images: [
      'assets/images/hero-gold-luxury.jpg',
      'assets/images/gold-necklace-editorial.jpg',
      'assets/images/bridal-kerala-gold.jpg'
    ],
    featured: true,
    isNewArrival: true,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 3,
    specs: [
      { label: 'Collection', value: 'Gold Necklaces' },
      { label: 'Consultation', value: 'Available via WhatsApp & in-store' }
    ]
  },
  {
    id: 'swa-riviera-diamond-necklace',
    sku: 'SWA-DN-008',
    name: 'SWA Riviera Cascade Necklace',
    categorySlug: 'diamond-jewellery',
    categoryName: 'Diamond Jewellery',
    shortDesc: 'Fluid diamond necklace engineered for graceful drape and captivating evening brilliance.',
    description:
      'Part of our dedicated SWA DIAMONDS curation, the Riviera Cascade Necklace pairs fluid articulation with refined diamond setting. Request a private showroom viewing in Karathur, Tirur for complete details.',
    images: [
      'assets/images/swa-diamond-campaign.jpg',
      'assets/images/diamond-earrings-pendant.jpg',
      'assets/images/diamond-ring-solitaire.jpg'
    ],
    featured: true,
    isNewArrival: false,
    isBridal: true,
    isSwaDiamond: true,
    swaSubcategory: 'Diamond Necklaces',
    collectionOrder: 4,
    specs: [
      { label: 'Showcase', value: 'SWA DIAMONDS' },
      { label: 'Category', value: 'Diamond Necklaces' },
      { label: 'Consultation', value: 'Private showroom viewing available' }
    ]
  },
  {
    id: 'malabar-filigree-bangle-suite',
    sku: 'SWIS-BG-012',
    name: 'Malabar Filigree Bangle Suite',
    categorySlug: 'bangles',
    categoryName: 'Bangles',
    shortDesc: 'Intricately textured gold bangles crafted for bridal stacking and festive pairing.',
    description:
      'Combining heritage openwork motifs with smooth inner comfort profiles, these bangles pair effortlessly with traditional Kerala bridal attire or standalone festive ensembles.',
    images: [
      'assets/images/gold-bangles-bracelets.jpg',
      'assets/images/bridal-kerala-gold.jpg',
      'assets/images/hero-gold-luxury.jpg'
    ],
    featured: true,
    isNewArrival: true,
    isBridal: true,
    isSwaDiamond: false,
    collectionOrder: 5,
    specs: [
      { label: 'Category', value: 'Bangles' },
      { label: 'Sizing & Details', value: 'Enquire on WhatsApp or in-store' }
    ]
  },
  {
    id: 'swa-celeste-drop-earrings',
    sku: 'SWA-DE-019',
    name: 'SWA Céleste Diamond Drops',
    categorySlug: 'earrings',
    categoryName: 'Earrings',
    shortDesc: 'Elongated diamond drop earrings designed to catch subtle light with every movement.',
    description:
      'Presented under the SWA DIAMONDS collection at SWIS JEWELS, these refined drop earrings elevate bridal trousseaus and evening occasions alike.',
    images: [
      'assets/images/diamond-earrings-pendant.jpg',
      'assets/images/swa-diamond-campaign.jpg',
      'assets/images/diamond-ring-solitaire.jpg'
    ],
    featured: true,
    isNewArrival: false,
    isBridal: true,
    isSwaDiamond: true,
    swaSubcategory: 'Diamond Earrings',
    collectionOrder: 6,
    specs: [
      { label: 'Showcase', value: 'SWA DIAMONDS' },
      { label: 'Category', value: 'Diamond Earrings' },
      { label: 'Enquiry', value: 'Contact showroom for availability' }
    ]
  },
  {
    id: 'heritage-sculpted-gold-pendant',
    sku: 'SWIS-PN-007',
    name: 'Solstice Medallion Gold Pendant',
    categorySlug: 'pendants',
    categoryName: 'Pendants',
    shortDesc: 'Architectural gold pendant on a fine link chain suited for layered or solo styling.',
    description:
      'A sleek medallion silhouette featuring refined surface detailing that pairs cleanly with lightweight chains for both daily refinement and festive gatherings.',
    images: [
      'assets/images/gold-necklace-editorial.jpg',
      'assets/images/gold-chains-rings.jpg',
      'assets/images/silver-daily-wear.jpg'
    ],
    featured: false,
    isNewArrival: true,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 7,
    specs: [
      { label: 'Category', value: 'Pendants' },
      { label: 'Details', value: 'Enquire via WhatsApp for chain pairing' }
    ]
  },
  {
    id: 'milano-gold-link-chain',
    sku: 'SWIS-CH-011',
    name: 'Classic Sculpted Link Chain',
    categorySlug: 'chains',
    categoryName: 'Chains',
    shortDesc: 'Clean, structured gold chain engineered for lasting strength and daily comfort.',
    description:
      'Crafted with precision-aligned links for an uninterrupted sheen, suited for wearing solo or pairing with statement pendants.',
    images: [
      'assets/images/gold-chains-rings.jpg',
      'assets/images/gold-necklace-editorial.jpg',
      'assets/images/silver-daily-wear.jpg'
    ],
    featured: false,
    isNewArrival: false,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 8,
    specs: [
      { label: 'Category', value: 'Chains' },
      { label: 'Lengths', value: 'Multiple lengths available in showroom' }
    ]
  },
  {
    id: 'swa-eternity-diamond-bracelet',
    sku: 'SWA-DB-005',
    name: 'SWA Harmony Diamond Bracelet',
    categorySlug: 'bracelets',
    categoryName: 'Bracelets',
    shortDesc: 'Graceful diamond-accented wristwear curated for contemporary bridal and festive wear.',
    description:
      'Designed with sleek articulation and luminous SWA DIAMONDS detailing, offering understated brilliance from daytime celebrations to evening galas.',
    images: [
      'assets/images/gold-bangles-bracelets.jpg',
      'assets/images/swa-diamond-campaign.jpg',
      'assets/images/diamond-ring-solitaire.jpg'
    ],
    featured: false,
    isNewArrival: true,
    isBridal: true,
    isSwaDiamond: true,
    swaSubcategory: 'Diamond Bracelets',
    collectionOrder: 9,
    specs: [
      { label: 'Showcase', value: 'SWA DIAMONDS' },
      { label: 'Category', value: 'Diamond Bracelets' }
    ]
  },
  {
    id: 'sovereign-gold-signet-ring',
    sku: 'SWIS-RG-016',
    name: 'Sovereign Architectural Gold Ring',
    categorySlug: 'rings',
    categoryName: 'Rings',
    shortDesc: 'Clean-lined gold band ring with subtle bevelled edges for modern timelessness.',
    description:
      'An understated gold ring crafted for everyday comfort and effortless pairing with classic watches or stacked bands.',
    images: [
      'assets/images/gold-chains-rings.jpg',
      'assets/images/diamond-ring-solitaire.jpg'
    ],
    featured: false,
    isNewArrival: false,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 10,
    specs: [
      { label: 'Category', value: 'Rings' },
      { label: 'Ring Sizing', value: 'Available on showroom consultation' }
    ]
  },
  {
    id: 'serene-silver-signature-set',
    sku: 'SWIS-SL-004',
    name: 'Serene Minimal Silver Ensemble',
    categorySlug: 'silver-jewellery',
    categoryName: 'Silver Jewellery',
    shortDesc: 'Contemporary sterling-inspired silver earrings and delicate pendant for gifting and poise.',
    description:
      'Thoughtfully finished silver ornaments designed for gifting, festive poise, and effortless everyday sophistication.',
    images: [
      'assets/images/silver-daily-wear.jpg',
      'assets/images/diamond-earrings-pendant.jpg'
    ],
    featured: false,
    isNewArrival: false,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 11,
    specs: [
      { label: 'Category', value: 'Silver Jewellery' },
      { label: 'Availability', value: 'Enquire via WhatsApp or showroom' }
    ]
  },
  {
    id: 'grace-daily-wear-studs-pendant',
    sku: 'SWIS-DW-010',
    name: 'Grace Everyday Studs & Pendant',
    categorySlug: 'daily-wear-jewellery',
    categoryName: 'Daily Wear Jewellery',
    shortDesc: 'Feather-light daily wear jewellery crafted for workdays, travel, and subtle refinement.',
    description:
      'Created for women who favour refined simplicity, combining comfortable profiles with lasting visual poise.',
    images: [
      'assets/images/silver-daily-wear.jpg',
      'assets/images/gold-necklace-editorial.jpg'
    ],
    featured: false,
    isNewArrival: true,
    isBridal: false,
    isSwaDiamond: false,
    collectionOrder: 12,
    specs: [
      { label: 'Category', value: 'Daily Wear Jewellery' },
      { label: 'Style', value: 'Lightweight & versatile' }
    ]
  },
  {
    id: 'royal-kasu-gold-suite',
    sku: 'SWIS-GD-030',
    name: 'Royal Heritage Gold Ensemble',
    categorySlug: 'gold-jewellery',
    categoryName: 'Gold Jewellery',
    shortDesc: 'Curated signature gold suite uniting classic Kerala artistry with modern poise.',
    description:
      'A centerpiece gold creation from our Karathur showroom, showcasing intricate detail and luminous warm finish for weddings and milestone family celebrations.',
    images: [
      'assets/images/hero-gold-luxury.jpg',
      'assets/images/bridal-kerala-gold.jpg'
    ],
    featured: false,
    isNewArrival: false,
    isBridal: true,
    isSwaDiamond: false,
    collectionOrder: 13,
    specs: [
      { label: 'Category', value: 'Gold Jewellery' },
      { label: 'Showroom', value: 'SWIS JEWELS, Karathur, Tirur' }
    ]
  }
];
