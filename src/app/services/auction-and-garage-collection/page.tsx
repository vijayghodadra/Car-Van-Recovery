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
  Sparkles, 
  Navigation, 
  Building2, 
  Cog, 
  CheckCircle2, 
  ShieldAlert, 
  Home, 
  MapPin, 
  Gavel
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { generateLocalSchema } from '@/config/seo';
import ProcessSteps from '@/components/ui/services/ProcessSteps';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Vehicle Auction & Garage Collection | Car&Van Recovery'
  },
  description: 'Professional auction and garage vehicle collection across the UK. Copart, BCA, dealership, and workshop transport for cars and vans. Fully insured.',
  alternates: {
    canonical: 'https://www.carvanrecovery.co.uk/services/auction-and-garage-collection',
  }
};

const auctionItems = [
  { title: 'Cars purchased from vehicle auctions', icon: Car },
  { title: 'Vans purchased from auctions', icon: Truck },
  { title: 'Non-running vehicles', icon: AlertTriangle },
  { title: 'Damaged or salvage vehicles', icon: Wrench },
  { title: 'Project and classic vehicles', icon: Sparkles },
  { title: 'Vehicles without current road access', icon: MapPin },
  { title: 'Auction vehicles requiring long-distance transport', icon: Navigation },
];

const garageItems = [
  { title: 'Vehicles after mechanical repairs', icon: Wrench },
  { title: 'Cars requiring further workshop repairs', icon: Cog },
  { title: 'Non-running vehicles', icon: AlertTriangle },
  { title: 'MOT-related vehicle transportation', icon: CheckCircle2 },
  { title: 'Accident-damaged vehicles', icon: ShieldAlert },
  { title: 'Cars and vans being moved between garages', icon: Truck },
  { title: 'Vehicles being returned to customers', icon: Home },
];

