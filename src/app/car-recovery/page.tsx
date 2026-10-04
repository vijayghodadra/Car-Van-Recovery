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
  BatteryWarning, 
  Zap, 
  Disc, 
  Flame, 
  Navigation, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  HelpCircle,
  Briefcase,
  Plane
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Emergency Car Recovery Near Me UK: Reliable 24/7 Breakdown Assistance | Car&Van Recovery',
  },
  description: 'Fast, reliable 24/7 emergency car recovery near you across the UK, M11 & Cambridgeshire. Emergency roadside assistance, towing, battery jump starts & accident recovery.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/car-recovery',
  }
};

const whenToArrange = [
  { title: 'Engine fault or sudden loss of power', icon: AlertTriangle },
  { title: 'Vehicle refuses to start or dead battery', icon: BatteryWarning },
  { title: 'Transmission, gearbox or clutch failure', icon: Wrench },
  { title: 'Punctured, flat or severely damaged tyres', icon: Disc },
  { title: 'Accident, collision or bodywork damage', icon: ShieldAlert },
  { title: 'Overheating engine or coolant leaks', icon: Flame },
];

const batterySigns = [
  'Dashboard lights appear dim or flicker upon ignition',
  'Slow or sluggish engine cranking when starting',
  'Rapid clicking sounds when turning the key',
  'Electrical equipment (windows, stereo, heater) failing to operate'
];

const priceFactors = [
  'Distance between pickup location and chosen destination',
  'Type, weight and dimensions of the vehicle',
  'Specialist recovery equipment needed (winch, skates, low-profile flatbed)',
  'Time of callout and current road/weather conditions',
  'Specific access requirements (restricted car park, motorway, off-road)'
];

const faqs = [
  {
    question: "Can I get emergency car recovery near me at night?",
    answer: "Yes, our emergency car recovery operators operate 24 hours a day, 7 days a week, 365 days a year, providing prompt roadside assistance and flatbed towing day and night."
  },
  {
    question: "How quickly can a recovery vehicle arrive?",
    answer: "Arrival times depend on your exact location, traffic conditions, demand, and recovery requirements. We aim to reach stranded motorists in under 30 to 45 minutes on average."
  },
  {
    question: "Can a recovery company collect a car that will not start?",
    answer: "Yes, our technicians carry specialized equipment including heavy-duty jump start boosters, winches, and flatbed recovery trucks to safely collect and transport non-starting vehicles."
  },
  {
    question: "Is emergency car recovery available on the M11?",
    answer: "Yes, we provide dedicated motorway recovery across all junctions of the M11 corridor and connecting arterial roads such as the A14, A10, and A11."
  },
  {
    question: "Can I arrange recovery from an airport car park?",
    answer: "Yes, we regularly provide breakdown recovery and jump starts at airport facilities including Stansted Airport short-stay, long-stay, and meet-and-greet parking areas."
  },
  {
    question: "Does Car & Van Recovery provide 24 hour car recovery?",
    answer: "Yes, Car & Van Recovery offers round-the-clock emergency car recovery, roadside assistance, and vehicle transportation. Contact our 24/7 dispatch desk for immediate support."
  }
];

