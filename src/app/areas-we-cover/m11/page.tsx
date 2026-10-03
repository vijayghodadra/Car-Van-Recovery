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
  ThumbsUp
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Vehicle Recovery in M11 | 24/7 Service | Car&Van Recovery'
  },
  description: 'Fast and reliable 24/7 M11 breakdown recovery, towing, jump starts, and roadside assistance across the M11 corridor and surrounding areas.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover/m11',
  }
};

const m11Services = [
  { title: 'M11 breakdown recovery', icon: AlertTriangle },
  { title: 'M11 roadside assistance', icon: Clock },
  { title: 'Car recovery M11', icon: Car },
  { title: 'Van recovery M11', icon: Truck },
  { title: 'Breakdown towing', icon: Truck },
  { title: 'Emergency roadside assistance', icon: ShieldAlert },
  { title: 'Jump starts', icon: Zap },
  { title: 'Flat battery assistance', icon: BatteryWarning },
  { title: 'Flat tyre assistance', icon: Disc },
  { title: 'Vehicle recovery', icon: ShieldCheck },
  { title: 'Vehicle transportation', icon: Navigation },
  { title: 'Accident recovery', icon: ShieldAlert },
];

const nearbyLocations = [
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
  { name: 'Harlow', href: '/areas-we-cover/harlow' },
  { name: "Bishop's Stortford", href: '/areas-we-cover/bishops-stortford' },
  { name: 'Stevenage', href: '/areas-we-cover/stevenage' },
  { name: 'Haverhill', href: '/areas-we-cover/haverhill' },
  { name: 'Newmarket', href: '/areas-we-cover/newmarket' },
  { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
];

export default function M11CoveragePage() {
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;
  const whatsappUrl = `https://wa.me/447438189791`;

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>24/7 MOTORWAY &amp; CORRIDOR ASSISTANCE</span>
            <h1 className={styles.heroTitle}>
              Areas We Cover Across the <span className={styles.textRed}>M11</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast and reliable M11 breakdown recovery and 24/7 roadside assistance for motorists travelling along the M11 corridor and surrounding areas. Car &amp; Van Recovery provides professional vehicle recovery on the M11, including breakdown towing, jump starts, flat battery assistance, car and van recovery, and vehicle transportation.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our recovery operators are available 24 hours a day, 7 days a week, providing emergency assistance when you need help on the M11.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Emergency M11 Dispatch</span>
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
                  <span>Rapid Motorway Response</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>Fully Insured</span>
                  <span>Safe Hard Shoulder Loading</span>
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
                src="/images/hero_recovery_truck.jpg" 
                alt="Vehicle recovery truck operating along the M11 motorway"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 24/7 M11 BREAKDOWN RECOVERY */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>MOTORWAY SUPPORT</span>
            <h2 className={styles.sectionTitle}>
              24/7 M11 <span className={styles.textRed}>Breakdown Recovery</span>
            </h2>
            <p className={styles.coverageDesc}>
              Breaking down on the M11 can be stressful, particularly during busy periods or when travelling at night. Our 24/7 breakdown recovery M11 service provides fast and professional assistance for motorists experiencing vehicle problems.
            </p>
            <p className={styles.coverageDesc}>
              Whether your car has suffered a mechanical fault, flat battery, puncture or another roadside issue, our experienced recovery team can provide the appropriate assistance.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="M11 Motorway Recovery Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('M11 Motorway, UK')}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. M11 ROADSIDE ASSISTANCE & 12 SERVICES CHECKLIST */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>ON-ROAD ASSISTANCE</span>
            <h2 className={styles.sectionTitle}>
              M11 Roadside <span className={styles.textRed}>Assistance</span>
            </h2>
            <p className={styles.coverageDesc}>
              Our M11 roadside assistance service is available around the clock for drivers who need emergency help. We assist with common roadside problems and, where necessary, can recover your vehicle to a suitable garage, home address or other destination.
            </p>
            <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
              Our services include:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {m11Services.map((service, idx) => {
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
        </div>
      </section>

      {/* 4. DEEP CONTENT BLOCKS */}
      <section className={styles.deepContentSection}>
        <div className="container">
          <div className={styles.deepContentGrid}>
            
            {/* Block 1 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Emergency Breakdown Towing on the M11</h2>
              <p className={styles.deepContentText}>
                If your vehicle cannot be repaired safely at the roadside, our M11 breakdown towing service can help. We can recover cars and vans from the M11 and transport them safely to a garage, home or another suitable location.
              </p>
              <p className={styles.deepContentText}>
                Our recovery operators use suitable equipment and safe loading procedures to help minimise the risk of damage during vehicle transportation.
              </p>
            </div>

            {/* Block 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Car &amp; Van Recovery M11</h2>
              <p className={styles.deepContentText}>
                Our car recovery M11 and van recovery M11 services are available for both private motorists and commercial vehicle operators. Whether you have experienced a sudden breakdown or need a vehicle transported after an accident, our team can provide a professional recovery solution.
              </p>
              <p className={styles.deepContentText}>
                We can assist with vehicles that are unable to continue their journey safely due to mechanical problems, battery failure, punctures or other breakdown-related issues.
              </p>
            </div>

            {/* Block 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Jump Start &amp; Flat Battery Assistance</h2>
              <p className={styles.deepContentText}>
                A flat battery can leave you stranded on or near the M11. Our jump start M11 service provides professional assistance for vehicles that won&apos;t start due to a discharged battery.
              </p>
              <p className={styles.deepContentText}>
                We also provide flat battery assistance M11 for motorists who need emergency roadside support. If a jump start does not resolve the problem, we can arrange further vehicle recovery on the M11.
              </p>
            </div>

            {/* Block 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Vehicle Transport Across the M11 Corridor</h2>
              <p className={styles.deepContentText}>
                In addition to emergency recovery, we provide vehicle transport M11 services for cars and vans that need to be moved between locations.
              </p>
              <p className={styles.deepContentText}>
                Whether your vehicle needs to be taken to a garage, home, business premises or another destination, our team can provide safe and reliable vehicle transportation.
              </p>
            </div>

            {/* Block 5: Full Width 24-Hour */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>24 Hour Vehicle Recovery on the M11</h2>
              <p className={styles.deepContentText}>
                Vehicle breakdowns can happen at any time, which is why our 24 hour vehicle recovery M11 service operates day and night, 365 days a year.
              </p>
              <p className={styles.deepContentText}>
                If you&apos;re stranded on the M11 or in the surrounding area and require emergency roadside assistance, breakdown towing, car recovery, van recovery or vehicle transportation, contact Car &amp; Van Recovery for professional help.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NEARBY LOCATIONS ALONG M11 */}
      <section className={styles.routesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>CORRIDOR ACCESS</span>
          <h2 className={styles.sectionTitle}>Key Junctions &amp; Connecting Towns</h2>
          
          <div className={styles.routesContainer}>
            <div className={styles.routesLeft}>
              <div className={styles.routesList}>
                {nearbyLocations.map((loc, i) => (
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
                alt="Vehicle recovery truck dispatched along the M11 corridor"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELIABLE M11 BREAKDOWN RECOVERY (FINAL CTA) */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Reliable M11 Breakdown Recovery When You Need It</h2>
            <p className={styles.finalCtaText}>
              From M11 breakdown recovery and roadside assistance to jump starts, flat battery assistance and vehicle transportation, Car &amp; Van Recovery provides dependable recovery services for motorists travelling along the M11 corridor.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              Need emergency vehicle recovery on the M11? Contact our 24/7 recovery team for fast and professional roadside assistance.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call M11 Dispatch: {businessConfig.phone}</span>
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
