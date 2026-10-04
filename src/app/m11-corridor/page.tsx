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
  Lock, 
  HelpCircle, 
  Navigation, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'M11 Corridor Instead of Cambridge: Reliable Roadside Assistance and Vehicle Recovery | Car&Van Recovery',
  },
  description: 'Fast, reliable 24/7 roadside assistance & vehicle recovery across the M11 Corridor. Puncture repairs, mobile tyre fitting, battery jump starts & emergency car/van towing.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/m11-corridor',
  }
};

const commonProblems = [
  { title: 'Flat or damaged tyres', icon: Disc },
  { title: 'Dead or weak batteries', icon: BatteryWarning },
  { title: 'Engine problems', icon: AlertTriangle },
  { title: 'Fuel-related issues', icon: Flame },
  { title: 'Electrical faults', icon: Zap },
  { title: 'Overheating', icon: Flame },
  { title: 'Starter motor problems', icon: Wrench },
  { title: 'Lockout situations', icon: Lock },
  { title: 'Minor roadside accidents', icon: ShieldAlert },
  { title: 'Vehicles that will not start', icon: HelpCircle },
];

const checklistItems = [
  '24-hour roadside assistance',
  'Vehicle recovery',
  'Mobile tyre assistance',
  'Battery assistance',
  'Breakdown recovery',
  'Accident recovery',
  'Local and motorway coverage',
  'Professional recovery equipment',
];

const faqs = [
  {
    question: "Why choose an M11 Corridor recovery service instead of just Cambridge?",
    answer: "A service dedicated to the broader M11 Corridor can reach motorists anywhere along the route—between London, Essex, Stansted, Harlow, and Cambridgeshire—rather than being constrained to Cambridge city centre. This ensures faster response times across all motorway junctions."
  },
  {
    question: "How quickly can your recovery vehicle reach me on the M11 Corridor?",
    answer: "We treat motorway callouts as high priority. Depending on your junction and current traffic flow, our average arrival time across the M11 corridor is typically 30 to 45 minutes."
  },
  {
    question: "Can you fix my vehicle at the roadside or will it need to be towed?",
    answer: "Our technicians carry diagnostic equipment, heavy-duty jump packs, and tyre tools to resolve common roadside faults like flat tyres and dead batteries on the spot. If the fault is mechanical or severe, we safely recover your car or van to your chosen garage or home."
  },
  {
    question: "Do you recover commercial vans as well as cars on the M11?",
    answer: "Yes, our fleet includes heavy-duty recovery trucks and flatbeds capable of recovering standard passenger cars, SUVs, 4x4s, and commercial vans."
  }
];

