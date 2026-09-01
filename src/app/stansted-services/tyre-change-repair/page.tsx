import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Wrench, Settings, AlertTriangle, Wind, Disc, Clock, CheckCircle2, ChevronRight, ArrowRight, Activity, Circle, ShieldCheck } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from '../stansted.module.css';

export const metadata: Metadata = {
  title: 'Stansted Tyre Change & Repair | 24/7 Mobile Tyre Assistance',
  description: 'Need a tyre change or repair near Stansted? Professional roadside tyre assistance for cars and vans across Stansted and surrounding areas.',
  alternates: {
    canonical: '/stansted-services/tyre-change-repair',
  }
};

const faqs = [
  { q: "Can you change a tyre on the side of the M11?", a: "Yes, our technicians are fully trained to operate safely on the M11 and high-speed roads. We carry the necessary warning beacons and safety equipment to perform roadside tyre changes." },
  { q: "Do you supply new tyres or just fit my spare?", a: "We can fit your existing spare wheel securely. If your vehicle doesn't have a spare, we can often source a replacement or recover you to a local tyre fitting centre depending on availability." },
  { q: "Can a puncture be repaired at the roadside?", a: "If the puncture is in the central tread area of the tyre and meets legal safety requirements, we can perform a safe, permanent roadside repair." },
  { q: "What if my alloy wheel is damaged?", a: "If the wheel itself is cracked or severely damaged, a tyre change may not be possible. In these cases, we can provide complete vehicle recovery to a garage of your choice." },
  { q: "Do you handle commercial van tyres?", a: "Yes, our mobile tyre service covers both passenger cars and commercial vans, including heavy-duty locking wheel nut removal and high-pressure inflation." },
  { q: "How long does a mobile tyre change take?", a: "Once our technician arrives, a standard wheel change or puncture repair usually takes between 15 to 30 minutes, getting you back on the road swiftly." }
];

