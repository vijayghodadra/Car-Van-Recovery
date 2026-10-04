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
    absolute: 'Motorway Breakdown Assistance: Reliable 24/7 Car and Van Recovery Across the UK | Car&Van Recovery',
  },
  description: 'Professional 24/7 motorway breakdown assistance and vehicle recovery across the UK. Fast car and van towing, emergency roadside repairs, jump starts, tyre changes & accident recovery.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/services/motorway-breakdown-assistance',
  }
};

const whenToArrange = [
  { title: 'Serious engine or mechanical fault', icon: AlertTriangle },
  { title: 'Puncture or tyre damage making driving unsafe', icon: Disc },
  { title: 'Battery or electrical system failure', icon: BatteryWarning },
  { title: 'Damage following a road traffic collision', icon: ShieldAlert },
  { title: 'Vehicle cannot restart after stopping safely', icon: HelpCircle },
  { title: 'Fault cannot be resolved by roadside repairs', icon: Wrench },
];

const faqs = [
  {
    question: "What is motorway breakdown assistance?",
    answer: "Motorway breakdown assistance helps drivers arrange support when their vehicles develop problems on motorways or nearby roads. Depending on the fault, assistance may involve a jump start, roadside support or vehicle recovery."
  },
  {
    question: "Can I get 24 hour motorway breakdown recovery in the UK?",
    answer: "Some recovery providers offer assistance outside normal working hours. Car & Van Recovery operates 24/7 every day of the year, providing emergency response across motorway corridors and connecting roads."
  },
  {
    question: "What should I do if my car breaks down on the M11?",
    answer: "Try to leave the motorway at the next exit or reach a service area if it is safe. Otherwise, follow official motorway breakdown procedures, move to a safe location behind the barrier, and arrange suitable assistance. Call 999 if you cannot exit safely or are in immediate danger."
  },
  {
    question: "Can a recovery company collect a broken-down van?",
    answer: "Recovery is available for commercial vans, long-wheelbase vehicles, and loaded trade vans, subject to dimensions, weight, and condition. We provide specialized flatbeds and wheel-lift trucks to safely transport commercial vehicles."
  },
  {
    question: "How much does motorway breakdown recovery cost?",
    answer: "The cost depends on the vehicle, recovery distance, location, time and service required. We provide clear upfront quotes with no hidden charges before dispatching an operator."
  },
  {
    question: "Does Car & Van Recovery cover the M11 corridor?",
    answer: "Yes, Car & Van Recovery provides dedicated vehicle recovery and roadside assistance across the entire M11 corridor, Cambridgeshire, Stansted, Essex, and surrounding motorway links."
  }
];

