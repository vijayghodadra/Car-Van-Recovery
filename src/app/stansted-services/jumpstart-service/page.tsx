import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Zap, AlertTriangle, Lightbulb, Clock, CheckCircle2, ChevronRight, ArrowRight, BatteryWarning } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from '../stansted.module.css';

export const metadata: Metadata = {
  title: 'Stansted Jump Start Service | 24/7 Car Battery Assistance',
  description: '24/7 jump start service near Stansted Airport and surrounding areas. Fast roadside battery assistance for cars, vans and commercial vehicles.',
  alternates: {
    canonical: '/stansted-services/jumpstart-service',
  }
};

const faqs = [
  { q: "Can you provide a jump start near Stansted Airport?", a: "Yes, our team is stationed locally and provides rapid response jump start services around Stansted Airport, including all short and long-stay car parks." },
  { q: "Can you jump start vans?", a: "Yes, we carry heavy-duty booster packs suitable for jump starting commercial vans, LWB vehicles, and cars of all sizes safely without damaging the ECU." },
  { q: "What should I do if my car won't start?", a: "Ensure you are in a safe location, keep your hazard lights on if you are at the roadside, and call our 24/7 dispatch line. Do not repeatedly try to turn the engine over as this can flood the engine or damage the starter motor." },
  { q: "How quickly can roadside assistance arrive?", a: "Because we operate locally around the M11 and Stansted corridor, we aim to reach most jump start callouts within 30-45 minutes depending on traffic conditions." },
  { q: "What happens if the battery cannot be restarted?", a: "If your battery is completely dead, faulty, or your alternator has failed, we can safely recover your vehicle to a local garage, your home, or a designated repair centre." },
  { q: "Do you provide 24/7 jump start assistance?", a: "Absolutely. We know breakdowns don't stick to business hours. We operate 24 hours a day, 7 days a week, 365 days a year." }
];

export default function StanstedJumpstartPage() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
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
        {/* Breadcrumbs (Visual) */}
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Stansted Services</span>
            <ChevronRight size={14} />
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Stansted Jumpstart Service</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/Poster/Jumpstart Service.png"
              alt="Professional roadside technician performing a jump start on a vehicle near Stansted Airport"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>STANSTED 24/7 JUMP START SERVICE</span>
            <h1 className={styles.heroTitle}>DEAD BATTERY?<br/>WE CAN GET YOU MOVING.</h1>
            <p className={styles.heroDesc}>
              Need a jump start near Stansted? Our roadside assistance service helps drivers with flat or discharged vehicle batteries, with professional assistance available when you need it.
            </p>
            <div className={styles.heroButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} /> CALL NOW<br/><span style={{ fontSize: '0.8rem', fontWeight: 500, marginLeft: '8px' }}>{businessConfig.phone}</span>
              </a>
              <a href={whatsappUrl} className={styles.btnGreen}>
                <MessageCircle size={20} /> WHATSAPP US
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAST JUMP START ASSISTANCE */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>FAST JUMP START ASSISTANCE NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                A dead battery is one of the most common causes of a vehicle breakdown, especially at locations like airports where cars are often left unused for extended periods. If your vehicle won't start after a trip, or you've accidentally left your lights on, our 24/7 emergency roadside assistance team is here to help.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                We provide professional, surge-protected jump starts to ensure your vehicle's sensitive ECU and electrical systems are not damaged during the process. We assist with all battery-related roadside problems, getting you safely on your way. If the issue is beyond a flat battery, we also offer complete <Link href="/stansted-services/breakdown-recovery" style={{ color: 'var(--accent-red)', fontWeight: 600 }}>Stansted breakdown recovery</Link> to transport your vehicle securely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHEN DO YOU NEED A JUMP START? */}
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
                <h3 className={styles.cardTitle}>CAR WON'T START</h3>
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

        {/* SECTION 4: PROCESS */}
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

        {/* SECTION 5: CARS & VANS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>JUMP START SERVICE FOR CARS & VANS</h2>
            </div>
            
            <div className={styles.splitLayout}>
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/flat_battery_assistance.jpg" alt="Car jump start assistance" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>CAR JUMP START</h3>
                  <p className={styles.splitDesc}>
                    Safe and reliable jump starts for all passenger vehicles, from family hatchbacks to modern electric and hybrid vehicles requiring specialized 12v auxiliary battery assistance.
                  </p>
                  <Link href="/car-recovery" className={styles.splitLink}>
                    View Car Recovery <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/Poster/LWB Van Recovery.png" alt="Van jump start assistance" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>VAN JUMP START</h3>
                  <p className={styles.splitDesc}>
                    Commercial vehicles and LWB vans often require higher cranking amps to turn over heavy diesel engines. Our heavy-duty jump packs are perfectly equipped to handle large commercial batteries.
                  </p>
                  <Link href="/van-recovery" className={styles.splitLink}>
                    View Van Recovery <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BENEFITS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHY CHOOSE OUR STANSTED JUMP START SERVICE?</h2>
            </div>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>24/7 Assistance</h3>
                  <p className={styles.benefitDesc}>Available day and night, 365 days a year.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Fast Response</h3>
                  <p className={styles.benefitDesc}>Rapid dispatch to locations in our coverage area.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Professional Equipment</h3>
                  <p className={styles.benefitDesc}>Surge-protected packs safe for modern ECUs.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Experienced Operators</h3>
                  <p className={styles.benefitDesc}>Fully trained vehicle recovery technicians.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Cars & Vans</h3>
                  <p className={styles.benefitDesc}>Equipped for both passenger and commercial vehicles.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Roadside Assistance</h3>
                  <p className={styles.benefitDesc}>Comprehensive help beyond just a jump start.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SURROUNDING AREAS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>STANSTED & SURROUNDING AREAS</h2>
              <p className={styles.sectionDesc}>
                We provide our services across a wide local area. Whether you are at the airport terminal car park or broken down on a nearby motorway, we can reach you.
              </p>
            </div>
            
            <div className={styles.areaTags}>
              <span className={styles.areaTag}>Stansted</span>
              <span className={styles.areaTag}>Stansted Airport</span>
              <span className={styles.areaTag}>Bishop's Stortford</span>
              <span className={styles.areaTag}>M11 Corridor</span>
              <span className={styles.areaTag}>Cambridge</span>
              <span className={styles.areaTag}>Surrounding Areas</span>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/areas-we-cover" style={{ color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none' }}>
                View All Coverage Areas <ArrowRight size={16} style={{ verticalAlign: 'middle' }} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className={styles.section}>
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
      </main>
    </>
  );
}