export default function M11CorridorPage() {
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
            alt="M11 Corridor Instead of Cambridge Roadside Assistance and Vehicle Recovery"
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
                24/7 M11 CORRIDOR RECOVERY & ROADSIDE ASSISTANCE
              </div>
              <h1 className={styles.title}>
                M11 Corridor Instead of Cambridge: <span>Reliable Roadside Assistance</span> and Vehicle Recovery
              </h1>
              <p className={styles.description}>
                When your vehicle breaks down unexpectedly along the busy M11 Corridor, our professional 24/7 recovery operators provide rapid roadside assistance, tyre replacement, battery jump starts, and emergency car &amp; van towing.
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
                  <span>24/7 Immediate Response</span>
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
                  <span>Local Motorway Specialists</span>
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
                Dependable Roadside Assistance &amp; Recovery Across the M11
              </h2>
              <p>
                When your vehicle breaks down unexpectedly, finding a reliable recovery service can make a stressful situation much easier. Drivers travelling along busy roads need quick assistance, especially when they are dealing with a flat tyre, engine failure, battery problems or an accident.
              </p>
              <p>
                For motorists looking for <strong>M11 Corridor instead of Cambridge roadside assistance</strong>, having access to a professional local recovery team can provide peace of mind. Whether you are travelling for work, commuting every day or making a long-distance journey, roadside problems can happen at any time.
              </p>
              <p>
                A dependable <Link href="/" style={{ color: 'var(--accent-red)', fontWeight: '700', textDecoration: 'underline' }}>vehicle recovery service</Link> can help you get back on the road safely or transport your vehicle to a suitable garage when roadside repairs are not possible.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/roadside_recovery_van.jpg" 
                alt="Roadside Assistance along the M11 Corridor" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY THE M11 CORRIDOR IS IMPORTANT FOR DRIVERS */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why the M11 Corridor Is Important for Drivers</h2>
          <p className={styles.sectionSubtitle}>
            The M11 Corridor is an important route for motorists travelling between London, Essex, Cambridgeshire and surrounding areas. Thousands of vehicles use the road every day, including cars, vans, commercial vehicles and other transport.
          </p>
          
          <div className={styles.alertBanner}>
            <h4>High Volume Motorway Traffic Requires Fast Support</h4>
            <p>
              Because of the high volume of traffic, vehicle breakdowns can create serious problems for drivers. A vehicle that stops unexpectedly can leave you waiting on the roadside while traffic continues to move around you. For this reason, having access to a reliable <strong>M11 Corridor instead of Cambridge recovery service</strong> can be extremely useful.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Common Problems Experienced Along the M11 Corridor
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Drivers can experience many different types of vehicle problems during their journey. Some problems can be fixed at the roadside, while others require professional vehicle recovery:
          </p>

          <div className={styles.problemGrid}>
            {commonProblems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div key={idx} className={styles.problemCard}>
                  <div className={styles.problemIcon}>
                    <Icon size={22} />
                  </div>
                  <span className={styles.problemTitle}>{problem.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 24 HOUR ROADSIDE ASSISTANCE & FAST RESPONSE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/breakdown.jpg" 
                alt="24 Hour M11 Roadside Assistance" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>24 Hour Roadside Assistance on the M11 Corridor</h2>
              <p>
                Vehicle breakdowns do not follow a convenient schedule. A car can stop working early in the morning, late at night, during a weekend or on a public holiday. That is why 24-hour roadside assistance is important for motorists travelling along the M11 Corridor.
              </p>
              <p>
                A professional recovery team can respond to breakdown situations and provide practical assistance whenever you need it. The goal is to assess the problem, make the vehicle safe and determine whether it can be repaired at the roadside.
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Fast Response When You Need Help
              </h3>
              <p>
                When you are stranded on the roadside, every minute can feel much longer. A quick response can reduce the amount of time you spend waiting in an uncomfortable or potentially unsafe location.
              </p>
              <p>
                Professional recovery operators understand the importance of reaching stranded motorists as quickly as possible. Once they arrive, they can inspect the vehicle and identify the most appropriate solution. If a simple repair is possible, roadside assistance may get your vehicle moving again. If not, the vehicle can be recovered to a garage or another safe destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES (TYRE, BATTERY, VEHICLE, ACCIDENT) */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Complete Roadside Solutions on the M11</h2>
          <p className={styles.sectionSubtitle}>
            From roadside tyre repairs to accident clearance and safe vehicle transport, our recovery team is equipped for every situation.
          </p>

          <div className={styles.cardsGrid}>
            {/* CARD 1: TYRES */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIconBox}>
                <Disc size={28} />
              </div>
              <h3>Mobile Tyre Repair and Tyre Change</h3>
              <p>
                Tyre problems are among the most common reasons motorists need roadside assistance. A puncture or damaged tyre can happen without warning, leaving drivers unable to continue their journey. Mobile tyre assistance is particularly useful because you do not necessarily need to arrange separate transportation for your vehicle.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Professional Tyre Change:</strong>
                <p style={{ fontSize: '0.92rem' }}>A damaged tyre may sometimes be replaced with a suitable spare wheel. A recovery technician can assist with changing the tyre and checking that the vehicle is safe to continue travelling. If your vehicle does not have a usable spare tyre, <Link href="/services/tyre-change-and-repair" style={{ color: 'var(--accent-red)', textDecoration: 'underline' }}>mobile tyre services</Link> provide a fast roadside solution.</p>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Puncture and Tyre Repair:</strong>
                <p style={{ fontSize: '0.92rem' }}>Not every puncture requires a complete tyre replacement. In suitable circumstances, a professional technician can inspect the tyre and determine whether a repair is possible. Safety should always come first. A tyre that has suffered serious damage should not be repaired simply to save money. Professional assessment helps determine the safest option.</p>
              </div>
            </div>

            {/* CARD 2: BATTERY */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIconBox}>
                <BatteryWarning size={28} />
              </div>
              <h3>Car Battery Assistance on the M11 Corridor</h3>
              <p>
                A flat battery is another common reason for vehicle breakdowns. Drivers may return to their car after parking and discover that the engine will not start. This can happen because lights were left on, the vehicle has been sitting unused for a long period or the battery has reached the end of its useful life.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Battery Jump Start:</strong>
                <p style={{ fontSize: '0.92rem' }}>If the battery has simply lost its charge, a professional roadside assistance technician can provide a powerful booster jump start. However, repeated battery problems can indicate an underlying issue with the alternator or electrical system. If the vehicle continues to experience starting problems, our team can arrange transportation to a specialist.</p>
              </div>
            </div>

            {/* CARD 3: VEHICLE RECOVERY */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIconBox}>
                <Truck size={28} />
              </div>
              <h3>Vehicle Recovery After a Breakdown</h3>
              <p>
                Sometimes a roadside repair is not possible. Major mechanical or electrical faults may require the vehicle to be taken to a garage. In these situations, vehicle recovery provides a practical solution.
              </p>
              <p>
                A recovery vehicle can transport your car or van from the M11 Corridor to an appropriate destination. This can be especially valuable when the vehicle is blocking traffic or has broken down in a location where remaining stationary is unsafe.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Recovery for Cars and Vans:</strong>
                <p style={{ fontSize: '0.92rem' }}>Whether you drive a family car, business van or another standard vehicle, explaining your situation clearly when requesting assistance helps our dispatch team send the appropriate flatbed or wheel-lift equipment.</p>
              </div>
            </div>

            {/* CARD 4: ACCIDENT RECOVERY */}
            <div className={styles.serviceCard}>
              <div className={styles.cardIconBox}>
                <ShieldAlert size={28} />
              </div>
              <h3>Accident Recovery &amp; Emergency Assistance</h3>
              <p>
                Road accidents can be extremely stressful. Even a minor collision can leave a vehicle damaged and unable to continue its journey. After an accident, the first priority should always be the safety of everyone involved. Drivers should move to a safe location where possible and contact emergency services if anyone is injured.
              </p>
              <p>
                Once the immediate emergency has been handled, professional vehicle recovery is required to remove a damaged vehicle from the road quickly and securely.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Safe Vehicle Transportation:</strong>
                <p style={{ fontSize: '0.92rem' }}>A damaged vehicle should not be driven if doing so could create another safety risk. Recovery professionals assess the vehicle and arrange transportation to prevent additional damage and keep road users safe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE A LOCAL RECOVERY SERVICE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featureSplit}>
            <div className={styles.featureText}>
              <h2 className={styles.sectionTitle}>Why Choose a Local Recovery Service?</h2>
              <p>
                Choosing a recovery company familiar with the M11 Corridor can have several advantages. Local recovery professionals are more likely to understand the major routes, surrounding roads and common areas where motorists may require assistance. This local knowledge can make communication easier when you are trying to explain your location.
              </p>
              
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Convenient Assistance Across the M11 Corridor
              </h3>
              <p>
                A breakdown does not always happen directly beside a major town. You may be travelling between locations when your vehicle suddenly stops.
              </p>
              <p>
                A service covering the wider M11 Corridor can therefore be more useful than relying only on a recovery company operating in one specific town. For motorists searching for <strong>M11 Corridor instead of Cambridge</strong>, broader roadside coverage can provide greater flexibility when travelling.
              </p>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '1.5rem', color: 'var(--text-primary)' }}>
                Roadside Assistance for Regular M11 Travellers
              </h3>
              <p>
                Many people use the M11 Corridor as part of their regular commute or business journey. For these drivers, reliable breakdown assistance is not just convenient—it can help reduce disruption to their day.
              </p>
              <p>
                A van driver who depends on their vehicle for work, for example, may face lost time and missed appointments after a breakdown. Quick roadside assistance can help resolve minor problems and arrange recovery when a larger repair is required. Similarly, commuters travelling long distances benefit from knowing that professional help is available if their vehicle suddenly develops a fault.
              </p>
            </div>
            <div className={styles.featureImageWrapper}>
              <Image 
                src="/images/car_towing_truck.jpg" 
                alt="Local M11 Corridor Vehicle Recovery Service" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO IF YOUR VEHICLE BREAKS DOWN */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What to Do If Your Vehicle Breaks Down</h2>
          <p className={styles.sectionSubtitle}>
            Knowing what to do during a breakdown can help keep you and other road users safe. Follow these critical steps while waiting for roadside assistance:
          </p>

          <div className={styles.stepsGrid}>
            {/* STEP 1 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h4>Move to a Safe Location</h4>
              <p>
                If your vehicle is still capable of moving, try to get it somewhere safe without putting yourself or others at risk. On a motorway or major road, getting onto the hard shoulder or an emergency refuge area away from moving traffic is particularly important.
              </p>
            </div>

            {/* STEP 2 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h4>Make Your Vehicle Visible</h4>
              <p>
                Use your hazard warning lights when appropriate so other motorists can see that your vehicle has stopped. At night or in poor weather, visibility becomes even more important. Keep sidelights on if it is dark or foggy.
              </p>
            </div>

            {/* STEP 3 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h4>Contact Roadside Assistance</h4>
              <p>Provide the recovery company with accurate information about your location and vehicle. Useful details include:</p>
              <ul className={styles.detailList}>
                <li><CheckCircle2 size={16} className={styles.checkIcon} /> Your road or motorway (M11)</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon} /> Direction of travel (Northbound/Southbound)</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon} /> Nearby junction or landmark</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon} /> Vehicle make, model and registration</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon} /> Type of breakdown &amp; injuries (if any)</li>
              </ul>
            </div>

            {/* STEP 4 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h4>Avoid Unnecessary Delays</h4>
              <p>
                When your vehicle breaks down, trying to diagnose a complicated mechanical problem yourself can sometimes make the situation worse. If you are not confident, seek professional assistance immediately. On busy routes such as the M11 Corridor, standing close to moving traffic can be dangerous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSING THE RIGHT VEHICLE RECOVERY COMPANY */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Choosing the Right Vehicle Recovery Company</h2>
          <p className={styles.sectionSubtitle}>
            Not every recovery service provides the same level of support. When choosing a company, consider factors such as availability, coverage, experience and the types of assistance offered. Look for a provider that offers:
          </p>

          <div className={styles.checklistGrid}>
            {checklistItems.map((item, idx) => (
              <div key={idx} className={styles.checkItem}>
                <CheckCircle2 size={20} className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.65' }}>
            It is also useful to choose a company that clearly explains its services and provides straightforward communication, upfront pricing, and qualified drivers.
          </p>

          {/* M11 CORRIDOR AREAS WE COVER */}
          <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              M11 Corridor Coverage &amp; Surrounding Locations
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', margin: 0 }}>
              Our recovery vehicles cover all junctions of the M11 from London, Essex and Stansted Airport right up through Cambridgeshire:
            </p>
            <div className={styles.pillsContainer}>
              <Link href="/areas-we-cover/m11" className={styles.pillLink}>M11 Motorway</Link>
              <Link href="/areas-we-cover/cambridge" className={styles.pillLink}>Cambridge</Link>
              <Link href="/areas-we-cover/stansted-airport" className={styles.pillLink}>Stansted Airport</Link>
              <Link href="/areas-we-cover/harlow" className={styles.pillLink}>Harlow</Link>
              <Link href="/areas-we-cover/bishops-stortford" className={styles.pillLink}>Bishop&apos;s Stortford</Link>
              <Link href="/areas-we-cover/stevenage" className={styles.pillLink}>Stevenage</Link>
              <Link href="/areas-we-cover/saffron-walden" className={styles.pillLink}>Saffron Walden</Link>
              <Link href="/areas-we-cover/duxford" className={styles.pillLink}>Duxford</Link>
              <Link href="/areas-we-cover/newmarket" className={styles.pillLink}>Newmarket</Link>
              <Link href="/areas-we-cover/huntingdon" className={styles.pillLink}>Huntingdon</Link>
              <Link href="/areas-we-cover/st-neots" className={styles.pillLink}>St Neots</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION & EMERGENCY CTA */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
              Conclusion: Safe &amp; Efficient M11 Breakdown Assistance
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem' }}>
              A vehicle breakdown can happen to anyone, regardless of how carefully they maintain their car. When travelling along a busy route, having access to dependable roadside assistance can make a difficult situation much easier to manage.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem' }}>
              For motorists searching for <strong>M11 Corridor instead of Cambridge recovery support</strong>, professional roadside assistance can provide help with tyre problems, battery faults, breakdowns, accidents and vehicle transportation. From a simple flat tyre to a vehicle that requires recovery to a garage, the right assistance can help you deal with the problem safely and efficiently.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>
              If you regularly travel along the M11 Corridor, keeping the details of a reliable recovery service available can give you extra confidence on every journey. When an unexpected breakdown occurs, professional help can get you moving again or safely transport your vehicle to where it needs to go.
            </p>

            {/* CALL TO ACTION BOX */}
            <div className={styles.ctaBanner}>
              <h2>Need Roadside Assistance on the M11 Corridor Right Now?</h2>
              <p>
                Our 24/7 recovery operators are stationed strategically along the M11 corridor for fast response. Call or WhatsApp our dispatch desk immediately.
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
            Got questions about our M11 Corridor breakdown and roadside recovery services? Find clear answers below.
          </p>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
