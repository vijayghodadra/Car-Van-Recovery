import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Truck, 
  ThumbsUp, 
  Car, 
  AlertTriangle, 
  Wrench, 
  Disc, 
  Cog, 
  Zap, 
  ShieldAlert, 
  Navigation
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import ProcessSteps from '@/components/ui/services/ProcessSteps';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Mobile Tyre Repair & Change | Car&Van Recovery'
  },
  description: '24/7 mobile tyre repair & tyre change in Cambridge, Cambridgeshire, M11, A10, A14, A11, Stansted and Harlow. Roadside puncture repair and emergency tyre fitting.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/services/tyre-change-and-repair',
  }
};

const tyreServicesList = [
  { title: 'Mobile tyre repair Cambridge', icon: Disc },
  { title: 'Tyre change Cambridge', icon: Wrench },
  { title: 'Mobile tyre fitting', icon: Cog },
  { title: 'Emergency tyre replacement', icon: AlertTriangle },
  { title: 'Roadside puncture repair', icon: ShieldCheck },
  { title: 'Flat tyre assistance', icon: Disc },
  { title: 'Damaged tyre replacement', icon: Wrench },
  { title: 'Emergency tyre fitting', icon: Zap },
  { title: 'Car tyre replacement', icon: Car },
  { title: 'Van tyre replacement', icon: Truck },
  { title: '24/7 roadside tyre assistance', icon: Clock },
];

