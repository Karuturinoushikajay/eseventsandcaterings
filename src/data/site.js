/**
 * Single source of truth for every editable string on the site.
 *
 * PHOTOS: local files live under public/events/. Add new gallery shots to
 * public/events/gallery/ and append an entry to galleryItems below.
 *
 * PRICES: per-plate rates are placeholders — confirm before publishing.
 */

const photo = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const business = {
  name: 'Pro. Emmadi Suresh EVENTS&CATERING',
  shortName: 'Emmadi Suresh Events',
  tagline: 'Weddings · Corporate · Celebrations',
  logo: '/logo.jpg',
  logoFallback: '/logo.svg',
  phones: [
    { display: '+91 93983 37999', tel: '+919398337999', label: 'Bookings' },
    { display: '+91 91337 71141', tel: '+919133771141', label: 'Enquiries' },
  ],
  // Floating button, footer, and contact section.
  whatsapp: '919398337999',
  // Request a Quote form sends enquiries here.
  whatsappEnquiries: '919133771141',
  addressLines: [
    'Eluru - Jangareddigudem Road',
    'Guravaigudem, Jangareddigudem',
    'Eluru District, Andhra Pradesh 534447',
  ],
  hours: [
    { days: 'Monday - Saturday', time: '8:00 AM - 9:00 PM' },
    { days: 'Sunday', time: '9:00 AM - 6:00 PM' },
  ],
  serviceArea:
    'Serving Jangareddigudem, Eluru, Rajamahendravaram, Bhimavaram and the surrounding Godavari districts across Andhra Pradesh and Telangana.',
  map: {
    lat: 17.0927801,
    lng: 81.273374,
    zoom: 16,
    // Short link the client shared; used for the "Open in Google Maps" action.
    directionsUrl: 'https://maps.app.goo.gl/pnN4npWJASt6j3nk9',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'menu', label: 'Menu' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

export const heroSlides = [
  {
    image: '/events/hero/slide-1.jpg',
    kicker: 'Events & Decor',
    caption: 'Illuminated golden catering counters and stage setup',
  },
  {
    image: '/events/hero/slide-2.jpg',
    kicker: 'Weddings',
    caption: 'Three-tier display with mandap backdrop',
  },
  {
    image: '/events/hero/slide-3.jpg',
    kicker: 'Traditional Meals',
    caption: 'Andhra banana-leaf meal service for hundreds of guests',
  },
  {
    image: '/events/hero/slide-4.jpg',
    kicker: 'Live Counters',
    caption: 'Custom sweet pan stall with full lighting',
  },
]

export const hero = {
  headline: 'Making Every Occasion Unforgettable',
  subheadline:
    'Authentic Andhra and multi-cuisine catering with complete event planning — from the mandap to the last dessert counter. Thirteen years of feeding celebrations across the Godavari districts.',
  primaryCta: { label: 'Get a Quote', href: '#contact' },
  secondaryCta: { label: 'View Our Menu', href: '#menu' },
  video: '/events/videos/hero-onsite.mp4',
  videoPoster: '/events/gallery/golden-tier-display.jpg',
}

export const stats = [
  { value: 500, suffix: '+', label: 'Events Catered' },
  { value: 13, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Menu Options' },
  { value: 20, suffix: 'K+', label: 'Largest Single Event' },
]

export const about = {
  eyebrow: 'About Us',
  heading: 'A family kitchen, scaled for your biggest day',
  body: [
    'Pro. Emmadi Suresh Events & Catering began as a family kitchen in Jangareddigudem and now handles full-scale weddings, corporate functions and private parties across the Godavari districts. Every menu is cooked fresh on site by our own chefs — no reheated trays, no outsourced kitchens.',
    'We handle more than the food. Decor, mandap setup, illuminated counters, seating, uniformed service staff and live sweet pan, snack and tiffin counters are all coordinated by one team.',
  ],
  image: '/events/about/team.jpg',
  highlights: [
    'Own chefs and in-house kitchen team',
    'Pure-veg and non-veg kitchens kept separate',
    'Transparent per-plate pricing, no hidden charges',
  ],
}

/**
 * `icon` maps to a key in the `Icon` table exported from components/icons.jsx.
 */
export const services = [
  {
    icon: 'rings',
    title: 'Weddings & Receptions',
    description:
      'Full wedding catering from haldi breakfast to reception dinner, with traditional Andhra banana-leaf meals or grand multi-cuisine buffets.',
  },
  {
    icon: 'briefcase',
    title: 'Corporate Events',
    description:
      'Conference lunches, product launches and staff-day catering delivered on a fixed schedule with clean, professional presentation.',
  },
  {
    icon: 'cake',
    title: 'Birthday Parties',
    description:
      'Themed dessert tables, snack counters and kid-friendly menus sized for anything from a house party to a banquet hall.',
  },
  {
    icon: 'chef',
    title: 'Custom Catering',
    description:
      'Tell us the budget and guest count and we build the menu around it — pure veg, Jain, low-spice or a full non-veg spread.',
  },
  {
    icon: 'flame',
    title: 'Live Counters',
    description:
      'Chaat, dosa, tandoor, pasta, mutton biryani and ice-cream counters manned by our chefs and cooked in front of your guests.',
  },
  {
    icon: 'sparkle',
    title: 'Decor & Setup',
    description:
      'Mandap and stage decor, floral arrangements, buffet styling, seating, crockery and uniformed service staff.',
  },
]

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'counters', label: 'Live Counters' },
  { id: 'parties', label: 'Private Parties' },
]

export const galleryItems = [
  {
    type: 'video',
    src: '/events/videos/hero-onsite.mp4',
    poster: '/events/gallery/golden-tier-display.jpg',
    category: 'weddings',
    title: 'On-Site Event Video',
    meta: 'Live catering and event setup',
  },
  {
    type: 'video',
    src: '/events/videos/lv_0_20260628163956.mp4',
    poster: '/events/gallery/golden-arch-stall.jpg',
    category: 'weddings',
    title: 'Event Highlight',
    meta: 'Catering setup',
  },
  {
    image: '/events/gallery/golden-arch-stall.jpg',
    category: 'weddings',
    title: 'Golden Arch Counter',
    meta: 'Illuminated multi-cuisine stall',
  },
  {
    image: '/events/gallery/golden-tier-display.jpg',
    category: 'weddings',
    title: 'Tiered Display Setup',
    meta: 'Mandap hall · Wedding decor',
  },
  {
    image: '/events/gallery/banana-leaf-meal.jpg',
    category: 'weddings',
    title: 'Banana-Leaf Service',
    meta: 'Traditional Andhra meal · Hundreds of guests',
  },
  {
    image: '/events/gallery/fruit-counter.jpg',
    category: 'counters',
    title: 'Fruit Counter',
    meta: 'Backlit buffet with floral styling',
  },
  {
    image: '/events/gallery/live-pan-stall.jpg',
    category: 'counters',
    title: 'Live Sweet Pan Stall',
    meta: 'Custom-lit pan counter for events',
  },
]

export const promoBanners = [
  {
    image: '/events/promo/services-banner.jpg',
    alt: 'E/S Events & Catering services — catering, events, meals, ice creams, live pan, snacks and tiffins',
    caption: 'Full service list — catering through live tiffins',
  },
  {
    image: '/events/promo/proprietor-banner.jpg',
    alt: 'Pro. Emmadi Suresh Events and Catering contact banner',
    caption: 'Pro. Emmadi Suresh · Events & Catering',
  },
  {
    image: '/events/promo/maddi-anjaneya-banner.jpg',
    alt: 'Maddi Anjaneya catering and ice creams promotional banner',
    caption: 'Maddi Anjaneya · Catering & Ice Creams',
  },
]

export const menuTypes = [
  { id: 'food', label: 'Food Menu' },
  { id: 'tiffins', label: 'Tiffins Menu' },
]

export const foodPackages = {
  eyebrow: 'Menu & Packages',
  heading: 'Per-plate packages built around your guest count',
  note: 'All rates are per plate, inclusive of plates, glasses and buffet setup. Custom menus also available based on your budget and guest count. Call or WhatsApp for an exact quote.',
  tiers: [
    {
      name: 'Basic',
      subtitle: 'Veg Meal',
      price: 111,
      unit: 'per plate',
      popular: false,
      description: 'Simple Andhra-style veg meal for house functions and small gatherings.',
      features: [
        'Sweet',
        'Hot',
        'Curry',
        'Dal',
        'Fry',
        'Sambar',
        'Vadiyalu',
        'Curd',
        'Rice',
        'Plates & Glass',
      ],
    },
    {
      name: 'Standard',
      subtitle: 'Buffet',
      price: 222,
      unit: 'per plate',
      popular: false,
      description: 'Our most-booked package — biryani or fried rice with a full Andhra spread.',
      features: [
        'Sweet',
        'Hot',
        'Biryani (or) Fried Rice',
        '1 Curry',
        'Raita',
        '2 Curry',
        'Dal',
        'Any Fry',
        'Sambar (or) Rasam',
        'Pickle',
        'Chips',
        'Rice',
        'Pot Curd',
        'Plates & Glass',
      ],
    },
    {
      name: 'Premium',
      subtitle: 'Grand Buffet',
      price: 333,
      unit: 'per plate',
      popular: false,
      description: 'Full grand spread with starters, sweets and premium add-ons for weddings and large events.',
      features: [
        '2 Sweet',
        'Hot',
        'Starter',
        'Biryani (or) Fried Rice',
        '1 Curry',
        'Special Raita',
        '2 Curry',
        'Dal',
        'Any Fry',
        'Sambar (or) Rasam',
        'Pickle',
        'Powders',
        'Ghee',
        'Banana',
        'Pot Curd',
        'Rice',
        'Plates & Glass',
        'Water Bottle',
      ],
    },
    {
      name: 'Deluxe',
      subtitle: 'Wedding Buffet',
      price: 555,
      unit: 'per plate',
      popular: false,
      description:
        'Full wedding spread with ice cream, sweet pan and service supply — ideal for receptions and large gatherings.',
      features: [
        '2 Sweet',
        '1 Cooling Sweet',
        'Hot',
        'Starter',
        'Biryani & Fried Rice',
        '1 Curry',
        'Special Raita',
        '2 Curry',
        '3 Curry',
        'Dal',
        'Any Fry',
        'Sambar & Rasam',
        'Pickle',
        'Powders',
        'Ghee',
        'Banana (optional)',
        'Pot Curd',
        'Rice',
        'Plates & Glass',
        'Water Bottle',
        'Ice Cream',
        'Sweet Pan',
        'Service supply included',
      ],
    },
    {
      name: 'Diamond',
      subtitle: 'Full Spread',
      price: 777,
      unit: 'per plate',
      popular: false,
      description:
        'Our top-tier package — welcome drink, pulka, salad, premium desserts and uniformed service staff.',
      features: [
        'Welcome Drink',
        '2 Sweet',
        '2 Cooling Sweet',
        'Hot',
        'Starter',
        'Pulka with Curry',
        'Salad (Carrot, Cucumber, Onion)',
        'Biryani & Fried Rice',
        '1 Curry',
        'Special Raita',
        '2 Curry',
        '3 Curry',
        'Dal',
        'Any Fry',
        'Sambar & Rasam',
        '2 Pickle',
        '3 Powders',
        'Ghee',
        'Banana (optional)',
        'Pot Curd',
        'Rice',
        'Plates & Glass',
        'Water Bottle with cooling',
        'Special Ice Cream',
        'Sweet Pan — 3 flavours (optional)',
        'Service supply with uniform',
      ],
    },
  ],
  cuisines: [
    'Andhra Traditional',
    'North Indian',
    'Chinese',
    'Continental',
    'Tandoor',
    'Chaat & Street Food',
    'South Indian Tiffins',
    'Desserts & Bakery',
  ],
}

export const tiffinsPackages = {
  eyebrow: 'Tiffins Menu',
  heading: 'Breakfast and tiffin packages for morning functions',
  note: 'All rates are per plate, inclusive of plates, glasses and service setup. Ideal for house functions, office breakfasts and morning events. Custom tiffin menus also available.',
  tiers: [
    {
      name: 'Basic',
      subtitle: 'Morning Tiffin',
      price: 88,
      unit: 'per plate',
      popular: false,
      description: 'Simple morning tiffin spread for small gatherings and house functions.',
      features: [
        'Idli',
        'Gari',
        'Upma',
        'Chutney — 2',
        'Tea',
        'Plates & Glass',
      ],
    },
    {
      name: 'Standard',
      subtitle: 'Tiffin Plate',
      price: 111,
      unit: 'per plate',
      popular: false,
      description: 'A fuller tiffin plate with sambar, tea and coffee for medium-sized morning events.',
      features: [
        'Idli',
        'Baji',
        'Upma',
        'Chutney — 2',
        'Sambar',
        'Tea',
        'Coffee',
        'Plates & Glass',
      ],
    },
    {
      name: 'Premium',
      subtitle: 'Full Tiffin',
      price: 166,
      unit: 'per plate',
      popular: false,
      description: 'Expanded tiffin menu with extra chutneys and water bottles for larger morning functions.',
      features: [
        'Idli',
        'Baji & Gari',
        'Upma',
        'Chutney — 3',
        'Sambar',
        'Tea',
        'Coffee',
        'Plates & Glass',
        'Water Bottles',
      ],
    },
    {
      name: 'Deluxe',
      subtitle: 'Live Counter Tiffin',
      price: 222,
      unit: 'per plate',
      popular: false,
      description:
        'Live dosa and puri counters with full tiffin service — our top morning package for weddings and large events.',
      features: [
        'Idli',
        'Baji & Gari',
        'Upma',
        'Dosa × 2 (live)',
        'Puri with Curry (live)',
        'Chutney — 3',
        'Sambar',
        'Tea',
        'Coffee',
        'Plates & Glass',
        'Water Bottles with cooling',
        'Service boys included',
      ],
    },
  ],
  cuisines: [
    'Idli & Vada',
    'Dosa (Live)',
    'Puri (Live)',
    'Upma & Pongal',
    'Baji & Gari',
    'Chutney & Sambar',
    'Tea & Coffee',
  ],
}

export const menuCatalog = {
  food: foodPackages,
  tiffins: tiffinsPackages,
}

/** @deprecated use foodPackages or menuCatalog */
export const packages = foodPackages

export function getPackageOptions(menuType) {
  const catalog = menuCatalog[menuType] ?? foodPackages

  return [
    ...catalog.tiers.map((tier) => ({
      value: String(tier.price),
      label: `₹${tier.price} — ${tier.name} (${tier.subtitle})`,
    })),
    { value: 'custom', label: 'Custom / Customer-based' },
  ]
}

export function formatSelectedPackageForWhatsApp(menuType, packageChoice) {
  const catalog = menuCatalog[menuType] ?? foodPackages
  const menuLabel = menuType === 'tiffins' ? 'Tiffins Menu' : 'Food Menu'

  if (packageChoice === 'custom') {
    return [
      `Menu type: ${menuLabel}`,
      'Package: Custom / Customer-based',
      '',
      'We will build the menu to your budget and preferences.',
    ].join('\n')
  }

  const tier = catalog.tiers.find((t) => String(t.price) === packageChoice)
  if (!tier) return ''

  return [
    `Menu type: ${menuLabel}`,
    `Package: ${tier.name} — ₹${tier.price} per plate (${tier.subtitle})`,
    '',
    'Menu:',
    ...tier.features.map((item) => `• ${item}`),
  ].join('\n')
}

export const testimonials = [
  {
    name: 'Sravani Kondepudi',
    event: 'Wedding · Jangareddigudem',
    rating: 5,
    quote:
      'They fed 900 guests without a single delay. The Andhra thali was exactly like home cooking and the biryani counter ran till the last guest left. Our relatives are still talking about the food.',
  },
  {
    name: 'Ravi Teja Marreddy',
    event: 'Corporate Event · Eluru',
    rating: 5,
    quote:
      'We had a 300-person conference lunch on a tight one-hour break. The team set up early, served fast and cleared out on time. Very professional and easy to coordinate with.',
  },
  {
    name: 'Lakshmi Prasanna',
    event: 'Birthday Party · Rajamahendravaram',
    rating: 5,
    quote:
      'The dessert table was beautiful and the chaat counter was a hit with the kids. They worked to our budget without cutting down the menu. Booking again for our anniversary.',
  },
  {
    name: 'Naveen Chowdary',
    event: 'Reception · Bhimavaram',
    rating: 5,
    quote:
      'Clear pricing from the start, no last-minute additions to the bill. The live dosa and tandoor counters were the highlight of the evening. Genuinely good value.',
  },
  {
    name: 'Anitha Vemuri',
    event: 'Housewarming · Eluru District',
    rating: 4,
    quote:
      'Pure-veg menu for 200 guests, cooked fresh at our place. Everything was hot and served properly. Only asked for more staff at the buffet and they arranged it the same day.',
  },
  {
    name: 'Suresh Babu Gandham',
    event: 'Wedding · Godavari District',
    rating: 5,
    quote:
      'Handled catering and mandap decor together, which saved us a lot of running around. One coordinator for everything made the whole week much less stressful.',
  },
]

export const eventTypes = [
  'Wedding / Reception',
  'Engagement / Haldi',
  'Corporate Event',
  'Birthday Party',
  'Housewarming',
  'Other',
]
