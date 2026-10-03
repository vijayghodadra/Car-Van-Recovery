import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  Truck, 
  Car, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  AlertTriangle,
  BatteryWarning,
  Disc,
  Navigation,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'About Us | Professional 24/7 Vehicle Recovery | Car&Van Recovery'
  },
  description: 'Car & Van Recovery provides reliable 24/7 vehicle recovery and emergency roadside assistance across Cambridge, Cambridgeshire, and the M11 corridor.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/about-us',
  }
};

const aboutServicesList = [
  { title: 'Car recovery Cambridge', icon: Car },
  { title: 'Van recovery Cambridge', icon: Truck },
  { title: 'Breakdown recovery Cambridge', icon: Wrench },
  { title: 'Emergency roadside assistance', icon: AlertTriangle },
  { title: 'Flat battery assistance', icon: BatteryWarning },
  { title: 'Emergency jump starts', icon: Zap },
  { title: 'Roadside tyre changes', icon: Disc },
  { title: 'Vehicle transportation', icon: Navigation },
  { title: 'Accident and emergency vehicle recovery', icon: ShieldCheck },
  { title: 'Commercial and heavy-duty van recovery', icon: Truck },
  { title: 'M11 breakdown recovery', icon: ShieldAlert },
  { title: 'M11 roadside assistance', icon: Clock },
];

const locations = [
  'M11', 'Harlow', 'Stevenage', "Bishop's Stortford", 'Stansted Airport', 
  'Haverhill', 'Cambridge', 'Cambridgeshire', 'Newmarket', 'Norwich', 
  'Bury St Edmunds', 'Huntingdon', 'St Neots', 'St Ives'
];

