import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  Truck, 
  Car, 
  BatteryWarning, 
  Wrench, 
  ShieldCheck, 
  Target, 
  Clock, 
  Plane, 
  Navigation, 
  Briefcase,
  Disc,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import styles from '../stansted.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Breakdown Recovery Near Stansted: Reliable 24/7 Car and Van Recovery | Car&Van Recovery',
  },
  description: 'Fast, reliable 24/7 breakdown recovery near Stansted Airport, M11 and surrounding Essex & Cambridgeshire roads. Emergency car and van towing, jump starts, tyre changes and accident recovery.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/stansted-services/breakdown-recovery',
  }
};

const faqs = [
  { 
    question: "Can I get breakdown recovery near Stansted Airport?", 
    answer: "Recovery is available around Stansted, subject to the provider's service area and access arrangements. Contact our recovery desk with your exact location, particularly if your vehicle is inside an airport car park (Short Stay, Long Stay, Mid Stay, or Meet & Greet) or a restricted-access facility." 
  },
  { 
    question: "Is 24 hour breakdown recovery available near Stansted?", 
    answer: "Yes, Car & Van Recovery provides round-the-clock 24/7 emergency vehicle recovery and roadside assistance near Stansted, 365 days a year, day and night." 
  },
  { 
    question: "How much does car recovery near Stansted cost?", 
    answer: "The price depends on the vehicle, pickup location, recovery distance, time and type of service required. We provide clear, transparent upfront quotes before dispatching our recovery truck." 
  },
  { 
    question: "Can a recovery company help with a flat battery?", 
    answer: "Yes, our roadside technicians carry professional heavy-duty jump start equipment to safely restart vehicles with discharged batteries at Stansted Airport parking and surrounding routes." 
  },
  { 
    question: "Can a broken-down van be recovered near Stansted?", 
    answer: "Van recovery is available for commercial vans, long-wheelbase vehicles, and tradesperson vans. Provide accurate details on your vehicle dimensions, load and condition when requesting assistance." 
  },
  { 
    question: "Does Car & Van Recovery provide M11 breakdown recovery?", 
    answer: "Yes, Car & Van Recovery offers specialized motorway breakdown recovery along the M11 corridor near Stansted (Junctions 7, 8, 8A, and 9) and surrounding connecting routes." 
  }
];

const batterySigns = [
  'The engine turns over slowly or does not start',
  'Dashboard lights appear dim or flicker',
  'Clicking sounds occur when attempting to start the engine',
  'Electrical equipment does not operate normally'
];

