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
  HelpCircle,
  Plus
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Areas We Cover | Vehicle Recovery Cambridge & Cambridgeshire | Car&Van Recovery',
  description: '24/7 vehicle recovery across Cambridge, Cambridgeshire, the M11 and surrounding areas. Car&Van Recovery provides professional breakdown recovery, accident recovery and vehicle transport.',
  alternates: {
    canonical: '/areas-we-cover',
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

const routes = [
  'Breakdown Vehicle Recovery Cambridge & Cambridgeshire',
  'Vehicle Recovery M11',
  'Vehicle Recovery Stansted',
  'Vehicle Recovery A11',
  'Vehicle Recovery A14',
  'Vehicle Recovery A10',
  'Vehicle Recovery Newmarket',
  'Vehicle Recovery Ely',
  'Vehicle Recovery Huntingdon',
  'Vehicle Recovery Peterborough'
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
    a: 'The fastest way to reach us is by calling our 24/7 emergency dispatch line at +44 7438 189791. You can also send us a message on WhatsApp with your location.'
  }
];

export default function AreasWeCoverPage() {
  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>24/7 REGIONAL & NATIONWIDE VEHICLE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              ALL OUR<br/>
              <span className={styles.textRed}>SERVICE AREAS</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast, reliable emergency roadside recovery, breakdown towing, jump starts, flat battery assistance, and vehicle transport 24 hours a day.
            </p>
            
            <div className={styles.heroButtons}>
              <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnRed}>
                <Phone size={20} />
                <div className={styles.btnSmallText}>
                  <span>Call Emergency Recovery</span>
                  <span>{businessConfig.phone}</span>
                </div>
              </a>
              <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.btnGreen}>
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
                  <span>Cars, Vans & More</span>
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
                alt="Professional UK vehicle recovery truck transporting a car on a highway"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTENT KEYWORDS SECTION */}
      <section style={{ backgroundColor: 'var(--brand-black)', color: '#fff', padding: 'var(--spacing-16) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 'var(--spacing-6)', letterSpacing: '-0.02em' }}>
              Looking for "Car Recovery Near Me"?
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--spacing-6)' }}>
              Whether you are stranded with a <strong>flat battery</strong>, need an urgent <strong>emergency jump start</strong>, or require immediate <strong>24/7 emergency towing and roadside assistance</strong>, our professional fleet is always stationed near you.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
              We guarantee rapid dispatch across all our service areas including <strong>Cambridge, the M11, Harlow, Stevenage, Bishop's Stortford, Stansted Airport, Haverhill, Newmarket, Norwich, Bury St Edmunds, Huntingdon, and St Neots.</strong> For any vehicle breakdown emergency near these locations, trust us for a fast, secure, and fully insured recovery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COVERAGE SECTION */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover Across <span className={styles.textRed}>Cambridgeshire</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car&Van Recovery provides professional 24/7 vehicle recovery, breakdown recovery and roadside assistance across Cambridge, Cambridgeshire and surrounding areas.
            </p>
            <p className={styles.coverageDesc}>
              Our experienced recovery operators offer car recovery, van recovery, emergency roadside assistance, jump starts, flat battery assistance, accident recovery and vehicle transportation.
            </p>


          </div>
          <div className={styles.coverageRight}>
            <div className={styles.mapWrapper}>
              <iframe
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

      {/* 3. FEATURED COVERAGE ROUTES */}
      <section className={styles.routesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>FEATURED COVERAGE</span>
          <h2 className={styles.sectionTitle}>Key Recovery Routes & Areas</h2>
          
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
              alt="Vehicle recovery truck on a wet highway under dramatic clouds"
              fill
              style={{ objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>
        </div>
        </div>
      </section>

      {/* 4. RECOVERY SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <span className={styles.sectionLabel}>OUR SERVICES</span>
          <h2 className={styles.sectionTitle}>Recovery Services Across Our Coverage Areas</h2>
          
          <div className={styles.servicesGrid}>
            
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImgWrap}>
                <Image src="/images/Poster/Car Recovery.png" alt="Breakdown Recovery" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceIconWrap}>
                  <Truck size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.serviceTitle}>Breakdown Recovery</h3>
                <p className={styles.serviceDesc}>
                  24/7 recovery assistance when your vehicle breaks down.
                </p>
                <div className={styles.serviceButtons}>
                  <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnServiceRed}>
                    <Phone size={14} /> Emergency Call
                  </a>
                  <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.btnServiceGreen}>
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImgWrap}>
                <Image src="/images/Poster/Van Recovery.png" alt="Accident Recovery" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceIconWrap}>
                  <ShieldCheck size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.serviceTitle}>Accident Recovery</h3>
                <p className={styles.serviceDesc}>
                  Safe recovery and transportation following a vehicle accident.
                </p>
                <div className={styles.serviceButtons}>
                  <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnServiceRed}>
                    <Phone size={14} /> Emergency Call
                  </a>
                  <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.btnServiceGreen}>
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImgWrap}>
                <Image src="/images/Poster/Jumpstart Service.png" alt="Non-Starter Recovery" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceIconWrap}>
                  <BatteryWarning size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.serviceTitle}>Non-Starter Recovery</h3>
                <p className={styles.serviceDesc}>
                  Recovery assistance for vehicles that will not start.
                </p>
                <div className={styles.serviceButtons}>
                  <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnServiceRed}>
                    <Phone size={14} /> Emergency Call
                  </a>
                  <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.btnServiceGreen}>
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImgWrap}>
                <Image src="/images/Poster/Vehicle Transportation.png" alt="Vehicle Transport" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceIconWrap}>
                  <Car size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.serviceTitle}>Vehicle Transport</h3>
                <p className={styles.serviceDesc}>
                  Safe vehicle transportation to a garage, home or agreed destination.
                </p>
                <div className={styles.serviceButtons}>
                  <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnServiceRed}>
                    <Phone size={14} /> Emergency Call
                  </a>
                  <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.btnServiceGreen}>
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </main>
  );
}
