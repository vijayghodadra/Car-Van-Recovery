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
    absolute: 'Vehicle Recovery in St Neots | 24/7 Service | Car&Van Recovery'
  },
  description: 'Fast, reliable 24/7 vehicle recovery in St Neots. Professional roadside assistance, breakdown recovery, towing, jump starts, and car & van recovery in St Neots.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover/st-neots',
  }
};

const stNeotsServices = [
  { title: 'Car recovery St Neots', icon: Car },
  { title: 'Van recovery St Neots', icon: Truck },
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
  { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
  { name: 'St Ives', href: '/areas-we-cover/st-ives' },
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'M11 Corridor', href: '/areas-we-cover/m11' },
  { name: 'Stevenage', href: '/areas-we-cover/stevenage' },
  { name: 'Harlow', href: '/areas-we-cover/harlow' },
  { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
  { name: 'Cambridgeshire', href: '/areas-we-cover/cambridgeshire' },
];

export default function StNeotsCoveragePage() {
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
            <span className={styles.heroBadge}>24/7 ST NEOTS &amp; CAMBRIDGESHIRE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              Areas We Cover Across <span className={styles.textRed}>St Neots</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast, reliable vehicle recovery in St Neots, providing professional 24/7 roadside assistance, breakdown recovery, breakdown towing, jump starts, flat battery assistance and vehicle transport. Car &amp; Van Recovery helps motorists across St Neots and surrounding areas with dependable emergency recovery services, available 24 hours a day.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our experienced recovery operators are available 24 hours a day, 7 days a week, providing professional assistance for cars, vans and commercial vehicles experiencing breakdowns, accidents or roadside emergencies.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Emergency St Neots Call</span>
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
                src="/images/roadside_recovery_van.jpg" 
                alt="Professional vehicle recovery truck operating in St Neots"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COVERAGE: AREAS WE COVER IN & AROUND ST NEOTS */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover In &amp; Around <span className={styles.textRed}>St Neots</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car &amp; Van Recovery provides professional breakdown recovery in St Neots and the surrounding areas. Whether you&apos;ve broken down at home, at work, on a local road or while travelling through the area, our recovery team is available 24/7 to provide fast and reliable assistance.
            </p>
            <p className={styles.coverageDesc}>
              Our vehicle recovery St Neots service covers a wide range of roadside problems, from flat batteries and punctures to mechanical breakdowns, accident recovery and vehicle transportation.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="St Neots Vehicle Recovery Coverage Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('St Neots, Cambridgeshire, UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 ROADSIDE ASSISTANCE IN ST NEOTS & 11 SERVICES */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>RAPID DISPATCH</span>
            <h2 className={styles.sectionTitle}>
              24/7 Roadside Assistance in <span className={styles.textRed}>St Neots</span>
            </h2>
            <p className={styles.coverageDesc}>
              A vehicle breakdown can happen at any time, which is why our 24/7 roadside assistance St Neots service operates around the clock.
            </p>
            <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
              Our experienced recovery operators can assist with:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {stNeotsServices.map((service, idx) => {
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
              If your vehicle cannot be safely repaired at the roadside, we can recover it to a suitable garage, home address or other destination.
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
                Our car breakdown recovery and van breakdown recovery in St Neots services are suitable for private motorists, businesses and commercial vehicle operators.
              </p>
              <p className={styles.deepContentText}>
                If your car or van has suffered a mechanical fault, battery failure, puncture or another breakdown problem, our trained recovery operators can provide professional roadside assistance. Where necessary, we can arrange vehicle recovery in St Neots and safely transport your vehicle.
              </p>
            </div>

            {/* Block 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Emergency Roadside Assistance St Neots</h2>
              <p className={styles.deepContentText}>
                Our emergency roadside assistance St Neots service is available 24 hours a day, 365 days a year. We understand how stressful it can be to become stranded, especially at night or in an unfamiliar location.
              </p>
              <p className={styles.deepContentText}>
                Whether you need a jump start in St Neots, flat battery assistance, breakdown towing or complete vehicle recovery, our professional team is ready to help.
              </p>
            </div>

            {/* Block 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Jump Start &amp; Flat Battery Assistance</h2>
              <p className={styles.deepContentText}>
                A flat or discharged battery is one of the most common causes of vehicle breakdowns. If your car or van won&apos;t start, our jump start St Neots service can help get your vehicle moving again where possible.
              </p>
              <p className={styles.deepContentText}>
                We also provide flat battery assistance in St Neots. If the battery cannot hold a charge or another fault is preventing your vehicle from starting, we can arrange further breakdown recovery and vehicle transportation.
              </p>
            </div>

            {/* Block 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Accident Recovery &amp; Vehicle Transport</h2>
              <p className={styles.deepContentText}>
                If your vehicle has been involved in an accident and cannot safely continue its journey, our accident recovery St Neots service can provide professional recovery assistance.
              </p>
              <p className={styles.deepContentText}>
                We also offer vehicle transport in St Neots for cars and vans that need to be moved between garages, homes, businesses or other suitable locations.
              </p>
            </div>

            {/* Block 5: Full Width */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>Reliable Vehicle Recovery Across St Neots</h2>
              <p className={styles.deepContentText}>
                Car &amp; Van Recovery provides dependable 24 hour vehicle recovery and roadside assistance across St Neots and surrounding Cambridgeshire areas.
              </p>
              <p className={styles.deepContentText}>
                Whether you require breakdown recovery, car recovery, van recovery, emergency roadside assistance, accident recovery or vehicle transport, our professional recovery team is available 24/7.
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
                alt="Vehicle recovery truck operating across St Neots and Cambridgeshire"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED VEHICLE RECOVERY IN ST NEOTS? (FINAL CTA) */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Need Vehicle Recovery in St Neots?</h2>
            <p className={styles.finalCtaText}>
              Don&apos;t let a vehicle breakdown leave you stranded. Car &amp; Van Recovery provides 24/7 vehicle recovery in St Neots, with professional roadside assistance available day and night.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              For reliable breakdown recovery, car and van recovery, breakdown towing, jump starts and vehicle transportation in St Neots, contact our recovery team today.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call St Neots Dispatch: {businessConfig.phone}</span>
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
