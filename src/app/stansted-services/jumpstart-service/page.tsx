import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  Zap, 
  AlertTriangle, 
  Lightbulb, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  BatteryWarning,
  Car,
  Truck,
  Wrench,
  Navigation,
  Plane
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from '../stansted.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Stansted Jump Start Service | 24/7 Car Battery Assistance | Car&Van Recovery'
  },
  description: 'Fast 24/7 car battery jump start service in Stansted & Stansted Airport. Surge-protected roadside battery assistance for cars, vans and commercial vehicles.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/stansted-services/jumpstart-service',
  }
};

const roadsideBatteryServices = [
  { title: 'Car battery jump starts', icon: Zap },
  { title: 'Flat and discharged batteries', icon: BatteryWarning },
  { title: 'Dead battery roadside assistance', icon: AlertTriangle },
  { title: 'Vehicle starting problems', icon: Car },
  { title: 'Battery-related breakdowns', icon: Wrench },
  { title: 'Emergency roadside assistance', icon: Clock },
  { title: 'Stansted Airport breakdown assistance', icon: Plane },
  { title: 'Further vehicle recovery when required', icon: Truck },
];

const faqs = [
  { q: "Can you provide a jump start near Stansted Airport?", a: "Yes, our team is stationed locally and provides rapid response jump start services around Stansted Airport, including all short and long-stay car parks." },
  { q: "Can you jump start vans?", a: "Yes, we carry heavy-duty booster packs suitable for jump starting commercial vans, LWB vehicles, and cars of all sizes safely without damaging the ECU." },
  { q: "What should I do if my car won't start?", a: "Ensure you are in a safe location, keep your hazard lights on if you are at the roadside, and call our 24/7 dispatch line. Do not repeatedly try to turn the engine over as this can flood the engine or damage the starter motor." },
  { q: "How quickly can roadside assistance arrive?", a: "Because we operate locally around the M11 and Stansted corridor, we aim to reach most jump start callouts within 30-45 minutes depending on traffic conditions." },
  { q: "What happens if the battery cannot be restarted?", a: "If your battery is completely dead, faulty, or your alternator has failed, we can safely recover your vehicle to a local garage, your home, or a designated repair centre." },
  { q: "Do you provide 24/7 jump start assistance?", a: "Absolutely. We know breakdowns don't stick to business hours. We operate 24 hours a day, 7 days a week, 365 days a year." }
];

