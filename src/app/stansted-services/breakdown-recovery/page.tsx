import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, AlertTriangle, CheckCircle2, ChevronRight, ArrowRight, Truck, Car, BatteryWarning, Wrench, ShieldCheck, Target } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from '../stansted.module.css';

export const metadata: Metadata = {
  title: 'Stansted Breakdown Recovery | 24/7 Vehicle Recovery',
  description: '24/7 breakdown recovery near Stansted Airport and the M11. Fast professional car and van recovery across Stansted and surrounding areas.',
  alternates: {
    canonical: '/stansted-services/breakdown-recovery',
  }
};

const faqs = [
  { q: "What should I do if my car breaks down near Stansted?", a: "Turn on your hazard lights, pull over to a safe place if possible (like a hard shoulder or lay-by), exit the vehicle from the left-side doors if on a busy road, and call our 24/7 emergency dispatch immediately." },
  { q: "Do you provide breakdown recovery near Stansted Airport?", a: "Yes, we provide rapid response breakdown recovery at Stansted Airport, including all short-stay, long-stay, and meet-and-greet car parks, as well as surrounding approach roads." },
  { q: "Can you recover vans?", a: "Yes, our fleet includes flatbed trucks equipped to handle commercial vans, long-wheelbase (LWB) vehicles, and heavy passenger cars securely." },
  { q: "Can you recover a vehicle from the M11?", a: "Absolutely. We are fully equipped and trained to perform safe motorway recoveries along the entire M11 corridor and surrounding major routes." },
  { q: "What happens if my vehicle won't start?", a: "If your vehicle won't start, we can attempt a roadside jump start. If the issue is mechanical or more complex, we will securely load your vehicle and transport it to a garage." },
  { q: "Can you transport my vehicle to a garage?", a: "Yes, we offer complete vehicle transportation. We can take your car to a local repair center, your home, or any agreed destination across the UK." },
  { q: "Are you available 24/7?", a: "Yes, our vehicle recovery services operate 24 hours a day, 7 days a week, 365 days a year to ensure you are never stranded." },
  { q: "How do I request vehicle recovery?", a: "The fastest way to request recovery is to call our emergency line directly. You can also send us a message on WhatsApp with your live location for a rapid quote." }
];

