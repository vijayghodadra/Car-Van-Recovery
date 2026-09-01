import { LucideIcon } from 'lucide-react';

export interface PageData {
  slug: string;
  name: string;
  type: 'service' | 'location';
  title: string;
  description: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  featuresTitle?: string;
  features?: { title: string; desc?: string; iconName?: string }[];
  processTitle?: string;
  processSteps?: { step: string; title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  seoContent?: {
    title: string;
    paragraphs: string[];
  };
}

export const services: PageData[] = [
  {
    slug: 'car-recovery',
    name: 'Car Recovery',
    type: 'service',
    title: 'Car Recovery Services | Fast & Reliable | Car&Van Recovery',
    description: 'Professional 24/7 car recovery services. We provide fast and reliable breakdown and accident recovery.',
    headline: 'Fast & Reliable Car Recovery',
    subheadline: 'Professional emergency car recovery when you need it most.',
    heroImage: '/images/Poster/Car Recovery.png'
  },
  {
    slug: 'van-recovery',
    name: 'Van Recovery',
    type: 'service',
    title: 'Van Recovery Services | Commercial Vehicle Towing | Car&Van Recovery',
    description: 'Expert 24/7 van recovery services. We tow commercial vans, transit vans, and long-wheelbase vehicles safely.',
    headline: 'Commercial Van Recovery',
    subheadline: 'Getting your business back on the road safely and quickly.',
    heroImage: '/images/Poster/Van Recovery.png'
  },
  {
    slug: 'lbw-van-recovery',
    name: 'Lwb Van Recovery',
    type: 'service',
    title: 'Long Wheelbase (LWB) Van Recovery | Car&Van Recovery',
    description: 'Specialist recovery for Long Wheelbase (LWB) vans. Our fleet is equipped to handle large commercial vehicles.',
    headline: 'LWB VAN RECOVERY',
    subheadline: 'Heavy-duty, specialist recovery for your long wheelbase commercial vehicles.',
    heroImage: '/images/Poster/LWB Van Recovery.png',
    seoContent: {
      title: 'Specialist LWB Van Recovery in Cambridge',
      paragraphs: [
        'Breaking down in a large commercial vehicle requires a specialist response. We provide dedicated <strong>Long Wheelbase (LWB) Van Recovery in Cambridge</strong> and along the M11 corridor, offering fast, reliable towing for all oversized vans and commercial fleets.',
        'Our custom heavy-duty flatbed trucks are designed to safely load and transport heavy, fully loaded LWB vans without risking damage to the chassis or your cargo. Whether you require <strong>commercial van towing</strong> due to a mechanical breakdown, accident, or electrical fault, our 24/7 emergency response team guarantees rapid assistance with transparent, affordable pricing.'
      ]
    },
    featuresTitle: 'WHY LWB RECOVERY REQUIRES SPECIALIST EQUIPMENT',
    features: [
      { title: 'Long Wheel Base Vans', desc: 'Extended chassis require specific flatbeds.', iconName: 'Truck' },
      { title: 'Large Commercial Vehicles', desc: 'Heavy weight needs specialist lifting gear.', iconName: 'Weight' },
      { title: 'Safe Loading', desc: 'Winch systems designed for heavy vans.', iconName: 'ShieldCheck' },
      { title: 'Secure Transport', desc: 'Multiple strapping points for stability.', iconName: 'Lock' }
    ],
    faqs: [
      { question: 'Can you recover fully loaded LWB vans?', answer: 'Yes, our specialist heavy-duty flatbeds can accommodate fully loaded LWB commercial vehicles.' },
      { question: 'Do you operate 24/7 for commercial vans?', answer: 'Absolutely. We understand downtime costs money, so we provide 24/7 emergency response.' }
    ]
  },
  {
    slug: 'jumpstart-service',
    name: 'Jumpstart Service',
    type: 'service',
    title: 'Emergency Jumpstart Service | 24/7 Roadside Assistance',
    description: 'Fast battery jumpstart services. Stranded with a flat battery? We dispatch immediately to get your engine running.',
    headline: 'JUMPSTART SERVICE',
    subheadline: 'Dead battery? Our jumpstart service can get you moving again safely and quickly.',
    heroImage: '/images/Poster/Jumpstart Service.png',
    seoContent: {
      title: '24/7 Emergency Jumpstart Service in Cambridge',
      paragraphs: [
        'A dead battery can strike at any time, leaving you stranded at home, work, or on the roadside. Our rapid-response <strong>car battery jumpstart service in Cambridge</strong> is available 24/7 to provide immediate roadside assistance.',
        'Avoid the risks of improperly jumpstarting modern vehicles. Our trained technicians use professional surge-protected booster packs to deliver a safe, reliable <strong>mobile battery jumpstart</strong> that protects your car\'s sensitive electronics. If your battery is beyond saving, we can also advise on replacements or safely recover your vehicle.'
      ]
    },
    featuresTitle: 'COMMON REASONS FOR A FLAT BATTERY',
    features: [
      { title: 'Lights Left On', iconName: 'Lightbulb' },
      { title: 'Old Battery', iconName: 'BatteryWarning' },
      { title: 'Cold Weather', iconName: 'Snowflake' },
      { title: 'Vehicle Unused', iconName: 'Clock' },
      { title: 'Electrical Issues', iconName: 'Zap' }
    ],
    processTitle: 'OUR JUMPSTART PROCESS',
    processSteps: [
      { step: '01', title: 'CONTACT US', desc: 'Call us 24/7.' },
      { step: '02', title: 'LOCATION', desc: 'Share your exact location.' },
      { step: '03', title: 'BATTERY CHECK', desc: 'We assess the battery health.' },
      { step: '04', title: 'SAFE JUMPSTART', desc: 'Professional, surge-free jumpstart.' }
    ]
  },
  {
    slug: 'tyre-change',
    name: 'Tyre Change',
    type: 'service',
    title: 'Mobile Tyre Change Service | Fast Roadside Replacement',
    description: 'Emergency mobile tyre changing service. We come to you 24/7 to change your flat or blown out tyre.',
    headline: 'TYRE CHANGE SERVICE',
    subheadline: 'Fast, on-the-spot mobile tyre replacement so you can continue your journey without delay.',
    heroImage: '/images/Poster/change tire.png',
    seoContent: {
      title: 'Rapid Mobile Tyre Fitting & Change in Cambridge',
      paragraphs: [
        'Dealing with a flat tyre, blowout, or slow puncture is incredibly dangerous on busy roads. Our <strong>mobile tyre change service in Cambridge</strong> offers 24/7 roadside assistance, bringing expert help directly to your location, whether you are on the M11, A14, or local roads.',
        'Don\'t risk changing a wheel yourself on a hard shoulder. We provide professional <strong>emergency tyre replacement</strong> and spare wheel fitting. Our rapid-response vans are equipped with heavy-duty jacks and tools to swap your damaged tyre safely, securely, and swiftly, minimizing your downtime.'
      ]
    },
    featuresTitle: 'COMMON TYRE PROBLEMS',
    features: [
      { title: 'Puncture', iconName: 'Wrench' },
      { title: 'Flat Tyre', iconName: 'Disc' },
      { title: 'Damaged Tyre', iconName: 'AlertTriangle' },
      { title: 'Blowout', iconName: 'Wind' },
      { title: 'Spare Fitting', iconName: 'Settings' }
    ],
    processTitle: 'HOW WE CHANGE YOUR TYRE',
    processSteps: [
      { step: '01', title: 'CALL', desc: 'Request our mobile tyre service.' },
      { step: '02', title: 'DISPATCH', desc: 'A technician is sent to your location.' },
      { step: '03', title: 'ASSESS', desc: 'We inspect the damage safely.' },
      { step: '04', title: 'FIT', desc: 'We fit your spare or a new tyre.' }
    ]
  },
  {
    slug: 'fuel-delivery',
    name: 'Fuel Delivery',
    type: 'service',
    title: 'Emergency Fuel Delivery | Petrol & Diesel | Car&Van Recovery',
    description: 'Run out of fuel? Our emergency fuel delivery service brings petrol or diesel directly to your location 24/7.',
    headline: 'FUEL DELIVERY',
    subheadline: 'Stranded with an empty tank? We deliver fuel straight to your vehicle, wherever you are.',
    heroImage: '/images/Poster/Fuel Delivery.png',
    seoContent: {
      title: 'Emergency Roadside Fuel Delivery Service',
      paragraphs: [
        'Running out of petrol or diesel is a common but stressful experience. If you\'re stranded with an empty tank, our <strong>emergency fuel delivery service in Cambridge</strong> is available 24/7 to get you moving again without the need for an expensive tow.',
        'We rapidly dispatch one of our roadside assistance vehicles with enough premium unleaded or diesel fuel to get you safely to the nearest filling station. Trust our <strong>roadside fuel rescue</strong> for a fast, hassle-free solution anywhere along the M11, A14, or surrounding areas.'
      ]
    },
    featuresTitle: 'RAN OUT OF FUEL?',
    features: [
      { title: 'Petrol Delivery', desc: 'Unleaded delivered to you.', iconName: 'Fuel' },
      { title: 'Diesel Delivery', desc: 'Commercial & private diesel.', iconName: 'Fuel' },
      { title: 'Emergency Service', desc: 'Rapid roadside response.', iconName: 'Clock' },
      { title: 'Local Assistance', desc: 'Covering Cambridge & M11.', iconName: 'MapPin' }
    ],
    processTitle: 'HOW FUEL DELIVERY WORKS',
    processSteps: [
      { step: '01', title: 'CONTACT', desc: 'Tell us your fuel type.' },
      { step: '02', title: 'LOCATE', desc: 'We find your stranded vehicle.' },
      { step: '03', title: 'DELIVER', desc: 'We arrive with premium fuel.' },
      { step: '04', title: 'DRIVE', desc: 'You continue your journey safely.' }
    ]
  },
  {
    slug: 'tyre-change-and-repair',
    name: 'Tyre Change and Repair',
    type: 'service',
    title: 'Mobile Tyre Repair & Change | Car&Van Recovery',
    description: 'Comprehensive mobile tyre services including puncture repairs and complete wheel changes at the roadside.',
    headline: 'TYRE CHANGE & REPAIR',
    subheadline: 'Professional roadside tyre repairs and replacements brought directly to you.',
    heroImage: '/images/Poster/change tire & repair.png',
    seoContent: {
      title: '24/7 Mobile Tyre Repair & Replacement',
      paragraphs: [
        'A sudden puncture doesn\'t always mean you need a brand-new tyre. Our comprehensive <strong>mobile tyre repair and change service in Cambridge</strong> evaluates the damage on the spot to provide the most cost-effective and safe solution for your vehicle.',
        'If a repair is legal and safe, our technicians will perform a permanent <strong>roadside puncture repair</strong> to get you back on your way. If the tyre is damaged beyond repair, we offer immediate <strong>emergency tyre fitting</strong>. We cater to all cars and light commercial vans, ensuring you are never left stranded.'
      ]
    },
    featuresTitle: 'TYRE PROBLEMS WE CAN HELP WITH',
    features: [
      { title: 'Puncture Repair', desc: 'Safe roadside plugging if legal.', iconName: 'Wrench' },
      { title: 'Complete Change', desc: 'Full wheel replacement.', iconName: 'Settings' },
      { title: 'Valve Issues', desc: 'Leaking valve replacements.', iconName: 'Activity' },
      { title: 'Bead Seal', desc: 'Rim seal repairs.', iconName: 'Circle' }
    ],
    processTitle: 'ROADSIDE TYRE SUPPORT',
    processSteps: [
      { step: '01', title: 'CHECK', desc: 'We safely inspect the tyre.' },
      { step: '02', title: 'ASSESS', desc: 'Determine if repairable.' },
      { step: '03', title: 'REPAIR / CHANGE', desc: 'Fix or replace the tyre.' },
      { step: '04', title: 'GET MOVING', desc: 'Check pressures and go.' }
    ]
  },
  {
    slug: 'auction-and-garage-collection',
    name: 'Auction & Garage Collection',
    type: 'service',
    title: 'Vehicle Auction & Garage Collection | Car&Van Recovery',
    description: 'Safe and secure vehicle transportation from auctions (Copart, BCA) or garages to your specified destination.',
    headline: 'AUCTION & GARAGE COLLECTION',
    subheadline: 'Safe, reliable vehicle transport from any auction house or garage across the UK.',
    heroImage: '/images/Poster/Auction & Garage Collection.png',
    seoContent: {
      title: 'Reliable Vehicle Auction & Garage Collection',
      paragraphs: [
        'Purchasing a vehicle from an auction often requires specialist logistics. We provide fully insured <strong>auction vehicle collection services</strong> across the UK, securely transporting cars and vans from major auction houses like Copart, BCA, and independent sellers directly to your door or business.',
        'Additionally, our <strong>garage collection and delivery service</strong> ensures your broken down or recently repaired vehicle is safely moved between workshops or back to your home. We handle all logistics, paperwork, and safe loading, providing a seamless vehicle transport experience.'
      ]
    },
    featuresTitle: 'IDEAL FOR',
    features: [
      { title: 'Vehicle Auctions', desc: 'Copart, BCA, and independent.', iconName: 'Gavel' },
      { title: 'Garages', desc: 'To or from local workshops.', iconName: 'Wrench' },
      { title: 'Dealerships', desc: 'Dealer transfers.', iconName: 'Building2' },
      { title: 'Private Customers', desc: 'Door-to-door service.', iconName: 'User' }
    ],
    processTitle: 'HOW VEHICLE COLLECTION WORKS',
    processSteps: [
      { step: '01', title: 'BOOK', desc: 'Schedule your collection.' },
      { step: '02', title: 'DETAILS', desc: 'Provide lot/reference numbers.' },
      { step: '03', title: 'COLLECT', desc: 'We securely load the vehicle.' },
      { step: '04', title: 'DELIVER', desc: 'Safe handover at destination.' }
    ]
  },
  {
    slug: 'vehicle-transportation',
    name: 'Vehicle Transportation',
    type: 'service',
    title: 'Secure Vehicle Transportation | Car&Van Recovery',
    description: 'Professional vehicle transportation services. We safely move cars and vans across the UK.',
    headline: 'VEHICLE TRANSPORTATION',
    subheadline: 'Professional, fully-insured transportation for your car or commercial vehicle from A to B.',
    heroImage: '/images/Poster/Vehicle Transportation.png',
    seoContent: {
      title: 'Professional Nationwide Vehicle Transportation',
      paragraphs: [
        'Whether you\'re a dealership moving stock, or a private owner transporting a classic car, our <strong>secure vehicle transportation services</strong> guarantee safe, damage-free delivery anywhere in the UK. We operate out of Cambridge but provide nationwide coverage.',
        'Our fleet of modern, meticulously maintained flatbed trucks can accommodate everything from everyday hatchbacks to high-value sports cars and commercial vans. With fully comprehensive insurance and experienced drivers, our <strong>car transport and logistics</strong> service offers complete peace of mind for every journey.'
      ]
    },
    featuresTitle: 'TRANSPORTATION SERVICES',
    features: [
      { title: 'Local Transport', desc: 'Short distance moves.', iconName: 'Map' },
      { title: 'Long Distance', desc: 'Nationwide coverage.', iconName: 'MapPin' },
      { title: 'Dealer Transport', desc: 'B2B vehicle logistics.', iconName: 'Truck' },
      { title: 'Private Transport', desc: 'Classic & modern cars.', iconName: 'Car' }
    ],
    processTitle: 'OUR VEHICLE TRANSPORT PROCESS',
    processSteps: [
      { step: '01', title: 'QUOTE', desc: 'Get a competitive price.' },
      { step: '02', title: 'SCHEDULE', desc: 'Agree on transport times.' },
      { step: '03', title: 'LOAD', desc: 'Safe and secure winch/drive on.' },
      { step: '04', title: 'DELIVER', desc: 'Signed handover at destination.' }
    ]
  },
  
  // STANSTED SERVICES
  {
    slug: 'stansted-jumpstart-service',
    name: 'Stansted Jumpstart Service',
    type: 'service',
    title: 'Stansted Airport Jumpstart Service | Car&Van Recovery',
    description: 'Returned to a flat battery at Stansted Airport? We provide rapid jumpstart services directly in the airport car parks.',
    headline: 'Stansted Airport Jumpstarts',
    subheadline: 'Fast battery assistance in all Stansted Airport car parks.',
    heroImage: '/images/hero-wide.jpg'
  },
  {
    slug: 'stansted-tyre-change-and-repair',
    name: 'Stansted Tyre Change & Repair',
    type: 'service',
    title: 'Stansted Mobile Tyre Repair | Car&Van Recovery',
    description: 'Mobile tyre changing and puncture repair services covering Stansted Airport and surrounding areas.',
    headline: 'Stansted Tyre Repair',
    subheadline: 'Got a flat near Stansted? We provide rapid mobile tyre replacements.',
    heroImage: '/images/hero-wide.jpg'
  },
  {
    slug: 'stansted-breakdown-recovery',
    name: 'Stansted Breakdown Recovery',
    type: 'service',
    title: 'Stansted Airport Breakdown Recovery | Car&Van Recovery',
    description: '24/7 emergency vehicle recovery from Stansted Airport. We tow cars and vans safely to your chosen destination.',
    headline: 'Stansted Breakdown Recovery',
    subheadline: 'Reliable 24/7 towing and recovery from Stansted Airport.',
    heroImage: '/images/hero-wide.jpg'
  }
];

export const locations: PageData[] = [
  'm11', 'harlow', 'stevenage', 'bishops-stortford', 'stansted-airport', 
  'haverhill', 'cambridge', 'cambridgeshire', 'newmarket', 'norwich', 
  'bury-st-edmunds', 'huntingdon', 'st-neots', 'st-ives', 'bedford', 'ely'
].map(slug => {
  const name = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    slug,
    name,
    type: 'location' as const,
    title: `Car Recovery ${name} | 24/7 Breakdown Assistance`,
    description: `Need car recovery in ${name}? We provide fast, reliable 24/7 towing and breakdown assistance in ${name} and surrounding areas.`,
    headline: `${name} Vehicle Recovery`,
    subheadline: `Fast, reliable 24/7 breakdown and accident recovery in and around ${name}.`,
    heroImage: '/images/hero-wide.jpg'
  };
});
