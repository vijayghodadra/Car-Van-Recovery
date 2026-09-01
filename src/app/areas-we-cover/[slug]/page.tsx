import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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
import styles from '../page.module.css';

const locations = {
  'm11': 'M11',
  'harlow': 'Harlow',
  'stevenage': 'Stevenage',
  'bishops-stortford': "Bishop's Stortford",
  'stansted-airport': 'Stansted Airport',
  'haverhill': 'Haverhill',
  'cambridge': 'Cambridge',
  'cambridgeshire': 'Cambridgeshire',
  'newmarket': 'Newmarket',
  'norwich': 'Norwich',
  'bury-st-edmunds': 'Bury St Edmunds',
  'huntingdon': 'Huntingdon',
  'st-neots': 'St Neots',
  'st-ives': 'St Ives'
};

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const locationName = locations[slug as keyof typeof locations];
  
  if (!locationName) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Vehicle Recovery in ${locationName} | 24/7 Service`,
    description: `Professional 24/7 vehicle recovery and breakdown assistance in ${locationName}. Fast response, fully insured.`,
  };
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const locationName = locations[slug as keyof typeof locations];

  if (!locationName) {
    notFound();
  }

  const heroImages: Record<string, string> = {
    'm11': '/images/hero_recovery_truck.jpg',
    'harlow': '/images/hero-new.jpg',
    'stevenage': '/images/breakdown.jpg',
    'bishops-stortford': '/images/hero.jpg',
    'stansted-airport': '/images/classic.jpg',
    'haverhill': '/images/jumpstart.jpg',
    'cambridge': '/images/cambridge.jpg',
    'cambridgeshire': '/images/hero-wide.jpg',
    'newmarket': '/images/cta.jpg',
    'norwich': '/images/auction.jpg',
    'bury-st-edmunds': '/images/flat_battery_assistance.jpg',
    'huntingdon': '/images/car_towing_truck.jpg',
    'st-neots': '/images/roadside_recovery_van.jpg',
    'st-ives': '/images/featured_routes_truck.jpg'
  };

  const heroImageSrc = heroImages[slug] || '/images/hero_recovery_truck.jpg';

  // We can format the title a bit for the hero, e.g., if it's very long
  const isLong = locationName.length > 15;

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>24/7 REGIONAL & NATIONWIDE VEHICLE RECOVERY</span>
            <h1 className={styles.heroTitle}>
              AREAS WE COVER ACROSS<br/>
              <span className={styles.textRed}>{locationName.toUpperCase()}</span>
            </h1>
            <p className={styles.heroDesc}>
              Fast, reliable emergency roadside recovery, breakdown towing, jump starts, flat battery assistance, and vehicle transport in {locationName} 24 hours a day.
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
                src={heroImageSrc} 
                alt={`Professional UK vehicle recovery truck operating in ${locationName}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COVERAGE SECTION */}
      <section className={styles.coverageSection}>
        <div className={`container ${styles.coverageContainer}`}>
          <div className={styles.coverageLeft}>
            <span className={styles.sectionLabel}>OUR COVERAGE</span>
            <h2 className={styles.sectionTitle}>
              Areas We Cover In & Around <span className={styles.textRed}>{locationName}</span>
            </h2>
            <p className={styles.coverageDesc}>
              Car&Van Recovery provides professional 24/7 vehicle recovery, breakdown recovery and roadside assistance across {locationName} and surrounding areas.
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
                src={`https://maps.google.com/maps?q=${encodeURIComponent(locationName + ', UK')}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
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
                {Object.entries(locations).map(([key, name], i) => (
                  <Link key={i} href={`/areas-we-cover/${key}`} className={styles.routeItem}>
                    <div className={styles.routeItemLeft}>
                      <MapPin size={16} />
                      <span>{name}</span>
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
          <h2 className={styles.sectionTitle}>Recovery Services Across {locationName}</h2>
          
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
