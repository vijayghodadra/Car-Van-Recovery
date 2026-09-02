import { Metadata } from 'next';
import Image from 'next/image';
import { generateLocalSchema } from '@/config/seo';
import { services } from '@/config/pages';
import { businessConfig } from '@/config/business';
import { Phone, MessageCircle, Clock, ShieldCheck, Truck, ThumbsUp, Wrench, AlertTriangle, Car } from 'lucide-react';

import ServiceCard from '@/components/ui/services/ServiceCard';
import ServiceFeatureGrid from '@/components/ui/services/ServiceFeatureGrid';
import ProcessSteps from '@/components/ui/services/ProcessSteps';

import styles from '../car-recovery/page.module.css';

export const metadata: Metadata = {
  title: 'Breakdown Recovery Services | 24/7 Roadside Assistance',
  description: 'Emergency breakdown recovery and roadside assistance. Jump starts, flat batteries, flat tyres, and towing services in Cambridge and the M11.',
  alternates: {
    canonical: '/breakdown-recovery',
  }
};

export default function BreakdownRecovery() {
  const coreServices = services.slice(0, 9); // Exclude Stansted ones for the main grid

  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      
      {/* Custom Hero Section based on Car Recovery Design */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/car_towing_truck.jpg"
            alt="Breakdown Recovery Services in Cambridge"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroOverlay}></div>
        
        <div className="container">
          <div className={styles.heroContent}>
            
            <div className={styles.heroText}>
              <div className={styles.eyebrow}>
                <AlertTriangle size={16} /> 24/7 BREAKDOWN RECOVERY
              </div>
              <h1 className={styles.title}>
                FAST. RELIABLE.<br/>
                <span>ALWAYS THERE.</span>
              </h1>
              <p className={styles.description}>
                Professional breakdown recovery across Cambridge, the M11 corridor and surrounding areas. We are available 24/7 to get you back on the road safely.
              </p>
              
              <div className={styles.buttons}>
                <a href={phoneUrl} className={styles.btnPrimary}>
                  <Phone size={20} /> CALL NOW
                </a>
                <a href={whatsappUrl} className={styles.btnWhatsapp}>
                  <MessageCircle size={20} /> WHATSAPP US
                </a>
              </div>
            </div>

          </div>

          <div className={styles.glassStats}>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Clock size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>24/7 AVAILABLE</span>
                <span className={styles.glassStatDesc}>Ready Day & Night</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Truck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>30-45 MINS</span>
                <span className={styles.glassStatDesc}>Average Response</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ShieldCheck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>FULLY INSURED</span>
                <span className={styles.glassStatDesc}>Complete Peace of Mind</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ThumbsUp size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>100% SECURE</span>
                <span className={styles.glassStatDesc}>Safe Vehicle Handling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Section */}
      <section className={styles.seoSection}>
        <div className="container">
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Comprehensive Breakdown Recovery in Cambridge</h2>
            <p className={styles.seoText}>
              A vehicle breakdown is never convenient, but our <strong>comprehensive breakdown recovery services in Cambridge</strong> ensure that help is always just a phone call away. We operate 24 hours a day, providing rapid roadside assistance for cars, commercial vans, and LWB vehicles.
            </p>
            <p className={styles.seoText}>
              Whether you are dealing with a dead battery, a flat tyre, an empty fuel tank, or a complete mechanical failure on the M11, our fully trained technicians have the equipment to assist you. Our transparent pricing means no hidden fees, giving you <strong>peace of mind and professional roadside assistance</strong> when you need it most.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 'var(--spacing-4)' }}>OUR BREAKDOWN RECOVERY SERVICES</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Complete roadside assistance for every situation.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
            {coreServices.map((service, idx) => {
              // Map specific icons for the grid display
              const icons = ['Car', 'Truck', 'Navigation', 'Zap', 'Wrench', 'Fuel', 'Settings', 'Building2', 'Target'];
              return (
                <ServiceCard 
                  key={service.slug}
                  title={service.name}
                  description={service.description.split('.')[0] + '.'} // Just the first sentence
                  image={service.heroImage}
                  iconName={icons[idx] || 'CheckCircle'}
                  href={service.slug.includes('car') || service.slug.includes('van-recovery') 
                    ? `/${service.slug}` 
                    : `/services/${service.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFeatureGrid 
        title="WHEN DO YOU NEED BREAKDOWN RECOVERY?"
        features={[
          { title: 'Breakdown', desc: 'Mechanical or electrical failure at the roadside.', iconName: 'Wrench' },
          { title: 'Accident', desc: 'Safe recovery following a collision.', iconName: 'AlertTriangle' },
          { title: 'Non-Starting', desc: 'Home start or jump start services.', iconName: 'BatteryWarning' },
          { title: 'Transport', desc: 'Moving vehicles from A to B safely.', iconName: 'Map' }
        ]}
      />

      <ProcessSteps 
        title="HOW OUR RECOVERY SERVICE WORKS"
        steps={[
          { step: '01', title: 'CALL US', desc: 'Contact our 24/7 emergency dispatch team.' },
          { step: '02', title: 'SHARE LOCATION', desc: 'Tell us exactly where you are stranded.' },
          { step: '03', title: 'WE COME TO YOU', desc: 'A recovery truck is dispatched immediately.' },
          { step: '04', title: 'SAFE RECOVERY', desc: 'We fix it or tow it to a safe destination.' }
        ]}
      />
    </>
  );
}