export default function StanstedJumpstartPage() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <main className={styles.main}>
        {/* Breadcrumbs */}
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Stansted Services</span>
            <ChevronRight size={14} />
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Stansted Jump Start Service</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/jumpstart_battery_action.jpg"
              alt="Professional roadside technician performing a jump start on a vehicle near Stansted Airport"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>STANSTED 24/7 JUMP START SERVICE</span>
            <h1 className={styles.heroTitle}>Dead Battery?<br/>We Can Get You Moving</h1>
            <p className={styles.heroDesc}>
              Need a jump start in Stansted? Car&amp;Van Recovery provides fast and professional 24/7 roadside assistance in Stansted for drivers dealing with flat or discharged vehicle batteries. Whether you are stranded at Stansted Airport, at home, at work or on the roadside, our experienced recovery team is available day and night to help get your vehicle moving again.
            </p>
            <p className={styles.heroDesc} style={{ marginTop: '-20px' }}>
              Our{' '}
              <Link href="/" className={styles.inlineLink}>
                jump start service in Stansted
              </Link>{' '}
              is designed to provide a quick and reliable solution when your vehicle won&apos;t start because of a flat battery.
            </p>
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} /> CALL NOW: {businessConfig.phone}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
                <MessageCircle size={20} /> WHATSAPP US
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAST JUMP START ASSISTANCE NEAR STANSTED */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>Fast Jump Start Assistance Near Stansted</h2>
              <p className={styles.sectionDesc}>
                A dead or flat battery is one of the most common causes of vehicle breakdowns. This can be particularly frustrating at Stansted Airport, where vehicles may be left parked and unused for extended periods.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                If your car won&apos;t start after returning from a trip, you&apos;ve accidentally left your headlights or interior lights on, or your battery has simply lost its charge, our 24/7 emergency roadside assistance in Stansted is available to help.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                We provide professional car battery jump starts in Stansted using suitable recovery equipment and safe procedures. Our technicians can assess the battery and attempt to get your vehicle started so you can continue your journey safely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: 24/7 ROADSIDE ASSISTANCE IN STANSTED & CHECKLIST */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>24/7 Roadside Assistance in Stansted</h2>
              <p className={styles.sectionDesc}>
                Our Stansted roadside assistance service is available 24 hours a day, 7 days a week. We understand that a flat battery can happen at any time, which is why you don&apos;t have to wait until normal business hours for professional help.
              </p>
              <p style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-red)', marginTop: '20px' }}>
                Our roadside battery assistance can help with:
              </p>
            </div>

            <div className={styles.servicesPillsGrid}>
              {roadsideBatteryServices.map((service, idx) => {
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
                Whether you drive a car, van or commercial vehicle, our team can provide professional roadside support when you need it.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: DEEP CONTENT CARDS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.deepCardsGrid}>
              
              {/* Card 1: Safe & Professional Battery Jump Starts */}
              <div className={styles.deepFeatureCard}>
                <h2 className={styles.deepFeatureTitle}>Safe &amp; Professional Battery Jump Starts</h2>
                <p className={styles.deepFeatureText}>
                  Modern vehicles contain sensitive electronic control units (ECUs) and electrical systems. For this reason, jump starting a vehicle should be carried out carefully using appropriate equipment and procedures.
                </p>
                <p className={styles.deepFeatureText}>
                  Our trained recovery operators provide professional jump starts near Stansted, taking care to use suitable equipment when attempting to restart your vehicle. If the battery cannot hold a charge or the vehicle has another mechanical or electrical fault, we can arrange further vehicle recovery in Stansted.
                </p>
              </div>

              {/* Card 2: Stansted Airport Breakdown Assistance */}
              <div className={styles.deepFeatureCard}>
                <h2 className={styles.deepFeatureTitle}>Stansted Airport Breakdown Assistance</h2>
                <p className={styles.deepFeatureText}>
                  A vehicle breakdown at or near an airport can be especially inconvenient, particularly if you have a flight to catch or have just returned from travelling.
                </p>
                <p className={styles.deepFeatureText}>
                  Our Stansted Airport roadside assistance service helps drivers dealing with flat batteries and other common vehicle problems. If a jump start does not resolve the issue, our team can provide breakdown recovery in Stansted and transport your vehicle safely to a suitable garage, home address or other destination.
                </p>
              </div>

              {/* Card 3: Breakdown Recovery in Stansted (Full Width) */}
              <div className={styles.deepFeatureCard} style={{ gridColumn: '1 / -1' }}>
                <h2 className={styles.deepFeatureTitle}>Breakdown Recovery in Stansted</h2>
                <p className={styles.deepFeatureText}>
                  Not every starting problem is caused by a flat battery. If your vehicle still won&apos;t start after a jump start, there may be an underlying battery, alternator, starter motor or mechanical problem.
                </p>
                <p className={styles.deepFeatureText}>
                  In these situations, our Stansted breakdown recovery service can provide a complete recovery solution. We can recover cars and vans and transport them safely when they cannot be driven.
                </p>
                <p className={styles.deepFeatureText}>
                  For complete vehicle recovery assistance, see our{' '}
                  <Link href="/stansted-services/breakdown-recovery" className={styles.inlineLink}>
                    Stansted breakdown recovery
                  </Link>{' '}
                  service.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: WHEN DO YOU NEED A JUMP START? */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHEN DO YOU NEED A JUMP START?</h2>
              <p className={styles.sectionDesc}>Common scenarios where our professional battery assistance can help.</p>
            </div>
            
            <div className={styles.cardGrid4}>
              <div className={styles.card}>
                <span className={styles.cardNumber}>01</span>
                <div className={styles.cardIcon}><BatteryWarning size={32} /></div>
                <h3 className={styles.cardTitle}>FLAT BATTERY</h3>
                <p className={styles.cardDesc}>Sudden loss of battery power preventing your engine from turning over.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>02</span>
                <div className={styles.cardIcon}><AlertTriangle size={32} /></div>
                <h3 className={styles.cardTitle}>CAR WON&apos;T START</h3>
                <p className={styles.cardDesc}>Clicking sounds or completely dead dashboard when turning the key.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>03</span>
                <div className={styles.cardIcon}><Lightbulb size={32} /></div>
                <h3 className={styles.cardTitle}>LIGHTS LEFT ON</h3>
                <p className={styles.cardDesc}>Interior or exterior lights drained the battery overnight or during a trip.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>04</span>
                <div className={styles.cardIcon}><Clock size={32} /></div>
                <h3 className={styles.cardTitle}>VEHICLE UNUSED</h3>
                <p className={styles.cardDesc}>Battery discharge from sitting idle in an airport car park for weeks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PROCESS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>OUR STANSTED JUMP START PROCESS</h2>
              <p className={styles.sectionDesc}>Getting you back on the road is simple and hassle-free.</p>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>01</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>CALL US</h3>
                  <p className={styles.timelineDesc}>Contact our 24/7 emergency dispatch team.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>02</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>SHARE YOUR LOCATION</h3>
                  <p className={styles.timelineDesc}>Provide your exact location near Stansted.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>03</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>WE COME TO YOU</h3>
                  <p className={styles.timelineDesc}>A technician is dispatched immediately.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>04</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>GET BACK ON THE ROAD</h3>
                  <p className={styles.timelineDesc}>Professional jump start and battery check.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            
            <div className={styles.faqContainer}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: NEED A JUMP START IN STANSTED? (FINAL CTA) */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Need a Jump Start in Stansted?</h2>
            <p className={styles.ctaDesc}>
              Don&apos;t let a dead battery leave you stranded. Car&amp;Van Recovery provides 24/7 jump start and roadside assistance in Stansted, including assistance for motorists travelling to or from Stansted Airport.
            </p>
            <p className={styles.ctaDesc} style={{ fontSize: '1.05rem', opacity: 0.95 }}>
              For fast flat battery assistance, car battery jump starts, emergency roadside assistance and breakdown recovery in Stansted, contact our professional recovery team today.
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
    </>
  );
}