export default function StanstedBreakdownRecoveryPage() {
  const whatsappUrl = `https://wa.me/447438189791`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <main className={styles.main}>
        {/* Breadcrumbs */}
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/stansted-services/breakdown-recovery" style={{ color: 'var(--brand-black)', textDecoration: 'none' }}>Stansted Services</Link>
            <ChevronRight size={14} />
            <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Breakdown Recovery Near Stansted</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/Poster/Car Recovery.png"
              alt="Breakdown Recovery Near Stansted Airport and M11"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>24/7 STANSTED &amp; M11 MOTORWAY RECOVERY</span>
            <h1 className={styles.heroTitle}>
              Breakdown Recovery Near Stansted: <span className={styles.textRed}>Reliable 24/7 Car and Van Recovery</span>
            </h1>
            <p className={styles.heroDesc}>
              Experiencing a vehicle breakdown can be stressful, especially when travelling to Stansted Airport, commuting to work or driving along the M11. Fast roadside assistance, flat battery jump starts, tyre changes and emergency towing.
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

        {/* INTRO SECTION */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>Dependable Breakdown Recovery Across Stansted &amp; Surrounding Areas</h2>
              <p className={styles.sectionDesc}>
                Experiencing a vehicle breakdown can be stressful, especially when you are travelling to the airport, commuting to work or driving along a busy road. A car that suddenly refuses to start or a van that develops a mechanical fault can interrupt your plans and leave you unsure about what to do next.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                For motorists travelling around Stansted, having access to reliable <Link href="/" className={styles.inlineLink}>breakdown recovery near Stansted</Link> can make a difficult situation easier to manage. Whether you are dealing with a flat battery, damaged tyre, engine problem or a vehicle that needs towing, arranging suitable roadside assistance can help you get the support you need.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                Car &amp; Van Recovery provides vehicle recovery and roadside assistance solutions for drivers who require help with cars and commercial vans. The service covers its designated areas around Stansted, the <Link href="/m11-corridor" className={styles.inlineLink}>M11 corridor</Link>, Cambridgeshire and surrounding locations, subject to availability.
              </p>
              <br/>
              <p className={styles.sectionDesc}>
                This guide explains how breakdown recovery works, common reasons vehicles break down near Stansted, what to do when your vehicle stops working and how to arrange appropriate recovery assistance.
              </p>
            </div>
          </div>
        </section>

        {/* WHY YOU MAY NEED BREAKDOWN RECOVERY */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>WHY YOU MAY NEED BREAKDOWN RECOVERY NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                Stansted is an important travel location for motorists using the airport, nearby roads and surrounding towns. Drivers travel through the area for work, holidays, business deliveries and everyday journeys. A vehicle problem can occur at any time, whether heading to the airport, returning home, or travelling along the M11.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Unexpected Car Breakdowns</h3>
                <p className={styles.deepFeatureText}>
                  Cars can develop mechanical and electrical problems even when they have been regularly maintained. Engine faults, overheating, battery problems and tyre damage can make a vehicle unsafe or impossible to drive.
                </p>
                <p className={styles.deepFeatureText}>
                  If your vehicle develops a serious fault, continuing to drive may cause additional damage or create a safety risk. Professional car recovery can help arrange transportation to a garage, home address or another agreed destination, depending on the vehicle&apos;s condition and available equipment.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Van Breakdowns Affecting Businesses</h3>
                <p className={styles.deepFeatureText}>
                  Commercial vans are essential for tradespeople, couriers, delivery companies and many small businesses around Stansted and Essex. When a van breaks down, it can delay deliveries, interrupt scheduled appointments and affect business operations.
                </p>
                <p className={styles.deepFeatureText}>
                  Van breakdown recovery provides a practical option when a commercial vehicle cannot continue its journey safely. When requesting assistance, provide information about the van&apos;s size, model, approximate weight and condition. Long-wheelbase and heavily loaded vehicles may require suitable recovery equipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 24 HOUR BREAKDOWN RECOVERY NEAR STANSTED */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.splitLayout} style={{ alignItems: 'center' }}>
              <div>
                <h2 className={styles.h2}>24 HOUR BREAKDOWN RECOVERY NEAR STANSTED</h2>
                <p className={styles.sectionDesc} style={{ marginBottom: '16px' }}>
                  Vehicle breakdowns do not always happen during normal business hours. A car may fail to start early in the morning, or a van may develop a fault late at night after a long working day. Access to 24 hour breakdown recovery can be particularly useful for drivers who need to arrange assistance outside ordinary working hours.
                </p>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-black)', marginTop: '20px', marginBottom: '8px' }}>
                  Emergency Roadside Assistance Day and Night
                </h3>
                <p className={styles.sectionDesc} style={{ marginBottom: '16px' }}>
                  Roadside assistance can help motorists deal with certain vehicle problems without immediately transporting the vehicle. Depending on the fault, vehicle and available equipment, assistance may include a battery jump start, help with a suitable tyre problem or an assessment of whether recovery is required.
                </p>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-black)', marginTop: '20px', marginBottom: '8px' }}>
                  Car Recovery for Local Drivers and Visitors
                </h3>
                <p className={styles.sectionDesc}>
                  Drivers near Stansted may include local residents, airport passengers, commuters and visitors unfamiliar with the surrounding roads. If you experience a breakdown in an unfamiliar location, identifying your position is an important first step. Provide the road name, nearby junction, postcode or a recognisable landmark. If you are at an airport car park or restricted-access facility, explain the exact area and access requirements.
                </p>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="/images/roadside_recovery_van.jpg" alt="24 Hour Breakdown Recovery near Stansted" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* STANSTED AIRPORT BREAKDOWN RECOVERY */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>STANSTED AIRPORT BREAKDOWN RECOVERY &amp; ROADSIDE ASSISTANCE</h2>
              <p className={styles.sectionDesc}>
                A vehicle breakdown near an airport can create additional pressure, particularly when you are travelling to catch a flight or collecting passengers. A flat battery, starting problem or mechanical fault may leave you unable to continue your journey as planned.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>What to Do If Your Car Will Not Start at Stansted Airport</h3>
                <p className={styles.deepFeatureText}>
                  If your car will not start in an airport car park or another safe parking area, first check that the vehicle is positioned safely and does not obstruct other traffic. Look for obvious signs of a battery problem, such as dim dashboard lights, clicking sounds or slow engine cranking.
                </p>
                <p className={styles.deepFeatureText}>
                  Avoid repeatedly attempting to start the vehicle if this does not work. Contact a suitable roadside assistance provider and explain your location, vehicle model and symptoms. If the vehicle is in an airport car park, check whether recovery vehicles require permission or specific access arrangements. Confirm access and availability before arranging the service.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Airport Parking and Flat Battery Problems</h3>
                <p className={styles.deepFeatureText}>
                  Cars that remain unused for extended periods can experience battery discharge. This may happen when a vehicle is left parked for several days or weeks, particularly if the battery is older or the vehicle has an electrical drain.
                </p>
                <p className={styles.deepFeatureText}>
                  A suitable <Link href="/stansted-services/jumpstart-service" className={styles.inlineLink}>jump start service</Link> may help when the battery is discharged and the vehicle&apos;s electrical system is otherwise in good condition. However, a jump start will not resolve every starting problem. A faulty starter motor, damaged battery or charging-system issue may require further inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY CAR RECOVERY IN STANSTED */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>EMERGENCY CAR RECOVERY IN STANSTED</h2>
              <p className={styles.sectionDesc}>
                Car recovery is necessary when a vehicle cannot be repaired safely at the roadside or is no longer suitable for driving. A breakdown may result from a mechanical fault, accident damage, overheating or another issue that prevents the vehicle from operating normally.
              </p>
            </div>

            <div className={styles.splitLayout} style={{ marginTop: '32px' }}>
              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/car_towing_truck.jpg" alt="Vehicle Towing for Broken-Down Cars" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>Vehicle Towing for Broken-Down Cars</h3>
                  <p className={styles.splitDesc}>
                    Vehicle towing can help transport a car to a garage, home address or another agreed destination. The appropriate recovery method depends on the vehicle&apos;s condition, drivetrain, location and manufacturer requirements. Some vehicles cannot be safely towed using ordinary methods, particularly if they have transmission damage, locked wheels or significant accident damage.
                  </p>
                  <Link href="/car-recovery" className={styles.splitLink}>
                    Explore Car Recovery Options <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.splitCard}>
                <div className={styles.splitImgWrap}>
                  <Image src="/images/breakdown.jpg" alt="Accident and Mechanical Breakdown Recovery" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.splitContent}>
                  <h3 className={styles.splitTitle}>Accident and Mechanical Breakdown Recovery</h3>
                  <p className={styles.splitDesc}>
                    Following a road traffic collision, a vehicle may have damaged suspension, steering, wheels or other components. Even if the car appears capable of moving, it may not be safe to drive. If anyone is injured or the accident creates immediate danger, contact emergency services (999) first. Once safe, our operators arrange secure flatbed transportation.
                  </p>
                  <Link href="/breakdown-recovery" className={styles.splitLink}>
                    Accident Recovery Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VAN BREAKDOWN RECOVERY NEAR STANSTED */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>VAN BREAKDOWN RECOVERY NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                Commercial vehicles often cover substantial distances and may carry tools, equipment or goods. A breakdown can therefore create practical challenges beyond the vehicle itself.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Recovery for Commercial Vans</h3>
                <p className={styles.deepFeatureText}>
                  Van recovery can be required when a commercial vehicle develops an engine fault, clutch problem, electrical failure or another mechanical issue. If a warning light appears or the vehicle begins to lose power, stop at a safe location when possible.
                </p>
                <p className={styles.deepFeatureText}>
                  Avoid continuing to drive if doing so could put you or other road users at risk. When requesting recovery, provide the vehicle&apos;s make, model, dimensions and approximate weight. Mention whether the van is loaded and whether any wheels are locked or damaged.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Supporting Tradespeople and Delivery Drivers</h3>
                <p className={styles.deepFeatureText}>
                  For tradespeople and delivery drivers, a reliable van is often essential to completing scheduled work. A breakdown can result in missed appointments, delayed deliveries and additional operating costs.
                </p>
                <p className={styles.deepFeatureText}>
                  Keeping recovery contact details available, maintaining the vehicle regularly and addressing warning lights promptly can help drivers prepare for unexpected problems. Car &amp; Van Recovery provides recovery solutions for cars and commercial vans in its service areas, subject to vehicle compatibility and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* M11 BREAKDOWN RECOVERY NEAR STANSTED */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderLeft}>
              <h2 className={styles.h2}>M11 BREAKDOWN RECOVERY NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                The M11 is an important motorway for motorists travelling between London, Stansted and Cambridge. Drivers using the motorway may be commuting, travelling to the airport or transporting goods. A breakdown on the M11 requires particular care because of high-speed traffic and the limited places where vehicles can safely stop.
              </p>
            </div>

            <div className={styles.deepCardsGrid} style={{ marginTop: '28px' }}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>What to Do If Your Vehicle Breaks Down on the M11</h3>
                <p className={styles.deepFeatureText}>
                  If your vehicle develops a fault while travelling on the M11, prioritise your safety. Where possible, leave the motorway at the next exit or enter a service area if it is safe to do so. If this is not possible, follow official motorway breakdown procedures and try to reach an emergency area or hard shoulder where available.
                </p>
                <p className={styles.deepFeatureText}>
                  Switch on your hazard warning lights when appropriate. If you can safely exit the vehicle, use the side furthest from traffic (left-hand doors) and move behind a safety barrier. Do not attempt repairs or change a tyre beside live motorway traffic. If you are stranded in a live lane, call 999 immediately.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Arranging M11 Recovery Near Stansted</h3>
                <p className={styles.deepFeatureText}>
                  Once you are in a safe position, provide your location as accurately as possible. Useful details include your direction of travel, nearest junction (e.g., J8 Stansted, J8A, J9), motorway marker post or nearby road sign.
                </p>
                <p className={styles.deepFeatureText}>
                  Explain the vehicle&apos;s condition and whether it can move under its own power. Car &amp; Van Recovery offers recovery solutions around its designated service areas, including the M11 corridor and surrounding locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BATTERY & TYRE ASSISTANCE */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>FLAT BATTERY &amp; TYRE ASSISTANCE NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                Two of the most frequent roadside emergencies near airports and motorways are battery failure and punctured tyres.
              </p>
            </div>

            <div className={styles.deepCardsGrid}>
              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Signs Your Vehicle May Have a Flat Battery</h3>
                <p className={styles.deepFeatureText}>Common signs of a discharged battery include:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px 0' }}>
                  {batterySigns.map((sign, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.95rem', color: 'var(--brand-black)' }}>
                      <CheckCircle2 size={16} color="var(--accent-red)" />
                      {sign}
                    </li>
                  ))}
                </ul>
                <p className={styles.deepFeatureText}>
                  A professional jump start may help when the battery is discharged and the vehicle&apos;s electrical system is otherwise in good condition. Never attempt to jump-start a battery that is swollen, leaking or visibly damaged.
                </p>
              </div>

              <div className={styles.deepFeatureCard}>
                <h3 className={styles.deepFeatureTitle}>Tyre Problems &amp; Emergency Tyre Change</h3>
                <p className={styles.deepFeatureText}>
                  Tyre damage can happen on local roads, airport access routes and motorways. A puncture, damaged sidewall or sudden loss of tyre pressure may make a vehicle unsafe to drive. Avoid continuing the journey when doing so could affect vehicle control.
                </p>
                <p className={styles.deepFeatureText}>
                  Changing a tyre beside moving traffic is dangerous and should not be attempted. If your vehicle is in an unsafe position, prioritise safety and contact our roadside team for safe wheel changes or <Link href="/stansted-services/tyre-change-repair" className={styles.inlineLink}>mobile tyre repair</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO CHOOSE RECOVERY SERVICE */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>HOW TO CHOOSE A BREAKDOWN RECOVERY SERVICE NEAR STANSTED</h2>
              <p className={styles.sectionDesc}>
                Choosing a recovery provider involves more than finding a telephone number. Ensure your provider covers these essential points:
              </p>
            </div>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>SERVICE AREA &amp; COMPATIBILITY</h3>
                  <p className={styles.benefitDesc}>Confirm the provider can attend your location and accommodate your specific car or van.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>TRANSPARENT RECOVERY COSTS</h3>
                  <p className={styles.benefitDesc}>Ask for a clear quote confirming whether mileage, loading, or out-of-hours fees apply.</p>
                </div>
              </div>
              <div className={styles.benefitItem} style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <CheckCircle2 className={styles.benefitIcon} size={24} />
                <div>
                  <h3 className={styles.benefitTitle}>CONFIRM AVAILABILITY</h3>
                  <p className={styles.benefitDesc}>Confirm estimated arrival arrangements, traffic conditions, and destination details.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>FREQUENTLY ASKED QUESTIONS</h2>
              <p className={styles.sectionDesc}>
                Got questions about our Stansted breakdown recovery services? Here are the most common questions answered.
              </p>
            </div>
            
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <FAQ items={faqs} />
            </div>
          </div>
        </section>

        {/* CONCLUSION & CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Need Breakdown Recovery Near Stansted Right Now?</h2>
            <p className={styles.ctaDesc}>
              Our recovery vehicles are on standby 24/7 around Stansted Airport and the M11. Call or WhatsApp our dispatch desk immediately.
            </p>
            <div className={styles.ctaButtons}>
              <a href={phoneUrl} className={styles.btnRed}>
                <Phone size={20} /> CALL NOW: {businessConfig.phone}
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
