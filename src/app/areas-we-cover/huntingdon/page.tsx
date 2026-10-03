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
    absolute: 'Vehicle Recovery in Huntingdon | 24/7 Service | Car&Van Recovery'
  },
  description: 'Fast, reliable 24/7 vehicle recovery in Huntingdon. Professional roadside assistance, breakdown towing, jump starts, and car & van recovery across Huntingdon.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover/huntingdon',
  }
};

const huntingdonServices = [
  { title: 'Car recovery Huntingdon', icon: Car },
  { title: 'Van recovery Huntingdon', icon: Truck },
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

const connectingTowns = [
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'St Ives', href: '/areas-we-cover/st-ives' },
  { name: 'St Neots', href: '/areas-we-cover/st-neots' },
  { name: 'M11 Corridor', href: '/areas-we-cover/m11' },
  { name: 'Newmarket', href: '/areas-we-cover/newmarket' },
  { name: 'Peterborough', href: '/areas-we-cover/peterborough' },
  { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
  { name: 'Cambridgeshire', href: '/areas-we-cover/cambridgeshire' },
];

export default function HuntingdonCoveragePage() {
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
            <span className={styles.heroBadge}>24/7 HUNTINGDON &amp; CAMBRIDGESHIRE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              Areas We Cover Across <span className={styles.textRed}>Huntingdon</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast, reliable vehicle recovery in Huntingdon with professional 24/7 roadside assistance, breakdown recovery, breakdown towing, jump starts, flat battery assistance and vehicle transport. Car &amp; Van Recovery provides emergency recovery services across Huntingdon and the surrounding areas, helping motorists get back on the road safely.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our experienced recovery operators are available 24 hours a day, 7 days a week, providing professional assistance for cars, vans and other vehicles experiencing breakdowns or roadside emergencies.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Emergency Huntingdon Call</span>
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
                src="/images/car_towing_truck.jpg" 
                alt="Professional vehicle recovery truck operating in Huntingdon"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR COVERAGE: AREAS WE COVER IN & AROUND HUNTINGDON */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover In &amp; Around <span className={styles.textRed}>Huntingdon</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car &amp; Van Recovery provides professional breakdown recovery in Huntingdon and surrounding areas. Whether you&apos;ve broken down at home, on a local road or while travelling through the area, our recovery team is available day and night to provide fast and dependable assistance.
            </p>
            <p className={styles.coverageDesc}>
              Our vehicle recovery Huntingdon service covers a wide range of roadside emergencies, from flat batteries and punctures to mechanical breakdowns and accident recovery.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Huntingdon Vehicle Recovery Coverage Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Huntingdon, Cambridgeshire, UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 ROADSIDE ASSISTANCE IN HUNTINGDON & 11 SERVICES */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>RAPID DISPATCH</span>
            <h2 className={styles.sectionTitle}>
              24/7 Roadside Assistance in <span className={styles.textRed}>Huntingdon</span>
            </h2>
            <p className={styles.coverageDesc}>
              A vehicle breakdown can happen unexpectedly, which is why our 24/7 roadside assistance Huntingdon service is available around the clock.
            </p>
            <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
              Our trained recovery operators can assist with common roadside problems including:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {huntingdonServices.map((service, idx) => {
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
              Whether you need a quick roadside fix or your vehicle requires further transportation, we can provide a suitable recovery solution.
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
                Our car breakdown recovery and van breakdown recovery in Huntingdon services are available for private motorists, businesses and commercial vehicle operators.
              </p>
              <p className={styles.deepContentText}>
                If your vehicle has suffered a mechanical fault, battery failure, puncture or another breakdown problem, our team can provide roadside assistance wherever possible. If the vehicle cannot be safely driven, we can arrange vehicle recovery in Huntingdon and transport it to a suitable garage, home or other destination.
              </p>
            </div>

            {/* Block 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Emergency Roadside Assistance Huntingdon</h2>
              <p className={styles.deepContentText}>
                Our emergency roadside assistance Huntingdon service operates 24 hours a day, 365 days a year. We understand how stressful it can be to become stranded, particularly at night or on a busy road.
              </p>
              <p className={styles.deepContentText}>
                From a jump start in Huntingdon to flat battery assistance and breakdown towing, our experienced operators are ready to provide professional roadside support when you need it.
              </p>
            </div>

            {/* Block 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Jump Start &amp; Flat Battery Assistance</h2>
              <p className={styles.deepContentText}>
                A flat or discharged battery is one of the most common causes of vehicle breakdowns. If your car or van won&apos;t start, our jump start Huntingdon service can help get you moving again.
              </p>
              <p className={styles.deepContentText}>
                We also provide flat battery assistance in Huntingdon. If your vehicle cannot be restarted or the battery has an underlying fault, our team can provide further breakdown recovery and vehicle transportation.
              </p>
            </div>

            {/* Block 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Accident Recovery &amp; Vehicle Transport</h2>
              <p className={styles.deepContentText}>
                If your vehicle has been involved in an accident and cannot safely continue its journey, our accident recovery Huntingdon service can provide professional vehicle recovery.
              </p>
              <p className={styles.deepContentText}>
                We also offer vehicle transport in Huntingdon for cars and vans that need to be moved between homes, garages, businesses or other locations.
              </p>
            </div>

            {/* Block 5: Full Width */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>Reliable Vehicle Recovery Across Huntingdon</h2>
              <p className={styles.deepContentText}>
                From Huntingdon town centre to surrounding areas, Car &amp; Van Recovery provides dependable 24 hour vehicle recovery and roadside assistance for motorists across the local area.
              </p>
              <p className={styles.deepContentText}>
                Whether you need breakdown recovery, car recovery, van recovery, emergency roadside assistance, accident recovery or vehicle transport, our professional team is available 24/7 to help.
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
                {connectingTowns.map((loc, i) => (
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
                alt="Vehicle recovery truck operating across Huntingdon and Cambridgeshire"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED VEHICLE RECOVERY IN HUNTINGDON? (FINAL CTA) */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Need Vehicle Recovery in Huntingdon?</h2>
            <p className={styles.finalCtaText}>
              Don&apos;t let a breakdown leave you stranded. Car &amp; Van Recovery provides 24/7 vehicle recovery in Huntingdon, with professional roadside assistance available day and night.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              For reliable breakdown recovery, car and van recovery, breakdown towing, jump starts and vehicle transportation in Huntingdon, contact our recovery team today.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call Huntingdon Dispatch: {businessConfig.phone}</span>
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
