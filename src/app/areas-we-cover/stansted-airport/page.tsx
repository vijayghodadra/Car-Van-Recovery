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
  { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
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
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;
  const whatsappUrl = `https://wa.me/447438189791`;

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>24/7 STANSTED &amp; M11 MOTORWAY ASSISTANCE</span>
            <h1 className={styles.heroTitle}>
              M11 Breakdown Recovery <span className={styles.textRed}>Stansted</span>
            </h1>
            <p className={styles.heroDesc}>
              Breaking down on a motorway can be a stressful experience, particularly when you are travelling to the airport, commuting to work or driving through an unfamiliar area. A sudden engine problem, flat battery or damaged tyre can interrupt your journey and leave you wondering where to find reliable help.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              For motorists travelling along the M11 near Stansted, access to suitable <Link href="/" className={styles.inlineLink}>M11 breakdown recovery Stansted</Link> services can make an unexpected vehicle problem easier to manage. Whether you are driving a family car or commercial van, our team is available 24/7.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Emergency Stansted Call</span>
                  <span>{businessConfig.phone}</span>
                </div>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
                <MessageCircle size={20} />
                <div className={styles.btnSmallText}>
                  <span>Chat on WhatsApp</span>
                  <span>Online Now</span>
                </div>
              </a>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.trustItem}>
                <Clock size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>24/7 Available</span>
                  <span>Rapid Motorway Arrival</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>Fully Insured</span>
                  <span>Complete Peace of Mind</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Truck size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>Cars &amp; Vans</span>
                  <span>All Vehicles Recovered</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrap}>
              <Image 
                src="/images/Poster/Car Recovery.png" 
                alt="M11 Breakdown Recovery Stansted Airport"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COVERAGE: AREAS WE COVER IN & AROUND STANSTED */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover In &amp; Around <span className={styles.textRed}>Stansted &amp; M11</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car &amp; Van Recovery provides professional breakdown recovery along the M11 near Stansted and surrounding areas. With services covering locations around the <Link href="/m11-corridor" className={styles.inlineLink}>M11 corridor</Link>, Stansted Airport, Cambridgeshire and Essex, our recovery operators are available 24/7 to provide fast and dependable assistance.
            </p>
            <p className={styles.coverageDesc}>
              Our M11 breakdown recovery Stansted service covers all vehicle issues from airport car park non-starts and flat batteries to high-speed motorway breakdowns, flat tyres and accident recoveries.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Stansted Airport Vehicle Recovery Coverage Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Stansted Airport, Essex, UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 ROADSIDE ASSISTANCE & SERVICES PILLS */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>RAPID DISPATCH</span>
            <h2 className={styles.sectionTitle}>
              24/7 Motorway &amp; Airport Assistance in <span className={styles.textRed}>Stansted</span>
            </h2>
            <p className={styles.coverageDesc}>
              Our trained recovery operators assist motorists along the M11, Stansted Airport parking and surrounding routes with:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {stanstedServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className={styles.servicePill}>
                  <div className={styles.servicePillIcon}>
                    <IconComp size={22} />
                  </div>
                  <span className={styles.servicePillText}>{service.title}</span>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Whether you need a quick roadside fix or your vehicle requires flatbed towing, our recovery team provides rapid, safe solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DEEP CONTENT CARDS */}
      <section className={styles.deepContentSection}>
        <div className="container">
          <div className={styles.deepContentGrid}>
            
            {/* Card 1 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Why M11 Breakdown Recovery Near Stansted Is Important</h2>
              <p className={styles.deepContentText}>
                The M11 is an important motorway connecting London, Stansted and Cambridge. It is used by commuters, airport passengers, delivery drivers, businesses and motorists travelling between different parts of the country.
              </p>
              <p className={styles.deepContentText}>
                With a mixture of local and long-distance traffic, unexpected vehicle problems can occur at any point along the route. Engine overheating, battery problems, tyre damage and transmission faults can prevent a vehicle from continuing safely.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>24 Hour M11 Breakdown Recovery &amp; Roadside Assistance</h2>
              <p className={styles.deepContentText}>
                Vehicle breakdowns do not follow a convenient schedule. A car may fail to start early in the morning, or a van may develop a fault late at night after a long working day. Access to 24 hour breakdown recovery is essential when assistance is required outside ordinary hours.
              </p>
              <p className={styles.deepContentText}>
                Emergency car recovery helps motorists arrange transportation when their vehicles cannot safely continue their journeys. Depending on the fault, assistance may involve roadside support, a jump start or flatbed vehicle towing.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>What to Do If Your Car Breaks Down on the M11</h2>
              <p className={styles.deepContentText}>
                <strong>Step 1: Move to a Safe Location:</strong> Assess whether the vehicle can reach the next motorway exit or service area. If not, follow official procedures and stop on the hard shoulder or emergency area. Put on hazard lights and stop far left.
              </p>
              <p className={styles.deepContentText}>
                <strong>Step 2: Protect Passengers:</strong> Exit via the left-hand doors and wait behind the safety barrier. Never attempt repairs or tyre changes beside live traffic. Call 999 if stranded in a live lane.
              </p>
              <p className={styles.deepContentText}>
                <strong>Step 3: Arrange Recovery:</strong> Call our 24/7 recovery desk with your direction of travel, junction number (J8 Stansted), and marker post information.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>M11 Car Recovery Near Stansted</h2>
              <p className={styles.deepContentText}>
                A car breakdown can occur without warning, even if the vehicle has recently received routine maintenance. Common reasons for car recovery include engine failure, overheating, transmission problems, electrical faults and accident damage.
              </p>
              <p className={styles.deepContentText}>
                A vehicle that has suffered a serious mechanical problem should not be driven simply to reach a nearby garage. We provide safe flatbed towing for automatic, electric, hybrid, and prestige vehicles to your chosen destination.
              </p>
            </div>

            {/* Card 5 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>M11 Van Breakdown Recovery for Commercial Drivers</h2>
              <p className={styles.deepContentText}>
                For tradespeople, couriers and delivery companies, a broken-down van can affect scheduled appointments, customer deliveries and business operations.
              </p>
              <p className={styles.deepContentText}>
                Long-wheelbase vans and heavier commercial vehicles require specialized recovery equipment. We provide heavy-duty recovery for transit vans, LWB vehicles, and loaded commercial fleets to minimize downtime.
              </p>
            </div>

            {/* Card 6 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Stansted Airport Breakdown Recovery &amp; Car Parks</h2>
              <p className={styles.deepContentText}>
                A breakdown near Stansted Airport can be particularly inconvenient when catching a flight or collecting passengers. Starting problems, flat batteries and mechanical faults frequently affect vehicles left parked in airport facilities.
              </p>
              <p className={styles.deepContentText}>
                If your car will not start in an airport car park (Short Stay, Long Stay, Mid Stay, or Meet &amp; Greet), our operators have specialized access equipment to enter airport facilities and provide jump starts or vehicle extraction.
              </p>
            </div>

            {/* Card 7 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Flat Battery Assistance &amp; Jump Starts Near Stansted</h2>
              <p className={styles.deepContentText}>
                A flat battery is one of the common reasons a car or van may fail to start after being parked during holidays. Typical symptoms include slow engine cranking, dim dashboard lights, clicking sounds or electrical failure.
              </p>
              <p className={styles.deepContentText}>
                Our technicians provide professional voltage-regulated jump starts to safely restart your vehicle. If the battery has suffered internal cell failure, we can transport the vehicle to a replacement centre.
              </p>
            </div>

            {/* Card 8 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Tyre Problems &amp; Roadside Assistance on the M11</h2>
              <p className={styles.deepContentText}>
                A puncture, damaged sidewall or sudden loss of tyre pressure can make a vehicle unsafe to drive. Changing a tyre beside moving motorway traffic is dangerous and should never be attempted.
              </p>
              <p className={styles.deepContentText}>
                If your tyre is damaged on the M11, follow motorway safety procedures and contact our roadside team for safe wheel replacement or mobile tyre assistance.
              </p>
            </div>

            {/* Card 9: Full Width */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>How Much Does M11 Breakdown Recovery Stansted Cost?</h2>
              <p className={styles.deepContentText}>
                The cost of motorway breakdown recovery depends on the circumstances of the job. Key factors include the distance between pickup and destination, vehicle size and weight, whether specialist equipment (winching, skates) is required, time of callout, and any restricted airport access requirements.
              </p>
              <p className={styles.deepContentText}>
                Before confirming a booking, our dispatch team provides a clear, transparent quote with zero hidden charges. Contact us directly for immediate pricing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CONNECTING ROUTES & TOWNS */}
      <section className={styles.routesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>SURROUNDING NETWORK</span>
          <h2 className={styles.sectionTitle}>Key Routes &amp; Connecting Towns Around Stansted</h2>
          
          <div className={styles.routesContainer}>
            <div className={styles.routesLeft}>
              <div className={styles.routesList}>
                {nearbyAreas.map((loc, i) => (
                  <Link key={i} href={loc.href} className={styles.routeItem}>
                    <div className={styles.routeItemLeft}>
                      <MapPin size={16} />
                      <span>{loc.name}</span>
                    </div>
                    <ArrowRight size={16} className={styles.routeArrow} />
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.routesRight}>
              <Image 
                src="/images/featured_routes_truck.jpg"
                alt="Vehicle recovery truck operating across Stansted and M11 corridor"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className={styles.section} style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>COMMON QUESTIONS</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.coverageDesc}>
              Clear answers regarding M11 breakdown recovery, Stansted Airport coverage, and vehicle towing.
            </p>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* 7. FINAL EMERGENCY CTA */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Need M11 Breakdown Recovery Near Stansted?</h2>
            <p className={styles.finalCtaText}>
              Don&apos;t let a breakdown leave you stranded. Car &amp; Van Recovery provides 24/7 breakdown recovery on the M11 and Stansted Airport, with professional roadside assistance available day and night.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              For reliable breakdown recovery, car and van recovery, breakdown towing, jump starts and vehicle transportation near Stansted, contact our recovery team today.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call Stansted Dispatch: {businessConfig.phone}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
                <MessageCircle size={20} />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