export default function AuctionAndGarageCollectionPage() {
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
            src="/images/auction.jpg"
            alt="Auction & Garage Vehicle Collection Across the UK"
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
                <Gavel size={16} /> NATIONWIDE VEHICLE TRANSPORTATION
              </div>
              <h1 className={styles.title}>
                Auction &amp; Garage Vehicle Collection Across the UK
              </h1>
              <p className={styles.description}>
                Need reliable auction vehicle collection in the UK? Car &amp; Van Recovery provides professional and fully insured vehicle transport services across the UK, collecting cars and vans from auction houses, garages, dealerships and private sellers and delivering them safely to your home, workplace or chosen destination.
              </p>
              <p className={styles.description} style={{ marginTop: '-20px' }}>
                Our experienced recovery operators provide a dependable car collection and delivery service, with suitable equipment for the safe loading, transportation and unloading of vehicles.
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
              <div className={styles.glassStatIcon}><ShieldCheck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>FULLY INSURED</span>
                <span className={styles.glassStatDesc}>Complete Peace of Mind</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Truck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>NATIONWIDE</span>
                <span className={styles.glassStatDesc}>Any UK Auction or Garage</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Car size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>ALL VEHICLES</span>
                <span className={styles.glassStatDesc}>Cars, Vans &amp; Salvage</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ThumbsUp size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>SAFE HANDLING</span>
                <span className={styles.glassStatDesc}>Winch &amp; Damage-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: RELIABLE AUCTION VEHICLE COLLECTION UK */}
      <section className={`${styles.section} ${styles.sectionAlt}`} style={{ paddingTop: 'var(--spacing-28)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Reliable Auction Vehicle Collection UK</h2>
            <p className={styles.leadText}>
              Buying a vehicle from an auction often requires specialist transportation, particularly when the vehicle is non-running, damaged or not road legal. Our auction vehicle collection service provides a convenient solution for customers purchasing vehicles from auction houses across the UK.
            </p>
            <p className={styles.leadText}>
              We can collect cars and vans from major auction companies such as Copart, BCA and independent vehicle auctions, then transport them securely to your home, business premises, garage or another specified location.
            </p>
            <p className={styles.sublistTitle}>Our auction car collection service is suitable for:</p>
          </div>

          <div className={styles.pillsGrid}>
            {auctionItems.map((item, idx) => {
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
        </div>
      </section>

      {/* SECTION 2: COPART & BCA VEHICLE COLLECTION & PROFESSIONAL VEHICLE TRANSPORT */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.duoGrid}>
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Building2 size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Copart &amp; BCA Vehicle Collection</h2>
              <p className={styles.duoCardText}>
                If you&apos;ve purchased a vehicle through Copart or BCA, arranging reliable transportation is an important part of the buying process. Our Copart vehicle collection and BCA vehicle collection services provide professional vehicle transportation from auction locations to your chosen destination.
              </p>
              <p className={styles.duoCardText}>
                We can assist with the collection and safe transportation of cars and vans, helping make the entire{' '}
                <Link href="/" className={styles.inlineLink}>
                  auction vehicle transport
                </Link>{' '}
                process straightforward and convenient.
              </p>
            </div>

            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Navigation size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Professional Vehicle Transport Across the UK</h2>
              <p className={styles.duoCardText}>
                Our vehicle transport UK service is available for customers who need cars or vans moved between locations anywhere across the country.
              </p>
              <p className={styles.duoCardText}>
                Whether you&apos;ve purchased a vehicle at auction, bought a car from a private seller or need a commercial van transported, our team can provide a practical car transport service in the UK.
              </p>
              <p className={styles.duoCardText}>
                We carefully load and secure vehicles before transportation, helping minimise the risk of damage during collection and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GARAGE COLLECTION & VEHICLE DELIVERY */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Garage Collection &amp; Vehicle Delivery</h2>
            <p className={styles.leadText}>
              Our garage collection service is ideal when a vehicle needs to be moved between a repair workshop, dealership, home or another location.
            </p>
            <p className={styles.leadText}>
              If your vehicle has broken down and has been repaired by a garage, we can collect it and arrange garage vehicle delivery to your home or business. We can also transport vehicles to another workshop when additional repairs or specialist work are required.
            </p>
            <p className={styles.sublistTitle}>Our garage collection and delivery service can be used for:</p>
          </div>

          <div className={styles.pillsGrid}>
            {garageItems.map((item, idx) => {
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
        </div>
      </section>

      {/* SECTION 4: SAFE & RELIABLE TRANSPORTATION & FULLY INSURED SERVICE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.duoGrid}>
            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <Truck size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Safe &amp; Reliable Car and Van Transportation</h2>
              <p className={styles.duoCardText}>
                We understand that every vehicle collection requires careful handling. Our trained recovery operators use suitable loading and transportation equipment to help ensure your car or van is moved safely.
              </p>
              <p className={styles.duoCardText}>
                From a local car collection service to long-distance van transport across the UK, we provide professional vehicle transportation tailored to the vehicle and collection requirements.
              </p>
            </div>

            <div className={styles.duoCard}>
              <div className={styles.duoCardIcon}>
                <ShieldCheck size={28} />
              </div>
              <h2 className={styles.duoCardTitle}>Fully Insured Vehicle Collection Service</h2>
              <p className={styles.duoCardText}>
                We provide a professional and fully insured vehicle collection and delivery service designed to give customers peace of mind. From arranging collection to safely loading and transporting your vehicle, we aim to make the process as simple and efficient as possible.
              </p>
              <p className={styles.duoCardText}>
                Whether you&apos;re a private buyer, motor trader, garage, dealership or business, our UK vehicle transport service can help move your vehicle safely from one location to another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW VEHICLE COLLECTION WORKS */}
      <ProcessSteps 
        title="HOW VEHICLE COLLECTION WORKS"
        steps={[
          { step: '01', title: 'BOOK', desc: 'Schedule your collection and delivery dates.' },
          { step: '02', title: 'DETAILS', desc: 'Provide lot, VIN, or garage reference details.' },
          { step: '03', title: 'COLLECT', desc: 'We inspect, winch, and securely load.' },
          { step: '04', title: 'DELIVER', desc: 'Safe transport and handover at destination.' }
        ]}
      />

      {/* SECTION 6: AUCTION & GARAGE COLLECTION THROUGHOUT THE UK (FINAL CTA) */}
      <section className={styles.callSection}>
        <div className="container">
          <div className={styles.callBox}>
            <h2 className={styles.callTitle}>Auction &amp; Garage Collection Throughout the UK</h2>
            <p className={styles.callText}>
              From auction vehicle collection and Copart collection to garage vehicle collection and car transportation, Car &amp; Van Recovery provides reliable vehicle transport throughout the UK.
            </p>
            <p className={`${styles.callText} ${styles.callTextLead}`}>
              If you need a vehicle collected from an auction, garage, dealership or private seller, contact us today for professional auction vehicle collection, garage collection and vehicle transport across the UK.
            </p>
            <div className={styles.callActions}>
              <a href={phoneUrl} className={styles.btnPrimary}>
                <Phone size={20} /> CALL FOR A QUOTE: {businessConfig.phone}
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