export default function StanstedTyreChangePage() {
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
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Stansted Tyre Change & Repair</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/Poster/change tire.png"
              alt="Professional technician changing a vehicle tyre on a UK roadside near Stansted"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>STANSTED MOBILE TYRE SERVICE</span>
            <h1 className={styles.heroTitle}>FLAT TYRE?<br/>WE'LL HELP YOU GET MOVING.</h1>
            <p className={styles.heroDesc}>
              Emergency roadside tyre assistance for cars and vans across Stansted and surrounding areas. We provide 24/7 support for punctures, blowouts, and spare wheel fitting.
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

        {/* SECTION 2: ROADSIDE TYRE ASSISTANCE */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>24/7 ROADSIDE TYRE ASSISTANCE NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                Dealing with a flat tyre or blowout on a busy road can be stressful and highly dangerous. Don't risk changing a wheel yourself on the hard shoulder. Our professional mobile tyre service operates 24/7 across the Stansted area, providing rapid and safe assistance directly at your location.
              </p>
            </div>
            
            <div className={styles.cardGrid3}>
              <div className={styles.benefitItem}>
                <Settings className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Tyre Change</h3>
                  <p className={styles.benefitDesc}>Complete and secure replacement of your damaged wheel.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <Activity className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Puncture Assistance</h3>
                  <p className={styles.benefitDesc}>On-the-spot legal roadside puncture repairs when safe.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <Wrench className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Spare Wheel Fitting</h3>
                  <p className={styles.benefitDesc}>Professional installation of your space-saver or full spare.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <Circle className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Tyre Inspection</h3>
                  <p className={styles.benefitDesc}>Safety checks for sidewall damage or slow leaks.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <ShieldCheck className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Emergency Roadside Assistance</h3>
                  <p className={styles.benefitDesc}>Full support including locking wheel nut removal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMON TYRE PROBLEMS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>COMMON TYRE PROBLEMS</h2>
              <p className={styles.sectionDesc}>We handle all types of emergency tyre situations at the roadside.</p>
            </div>
            
            <div className={styles.cardGrid4}>
              <div className={styles.card}>
                <span className={styles.cardNumber}>01</span>
                <div className={styles.cardIcon}><Disc size={32} /></div>
                <h3 className={styles.cardTitle}>FLAT TYRE</h3>
                <p className={styles.cardDesc}>Complete loss of tyre pressure, requiring an immediate wheel change.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>02</span>
                <div className={styles.cardIcon}><Activity size={32} /></div>
                <h3 className={styles.cardTitle}>PUNCTURE</h3>
                <p className={styles.cardDesc}>Nails, screws, or debris causing a slow or sudden leak in the tread.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>03</span>
                <div className={styles.cardIcon}><AlertTriangle size={32} /></div>
                <h3 className={styles.cardTitle}>DAMAGED TYRE</h3>
                <p className={styles.cardDesc}>Sidewall bulges, tears, or pothole damage making the tyre unsafe.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardNumber}>04</span>
                <div className={styles.cardIcon}><Wind size={32} /></div>
                <h3 className={styles.cardTitle}>BLOWOUT</h3>
                <p className={styles.cardDesc}>A sudden and dangerous explosion of the tyre while driving.</p>
              </div>
            </div>
            
            <div className={styles.cardGrid4} style={{ marginTop: '24px', justifyContent: 'center', display: 'flex' }}>
              <div className={styles.card} style={{ maxWidth: '300px' }}>
                <span className={styles.cardNumber}>05</span>
                <div className={styles.cardIcon}><Settings size={32} /></div>
                <h3 className={styles.cardTitle}>SPARE TYRE REQUIRED</h3>
                <p className={styles.cardDesc}>Assistance safely fitting your emergency space-saver wheel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>HOW OUR MOBILE TYRE SERVICE WORKS</h2>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>01</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>CALL US</h3>
                  <p className={styles.timelineDesc}>Report your tyre emergency.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>02</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>SHARE LOCATION</h3>
                  <p className={styles.timelineDesc}>Pinpoint where you are stranded.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>03</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>TYRE ASSESSMENT</h3>
                  <p className={styles.timelineDesc}>We inspect the damage safely.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>04</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>CHANGE / REPAIR</h3>
                  <p className={styles.timelineDesc}>Fit the spare or repair the puncture.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>05</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>GET BACK ON THE ROAD</h3>
                  <p className={styles.timelineDesc}>Safe continuation of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CARS & VANS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>MOBILE TYRE ASSISTANCE FOR CARS & VANS</h2>
            </div>
            
            <div className={styles.splitLayout}>
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/Poster/change tire & repair.png" alt="Car tyre change" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>PASSENGER CARS</h3>
                  <p className={styles.splitDesc}>
                    We handle all makes and models of passenger cars, including SUVs and 4x4s. Whether you have standard alloys, locking wheel nuts, or low-profile tyres, our technicians have the tools to safely lift your vehicle and perform the wheel change without damaging your rims.
                  </p>
                </div>
              </div>
              
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/Poster/Van Recovery.png" alt="Commercial van tyre change" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>COMMERCIAL VANS</h3>
                  <p className={styles.splitDesc}>
                    Commercial vans, Transits, and LWB vehicles carry heavy loads and require specialized heavy-duty lifting equipment. We use commercial-grade jacks and high-torque tools to safely remove and replace commercial van wheels, minimizing your business downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BENEFITS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHY CHOOSE OUR STANSTED TYRE SERVICE?</h2>
            </div>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>24/7 Availability</h3>
                  <p className={styles.benefitDesc}>Emergency tyre help whenever you need it.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Professional Equipment</h3>
                  <p className={styles.benefitDesc}>Specialist jacks and locking nut removers.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Fast Response</h3>
                  <p className={styles.benefitDesc}>Local dispatch around Stansted and M11.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Roadside Assistance</h3>
                  <p className={styles.benefitDesc}>Full safety protocols on high-speed roads.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Cars & Vans</h3>
                  <p className={styles.benefitDesc}>Equipped for all vehicle weights.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>Local Coverage</h3>
                  <p className={styles.benefitDesc}>Dedicated service for the local region.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: AREAS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>AREAS WE COVER</h2>
              <p className={styles.sectionDesc}>
                We provide rapid mobile tyre assistance and <Link href="/stansted-services/breakdown-recovery" style={{ color: 'var(--accent-red)', fontWeight: 600 }}>Stansted breakdown recovery</Link> across the local region.
              </p>
            </div>
            
            <div className={styles.areaTags}>
              <span className={styles.areaTag}>Stansted</span>
              <span className={styles.areaTag}>Stansted Airport</span>
              <span className={styles.areaTag}>M11 Motorway</span>
              <span className={styles.areaTag}>Cambridge</span>
              <span className={styles.areaTag}>Bishop's Stortford</span>
              <span className={styles.areaTag}>Surrounding Areas</span>
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

