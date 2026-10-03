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
  Wrench
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Vehicle Recovery in Stevenage | 24/7 Service | Car&Van Recovery'
  },
  description: 'Fast and reliable 24/7 vehicle recovery in Stevenage. Professional roadside assistance, breakdown recovery, towing, jump starts, and car & van recovery in Stevenage.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover/stevenage',
  }
};

const stevenageServices = [
  { title: 'Car recovery Stevenage', icon: Car },
  { title: 'Van recovery Stevenage', icon: Truck },
  { title: 'Breakdown recovery', icon: Wrench },
  { title: 'Emergency roadside assistance', icon: AlertTriangle },
  { title: 'Breakdown towing', icon: Truck },
  { title: 'Jump starts', icon: Zap },
  { title: 'Flat battery assistance', icon: BatteryWarning },
  { title: 'Flat tyre assistance', icon: Disc },
  { title: 'Accident recovery', icon: ShieldCheck },
  { title: 'Vehicle transportation', icon: Navigation },
  { title: 'Emergency vehicle recovery', icon: ShieldAlert },
];

const nearbyTowns = [
  { name: 'Harlow', href: '/areas-we-cover/harlow' },
  { name: "Bishop's Stortford", href: '/areas-we-cover/bishops-stortford' },
  { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
  { name: 'M11 Corridor', href: '/areas-we-cover/m11' },
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'Haverhill', href: '/areas-we-cover/haverhill' },
  { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
  { name: 'St Neots', href: '/areas-we-cover/st-neots' },
];

export default function StevenageCoveragePage() {
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
            <span className={styles.heroBadge}>24/7 STEVENAGE &amp; HERTFORDSHIRE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              Areas We Cover Across <span className={styles.textRed}>Stevenage</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast and reliable vehicle recovery in Stevenage, providing professional 24/7 roadside assistance, breakdown recovery, breakdown towing, jump starts, flat battery assistance and vehicle transport. Car &amp; Van Recovery helps motorists across Stevenage and surrounding areas with dependable emergency recovery services, day and night.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our experienced recovery operators are available 24 hours a day, 7 days a week, providing professional assistance for cars, vans and commercial vehicles experiencing breakdowns or roadside emergencies.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Emergency Stevenage Call</span>
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
                  <span>Rapid Local Arrival</span>
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
                src="/images/breakdown.jpg" 
                alt="Professional breakdown recovery truck in Stevenage"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COVERAGE: AREAS WE COVER IN & AROUND STEVENAGE */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover In &amp; Around <span className={styles.textRed}>Stevenage</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car &amp; Van Recovery provides professional breakdown recovery in Stevenage and the surrounding areas. Whether you&apos;ve broken down at home, on a local road, at work or while travelling through Stevenage, our recovery team is available 24/7 to provide fast and reliable assistance.
            </p>
            <p className={styles.coverageDesc}>
              Our vehicle recovery Stevenage service covers everything from simple battery problems and punctures to mechanical breakdowns, accident recovery and vehicle transportation.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Stevenage Vehicle Recovery Coverage Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Stevenage, Hertfordshire, UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 ROADSIDE ASSISTANCE IN STEVENAGE & 11 SERVICES */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>RAPID DISPATCH</span>
            <h2 className={styles.sectionTitle}>
              24/7 Roadside Assistance in <span className={styles.textRed}>Stevenage</span>
            </h2>
            <p className={styles.coverageDesc}>
              A vehicle breakdown can happen without warning, which is why our 24/7 roadside assistance Stevenage service operates around the clock.
            </p>
            <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
              Our recovery operators can assist with a wide range of roadside problems, including:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {stevenageServices.map((service, idx) => {
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
              Where a roadside repair is not possible, we can safely recover your vehicle to a suitable garage, home address or other destination.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DEEP CONTENT BLOCKS */}
      <section className={styles.deepContentSection}>
        <div className="container">
          <div className={styles.deepContentGrid}>
            
            {/* Block 1 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Car &amp; Van Breakdown Recovery</h2>
              <p className={styles.deepContentText}>
                Our car breakdown recovery and van breakdown recovery in Stevenage services are suitable for private motorists, businesses and commercial vehicle operators.
              </p>
              <p className={styles.deepContentText}>
                If your vehicle has suffered a mechanical fault, battery failure, puncture or another breakdown issue, our experienced team can provide professional roadside assistance. If the vehicle cannot be driven safely, we can arrange vehicle recovery in Stevenage and transport it securely.
              </p>
            </div>

            {/* Block 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Emergency Roadside Assistance in Stevenage</h2>
              <p className={styles.deepContentText}>
                Our emergency roadside assistance Stevenage service is available 24 hours a day, 365 days a year. We understand how stressful it can be to become stranded, particularly at night or in an unfamiliar location.
              </p>
              <p className={styles.deepContentText}>
                Whether you need a jump start in Stevenage, flat battery assistance, breakdown towing or complete vehicle recovery, our professional operators are ready to help.
              </p>
            </div>

            {/* Block 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Jump Start &amp; Flat Battery Assistance</h2>
              <p className={styles.deepContentText}>
                A flat or discharged battery is a common reason for vehicle breakdowns. If your car or van won&apos;t start, our jump start Stevenage service can help get your vehicle moving again where possible.
              </p>
              <p className={styles.deepContentText}>
                We also provide flat battery assistance in Stevenage. If the battery cannot hold a charge or another fault is preventing the vehicle from starting, our team can provide further breakdown recovery and vehicle transportation.
              </p>
            </div>

            {/* Block 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Accident Recovery &amp; Vehicle Transport</h2>
              <p className={styles.deepContentText}>
                If your vehicle has been involved in an accident and is no longer safe to drive, our accident recovery Stevenage service can provide professional assistance.
              </p>
              <p className={styles.deepContentText}>
                We also offer vehicle transport in Stevenage for cars and vans that need to be moved between garages, homes, businesses or other locations.
              </p>
            </div>

            {/* Block 5: Full Width */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>Reliable Vehicle Recovery Across Stevenage</h2>
              <p className={styles.deepContentText}>
                From Stevenage and surrounding Hertfordshire areas, Car &amp; Van Recovery provides dependable 24 hour vehicle recovery and roadside assistance for motorists who need professional help.
              </p>
              <p className={styles.deepContentText}>
                Whether you require breakdown recovery, car recovery, van recovery, emergency roadside assistance, accident recovery or vehicle transport, our team is available 24/7.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CONNECTING ROUTES & TOWNS */}
      <section className={styles.routesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>SURROUNDING NETWORK</span>
          <h2 className={styles.sectionTitle}>Key Routes &amp; Connecting Towns</h2>
          
          <div className={styles.routesContainer}>
            <div className={styles.routesLeft}>
              <div className={styles.routesList}>
                {nearbyTowns.map((loc, i) => (
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
                alt="Vehicle recovery truck operating across Stevenage and Hertfordshire"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED VEHICLE RECOVERY IN STEVENAGE? (FINAL CTA) */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Need Vehicle Recovery in Stevenage?</h2>
            <p className={styles.finalCtaText}>
              Don&apos;t let a vehicle breakdown leave you stranded. Car &amp; Van Recovery provides 24/7 vehicle recovery in Stevenage, with professional roadside assistance available day and night.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              For reliable breakdown recovery, car and van recovery, breakdown towing, jump starts and vehicle transportation in Stevenage, contact our recovery team today.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call Stevenage Dispatch: {businessConfig.phone}</span>
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
