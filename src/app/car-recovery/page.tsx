import { Metadata } from 'next';
import Image from 'next/image';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import { businessConfig } from '@/config/business';
import { Phone, MessageCircle, Clock, ShieldCheck, Truck, ThumbsUp, Wrench, AlertTriangle, Home, Car } from 'lucide-react';

import ProcessSteps from '@/components/ui/services/ProcessSteps';
import CoverageSection from '@/components/ui/services/CoverageSection';
import ImageTextSection from '@/components/ui/services/ImageTextSection';
import CarRecoveryServicesGrid from '@/components/ui/services/CarRecoveryServicesGrid';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: '24/7 Car Recovery Cambridge | Emergency Flatbed Towing',
  description: 'Stranded? We provide rapid 24/7 emergency car recovery, flatbed towing, and roadside assistance across Cambridge, the M11, and surrounding areas. Call now for immediate dispatch.',
  alternates: {
    canonical: '/car-recovery',
  }
};

const faqs = [
  {
    question: "Do you provide 24/7 car recovery in Cambridge?",
    answer: "Yes. Car&Van Recovery provides 24/7 car recovery and breakdown assistance across Cambridge and surrounding areas."
  },
  {
    question: "Can you recover a car that won't start?",
    answer: "Yes. We can assist with non-starting vehicles and arrange safe transportation to a garage, home or another suitable destination."
  },
  {
    question: "Can you recover a car after an accident?",
    answer: "Yes. We provide accident recovery and can safely transport damaged vehicles when they are no longer suitable to drive."
  },
  {
    question: "Can you recover my car from the M11?",
    answer: "Yes. We provide recovery assistance along the M11 corridor, subject to vehicle location and recovery requirements."
  },
  {
    question: "Where can you take my recovered car?",
    answer: "Depending on your requirements, we can transport your vehicle to a garage, home, dealership or another agreed destination."
  },
  {
    question: "How quickly can you arrive?",
    answer: "Response time depends on your location, traffic, road conditions and current demand. Contact us with your location for the latest availability."
  }
];

export default function CarRecoveryPage() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      
      {/* Custom Hero Section for Car Recovery */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/car_towing_truck.jpg"
            alt="Car Recovery Tow Truck in Cambridge"
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
                <Car size={16} /> CAR RECOVERY SPECIALISTS
              </div>
              <h1 className={styles.title}>
                FAST & RELIABLE<br/>
                <span>CAR RECOVERY</span>
              </h1>
              <p className={styles.description}>
                Professional emergency car recovery when you need it most. Our fleet is equipped to handle all types of cars, from everyday runners to high-value classic vehicles, 24/7.
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

      {/* SEO Optimized Section replacing ImageTextSection */}
      <section className={styles.seoSection}>
        <div className="container">
          <div className={styles.seoContent}>
            <h2 className={styles.seoTitle}>Expert Car Recovery in Cambridge</h2>
            <p className={styles.seoText}>
              When you're stranded on the roadside, you need a <strong>car recovery service in Cambridge</strong> that you can trust. We provide rapid-response towing and breakdown assistance across the M11, A14, and surrounding areas.
            </p>
            <p className={styles.seoText}>
              Our fully equipped flatbed trucks can safely transport any vehicle, whether it's a non-starter at home, a breakdown on the motorway, or accident recovery. We understand the stress of a breakdown, which is why our <strong>24/7 emergency car towing</strong> team prioritizes your safety and peace of mind with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      <CarRecoveryServicesGrid />

      <ProcessSteps 
        title="HOW CAR RECOVERY WORKS"
        steps={[
          { step: '01', title: 'CONTACT', desc: 'Call us with your location and vehicle details.' },
          { step: '02', title: 'DISPATCH', desc: 'We send the nearest available recovery truck.' },
          { step: '03', title: 'LOAD', desc: 'Your car is winched safely onto our flatbed.' },
          { step: '04', title: 'TRANSPORT', desc: 'We deliver you and your car to your destination.' }
        ]}
      />

      <ImageTextSection 
        title="WHY CHOOSE US FOR CAR RECOVERY?"
        description="We understand that your car is important to you. Whether it's a family hatchback, an executive saloon, or a cherished classic, we treat every vehicle with the utmost respect. Our transparent pricing means you know exactly what to expect before we even arrive."
        image="/images/hero-wide.jpg"
        reverse={true}
        listItems={[
          'No hidden fees - transparent pricing',
          'Experienced drivers who care about your vehicle',
          'Modern, well-maintained recovery trucks',
          'Fully comprehensive insurance coverage'
        ]}
      />
    </>
  );
}
