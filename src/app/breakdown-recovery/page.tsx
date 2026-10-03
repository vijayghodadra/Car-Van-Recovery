import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generateLocalSchema } from '@/config/seo';
import { businessConfig } from '@/config/business';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Truck, 
  ThumbsUp, 
  Wrench, 
  AlertTriangle, 
  Car, 
  Zap, 
  Disc, 
  Fuel, 
  Navigation, 
  ShieldAlert, 
  CheckCircle2,
  MapPin
} from 'lucide-react';

import ProcessSteps from '@/components/ui/services/ProcessSteps';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Breakdown Recovery Services | 24/7 Roadside Assistance | Car&Van Recovery'
  },
  description: '24 Hour Breakdown Recovery & Roadside Assistance in Cambridge and the M11 corridor. Fast car & van recovery, jump starts, tyre assistance, and towing 24/7.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/breakdown-recovery',
  }
};

const roadsideServices = [
  { title: 'Car breakdown recovery', icon: Car },
  { title: 'Van breakdown recovery', icon: Truck },
  { title: 'Battery jump starts', icon: Zap },
  { title: 'Flat tyre assistance', icon: Disc },
  { title: 'Emergency fuel delivery', icon: Fuel },
  { title: 'Vehicle recovery and transportation', icon: Navigation },
  { title: 'Mechanical breakdown assistance', icon: Wrench },
  { title: 'M11 roadside assistance', icon: ShieldAlert },
  { title: 'Long-wheelbase (LWB) vehicle recovery', icon: ShieldCheck },
];

