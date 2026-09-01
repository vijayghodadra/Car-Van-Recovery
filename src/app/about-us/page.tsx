import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Truck, Car, Zap, Wrench, ShieldCheck, Target, MapPin, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us | Professional 24/7 Vehicle Recovery',
  description: 'Learn about our trusted 24/7 breakdown recovery, towing, and roadside assistance services covering Stansted, M11, Cambridge, and surrounding areas.',
  alternates: {
    canonical: '/about-us',
  }
};

const locations = [
  'M11', 'Harlow', 'Stevenage', "Bishop's Stortford", 'Stansted Airport', 
  'Haverhill', 'Cambridge', 'Cambridgeshire', 'Newmarket', 'Norwich', 
  'Bury St Edmunds', 'Huntingdon', 'St Neots', 'St Ives'
];

export default function AboutUsPage() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero-wide.jpg"
            alt="Professional vehicle recovery fleet at headquarters"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContainer}`}>
          <span className={styles.heroEyebrow}>ABOUT CAR & VAN RECOVERY</span>
          <h1 className={styles.heroTitle}>RELIABLE, FAST & PROFESSIONAL</h1>
          <p className={styles.heroDesc}>
            We are a highly experienced team providing <strong>24/7 vehicle recovery</strong> and emergency roadside assistance. When you're stranded, we are the team you can trust to get you home safely.
          </p>
          <div className={styles.heroButtons}>
            <a href={phoneUrl} className={styles.btnRed} style={{ padding: '20px 32px', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(227, 27, 35, 0.3)' }}>
              <Phone size={24} /> EMERGENCY CALL NOW<br/><span style={{ fontSize: '0.9rem', fontWeight: 600, marginLeft: '8px' }}>{businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY & SEO */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <h2 className={styles.h2}>YOUR TRUSTED ROADSIDE PARTNER</h2>
            <p className={styles.sectionDesc} style={{ marginBottom: '24px' }}>
              At Car & Van Recovery, we understand that breaking down on the side of a busy road or motorway is incredibly stressful. That is why we have built a rapid-response fleet dedicated to providing <strong>professional breakdown recovery</strong> when you need it most. 
            </p>
            <p className={styles.sectionDesc} style={{ marginBottom: '24px' }}>
              Whether you require <strong>heavy-duty van recovery</strong> for a commercial vehicle, or <strong>flat battery assistance</strong> after leaving your lights on, our fully insured and highly trained operators are ready. We specialise in <strong>emergency jump starts</strong>, <strong>roadside tyre changes</strong>, and <strong>safe vehicle transportation</strong>.
            </p>
            <p className={styles.sectionDesc}>
              Operating 24 hours a day, 365 days a year, we pride ourselves on exceptional response times across the M11 corridor and surrounding counties. We are fully equipped with the latest recovery technology to ensure <strong>damage-free towing</strong> and roadside safety.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ALL SERVICES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>ALL OUR RECOVERY SERVICES</h2>
            <p className={styles.sectionDesc}>Comprehensive roadside assistance and vehicle transport.</p>
          </div>
          
          <div className={styles.cardGrid3}>
            <Link href="/car-recovery" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><Car size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>CAR RECOVERY</h3>
                <p className={styles.cardDesc}><strong>24/7 car recovery</strong> via flatbed trucks for all passenger vehicles.</p>
              </div>
            </Link>
            
            <Link href="/van-recovery" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><Truck size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>VAN RECOVERY</h3>
                <p className={styles.cardDesc}><strong>Heavy van recovery</strong> and LWB towing for commercial businesses.</p>
              </div>
            </Link>
            
            <Link href="/stansted-services/jumpstart-service" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><Zap size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>JUMP START SERVICE</h3>
                <p className={styles.cardDesc}>Safe, surge-protected <strong>emergency jump starts</strong> for dead batteries.</p>
              </div>
            </Link>
            
            <Link href="/stansted-services/tyre-change-repair" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><Wrench size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>TYRE CHANGE & REPAIR</h3>
                <p className={styles.cardDesc}><strong>Mobile tyre fitting</strong> and secure spare wheel installation.</p>
              </div>
            </Link>
            
            <Link href="/breakdown-recovery" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><ShieldCheck size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>ACCIDENT RECOVERY</h3>
                <p className={styles.cardDesc}><strong>Accident vehicle towing</strong> from the scene to a secure location.</p>
              </div>
            </Link>
            
            <Link href="/services/vehicle-transportation" style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.card}>
                <div className={styles.cardIcon}><Target size={36} strokeWidth={1.5} /></div>
                <h3 className={styles.cardTitle}>VEHICLE TRANSPORTATION</h3>
                <p className={styles.cardDesc}>Pre-booked <strong>car transport</strong> for auctions, garages, and home delivery.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: ALL LOCATIONS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>ALL LOCATIONS WE COVER</h2>
            <p className={styles.sectionDesc}>We provide <strong>rapid vehicle recovery</strong> across a vast local network, ensuring fast response times along major routes.</p>
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
    </main>
  );
}