export default function StanstedBreakdownRecoveryPage() {
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
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Stansted Breakdown Recovery</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/Poster/Car Recovery.png"
              alt="High-quality realistic recovery truck recovering a stranded car on a UK road near Stansted"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>24/7 STANSTED RECOVERY</span>
            <h1 className={styles.heroTitle}>BROKEN DOWN NEAR STANSTED?<br/>WE'RE HERE TO HELP.</h1>
            <p className={styles.heroDesc}>
              Professional breakdown recovery for cars and vans near Stansted Airport, the M11 corridor and surrounding areas.
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

        {/* SECTION 2: 24/7 BREAKDOWN RECOVERY */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>24/7 BREAKDOWN RECOVERY NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                A vehicle breakdown can happen at any time, often when you least expect it. Whether you are heading to the airport for a flight or commuting along the M11, being stranded on the roadside is stressful. We provide rapid, professional breakdown recovery to get you and your vehicle to safety.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                Our fleet is equipped to handle a wide range of common breakdown situations, including sudden engine failure, electrical problems, flat batteries, fuel delivery issues, flat tyres, and accident-related recovery. If your vehicle cannot be fixed at the roadside, we offer secure transportation to your chosen destination.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT TYPE OF RECOVERY DO YOU NEED? */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHAT TYPE OF RECOVERY DO YOU NEED?</h2>
              <p className={styles.sectionDesc}>Select the service that matches your current situation.</p>
            </div>
            
            <div className={styles.cardGrid3}>
              <Link href="/car-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Car size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>CAR RECOVERY</h3>
                  <p className={styles.cardDesc}>Flatbed transport for all passenger vehicles, SUVs, and 4x4s.</p>
                </div>
              </Link>
              
              <Link href="/van-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Truck size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>VAN RECOVERY</h3>
                  <p className={styles.cardDesc}>Heavy-duty recovery for commercial vans and LWB vehicles.</p>
                </div>
              </Link>
              
              <Link href="/stansted-services/jumpstart-service" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><BatteryWarning size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>NON-STARTING VEHICLE</h3>
                  <p className={styles.cardDesc}>Assistance for dead batteries and electrical failures.</p>
                </div>
              </Link>
              
              <Link href="/stansted-services/tyre-change-repair" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Wrench size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>ROADSIDE BREAKDOWN</h3>
                  <p className={styles.cardDesc}>Emergency help for punctures, flat tyres, and minor faults.</p>
                </div>
              </Link>
              
              <Link href="/breakdown-recovery" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><ShieldCheck size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>ACCIDENT RECOVERY</h3>
                  <p className={styles.cardDesc}>Safe retrieval and transport of accident-damaged vehicles.</p>
                </div>
              </Link>
              
              <Link href="/services/vehicle-transportation" style={{ textDecoration: 'none', display: 'block' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}><Target size={36} strokeWidth={1.5} /></div>
                  <h3 className={styles.cardTitle}>VEHICLE TRANSPORTATION</h3>
                  <p className={styles.cardDesc}>Scheduled transport to garages, homes, or auctions.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROCESS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>HOW OUR STANSTED BREAKDOWN RECOVERY WORKS</h2>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>01</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>CALL US</h3>
                  <p className={styles.timelineDesc}>Contact our emergency line immediately.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>02</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>SHARE YOUR LOCATION</h3>
                  <p className={styles.timelineDesc}>Provide your exact breakdown spot.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>03</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>RECOVERY TEAM DISPATCHED</h3>
                  <p className={styles.timelineDesc}>A truck is sent to your location.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.timelineNumber}>04</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>SAFE VEHICLE RECOVERY</h3>
                  <p className={styles.timelineDesc}>Secure loading and transport.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PREMIUM FEATURE BLOCKS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHY CHOOSE OUR STANSTED BREAKDOWN RECOVERY?</h2>
            </div>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>24/7 AVAILABILITY</h3>
                  <p className={styles.benefitDesc}>Professional roadside assistance day or night.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>FAST RESPONSE</h3>
                  <p className={styles.benefitDesc}>Rapid assistance when available in the local area.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>CARS & VANS</h3>
                  <p className={styles.benefitDesc}>Recovery for different vehicle types and sizes.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>FULLY INSURED</h3>
                  <p className={styles.benefitDesc}>Professional service ensuring your vehicle is protected.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>LOCAL COVERAGE</h3>
                  <p className={styles.benefitDesc}>Serving Stansted, M11 and surrounding local routes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: STANSTED AIRPORT & M11 FOCUS */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitLayout} style={{ alignItems: 'center' }}>
              <div>
                <h2 className={styles.h2}>STANSTED AIRPORT & M11 BREAKDOWN RECOVERY</h2>
                <p className={styles.sectionDesc} style={{ marginBottom: '24px' }}>
                  Breakdowns around major roads and airport routes can be incredibly stressful, especially if you have a flight to catch or are returning from a long journey. The M11 corridor and the roads surrounding Stansted Mountfitchet and Bishop's Stortford are high-traffic zones requiring professional recovery expertise.
                </p>
                <p className={styles.sectionDesc} style={{ marginBottom: '24px' }}>
                  Our team is highly experienced in navigating these busy routes safely. We understand the urgency of airport-related breakdowns and provide rapid, reliable vehicle recovery to help alleviate the stress of being stranded in these critical areas.
                </p>
                <div className={styles.areaTags} style={{ justifyContent: 'flex-start' }}>
                  <span className={styles.areaTag}>Stansted Airport</span>
                  <span className={styles.areaTag}>M11</span>
                  <span className={styles.areaTag}>Stansted Mountfitchet</span>
                  <span className={styles.areaTag}>Bishop's Stortford</span>
                  <span className={styles.areaTag}>Cambridge</span>
                  <span className={styles.areaTag}>Surrounding areas</span>
                </div>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="/images/car_towing_truck.jpg" alt="Recovery truck operating near motorway" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CARS & VANS (SPLIT LAYOUT) */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>BREAKDOWN RECOVERY FOR CARS & VANS</h2>
            </div>
            
            <div className={styles.splitLayout}>
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/hero_recovery_truck.jpg" alt="Car Breakdown Recovery" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>CAR RECOVERY</h3>
                  <p className={styles.splitDesc}>
                    Safe and efficient flatbed recovery for all makes and models of passenger cars. Whether you drive a small hatchback, a luxury saloon, or a modern 4x4, our trucks are equipped to load and transport your vehicle securely without causing further damage.
                  </p>
                  <Link href="/car-recovery" className={styles.splitLink}>
                    Explore Car Recovery Services <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/Poster/Van Recovery.png" alt="Van Breakdown Recovery" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>VAN RECOVERY</h3>
                  <p className={styles.splitDesc}>
                    Commercial vehicles require specialized handling due to their size and weight. We offer heavy-duty van recovery for transit vans, LWB vehicles, and light commercial vehicles, ensuring your business asset is recovered safely and promptly.
                  </p>
                  <Link href="/van-recovery" className={styles.splitLink}>
                    Explore Van Recovery Services <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
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