export default function BreakdownRecovery() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/breakdown.jpg"
            alt="24 Hour Breakdown Recovery & Roadside Assistance in Cambridge"
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
                24 Hour Breakdown Recovery &amp; Roadside Assistance in Cambridge
              </h1>
              <p className={styles.description}>
                Professional breakdown recovery in Cambridge, across the M11 corridor and surrounding areas. Our 24 hour roadside assistance service is available 24/7 to provide fast, reliable and professional help whenever you experience a vehicle breakdown.
              </p>
              
              <div className={styles.buttons}>
                <a href={phoneUrl} className={styles.btnPrimary}>
                  <Phone size={20} /> CALL NOW: {businessConfig.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                  <MessageCircle size={20} /> WHATSAPP US
                </a>
              </div>
            </div>
          </div>

          {/* Quick Trust Stats */}
          <div className={styles.glassStats}>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Clock size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>24/7 AVAILABLE</span>
                <span className={styles.glassStatDesc}>Ready Day &amp; Night</span>
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

      {/* Comprehensive Breakdown Recovery Section */}
      <section className={styles.comprehensiveSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>
              Comprehensive Breakdown Recovery in Cambridge
            </h2>
            <p className={styles.leadText}>
              A vehicle breakdown can happen at any time and leave you stranded at the roadside. Our{' '}
              <Link href="/" className={styles.inlineLink}>
                breakdown recovery Cambridge
              </Link>{' '}
              service provides fast and dependable assistance whenever you need it. We operate 24 hours a day, 7 days a week, offering professional roadside assistance in Cambridge for cars, commercial vans and LWB vehicles.
            </p>
            <p className={styles.leadText}>
              Whether you have a dead battery, flat tyre, empty fuel tank or mechanical failure, our experienced recovery technicians are equipped to provide efficient roadside assistance and vehicle recovery. We also provide M11 breakdown recovery for motorists who experience problems while travelling along the M11 corridor.
            </p>
          </div>
        </div>
      </section>

      {/* 24/7 Roadside Assistance in Cambridge & Services Checklist */}
      <section className={styles.assistanceSection}>
        <div className="container">
          <div className={styles.assistanceHeader}>
            <h2 className={styles.sectionTitle}>24/7 Roadside Assistance in Cambridge</h2>
            <p className={styles.assistanceSubtitle}>
              Our 24 hour roadside assistance Cambridge service means you never have to face a breakdown alone. From minor roadside problems to vehicles that require transportation, our trained technicians can assess the situation and provide the appropriate recovery solution.
            </p>
            <p className={styles.assistanceListTitle}>We can assist with:</p>
          </div>

          <div className={styles.servicesGrid}>
            {roadsideServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className={styles.serviceCard}>
                  <div className={styles.serviceCardIcon}>
                    <IconComp size={24} />
                  </div>
                  <span className={styles.serviceCardTitle}>{service.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fast & Reliable Vehicle Recovery & Professional & Transparent Breakdown Recovery */}
      <section className={styles.featuresDuoSection}>
        <div className="container">
          <div className={styles.duoGrid}>
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Clock size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Fast &amp; Reliable Vehicle Recovery</h2>
              <p className={styles.duoCardText}>
                When your vehicle breaks down, getting help quickly is essential. Our vehicle recovery Cambridge service is designed to reach customers as quickly as possible and get them safely back on the road whenever practical.
              </p>
              <p className={styles.duoCardText}>
                We serve Cambridge and surrounding areas, including motorists travelling along the M11 corridor. Whether you are commuting, making a business delivery or travelling long-distance, our emergency roadside assistance team is available around the clock.
              </p>
            </div>

            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <CheckCircle2 size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Professional &amp; Transparent Breakdown Recovery</h2>
              <p className={styles.duoCardText}>
                We believe professional breakdown recovery services in Cambridge should be straightforward and transparent. Our technicians use suitable recovery equipment and follow safe roadside procedures to help protect you, your passengers and your vehicle.
              </p>
              <p className={styles.duoCardText}>
                Our transparent pricing means you can request roadside assistance without worrying about unexpected hidden fees. From a simple battery problem to a vehicle that needs full recovery, we provide a professional service focused on safety, reliability and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Recovery on the M11 */}
      <section className={styles.m11Section}>
        <div className="container">
          <div className={styles.m11Container}>
            <div className={styles.m11Badge}>
              <MapPin size={14} /> MOTORWAY &amp; CORRIDOR SUPPORT
            </div>
            <h2 className={styles.m11Title}>Breakdown Recovery on the M11</h2>
            <p className={styles.m11Text}>
              A breakdown on the M11 can be stressful, particularly when traffic is heavy or you are travelling at night. Our M11 breakdown recovery and M11 roadside assistance services are available 24/7 to help motorists experiencing vehicle problems along the corridor.
            </p>
            <p className={styles.m11Text}>
              If your car, van or LWB vehicle has broken down, contact our recovery team for prompt assistance and professional vehicle recovery in Cambridge and surrounding areas.
            </p>
            <div className={styles.m11Buttons}>
              <a href={phoneUrl} className={styles.btnPrimary}>
                <Phone size={18} /> CALL M11 RECOVERY DISPATCH
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                <MessageCircle size={18} /> CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Recovery Service Works */}
      <ProcessSteps 
        title="HOW OUR RECOVERY SERVICE WORKS"
        steps={[
          { step: '01', title: 'CALL US', desc: 'Contact our 24/7 emergency dispatch team.' },
          { step: '02', title: 'SHARE LOCATION', desc: 'Tell us exactly where you are stranded.' },
          { step: '03', title: 'WE COME TO YOU', desc: 'A recovery truck is dispatched immediately.' },
          { step: '04', title: 'SAFE RECOVERY', desc: 'We fix it or tow it to a safe destination.' }
        ]}
      />

      {/* Call for 24/7 Breakdown Recovery in Cambridge */}
      <section className={styles.callSection}>
        <div className="container">
          <div className={styles.callBox}>
            <h2 className={styles.callTitle}>Call for 24/7 Breakdown Recovery in Cambridge</h2>
            <p className={styles.callText}>
              Don&apos;t let a vehicle breakdown leave you stranded. Our 24/7 breakdown recovery and roadside assistance in Cambridge is available day and night to provide professional support when you need it.
            </p>
            <p className={`${styles.callText} ${styles.callTextLead}`}>
              For reliable car breakdown recovery, van recovery, roadside assistance and M11 breakdown recovery, contact us today and get the help you need to get back on the road safely.
            </p>
            <div className={styles.callActions}>
              <a href={phoneUrl} className={styles.btnPrimary}>
                <Phone size={20} /> CALL 24/7: {businessConfig.phone}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                <MessageCircle size={20} color="#25D366" /> WHATSAPP DIRECT
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