export default function CarRecoveryPage() {
  const whatsappUrl = `https://wa.me/447438189791`;
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

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/car_towing_truck.jpg"
            alt="Emergency Car Recovery Near Me UK"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        </div>
        <div className={styles.heroOverlay} />
        
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.eyebrow}>
                <Clock size={16} />
                24/7 EMERGENCY UK CAR RECOVERY &amp; ROADSIDE TOWING
              </div>
              <h1 className={styles.title}>
                Emergency Car Recovery Near Me UK: <span>Reliable 24/7 Breakdown Assistance</span>
              </h1>
              <p className={styles.description}>
                Experiencing a car breakdown? When your vehicle stops working unexpectedly, our rapid-response recovery operators provide professional 24/7 car towing, battery jump starts, roadside tyre assistance, and accident recovery across the UK.
              </p>
              
              <div className={styles.buttons}>
                <a href={phoneUrl} className={styles.callBtn}>
                  <Phone size={20} />
                  Call Now: {businessConfig.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>

              <div className={styles.trustBadges}>
                <div className={styles.badgeItem}>
                  <Clock className={styles.badgeIcon} size={18} />
                  <span>24/7 Immediate Dispatch</span>
                </div>
                <div className={styles.badgeItem}>
                  <ShieldCheck className={styles.badgeIcon} size={18} />
                  <span>Fully Insured &amp; Certified</span>
                </div>
                <div className={styles.badgeItem}>
                  <Truck className={styles.badgeIcon} size={18} />
                  <span>Flatbed &amp; Wheel-Lift Towing</span>
                </div>
                <div className={styles.badgeItem}>
                  <ThumbsUp className={styles.badgeIcon} size={18} />
                  <span>Transparent Upfront Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>
                Fast, Dependable Vehicle Assistance When You Need It Most
              </h2>
              <p>
                Experiencing a car breakdown can be stressful, particularly when you are travelling to work, driving home late at night or travelling on an unfamiliar road. A vehicle that suddenly stops working can disrupt your plans and leave you wondering where to find help. In these situations, searching for <Link href="/" style={{ color: 'var(--accent-red)', fontWeight: '700', textDecoration: 'underline' }}>emergency car recovery near me UK</Link> is a practical way to find recovery services that may be able to assist.
              </p>
              <p>
                Whether your car has a flat battery, a damaged tyre, an engine fault or has been involved in an accident, professional vehicle recovery can help you arrange suitable assistance. Depending on the circumstances, this may involve roadside support, a jump start or transporting your vehicle to a garage or another agreed destination.
              </p>
              <p>
                Car &amp; Van Recovery provides car recovery, van recovery, roadside assistance and vehicle transportation solutions in its designated service areas. For motorists travelling around the <Link href="/m11-corridor" style={{ color: 'var(--accent-red)', fontWeight: '700', textDecoration: 'underline' }}>M11 corridor</Link>, Stansted, Cambridgeshire and surrounding locations, having access to suitable recovery assistance can make an unexpected breakdown easier to manage.
              </p>
              <p>
                This guide explains how emergency car recovery works, what to do when your vehicle breaks down, how to choose a suitable recovery provider and how to prepare for unexpected vehicle problems across the UK.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/roadside_recovery_van.jpg" 
                alt="Emergency car recovery vehicle attending roadside" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS EMERGENCY CAR RECOVERY & WHEN DO YOU NEED IT */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle}>What Is Emergency Car Recovery Near Me?</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Emergency car recovery is a service that helps drivers when their vehicles become unsafe or impossible to drive. Recovery may be required following a mechanical failure, electrical problem, road accident or another unexpected vehicle issue.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              When motorists search for emergency car recovery near me, they are usually looking for a recovery provider that can attend their location and help them move their vehicle safely. The service required depends on the nature of the problem, the vehicle&apos;s condition and the recovery equipment available.
            </p>

            <h2 className={styles.sectionTitle}>When Do You Need Emergency Car Recovery?</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              There are several situations where professional car recovery may be necessary. A vehicle might develop an engine fault, overheat, suffer a transmission problem or refuse to start. A damaged wheel, serious tyre problem or accident may also make driving unsafe.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              In these circumstances, continuing the journey could cause further damage or put you and other road users at risk. If your car cannot be repaired safely at the roadside, a recovery vehicle is needed to transport it to a suitable garage, home address or agreed destination.
            </p>
          </div>

          <div className={styles.checkGrid}>
            {whenToArrange.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={styles.checkCard}>
                  <div className={styles.checkIconWrapper}>
                    <Icon size={22} />
                  </div>
                  <span className={styles.checkTitle}>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY LOCAL CAR RECOVERY MATTERS & 24 HOUR SERVICE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/hero_recovery_truck.jpg" 
                alt="Local 24 hour emergency car recovery" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>Why Local Car Recovery Matters</h2>
              <p>
                Finding a recovery service that covers your location can help you understand which assistance options are available. A driver stranded near Stansted may need a different recovery arrangement from someone whose car has broken down on a motorway or in a residential street.
              </p>
              <p>
                When contacting a recovery provider, explain your exact location, vehicle details and the nature of the fault. This helps the company assess whether it can attend and whether suitable recovery equipment is available.
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                24 Hour Emergency Car Recovery Across the UK
              </h3>
              <p>
                Vehicle breakdowns do not follow a convenient schedule. A car may fail to start early in the morning, develop a mechanical problem during a journey or break down late at night. Access to 24 hour car recovery can be useful when assistance is required outside normal working hours.
              </p>
              <p>
                Roadside assistance may help resolve certain vehicle problems without transporting the car immediately. Depending on the circumstances, assistance may include a battery jump start, help with a suitable tyre problem or an assessment of whether the vehicle requires recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY FOR NON-RUNNING CARS & TOWING */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Emergency Car Breakdown Recovery Near You</h2>
          <p className={styles.sectionSubtitle}>
            Car breakdowns can occur on residential roads, in shopping centre car parks, at workplaces and during long-distance journeys.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <AlertTriangle size={28} />
              </div>
              <h3>Car Recovery for Engine &amp; Mechanical Problems</h3>
              <p>
                Engine faults, overheating, clutch problems and transmission failures can prevent a car from operating normally. If you notice a warning light, unusual noise, smoke or a sudden loss of power, stop somewhere safe as soon as possible.
              </p>
              <p>
                Do not continue driving if the vehicle may be unsafe or if doing so could cause additional damage. When requesting recovery, provide the vehicle&apos;s make, model, registration, and a clear description of the fault.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Truck size={28} />
              </div>
              <h3>Vehicle Towing &amp; Specialist Transportation</h3>
              <p>
                Emergency vehicle towing is required when a car cannot be repaired safely at its current location. Our recovery fleet can transport the car to a garage, home address or another agreed destination.
              </p>
              <p>
                The correct recovery method depends on weight, drivetrain, and manufacturer requirements. Certain automatic, 4x4, and electric vehicles require flatbed loading to avoid damaging transmissions.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <ShieldCheck size={28} />
              </div>
              <h3>Recovery for Cars That Cannot Be Driven</h3>
              <p>
                A vehicle that has suffered a serious mechanical fault should not be driven simply to reach a nearby garage. Problems with brakes, steering, or suspension make vehicles unsafe for UK roads.
              </p>
              <p>
                Always tell the recovery team if the wheels are locked, steering is damaged or the car has suffered collision damage so the right winch or dollies are dispatched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BATTERY ASSISTANCE & MOTORWAY RECOVERY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>24/7 Roadside Battery Assistance &amp; Jump Starts</h2>
              <p>
                A flat battery is a common reason why cars fail to start. Battery problems can occur when a vehicle has been left unused, when the battery is nearing the end of its life or when there is a fault with the charging system.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '1.25rem', color: 'var(--text-primary)' }}>
                Signs of a Flat Car Battery:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px 0' }}>
                {batterySigns.map((sign, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-red)" />
                    {sign}
                  </li>
                ))}
              </ul>
              <p>
                A jump start may help start a vehicle when the battery is discharged and the electrical system is in good condition. Never attempt to jump-start a damaged, swollen or leaking battery. Our technicians carry voltage-regulated booster packs to protect vehicle computers.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/flat_battery_assistance.jpg" 
                alt="Car Battery Jump Start and Roadside Assistance" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOTORWAY & ACCIDENT RECOVERY */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Emergency Car Recovery on UK Motorways</h2>
          <p className={styles.sectionSubtitle}>
            Motorway breakdowns require particular care because vehicles travel at high speeds and safe stopping locations may be limited.
          </p>

          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>1</div>
              <div className={styles.stepContent}>
                <h3>What to Do If Your Car Breaks Down on a Motorway</h3>
                <p>
                  If your vehicle develops a problem, try to leave the motorway at the next exit or enter a service area if it is safe to do so. If this is not possible, follow official motorway breakdown procedures and reach an emergency area or hard shoulder where available.
                </p>
                <p>
                  Switch on your hazard warning lights. If you can safely exit the vehicle, use the left-hand doors and move behind a safety barrier. Never attempt to repair the vehicle or change a tyre beside live motorway traffic. If your vehicle is stranded in a live lane, call 999 immediately.
                </p>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>2</div>
              <div className={styles.stepContent}>
                <h3>M11 Breakdown Recovery &amp; Regional Arteries</h3>
                <p>
                  The M11 is an important route for motorists travelling between London, Stansted and Cambridge. Drivers using the M11 corridor may require recovery following an engine fault, flat battery, tyre damage or another unexpected problem.
                </p>
                <p>
                  If you break down, provide your direction of travel, nearest junction and motorway marker post. Car &amp; Van Recovery offers specialized motorway recovery solutions along the M11, A14, A10, and surrounding arterial links.
                </p>
              </div>
            </div>

            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>3</div>
              <div className={styles.stepContent}>
                <h3>Accident Recovery &amp; Safe Vehicle Transportation</h3>
                <p>
                  A road traffic accident can leave a car damaged or unable to move safely. Even following a relatively minor collision, damage to wheels, steering, suspension or brakes may make the vehicle unsafe to drive.
                </p>
                <p>
                  First, check whether anyone is injured and contact emergency services when necessary. Once the scene is safe, our recovery operators carefully winch and flatbed transport the car to prevent further damage. Inform us if the vehicle is electric or hybrid, as specific handling procedures apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST FACTORS & HOW TO CHOOSE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>How Much Does Emergency Car Recovery Near Me Cost?</h2>
              <p>
                The cost of emergency car recovery varies according to the circumstances of the job. There is no single flat price because vehicle size, distance, location and recovery requirements differ considerably.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '1.25rem', color: 'var(--text-primary)' }}>
                Factors That Affect Recovery Prices:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px 0' }}>
                {priceFactors.map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-red)" />
                    {factor}
                  </li>
                ))}
              </ul>
              <p>
                Before confirming a booking, explain the vehicle problem and provide exact pickup and destination details. We provide upfront, transparent quotes that clearly outline loading, mileage, and transportation costs with zero surprise fees.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/breakdown.jpg" 
                alt="Transparent recovery pricing" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Why Contact Car &amp; Van Recovery?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
              Car &amp; Van Recovery offers reliable vehicle recovery and roadside assistance solutions across Cambridge, Stansted, the M11 corridor, Essex and Cambridgeshire. Whether you require a jump start in an airport car park or heavy-duty flatbed recovery from a busy motorway, our experienced operators are on standby 24 hours a day.
            </p>
            <div className={styles.pillsContainer}>
              <Link href="/areas-we-cover/cambridge" className={styles.pillLink}>Cambridge</Link>
              <Link href="/m11-corridor" className={styles.pillLink}>M11 Corridor</Link>
              <Link href="/areas-we-cover/stansted-airport" className={styles.pillLink}>Stansted Airport</Link>
              <Link href="/areas-we-cover/harlow" className={styles.pillLink}>Harlow</Link>
              <Link href="/areas-we-cover/stevenage" className={styles.pillLink}>Stevenage</Link>
              <Link href="/areas-we-cover/newmarket" className={styles.pillLink}>Newmarket</Link>
              <Link href="/areas-we-cover/huntingdon" className={styles.pillLink}>Huntingdon</Link>
              <Link href="/areas-we-cover/st-neots" className={styles.pillLink}>St Neots</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION & CTA BANNER */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
              Conclusion: Find Emergency Car Recovery Near You
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem' }}>
              A car breakdown can happen unexpectedly, whether you are commuting, travelling to the airport or driving on a motorway. Knowing how to respond safely and arrange suitable recovery assistance can help you manage the situation and avoid unnecessary risks.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>
              From emergency car recovery and vehicle towing to jump starts, roadside assistance and accident recovery, the appropriate solution depends on your vehicle&apos;s condition and location. Contact Car &amp; Van Recovery to discuss your location and confirm immediate service.
            </p>

            <div className={styles.ctaBanner}>
              <h2>Need Emergency Car Recovery Near You Right Now?</h2>
              <p>
                Our 24/7 recovery operators are stationed across the UK and M11 corridor for fast response. Call or WhatsApp our dispatch desk immediately.
              </p>
              <div className={styles.ctaButtons}>
                <a href={phoneUrl} className={styles.callBtn}>
                  <Phone size={20} />
                  Call Now: {businessConfig.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
            Got questions about our emergency car recovery services? Find clear, helpful answers below.
          </p>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
