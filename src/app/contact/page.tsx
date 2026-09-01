import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, MessageCircle, MapPin, Mail, Clock, Car, Truck, Zap, Wrench, ShieldCheck, Target } from 'lucide-react';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | 24/7 Vehicle Recovery',
  description: 'Need immediate vehicle recovery? Contact our 24/7 dispatch team for rapid car and van towing across the M11, Cambridge, and surrounding areas.',
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/hero-new.jpg"
              alt="Emergency vehicle recovery call center and dispatch"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>24/7 DISPATCH</span>
            <h1 className={styles.heroTitle}>NEED IMMEDIATE ASSISTANCE?</h1>
            <p className={styles.heroDesc}>
              If you are stranded on the roadside, do not use the contact form. Call our emergency dispatch line directly for rapid deployment of a recovery vehicle.
            </p>
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed} style={{ padding: '20px 32px', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(227, 27, 35, 0.3)' }}>
                <Phone size={24} /> EMERGENCY CALL NOW<br/><span style={{ fontSize: '0.9rem', fontWeight: 600, marginLeft: '8px' }}>{businessConfig.phone}</span>
              </a>
              <a href={whatsappUrl} className={styles.btnGreen} style={{ padding: '20px 32px', fontSize: '1.2rem' }}>
                <MessageCircle size={24} /> WHATSAPP LIVE LOCATION
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTACT DETAILS & FORM */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitLayout}>
              
              {/* Contact Information */}
              <div>
                <h2 className={styles.h2}>GET IN TOUCH</h2>
                <p className={styles.sectionDesc} style={{ marginBottom: '40px' }}>
                  Our control room is manned 24 hours a day, 7 days a week. We are always ready to take your call and dispatch assistance anywhere in our coverage network.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(227, 27, 35, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', flexShrink: 0 }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>24/7 Dispatch Line</h3>
                      <a href={phoneUrl} style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-black)', textDecoration: 'none' }}>{businessConfig.phone}</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(227, 27, 35, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', flexShrink: 0 }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Email Enquiries</h3>
                      <a href={`mailto:${businessConfig.email}`} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>{businessConfig.email}</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(227, 27, 35, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', flexShrink: 0 }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Head Office</h3>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        {businessConfig.name}<br />
                        {businessConfig.address}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(227, 27, 35, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', flexShrink: 0 }}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Operating Hours</h3>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        24 Hours A Day, 7 Days A Week, 365 Days A Year
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0,0,0,0.06)', border: '1px solid var(--border-subtle)' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>EMERGENCY FORM SUBMISSION</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Fill out the details below for non-urgent quotes or scheduled vehicle transportation.</p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR SERVICES */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>OUR SERVICES</h2>
              <p className={styles.sectionDesc}>Comprehensive roadside assistance and vehicle transport.</p>
            </div>
            
            <div className={styles.cardGrid3}>
              <Link href="/car-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Car size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>CAR RECOVERY</h3>
                  <p className={styles.cardDesc}>24/7 car recovery via flatbed trucks for all passenger vehicles.</p>
                </div>
              </Link>
              
              <Link href="/van-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Truck size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>VAN RECOVERY</h3>
                  <p className={styles.cardDesc}>Heavy van recovery and LWB towing for commercial businesses.</p>
                </div>
              </Link>
              
              <Link href="/stansted-services/jumpstart-service" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Zap size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>JUMP START SERVICE</h3>
                  <p className={styles.cardDesc}>Safe, surge-protected emergency jump starts for dead batteries.</p>
                </div>
              </Link>
              
              <Link href="/stansted-services/tyre-change-repair" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Wrench size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>TYRE CHANGE & REPAIR</h3>
                  <p className={styles.cardDesc}>Mobile tyre fitting and secure spare wheel installation.</p>
                </div>
              </Link>
              
              <Link href="/breakdown-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><ShieldCheck size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>ACCIDENT RECOVERY</h3>
                  <p className={styles.cardDesc}>Accident vehicle towing from the scene to a secure location.</p>
                </div>
              </Link>
              
              <Link href="/services/vehicle-transportation" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Target size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>VEHICLE TRANSPORTATION</h3>
                  <p className={styles.cardDesc}>Pre-booked car transport for auctions, garages, and home delivery.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
