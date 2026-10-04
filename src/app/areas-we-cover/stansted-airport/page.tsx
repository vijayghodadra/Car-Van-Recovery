import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  ShieldCheck, 
  Car, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ArrowRight,
  Truck,
  BatteryWarning,
  Zap,
  Disc,
  AlertTriangle,
  Navigation,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  ChevronRight,
  Plane,
  Flame,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'M11 Breakdown Recovery Stansted: Reliable 24/7 Car and Van Recovery | Car&Van Recovery'
  },
  description: 'Fast, reliable 24/7 M11 breakdown recovery near Stansted Airport. Emergency car & van towing, roadside assistance, flat battery jump starts & puncture repairs.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover/stansted-airport',
  }
};

const stanstedServices = [
  { title: 'M11 car recovery', icon: Car },
  { title: 'M11 van recovery', icon: Truck },
  { title: 'Stansted breakdown recovery', icon: Wrench },
  { title: 'Stansted Airport car park recovery', icon: Plane },
  { title: 'Emergency roadside assistance', icon: AlertTriangle },
  { title: 'Motorway breakdown towing', icon: Truck },
  { title: 'Jump starts & battery assistance', icon: Zap },
  { title: 'Flat tyre repair & changes', icon: Disc },
  { title: 'Accident recovery', icon: ShieldCheck },
  { title: 'Vehicle transportation', icon: Navigation },
  { title: '24/7 motorway assistance', icon: ShieldAlert },
];

const nearbyAreas = [
  { name: 'M11 Corridor', href: '/m11-corridor' },
  { name: "Bishop's Stortford", href: '/areas-we-cover/bishops-stortford' },
  { name: 'Harlow', href: '/areas-we-cover/harlow' },
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'Saffron Walden', href: '/areas-we-cover/saffron-walden' },
  { name: 'Stevenage', href: '/areas-we-cover/stevenage' },
  { name: 'Newmarket', href: '/areas-we-cover/newmarket' },
  { name: 'Stansted Mountfitchet', href: '/areas-we-cover/stansted-airport' },
];

const faqs = [
  {
    question: "Can I get breakdown recovery on the M11 near Stansted?",
    answer: "Yes, our recovery vehicles provide specialized motorway breakdown assistance across all junctions of the M11 near Stansted (Junctions 7, 8, 8A, and 9) and connecting roads like the A120 and A10."
  },
  {
    question: "Is 24 hour breakdown recovery available near Stansted?",
    answer: "Yes, Car & Van Recovery operates 24 hours a day, 7 days a week, 365 days a year to assist stranded motorists day and night."
  },
  {
    question: "How much does M11 car recovery cost?",
    answer: "The price depends on the vehicle, recovery distance, location, time of day and equipment required. We provide clear, fixed quotes before dispatching our recovery trucks."
  },
  {
    question: "Can a recovery company collect a broken-down van?",
    answer: "Yes, we provide heavy-duty recovery for commercial vans, long-wheelbase vehicles, and loaded trade vans. Provide your vehicle details when calling for an accurate quote."
  },
  {
    question: "Can I arrange recovery from Stansted Airport?",
    answer: "Yes, we regularly assist motorists in Stansted Airport short-stay, long-stay, mid-stay, and meet-and-greet parking areas as well as airport approach roads."
  },
  {
    question: "Does Car & Van Recovery provide M11 breakdown recovery?",
    answer: "Yes, Car & Van Recovery offers dedicated motorway recovery solutions across the M11 corridor and surrounding Essex and Cambridgeshire locations."
  }
];

