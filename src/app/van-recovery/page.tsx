import { Metadata } from 'next';
import Image from 'next/image';
import { generateLocalSchema } from '@/config/seo';
import { businessConfig } from '@/config/business';
import { Phone, MessageCircle, Clock, ShieldCheck, Truck, ThumbsUp, Wrench, AlertTriangle, Home, Package, Navigation, Tent } from 'lucide-react';

import ServiceFeatureGrid from '@/components/ui/services/ServiceFeatureGrid';
import VansWeRecover from '@/components/ui/services/VansWeRecover';
import ProcessSteps from '@/components/ui/services/ProcessSteps';

import styles from '../car-recovery/page.module.css';

export const metadata: Metadata = {
  title: '24/7 Heavy Van Recovery Cambridge | Commercial Vehicle Towing',
  description: 'Specialist 24/7 heavy-duty van recovery for commercial vehicles, transits, and LWB vans across Cambridge, the M11, and Stansted. Fast dispatch, call now.',
  alternates: {
    canonical: '/van-recovery',
  }
};

export default function VanRecoveryPage() {
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
            alt="Commercial Van Recovery Tow Truck in Cambridge"
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
                <Truck size={16} /> COMMERCIAL RECOVERY EXPERTS
              </div>
              <h1 className={styles.title}>
                COMMERCIAL<br/>
                <span>VAN RECOVERY</span>
              </h1>
              <p className={styles.description}>
                Getting your business back on the road safely and quickly. We specialize in towing transit vans, LWB, and heavy commercial vehicles across Cambridge and the M11, 24/7.
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
            <h2 className={styles.seoTitle}>Heavy-Duty Van Recovery in Cambridge</h2>
            <p className={styles.seoText}>
              When your commercial vehicle breaks down, your business grinds to a halt. We provide specialist <strong>commercial van recovery in Cambridge</strong> designed to handle the weight and dimensions of fully loaded trade vehicles, transit vans, and Luton boxes.
            </p>
            <p className={styles.seoText}>
              Unlike standard car recovery, <strong>heavy duty van towing</strong> requires specialist extended flatbeds and powerful winches. Our 24/7 fleet is fully equipped to safely transport your commercial vehicle from the roadside back to your depot or preferred garage anywhere along the M11 or A14, minimizing your business downtime.
            </p>
          </div>
        </div>
      </section>

      <VansWeRecover />

      <ProcessSteps 
        title="HOW VAN RECOVERY WORKS"
        steps={[
          { step: '01', title: 'CONTACT', desc: 'Call us with vehicle details and load status.' },
          { step: '02', title: 'DISPATCH', desc: 'We send a heavy-duty recovery truck.' },
          { step: '03', title: 'LOAD', desc: 'Your van is securely winched and strapped.' },
          { step: '04', title: 'TRANSPORT', desc: 'We transport you and your cargo safely.' }
        ]}
      />
    </>
  );
}
