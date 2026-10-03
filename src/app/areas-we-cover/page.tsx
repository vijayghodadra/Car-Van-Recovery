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
  Wrench,
  Zap,
  Disc,
  AlertTriangle,
  Navigation,
  ShieldAlert,
  HelpCircle,
  Plus
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Areas We Cover | Vehicle Recovery Cambridge & Cambridgeshire | Car&Van Recovery'
  },
  description: 'Fast, reliable 24/7 vehicle recovery across Cambridge and Cambridgeshire. Breakdown recovery, breakdown towing, jump starts, and vehicle transport.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/areas-we-cover',
  }
};

const locationsList = [
  { name: 'M11', href: '/areas-we-cover/m11' },
  { name: 'Harlow', href: '/areas-we-cover/harlow' },
  { name: 'Stevenage', href: '/areas-we-cover/stevenage' },
  { name: "Bishop's Stortford", href: '/areas-we-cover/bishops-stortford' },
  { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
  { name: 'Haverhill', href: '/areas-we-cover/haverhill' },
  { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
  { name: 'Cambridgeshire', href: '/areas-we-cover/cambridgeshire' },
  { name: 'Newmarket', href: '/areas-we-cover/newmarket' },
  { name: 'Norwich', href: '/areas-we-cover/norwich' },
  { name: 'Bury St Edmunds', href: '/areas-we-cover/bury-st-edmunds' },
  { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
  { name: 'St Neots', href: '/areas-we-cover/st-neots' },
  { name: 'St Ives', href: '/areas-we-cover/st-ives' }
];

const recoveryServices = [
  { title: 'Vehicle recovery Cambridge', icon: ShieldCheck },
  { title: 'Car recovery Cambridge', icon: Car },
  { title: 'Van recovery Cambridge', icon: Truck },
  { title: 'Breakdown recovery Cambridgeshire', icon: Wrench },
  { title: 'Emergency roadside assistance', icon: AlertTriangle },
  { title: 'Breakdown towing', icon: Truck },
  { title: 'Jump starts', icon: Zap },
  { title: 'Flat battery assistance', icon: BatteryWarning },
  { title: 'Flat tyre assistance', icon: Disc },
  { title: 'Accident recovery', icon: ShieldAlert },
  { title: 'Vehicle transportation', icon: Navigation },
  { title: 'Emergency vehicle recovery', icon: Clock },
];

const faqs = [
  {
    q: 'Do you provide vehicle recovery in Cambridge?',
    a: 'Yes, we provide 24/7 vehicle recovery across all of Cambridge and the surrounding areas. Our operators can dispatch rapidly to your location.'
  },
  {
    q: 'Do you cover the M11?',
    a: 'Absolutely. We regularly assist drivers who have broken down on the M11 motorway, providing fast, safe roadside recovery.'
  },
  {
    q: 'Do you provide recovery in Huntingdon?',
    a: 'Yes, we cover Huntingdon and the A14 corridor for all breakdown and accident recovery needs.'
  },
  {
    q: 'Do you cover Stansted Airport?',
    a: 'Yes, we provide dedicated recovery services around Stansted Airport for passengers and staff who experience vehicle trouble.'
  },
  {
    q: 'Do you provide recovery outside Cambridge?',
    a: 'We cover the wider Cambridgeshire area, including Newmarket, Royston, Haverhill, and St Neots. We can also provide longer distance transport if required.'
  },
  {
    q: 'How can I request vehicle recovery?',
    a: `The fastest way to reach us is by calling our 24/7 emergency dispatch line at ${businessConfig.phone}. You can also send us a message on WhatsApp with your location.`
  }
];

export default function AreasWeCoverPage() {
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
            <span className={styles.heroBadge}>24/7 REGIONAL &amp; NATIONWIDE VEHICLE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              All Our <span className={styles.textRed}>Service Areas</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast, reliable vehicle recovery in Cambridgeshire, with professional 24/7 roadside assistance, breakdown recovery, breakdown towing, jump starts, flat battery assistance and vehicle transport. Car &amp; Van Recovery provides dependable emergency recovery services across Cambridge, Cambridgeshire and surrounding areas, helping motorists get back on the road safely.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our experienced recovery operators are available 24 hours a day, 7 days a week, providing professional assistance for cars, vans and commercial vehicles experiencing breakdowns, accidents or roadside emergencies.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Call Emergency Recovery</span>
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
                  <span>Rapid Response</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Car size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>All Vehicle Types</span>
                  <span>Cars, Vans &amp; More</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} className={styles.trustIcon} />
                <div className={styles.trustText}>
                  <span>Fully Insured</span>
                  <span>Professional Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrap}>
              <Image 
                src="/images/hero_recovery_truck.jpg" 
                alt="Vehicle recovery truck in Cambridge and Cambridgeshire"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COVERAGE SECTION (Areas We Cover Across Cambridgeshire + Map) */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover Across <span className={styles.textRed}>Cambridgeshire</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car &amp; Van Recovery provides professional vehicle recovery across Cambridgeshire, including Cambridge and surrounding towns, villages and local areas. Whether you have broken down at home, at work, on a local road or while travelling through the region, our recovery team is available day and night.
            </p>
            <p className={styles.coverageDesc}>
              Our breakdown recovery Cambridgeshire service covers a wide range of roadside problems, from flat batteries and punctures to mechanical breakdowns, accident recovery and vehicle transportation.
            </p>
          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
                title="Cambridge and Cambridgeshire Coverage Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Cambridge, Cambridgeshire, UK')}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 24/7 ROADSIDE ASSISTANCE ACROSS CAMBRIDGESHIRE (12 Services) */}
      <section className={styles.servicesListSection}>
        <div className="container">
          <div className={styles.servicesListHeader}>
            <span className={styles.sectionLabel}>OUR CAPABILITIES</span>
            <h2 className={styles.sectionTitle}>
              24/7 Roadside Assistance Across <span className={styles.textRed}>Cambridgeshire</span>
            </h2>
            <p className={styles.coverageDesc}>
              A vehicle breakdown can happen at any time, which is why our 24/7 roadside assistance Cambridgeshire service operates around the clock.
            </p>
            <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
              Our professional recovery operators can assist with:
            </p>
          </div>

          <div className={styles.servicesListGrid}>
            {recoveryServices.map((service, idx) => {
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

      {/* 4. FEATURED COVERAGE ROUTES */}
      <section className={styles.routesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>FEATURED COVERAGE</span>
          <h2 className={styles.sectionTitle}>Key Recovery Routes &amp; Areas</h2>
          
          <div className={styles.routesContainer}>
            <div className={styles.routesLeft}>
              <div className={styles.routesList}>
                {locationsList.map((loc, i) => (
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
                alt="Vehicle recovery truck operating along the M11 and Cambridgeshire routes"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEEP CONTENT BLOCKS */}
      <section className={styles.deepContentSection}>
        <div className="container">
          <div className={styles.deepContentGrid}>
            
            {/* Block 1 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Car &amp; Van Breakdown Recovery</h2>
              <p className={styles.deepContentText}>
                Our car breakdown recovery and van breakdown recovery services are available throughout Cambridge and Cambridgeshire. We assist private motorists, businesses and commercial vehicle operators with a range of vehicle breakdown problems.
              </p>
              <p className={styles.deepContentText}>
                Whether you are dealing with a mechanical fault, battery failure, puncture or another roadside issue, our experienced recovery operators can provide professional assistance. If the vehicle cannot continue safely, we can arrange vehicle recovery in Cambridgeshire and transport it securely.
              </p>
            </div>

            {/* Block 2 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Emergency Roadside Assistance</h2>
              <p className={styles.deepContentText}>
                Our emergency roadside assistance service is available 24 hours a day, 365 days a year. We understand how stressful it can be to become stranded, particularly at night or in an unfamiliar location.
              </p>
              <p className={styles.deepContentText}>
                Whether you need a jump start in Cambridge, flat battery assistance, breakdown towing or complete vehicle recovery, our professional team is ready to help.
              </p>
            </div>

            {/* Block 3 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Jump Start &amp; Flat Battery Assistance</h2>
              <p className={styles.deepContentText}>
                A flat or discharged battery is one of the most common causes of vehicle breakdowns. If your car or van won&apos;t start, our jump start service in Cambridge and Cambridgeshire can help get your vehicle moving again where possible.
              </p>
              <p className={styles.deepContentText}>
                We also provide flat battery assistance for motorists who need urgent roadside support. If your vehicle cannot be restarted or has an underlying mechanical or electrical fault, our team can arrange further breakdown recovery and vehicle transportation.
              </p>
            </div>

            {/* Block 4 */}
            <div className={styles.deepContentCard}>
              <h2 className={styles.deepContentTitle}>Accident Recovery &amp; Vehicle Transport</h2>
              <p className={styles.deepContentText}>
                If your vehicle has been involved in an accident and cannot safely continue its journey, our accident recovery Cambridge service can provide professional recovery assistance.
              </p>
              <p className={styles.deepContentText}>
                We also offer vehicle transport across Cambridgeshire for cars and vans that need to be moved between garages, homes, businesses, auction locations or other suitable destinations.
              </p>
            </div>

            {/* Block 5: Full Width */}
            <div className={styles.deepContentCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepContentTitle}>Reliable Vehicle Recovery Across Cambridgeshire</h2>
              <p className={styles.deepContentText}>
                From Cambridge and surrounding Cambridgeshire areas, Car &amp; Van Recovery provides dependable 24 hour vehicle recovery and roadside assistance for motorists who need professional help.
              </p>
              <p className={styles.deepContentText}>
                Whether you require breakdown recovery, car recovery, van recovery, emergency roadside assistance, accident recovery or vehicle transportation, our experienced team is available 24/7.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className={styles.sectionLabel}>HAVE QUESTIONS?</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.coverageDesc}>
              Common questions about our coverage areas and vehicle recovery services in Cambridge and Cambridgeshire.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <div className={styles.faqQuestion}>
                    <HelpCircle size={20} className={styles.faqQIcon} />
                    <span>{faq.q}</span>
                  </div>
                  <Plus size={18} className={styles.faqPlus} />
                </summary>
                <div className={styles.faqAnswer}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEED VEHICLE RECOVERY IN CAMBRIDGESHIRE? (FINAL CTA) */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>Need Vehicle Recovery in Cambridgeshire?</h2>
            <p className={styles.finalCtaText}>
              Don&apos;t let a vehicle breakdown leave you stranded. Car &amp; Van Recovery provides 24/7 vehicle recovery across Cambridgeshire, with professional roadside assistance available day and night.
            </p>
            <p className={styles.finalCtaText} style={{ fontWeight: 800, color: '#ffffff' }}>
              For reliable breakdown recovery, car and van recovery, breakdown towing, jump starts and vehicle transport in Cambridge and Cambridgeshire, contact our recovery team today.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} />
                <span>Call Dispatch: {businessConfig.phone}</span>
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