export default function StanstedAirportCoveragePage() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <main className={styles.main}>
        {/* Breadcrumb Navigation */}
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/areas-we-cover" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Areas We Cover</Link>
            <ChevronRight size={14} />
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Stansted Airport &amp; M11</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContainer}>
              <div className={styles.heroLeft}>
                <span className={styles.heroBadge}>24/7 STANSTED &amp; M11 MOTORWAY ASSISTANCE</span>
                <h1 className={styles.heroTitle}>
                  M11 Breakdown Recovery Stansted: <span className={styles.textRed}>Reliable 24/7 Car and Van Recovery</span>
                </h1>
                <p className={styles.heroDesc}>
                  Breaking down on a motorway can be stressful, particularly when travelling to Stansted Airport, commuting to work or driving through an unfamiliar area. Fast, professional car and van recovery across the M11 and Stansted region.
                </p>
                <div className={styles.heroCtas}>
                  <a href={phoneUrl} className={styles.btnRed}>
                    <Phone size={18} /> CALL NOW: {businessConfig.phone}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
                    <MessageCircle size={18} /> WHATSAPP US
                  </a>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.heroImageWrapper}>
                  <Image 
                    src="/images/Poster/Car Recovery.png"
                    alt="M11 Breakdown Recovery Stansted"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO CONTENT SECTION */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.contentWrap}>
              <h2 className={styles.h2}>Dependable Roadside Assistance &amp; Towing Along the M11 near Stansted</h2>
              <p className={styles.bodyText}>
                Breaking down on a motorway can be a stressful experience, particularly when you are travelling to the airport, commuting to work or driving through an unfamiliar area. A sudden engine problem, flat battery or damaged tyre can interrupt your journey and leave you wondering where to find reliable help.
              </p>
              <p className={styles.bodyText}>
                For motorists travelling along the M11 near Stansted, access to suitable <Link href="/" className={styles.inlineLink}>M11 breakdown recovery Stansted</Link> services can make an unexpected vehicle problem easier to manage. Whether you are driving a family car, a commercial van or another suitable vehicle, arranging professional roadside assistance can help you find an appropriate recovery solution.
              </p>
              <p className={styles.bodyText}>
                Car &amp; Van Recovery provides vehicle recovery, roadside assistance and transportation solutions for drivers in its designated service areas. With services covering locations around the <Link href="/m11-corridor" className={styles.inlineLink}>M11 corridor</Link>, Stansted, Cambridgeshire and surrounding areas, the business helps motorists discuss their recovery requirements and arrange suitable assistance, subject to availability.
              </p>
              <p className={styles.bodyText}>
                This guide explains how M11 breakdown recovery works, what to do if your vehicle breaks down near Stansted, the types of recovery available and how to prepare for safer journeys across the UK.
              </p>

              {/* SERVICES PILLS GRID */}
              <div className={styles.servicesGrid}>
                {stanstedServices.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className={styles.serviceItem}>
                      <div className={styles.serviceIconWrap}>
                        <Icon size={20} />
                      </div>
                      <span className={styles.serviceName}>{srv.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WHY M11 BREAKDOWN RECOVERY STANSTED IS IMPORTANT */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHY M11 BREAKDOWN RECOVERY NEAR STANSTED IS IMPORTANT</h2>
              <p className={styles.sectionDesc}>
                The M11 connects London, Stansted and Cambridge and carries high-speed commuter, holiday, and freight traffic around the clock.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Unexpected Vehicle Breakdowns on the M11</h3>
                <p className={styles.deepFeatureText}>
                  Even a regularly serviced vehicle can develop a mechanical or electrical fault during a journey. Engine overheating, battery problems, tyre damage and transmission faults are among the issues that can prevent a vehicle from continuing safely.
                </p>
                <p className={styles.deepFeatureText}>
                  When a vehicle develops a serious problem, attempting to continue driving may cause further damage or create a safety risk. Appropriate motorway breakdown recovery helps arrange transportation to a garage, home address or another agreed destination.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Assistance for Local Drivers &amp; Airport Travellers</h3>
                <p className={styles.deepFeatureText}>
                  Stansted attracts motorists travelling to and from the airport, nearby business parks and surrounding towns. A breakdown near the airport can be particularly inconvenient when you have a flight to catch, passengers to collect or a scheduled journey to complete.
                </p>
                <p className={styles.deepFeatureText}>
                  If your car will not start in a car park or develops a fault on a connecting road, the first priority is to find a safe location and arrange suitable assistance. Explain whether your vehicle is on the motorway, in an airport terminal car park or on a public road when booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 24 HOUR M11 BREAKDOWN RECOVERY */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitLayout} style={{ alignItems: 'center' }}>
              <div>
                <h2 className={styles.h2}>24 HOUR M11 BREAKDOWN RECOVERY &amp; ROADSIDE ASSISTANCE</h2>
                <p className={styles.bodyText}>
                  Vehicle breakdowns can happen at any time of day or night. A car may develop a fault during an early morning commute, while a commercial van may break down late at night after completing deliveries. Access to 24 hour breakdown recovery is essential when assistance is required outside normal working hours.
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-black)', marginTop: '20px', marginBottom: '8px' }}>
                  Emergency Car Recovery Day and Night
                </h3>
                <p className={styles.bodyText}>
                  Emergency car recovery helps motorists arrange transportation when their vehicles cannot safely continue their journeys. Depending on the fault and vehicle condition, the required service may involve roadside assistance, a jump start or vehicle towing.
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-black)', marginTop: '20px', marginBottom: '8px' }}>
                  Roadside Assistance for Unexpected Breakdowns
                </h3>
                <p className={styles.bodyText}>
                  Roadside assistance may help drivers deal with certain vehicle problems without immediately transporting the car, such as battery jump starts and minor roadside fixes. However, roadside repairs should never be attempted in a dangerous traffic environment.
                </p>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="/images/hero_recovery_truck.jpg" alt="24 Hour M11 Breakdown Recovery Stansted" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO DO IF YOUR CAR BREAKS DOWN ON THE M11 */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHAT TO DO IF YOUR CAR BREAKS DOWN ON THE M11</h2>
              <p className={styles.sectionDesc}>
                A motorway breakdown requires particular care because vehicles travel at high speeds and safe stopping places may be limited. Follow these 3 critical steps:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Step 1: Move to a Safe Location If Possible</h3>
                <p className={styles.deepFeatureText}>
                  If you notice a warning light, unusual noise or sudden loss of power, assess whether the vehicle can safely reach the next motorway exit or service area. If this is not possible, follow official motorway breakdown procedures and reach an emergency area or hard shoulder where available. Switch on hazard warning lights and stop as far to the left as possible. Never make sudden manoeuvres or stop in a live lane unless unavoidable.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Step 2: Protect Yourself and Your Passengers</h3>
                <p className={styles.deepFeatureText}>
                  If your vehicle is stopped in a place of relative safety and you can exit safely, use the doors furthest from traffic (left-hand doors) and move behind a safety barrier. Keep passengers away from moving traffic and do not attempt roadside repairs or tyre changes beside a live motorway. If stranded in a live lane, remain in the vehicle with seatbelts fastened and call 999 immediately.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Step 3: Arrange Appropriate Recovery</h3>
                <p className={styles.deepFeatureText}>
                  Once in a safe position, contact our recovery desk. Explain the type of vehicle, nature of the fault, and your precise location. Useful details include your direction of travel (Northbound/Southbound), nearest junction (J8 Stansted), or motorway marker posts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAR & VAN RECOVERY SECTIONS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitLayout}>
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/car_towing_truck.jpg" alt="M11 Car Recovery near Stansted" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>M11 Car Recovery Near Stansted</h3>
                  <p className={styles.splitDesc}>
                    Car recovery provides a practical solution when a vehicle cannot be repaired safely at the roadside. Common reasons include engine failure, overheating, transmission problems, electrical faults and accident damage. We provide safe flatbed towing for automatic, electric, hybrid, and prestige vehicles.
                  </p>
                  <Link href="/car-recovery" className={styles.splitLink}>
                    Car Recovery Services <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/Poster/Van Recovery.png" alt="M11 Van Breakdown Recovery" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>M11 Van Recovery for Commercial Drivers</h3>
                  <p className={styles.splitDesc}>
                    For tradespeople, couriers and delivery companies, a broken-down van can affect scheduled deliveries and business operations. We provide heavy-duty recovery for standard and long-wheelbase (LWB) commercial vehicles, loaded vans, and light commercial fleets.
                  </p>
                  <Link href="/van-recovery" className={styles.splitLink}>
                    Van Recovery Services <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STANSTED AIRPORT CAR PARK & BATTERY ASSISTANCE */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>STANSTED AIRPORT CAR PARK BREAKDOWN RECOVERY</h2>
              <p className={styles.sectionDesc}>
                Starting problems, flat batteries and mechanical faults can affect vehicles left parked in airport facilities or on surrounding access roads.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Car Recovery from Airport Car Parks</h3>
                <p className={styles.deepFeatureText}>
                  If your car will not start in an airport car park, first ensure it does not obstruct traffic. Check for obvious signs such as dim dashboard lights, clicking sounds or slow engine cranking. Avoid repeatedly attempting to start the vehicle. When calling, explain the car park location, level, and entrance for fast access.
                </p>
                <p className={styles.deepFeatureText}>
                  Our technicians are equipped to access multi-storey and open-air airport parking facilities at Stansted to provide roadside jump starts or flatbed extraction.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Flat Battery Assistance &amp; Jump Starts</h3>
                <p className={styles.deepFeatureText}>
                  Vehicles left unused during holidays frequently experience battery discharge. Typical symptoms include slow engine cranking, dim lights, and clicking solenoids.
                </p>
                <p className={styles.deepFeatureText}>
                  Our technicians provide professional, voltage-regulated jump starts to safely restart your car without risking damage to sensitive modern electronics. If your battery is completely exhausted or damaged, we arrange safe towing to a garage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW MUCH DOES M11 BREAKDOWN RECOVERY COST */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.contentWrap}>
              <h2 className={styles.h2}>HOW MUCH DOES M11 BREAKDOWN RECOVERY STANSTED COST?</h2>
              <p className={styles.bodyText}>
                The cost of motorway breakdown recovery depends on the circumstances of the job. There is no single price for every vehicle because distance, location, recovery method and vehicle condition vary considerably.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-black)', marginTop: '24px', marginBottom: '12px' }}>
                Key Factors Influencing Recovery Pricing:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" /> Distance between the pickup location and your destination
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" /> Vehicle size, weight, and condition (locked wheels, steering damage)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" /> Whether specialist recovery equipment is required (winching, skates)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" /> Time of day and immediate availability
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-red)" /> Loading, waiting, or restricted airport access requirements
                </li>
              </ul>

              <div style={{ marginTop: '32px', padding: '24px', background: 'var(--surface-light)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Nearby Areas We Cover Around Stansted</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
                  {nearbyAreas.map((area, idx) => (
                    <Link key={idx} href={area.href} style={{ padding: '6px 14px', background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-black)', textDecoration: 'none' }}>
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>FREQUENTLY ASKED QUESTIONS</h2>
              <p className={styles.sectionDesc}>
                Clear answers regarding M11 breakdown recovery, Stansted Airport coverage, and vehicle towing.
              </p>
            </div>
            
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <FAQ items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Need M11 Breakdown Recovery Near Stansted Right Now?</h2>
              <p className={styles.ctaDesc}>
                Our recovery operators are stationed on the M11 corridor and around Stansted Airport 24/7. Call our dispatch desk immediately.
              </p>
              <div className={styles.ctaButtons}>
                <a href={phoneUrl} className={styles.btnRed}>
                  <Phone size={20} /> CALL NOW: {businessConfig.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
                  <MessageCircle size={20} /> WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