export default function MobileTyreChangeAndRepairPage() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/Poster/change tire.png"
            alt="24/7 Professional Mobile Tyre Repair & Tyre Change Service"
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
                <Disc size={16} /> 24/7 EMERGENCY MOBILE TYRE ASSISTANCE
              </div>
              <h1 className={styles.title}>
                24/7 Professional Mobile Tyre Repair &amp; Tyre Change Service
              </h1>
              <p className={styles.description}>
                Car &amp; Van Recovery provides professional mobile tyre repair in Cambridge and Cambridgeshire, with reliable 24/7 roadside tyre assistance, tyre changes, puncture repairs and emergency tyre fitting. Our mobile tyre team can assist motorists across the M11, A10, A14 and A11, including the wider M11 corridor, Stansted and Harlow.
              </p>
              <p className={styles.description} style={{ marginTop: '-20px' }}>
                Whether you have suffered a sudden puncture, damaged tyre or complete tyre failure, our experienced technicians can provide fast roadside tyre repair and replacement to help get you safely back on the road.
              </p>
              
              <div className={styles.buttons}>
                <a href={phoneUrl} className={styles.btnPrimary}>
                  <Phone size={20} /> CALL 24/7: {businessConfig.phone}
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
                <span className={styles.glassStatDesc}>Day &amp; Night Roadside</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Truck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>30-45 MINS</span>
                <span className={styles.glassStatDesc}>Average Emergency Dispatch</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Wrench size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>REPAIR OR FIT</span>
                <span className={styles.glassStatDesc}>Punctures &amp; Replacements</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ThumbsUp size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>ALL VEHICLES</span>
                <span className={styles.glassStatDesc}>Cars, Vans &amp; 4x4s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 24/7 MOBILE TYRE REPAIR & REPLACEMENT */}
      <section className={`${styles.section} ${styles.sectionAlt}`} style={{ paddingTop: 'var(--spacing-28)' }}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>24/7 Mobile Tyre Repair &amp; Replacement</h2>
            <p className={styles.leadText}>
              A sudden puncture doesn&apos;t always mean that you need a brand-new tyre. Our mobile tyre repair and replacement service in Cambridge allows our technicians to assess the tyre at the roadside and determine whether it can be safely repaired or needs replacing.
            </p>
            <p className={styles.leadText}>
              Where a repair is legal and safe, we can carry out a professional roadside puncture repair. If the tyre is damaged beyond repair, our emergency tyre fitting service can provide a suitable replacement where available.
            </p>
            <p className={styles.leadText} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
              Our mobile tyre service is suitable for cars and light commercial vans, helping motorists avoid being stranded at the roadside.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ROADSIDE TYRE CHANGE IN CAMBRIDGE & 11 SERVICES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Roadside Tyre Change in Cambridge</h2>
            <p className={styles.leadText}>
              If you have a flat or damaged tyre and cannot safely continue your journey, our tyre change service in Cambridge can provide professional roadside assistance.
            </p>
            <p className={styles.sublistTitle}>Our technicians can help with:</p>
          </div>

          <div className={styles.pillsGrid}>
            {tyreServicesList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={styles.pillCard}>
                  <div className={styles.pillIcon}>
                    <IconComp size={22} />
                  </div>
                  <span className={styles.pillText}>{item.title}</span>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              We aim to provide a fast and convenient service so you can continue your journey safely whenever possible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR DEEP CONTENT CARDS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.duoGrid}>
            
            {/* Card 1 */}
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Disc size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Mobile Tyre Fitting Across Cambridgeshire</h2>
              <p className={styles.duoCardText}>
                Our mobile tyre fitting service operates across Cambridge, Cambridgeshire and surrounding areas. Instead of arranging a garage visit, our mobile team comes to your location to assess and deal with your tyre problem.
              </p>
              <p className={styles.duoCardText}>
                Whether you are at home, at work, on a local road or stranded following a puncture, our 24/7 mobile tyre assistance is available day and night.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Navigation size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Motorway Tyre Assistance on the M11, A10, A14 &amp; A11</h2>
              <p className={styles.duoCardText}>
                A tyre failure on a motorway can be particularly stressful and potentially dangerous. Our motorway tyre assistance service covers motorists travelling across key routes including the M11, A10, A14 and A11.
              </p>
              <p className={styles.duoCardText}>
                We provide roadside tyre support along the M11 corridor and surrounding Cambridgeshire areas, helping drivers with punctures, flat tyres and tyre-related emergencies.
              </p>
              <p className={styles.duoCardText}>
                If your vehicle cannot be safely repaired at the roadside, we can also arrange further vehicle recovery and transportation.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Wrench size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>M11 Tyre Repair &amp; Tyre Change</h2>
              <p className={styles.duoCardText}>
                Our M11 tyre assistance service is available for motorists experiencing tyre problems along the M11 corridor. From puncture repairs to emergency tyre changes, our mobile team can provide professional roadside assistance when required.
              </p>
              <p className={styles.duoCardText}>
                If a damaged tyre means your vehicle cannot continue safely, our recovery operators can assist with vehicle recovery on the M11.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <ShieldCheck size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Tyre Assistance Near Stansted &amp; Harlow</h2>
              <p className={styles.duoCardText}>
                We also provide mobile tyre repair near Stansted and Harlow, assisting motorists with flat tyres, punctures and damaged tyres.
              </p>
              <p className={styles.duoCardText}>
                Whether you are travelling to or from Stansted Airport, commuting through the area or driving along nearby major roads, our 24/7 roadside tyre assistance provides a convenient solution when you experience an unexpected tyre problem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: TYRE REPAIR OR TYRE REPLACEMENT? & 24/7 EMERGENCY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.duoGrid}>
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <ShieldAlert size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Tyre Repair or Tyre Replacement?</h2>
              <p className={styles.duoCardText}>
                Not every punctured tyre needs replacing. Our technicians will assess the condition and location of the damage before deciding whether a repair is appropriate.
              </p>
              <p className={styles.duoCardText}>
                If the tyre can be legally and safely repaired, we can provide a mobile puncture repair. If the damage is too severe or the tyre is unsafe, we can provide emergency tyre replacement and fitting where a suitable tyre is available.
              </p>
              <p className={styles.duoCardText} style={{ fontWeight: 800, color: 'var(--accent-red)' }}>
                Safety always comes first.
              </p>
            </div>

            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Clock size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>24/7 Emergency Tyre Assistance</h2>
              <p className={styles.duoCardText}>
                Tyre problems can happen at any time, which is why our 24/7 emergency tyre assistance service is available day and night.
              </p>
              <p className={styles.duoCardText}>
                We provide professional mobile tyre repair, tyre changes, puncture repair and emergency tyre fitting across Cambridge, Cambridgeshire, the M11 corridor, Stansted, Harlow and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS STEPS */}
      <ProcessSteps 
        title="HOW OUR MOBILE TYRE SERVICE WORKS"
        steps={[
          { step: '01', title: 'CALL US', desc: 'Tell us your location & tyre size if known.' },
          { step: '02', title: 'DISPATCH', desc: 'Mobile tyre technician dispatched immediately.' },
          { step: '03', title: 'ASSESS', desc: 'We assess for safe repair or replacement.' },
          { step: '04', title: 'BACK ON ROAD', desc: 'Puncture repaired or wheel fitted safely.' }
        ]}
      />

      {/* SECTION 6: NEED MOBILE TYRE REPAIR IN CAMBRIDGE? (FINAL CTA) */}
      <section className={styles.callSection}>
        <div className="container">
          <div className={styles.callBox}>
            <h2 className={styles.callTitle}>Need Mobile Tyre Repair in Cambridge?</h2>
            <p className={styles.callText}>
              Don&apos;t let a puncture or damaged tyre leave you stranded. Car &amp; Van Recovery provides 24/7 mobile tyre repair and tyre change in Cambridge, with roadside assistance available across Cambridgeshire, M11, A10, A14, A11, Stansted and Harlow.
            </p>
            <p className={`${styles.callText} ${styles.callTextLead}`}>
              For professional mobile tyre fitting, puncture repair, emergency tyre replacement and roadside tyre assistance, contact our recovery team today.
            </p>
            <div className={styles.callActions}>
              <a href={phoneUrl} className={styles.btnPrimary}>
                <Phone size={20} /> CALL 24/7: {businessConfig.phone}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                <MessageCircle size={20} color="#25D366" /> WHATSAPP DETAILS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