export default function MotorwayBreakdownAssistancePage() {
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
            src="/images/hero_recovery_truck.jpg"
            alt="Motorway Breakdown Assistance UK"
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
                24/7 UK MOTORWAY BREAKDOWN &amp; RECOVERY SERVICE
              </div>
              <h1 className={styles.title}>
                Motorway Breakdown Assistance: <span>Reliable 24/7 Car and Van Recovery</span> Across the UK
              </h1>
              <p className={styles.description}>
                Fast, professional emergency roadside assistance and towing across UK motorways. Whether you are stranded on the M11, A14, or connecting routes with a flat tyre, battery fault, or engine breakdown, our recovery team gets you to safety quickly.
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
                  <span>24/7 Rapid Motorway Response</span>
                </div>
                <div className={styles.badgeItem}>
                  <ShieldCheck className={styles.badgeIcon} size={18} />
                  <span>Fully Insured &amp; Certified</span>
                </div>
                <div className={styles.badgeItem}>
                  <Truck className={styles.badgeIcon} size={18} />
                  <span>Cars &amp; Commercial Vans</span>
                </div>
                <div className={styles.badgeItem}>
                  <ThumbsUp className={styles.badgeIcon} size={18} />
                  <span>Highway Safety Compliant</span>
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
                Expert Motorway Support When You Need It Most
              </h2>
              <p>
                Driving on UK motorways is an essential part of everyday life for millions of motorists. From daily commutes and family journeys to business deliveries and long-distance travel, motorways connect towns, cities and important destinations across the country. However, even a well-maintained vehicle can develop an unexpected problem while travelling at high speed.
              </p>
              <p>
                A flat battery, damaged tyre, engine fault or sudden mechanical failure can quickly turn an ordinary journey into a stressful situation. When a vehicle becomes unsafe or impossible to drive, professional <Link href="/" style={{ color: 'var(--accent-red)', fontWeight: '700', textDecoration: 'underline' }}>Motorway Breakdown Assistance</Link> can help drivers arrange the support and recovery they need.
              </p>
              <p>
                Car &amp; Van Recovery provides car recovery, van recovery, roadside assistance and vehicle transportation solutions for motorists who experience vehicle problems. For drivers travelling along the <Link href="/m11-corridor" style={{ color: 'var(--accent-red)', fontWeight: '700', textDecoration: 'underline' }}>M11 corridor</Link>, Cambridgeshire, Stansted and surrounding areas, having access to suitable recovery services can make it easier to manage an unexpected breakdown.
              </p>
              <p>
                This guide explains how motorway breakdown assistance works, what to do when your vehicle breaks down, the types of recovery available and how to prepare for safer journeys across the UK.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/roadside_recovery_van.jpg" 
                alt="Motorway breakdown assistance recovery vehicle" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS MOTORWAY BREAKDOWN ASSISTANCE & WHY IMPORTANT */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle}>What Is Motorway Breakdown Assistance?</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Motorway breakdown assistance is a service that helps drivers whose vehicles develop problems on motorways or nearby roads. Depending on the vehicle&apos;s condition, location and the equipment available, assistance may involve roadside support, a vehicle inspection, a jump start or transportation to a suitable garage or destination.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              Unlike an ordinary breakdown on a quiet residential road, a motorway breakdown can involve fast-moving traffic, limited stopping areas and additional safety considerations. Drivers should never attempt repairs in a live traffic lane or put themselves at risk to solve a mechanical problem.
            </p>

            <h2 className={styles.sectionTitle}>Why Motorway Breakdown Assistance Is Important</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              A vehicle breakdown can happen without warning, even if the vehicle has recently passed an MOT test or received routine maintenance. Motorway journeys often involve longer distances and sustained driving, which can expose existing problems with tyres, cooling systems, batteries and other vehicle components.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              For commuters, a breakdown may mean missing work or important appointments. For delivery drivers and businesses, a disabled van can delay deliveries and interrupt scheduled jobs. Access to a suitable recovery service helps motorists arrange assistance and consider the safest way to move a vehicle that cannot continue its journey.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN SHOULD YOU ARRANGE MOTORWAY RECOVERY */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>When Should You Arrange Motorway Recovery?</h2>
          <p className={styles.sectionSubtitle}>
            You may need motorway breakdown recovery if your vehicle experiences any of the following critical issues:
          </p>

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

          <div className={styles.alertBanner}>
            <h4>Priority One: Personal Safety on Motorways</h4>
            <p>
              If your vehicle is creating an immediate danger or you are stranded in a live traffic lane, contact emergency services (<strong>call 999</strong>) first. Recovery arrangements should never take priority over personal safety.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO DO IF YOUR CAR BREAKS DOWN (HIGHWAY CODE RULES) */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What to Do If Your Car Breaks Down on a UK Motorway</h2>
          <p className={styles.sectionSubtitle}>
            Knowing what to do during a motorway breakdown can help reduce risks to you, your passengers and other road users. The Highway Code advises drivers to leave the motorway at the next exit or enter a service area if possible. Follow these 3 critical steps:
          </p>

          <div className={styles.stepsContainer}>
            {/* STEP 1 */}
            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>1</div>
              <div className={styles.stepContent}>
                <h3>Step 1: Move to a Safe Location If Possible</h3>
                <p>
                  If you notice a warning light, unusual noise, loss of power or another problem, assess whether the vehicle can safely reach the next exit or motorway service area. Avoid making sudden manoeuvres or stopping in a live lane unless stopping is unavoidable.
                </p>
                <p>
                  If you cannot leave the carriageway, move towards the left-hand lane and an emergency area or hard shoulder if it is safe and possible. Switch on your hazard warning lights when appropriate and stop as far to the left as possible. On a motorway with no hard shoulder, emergency areas are designated stopping places. Follow the road signs and do not enter one unless you can reach it safely.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>2</div>
              <div className={styles.stepContent}>
                <h3>Step 2: Get Yourself and Your Passengers to Safety</h3>
                <p>
                  If your vehicle is stopped in a place of relative safety and you can exit safely, use the doors furthest from moving traffic (left-hand doors) and move behind a safety barrier where one is available.
                </p>
                <p>
                  Keep children and passengers away from the carriageway. Stay well clear of the vehicle and traffic, and do not return to the car to retrieve belongings. Never attempt repairs in a live lane or place a warning triangle on a motorway.
                </p>
                <p>
                  If you cannot safely exit the vehicle, remain inside with your seatbelt fastened and hazard lights on. Call 999 and ask for the police, or use your vehicle&apos;s SOS emergency call system if available. These precautions follow official motorway breakdown guidance in Highway Code Rules 275–279.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className={styles.stepBlock}>
              <div className={styles.stepBadge}>3</div>
              <div className={styles.stepContent}>
                <h3>Step 3: Arrange Appropriate Breakdown Assistance</h3>
                <p>
                  Once you are in a safe position, contact your breakdown provider or a suitable vehicle recovery service. Explain the nature of the fault, your location and the type of vehicle involved.
                </p>
                <p>
                  If you have stopped in an emergency area, use the emergency telephone provided and follow the operator&apos;s instructions before leaving the area. Do not rejoin the motorway from an emergency area without following the official procedure. If there is immediate danger, a collision or a vehicle stopped in a live lane, call 999 rather than relying on an ordinary recovery booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24 HOUR CAR RECOVERY & VAN RECOVERY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>24 Hour Motorway Breakdown Recovery for Cars</h2>
              <p>
                Car breakdowns can occur at any time of day or night. A vehicle that starts normally in the morning may develop a fault during a long motorway journey or fail to restart after a short stop. Car recovery services help motorists arrange transportation when their vehicle cannot safely continue.
              </p>
              
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Emergency Car Recovery on Motorways
              </h3>
              <p>
                Some vehicle problems can be resolved with suitable roadside assistance. Others require the vehicle to be transported to a garage or another agreed location. Common reasons for emergency car recovery include engine failure, overheating, electrical faults, transmission problems and accident damage.
              </p>
              <p>
                When arranging assistance, provide the car&apos;s make, model, registration, approximate weight if known and a description of the problem. Tell the recovery provider if the wheels are locked, the steering is damaged or the vehicle has suffered collision damage.
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Car Towing and Vehicle Transportation
              </h3>
              <p>
                If a vehicle cannot be driven safely, towing or specialist vehicle transportation may be necessary. A recovery provider can discuss moving the vehicle to a garage, home address or another agreed destination, subject to equipment, access and service availability.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/car_towing_truck.jpg" 
                alt="24 Hour Motorway Car Towing" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOTORWAY VAN BREAKDOWN ASSISTANCE */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/van_recovery_hero.jpg" 
                alt="Motorway Van Recovery for Commercial Vehicles" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>Motorway Van Breakdown Assistance for Commercial Drivers</h2>
              <p>
                Commercial vans are essential for tradespeople, couriers, delivery companies and small businesses throughout the United Kingdom. A van breakdown can disrupt a working day, delay customer deliveries and leave tools or goods inside a vehicle that cannot continue its journey.
              </p>
              
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Recovery for Commercial and Long-Wheelbase Vans
              </h3>
              <p>
                Commercial vehicles vary considerably in size, weight and configuration. A standard car recovery vehicle may not be suitable for every van. Long-wheelbase (LWB) vans, heavily loaded vehicles and larger commercial models require specific recovery equipment.
              </p>
              <p>
                When contacting a recovery provider, explain the van&apos;s approximate size, weight, load and condition. Also mention whether the vehicle is carrying valuable equipment or goods that may need special consideration.
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Supporting Businesses After a Breakdown
              </h3>
              <p>
                For a small business, vehicle downtime can affect appointments, deliveries and customer commitments. Having recovery contact details available and maintaining vehicles regularly can help businesses respond to unexpected problems quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M11 & REGIONAL MOTORWAY COVERAGE */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>M11 Breakdown Recovery &amp; Regional Motorway Coverage</h2>
          <p className={styles.sectionSubtitle}>
            Connecting London with Cambridge, the M11 is a crucial route for commuters, logistics fleets, and international travellers heading towards Stansted Airport.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Navigation size={28} />
              </div>
              <h3>M11 Corridor Breakdown Assistance</h3>
              <p>
                If you experience a breakdown on or near the M11, provide our dispatch team with your direction of travel, nearest junction, or roadside marker post. Roadside marker posts and driver location signs help identify your exact position quickly.
              </p>
              <p>
                Car &amp; Van Recovery offers fast response across all junctions of the M11, from London, Harlow, and Bishop&apos;s Stortford into Cambridgeshire.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Plane size={28} />
              </div>
              <h3>Recovery Near Stansted Airport</h3>
              <p>
                Drivers travelling near Stansted Airport often face tight flight schedules and restricted airport roadways. We provide prompt roadside assistance for flat batteries, tyre damage, and non-starting vehicles in terminal car parks and surrounding roads.
              </p>
              <p>
                Always confirm your exact car park or terminal location when booking assistance near Stansted.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Briefcase size={28} />
              </div>
              <h3>Connecting Major Arteries</h3>
              <p>
                Our motorway recovery operators seamlessly service major connecting trunk routes including the A14, A10, A11, A1(M), and M25, ensuring complete journey coverage throughout the East of England and nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CAUSES & HOW TO CHOOSE */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Common Causes of Motorway Breakdowns</h2>
          <p className={styles.sectionSubtitle}>
            Understanding common vehicle problems can help motorists recognise early warning signs and arrange assistance before a minor issue causes a dangerous roadside breakdown:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <AlertTriangle size={28} />
              </div>
              <h3>Engine &amp; Mechanical Problems</h3>
              <p>
                Engine overheating, loss of power, unusual noises and dashboard warning lights often signal mechanical issues. Sustained high-speed motorway driving places heavy demand on cooling systems and engines. Pull over at the next exit or safe location immediately if you detect warning signs.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <BatteryWarning size={28} />
              </div>
              <h3>Flat Batteries &amp; Electrical Faults</h3>
              <p>
                A flat battery may prevent a vehicle from restarting at service areas, while alternator or electrical failures can cut power while driving. Never jump start a damaged or leaking battery; our technicians use professional voltage-regulated boosters to protect modern vehicle electronics.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Disc size={28} />
              </div>
              <h3>Tyre Damage &amp; Punctures</h3>
              <p>
                Punctures, sudden blowouts, or damaged sidewalls make driving unsafe. Never attempt to change a tyre on the hard shoulder beside live motorway traffic. Arrange professional mobile tyre assistance or recovery to a safe garage.
              </p>
            </div>
          </div>

          <h2 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>How to Choose a Motorway Breakdown Recovery Service</h2>
          <p className={styles.sectionSubtitle}>
            When selecting a recovery provider, look for these vital factors:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Truck size={28} />
              </div>
              <h3>Check Vehicle &amp; Location Coverage</h3>
              <p>
                Confirm that the provider can accommodate your car or commercial van and has permissions to operate on motorway networks. Motorway recovery requires specialized gear, high-visibility beacons, and trained operators.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <CheckCircle2 size={28} />
              </div>
              <h3>Transparent Pricing &amp; No Hidden Fees</h3>
              <p>
                Recovery prices depend on distance, vehicle type, location, and time. Always request a clear quote upfront that includes callout, hookup, and mileage delivery to your chosen destination.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <MapPin size={28} />
              </div>
              <h3>Confirm the Recovery Destination</h3>
              <p>
                Before confirming a booking, agree on the exact drop-off destination—whether your home address, local dealership, or preferred independent workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REDUCE THE RISK OF A BREAKDOWN */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How to Reduce the Risk of a Motorway Breakdown</h2>
          <p className={styles.sectionSubtitle}>
            Basic vehicle preparation and routine maintenance significantly reduce the likelihood of motorway emergencies:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Wrench size={28} />
              </div>
              <h3>Basic Vehicle Checks (FORCES)</h3>
              <p>
                Before long motorway trips, check Fuel, Oil, Rubber (tyre tread and pressure), Coolant, Electrics (lights and indicators), and Screenwash. Address any warning lights before setting off.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Briefcase size={28} />
              </div>
              <h3>Prepare for Unexpected Delays</h3>
              <p>
                Keep a fully charged mobile phone, power bank, warm clothing, high-vis jacket, water, and essential medication in your vehicle. Keep breakdown contact details saved in your phone.
              </p>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.cardIconBox}>
                <Navigation size={28} />
              </div>
              <h3>Check Routes &amp; Live Road Conditions</h3>
              <p>
                Monitor live traffic information, weather alerts, and planned roadworks before departure. Never use a handheld mobile phone while driving; pull into a motorway service station if you need to adjust navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION & EMERGENCY CTA */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
              Conclusion: Arrange Motorway Breakdown Assistance with Car &amp; Van Recovery
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem' }}>
              A motorway breakdown can be unexpected and stressful, but knowing how to respond safely and arrange suitable recovery can help you manage the situation. From car recovery and commercial van breakdowns to flat battery assistance, vehicle towing and transportation, the right service depends on your vehicle, location and the nature of the fault.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>
              Car &amp; Van Recovery provides recovery solutions for motorists travelling in its service areas, including the M11 corridor and surrounding locations. If your car or van needs recovery, contact our 24/7 team to discuss your vehicle, location and destination and receive an immediate fixed quote.
            </p>

            {/* CALL TO ACTION BOX */}
            <div className={styles.ctaBanner}>
              <h2>Stranded on a UK Motorway? Call Our 24/7 Recovery Desk</h2>
              <p>
                Our specialized recovery trucks are on standby across the motorway network. Speak with an operator immediately for rapid dispatch.
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
            Clear answers about motorway breakdown assistance, recovery procedures, and safety rules across the UK.
          </p>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