export default function AboutUsPage() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero-wide.jpg"
            alt="Professional vehicle recovery fleet and technicians"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContainer}`}>
          <span className={styles.heroEyebrow}>ABOUT CAR &amp; VAN RECOVERY</span>
          <h1 className={styles.heroTitle}>Reliable, Fast &amp; Professional Vehicle Recovery</h1>
          <p className={styles.heroDesc}>
            Car &amp; Van Recovery provides reliable{' '}
            <Link href="/" className={styles.inlineLink}>
              24/7 vehicle recovery in Cambridge
            </Link>{' '}
            and professional emergency roadside assistance across Cambridge, Cambridgeshire, the M11 corridor and surrounding areas. When your car or van breaks down, our experienced recovery operators are available day and night to help you get safely back on the road or transport your vehicle to a suitable destination.
          </p>
          <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
            Whether you need breakdown recovery, car recovery, van recovery or emergency roadside assistance, you can rely on our professional team for a fast and dependable recovery service.
          </p>
          <div className={styles.heroButtons}>
            <a href={phoneUrl} className={styles.btnRed}>
              <Phone size={20} /> CALL 24/7: {businessConfig.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
              <MessageCircle size={20} /> WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: YOUR TRUSTED ROADSIDE RECOVERY PARTNER */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <h2 className={styles.h2}>Your Trusted Roadside Recovery Partner</h2>
            <p className={styles.sectionDesc} style={{ marginBottom: '24px' }}>
              At Car &amp; Van Recovery, we understand how stressful it can be to break down on a busy road, motorway or at the roadside. That&apos;s why we provide a rapid-response breakdown recovery service in Cambridge designed to get you the assistance you need as quickly as possible.
            </p>
            <p className={styles.sectionDesc}>
              Our experienced and fully insured operators are equipped to deal with a wide range of roadside emergencies. From a simple flat battery to a vehicle that requires complete recovery, we provide practical and professional solutions 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: 24/7 BREAKDOWN RECOVERY & ROADSIDE ASSISTANCE & 12 SERVICES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>24/7 Breakdown Recovery &amp; Roadside Assistance</h2>
            <p className={styles.sectionDesc}>
              Our 24/7 roadside assistance in Cambridge is available 365 days a year. We help motorists with common breakdown and roadside problems, including:
            </p>
          </div>

          <div className={styles.servicesPillsGrid}>
            {aboutServicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className={styles.servicePillItem}>
                  <div className={styles.servicePillIconWrap}>
                    <IconComp size={22} />
                  </div>
                  <span className={styles.servicePillLabel}>{service.title}</span>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Whether you&apos;re travelling locally or using the M11, our recovery team can provide assistance when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEEP CONTENT CARDS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.deepCardsGrid}>
            
            {/* Card 1: Professional Car & Van Recovery */}
            <div className={styles.deepFeatureCard}>
              <h2 className={styles.deepFeatureTitle}>Professional Car &amp; Van Recovery</h2>
              <p className={styles.deepFeatureText}>
                Our car and van recovery services are suitable for private motorists, businesses and commercial vehicle operators. If your vehicle cannot be safely repaired at the roadside, we can arrange secure vehicle transportation in Cambridge and surrounding areas.
              </p>
              <p className={styles.deepFeatureText}>
                For larger commercial vehicles, our heavy-duty van recovery service provides suitable recovery support when standard roadside assistance isn&apos;t enough.
              </p>
            </div>

            {/* Card 2: Emergency Jump Starts & Flat Battery Assistance */}
            <div className={styles.deepFeatureCard}>
              <h2 className={styles.deepFeatureTitle}>Emergency Jump Starts &amp; Flat Battery Assistance</h2>
              <p className={styles.deepFeatureText}>
                A flat battery is one of the most common causes of vehicle breakdowns. If your vehicle won&apos;t start because of a discharged battery, our emergency jump start service can help you get moving again.
              </p>
              <p className={styles.deepFeatureText}>
                Our trained recovery operators use appropriate equipment and safe procedures when providing flat battery assistance. If the battery or another component is faulty and your vehicle cannot be restarted safely, we can provide further vehicle recovery.
              </p>
            </div>

            {/* Card 3: Roadside Tyre Changes & Emergency Assistance */}
            <div className={styles.deepFeatureCard}>
              <h2 className={styles.deepFeatureTitle}>Roadside Tyre Changes &amp; Emergency Assistance</h2>
              <p className={styles.deepFeatureText}>
                A puncture or damaged tyre can leave you stranded, particularly when travelling on a busy road or motorway. Our roadside tyre change assistance helps motorists deal with tyre-related breakdowns and get back on their journey where possible.
              </p>
              <p className={styles.deepFeatureText}>
                If the vehicle cannot be safely driven, our emergency roadside assistance team can arrange recovery and transportation to an appropriate location.
              </p>
            </div>

            {/* Card 4: M11 Breakdown Recovery & Roadside Assistance */}
            <div className={styles.deepFeatureCard}>
              <h2 className={styles.deepFeatureTitle}>M11 Breakdown Recovery &amp; Roadside Assistance</h2>
              <p className={styles.deepFeatureText}>
                We provide professional M11 breakdown recovery and M11 roadside assistance across the M11 corridor and surrounding areas. Our 24-hour recovery service is available for motorists experiencing vehicle problems during the day or night.
              </p>
              <p className={styles.deepFeatureText}>
                Whether you have a flat battery, puncture, mechanical failure or another roadside emergency, our team can provide professional assistance and, where required, safely recover your vehicle.
              </p>
            </div>

            {/* Card 5: Safe & Damage-Free Vehicle Transportation (Full Width) */}
            <div className={styles.deepFeatureCard} style={{ gridColumn: '1 / -1' }}>
              <h2 className={styles.deepFeatureTitle}>Safe &amp; Damage-Free Vehicle Transportation</h2>
              <p className={styles.deepFeatureText}>
                Vehicle safety is at the heart of our recovery service. We use modern recovery equipment and suitable towing methods to help ensure your vehicle is transported safely.
              </p>
              <p className={styles.deepFeatureText}>
                From car recovery and van recovery to emergency breakdown towing, we take care to minimise the risk of vehicle damage during transportation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: COVERAGE LOCATIONS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>ALL LOCATIONS WE COVER</h2>
            <p className={styles.sectionDesc}>We provide rapid vehicle recovery across a vast local network, ensuring fast response times along major routes.</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {locations.map((loc, idx) => {
              const slug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <Link key={idx} href={`/areas-we-cover/${slug}`} style={{ textDecoration: 'none' }}>
                  <div className={styles.areaTag} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <MapPin size={16} className={styles.textRed} />
                    {loc}
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/areas-we-cover" className={styles.btnRed} style={{ display: 'inline-flex', padding: '12px 24px', backgroundColor: 'var(--brand-black)' }}>
              View Interactive Coverage Map
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: AVAILABLE 24 HOURS A DAY, 365 DAYS A YEAR (FINAL CTA) */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Available 24 Hours a Day, 365 Days a Year</h2>
          <p className={styles.ctaDesc}>
            Vehicle breakdowns don&apos;t follow a schedule, which is why Car &amp; Van Recovery operates 24 hours a day, 365 days a year. Our professional recovery team provides 24 hour vehicle recovery and roadside assistance in Cambridge, Cambridgeshire and surrounding areas.
          </p>
          <p className={styles.ctaDesc} style={{ fontSize: '1.05rem', opacity: 0.95 }}>
            If you need professional breakdown recovery, emergency roadside assistance, car recovery, van recovery or M11 breakdown recovery, contact Car &amp; Van Recovery for fast and reliable assistance.
          </p>
          <div className={styles.ctaButtons}>
            <a href={phoneUrl} className={styles.btnRed} style={{ backgroundColor: '#ffffff', color: 'var(--accent-red)' }}>
              <Phone size={20} /> CALL 24/7: {businessConfig.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
              <MessageCircle size={20} /> WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
