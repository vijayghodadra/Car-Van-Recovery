'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { businessConfig } from '@/config/business';
import EmergencyBooking from '@/components/ui/EmergencyBooking';
import ServiceCard from '@/components/ui/ServiceCard';
import { ArrowRight, ArrowUpRight, Phone, Clock, Car, Navigation, ShieldCheck, MapPin, Users, Truck, Zap, Star, CheckCircle, MessageCircle, Building2, PoundSterling, Globe } from 'lucide-react';
import styles from './page.module.css';

// Reusable animated section wrapper
const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const m11Junctions = ['J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12', 'J13', 'J14'];
  const cambridgeLocations = ['Cambridge', 'Trumpington', 'Duxford', 'Sawston', 'Whittlesford', 'Great Shelford', 'Histon', 'Girton', 'Waterbeach'];
  const m11Locations = ['Harlow', 'Bishops Stortford', 'Stansted', 'Saffron Walden', 'Duxford', 'Trumpington', 'Cambridge'];
  const essexHertsLocations = ['Royston', 'Stevenage', 'Letchworth', 'Buntingford', 'Ware', 'Hertford'];

  return (
    <>
      {/* Hero Section with Full Background Image */}
      <section className={styles.hero}>
        {/* Full width background image */}
        <div className={styles.heroBackgroundWrapper}>
           <Image 
            src="/images/hero-wide.jpg" 
            alt="UK Vehicle Recovery Truck" 
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Gradient overlay to make text readable on the left */}
          <div className={styles.heroGradientOverlay} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.heroEyebrow}>24/7 VEHICLE RECOVERY</div>
              <h1 className={styles.heroHeadline}>
                WHEN THE<br />
                ROAD STOPS,<br />
                <span className={styles.heroHeadlineRed}>WE DON'T.</span>
              </h1>
              <p className={styles.heroDesc}>
                Fast, professional car and van recovery across Cambridge, 
                the M11 corridor and surrounding areas.
              </p>
              
              <div className={styles.heroActions}>
                <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.btnPrimaryRed}>
                  <Phone size={20} fill="currentColor" />
                  <div className={styles.btnTextCol}>
                    <span className={styles.btnLabel}>CALL NOW</span>
                    <span className={styles.btnSub}>{businessConfig.phone}</span>
                  </div>
                </a>
                <Link href="/contact" className={styles.btnSecondaryOutline}>
                  <div className={styles.targetIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle><path d="m22 12-3 0"></path><path d="m5 12-3 0"></path><path d="m12 5 0-3"></path><path d="m12 22 0-3"></path></svg>
                  </div>
                  <span>REQUEST RECOVERY</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Trust Strip inside Hero Content */}
            <motion.div 
              className={styles.heroTrustStrip}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.trustItem}>
                <div className={styles.trustIconCircle}><Clock size={20} /></div>
                <div className={styles.trustText}>
                  <span className={styles.trustTitle}>24/7</span>
                  <span className={styles.trustSub}>Emergency Service</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIconCircle}><Car size={20} /></div>
                <div className={styles.trustText}>
                  <span className={styles.trustTitle}>Cars & Vans</span>
                  <span className={styles.trustSub}>All Makes & Models</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIconCircle}><Navigation size={20} /></div>
                <div className={styles.trustText}>
                  <span className={styles.trustTitle}>M11 Coverage</span>
                  <span className={styles.trustSub}>J4 - J14</span>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIconCircle}><ShieldCheck size={20} /></div>
                <div className={styles.trustText}>
                  <span className={styles.trustTitle}>Fully Insured</span>
                  <span className={styles.trustSub}>Professional Service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Announcement Ticker */}
      <div className={styles.tickerContainer}>
        <div className={styles.tickerTrack}>
          {/* We duplicate the content twice to create a seamless infinite marquee */}
          {[1, 2].map((i) => (
            <div key={i} className={styles.tickerContent}>
              <div className={styles.tickerItem}>
                <Clock size={16} /> RESPONSE IN 30–45 MINS
              </div>
              <div className={styles.tickerSeparator}></div>
              <div className={styles.tickerItem}>
                <Phone size={16} /> AVAILABLE 24/7, 365 DAYS
              </div>
              <div className={styles.tickerSeparator}></div>
              <div className={styles.tickerItem}>
                <PoundSterling size={16} /> NO CALL-OUT FEE
              </div>
              <div className={styles.tickerSeparator}></div>
              <div className={styles.tickerItem}>
                <Globe size={16} /> NATIONWIDE UK SERVICE AVAILABLE
              </div>
              <div className={styles.tickerSeparator}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid (Overlapping Hero) */}
      <section className={styles.servicesSection}>
        <div className={`container ${styles.servicesGrid}`}>
          
          <FadeInWhenVisible delay={0.1}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}><span className={styles.textRed}>M11</span> RECOVERY</h3>
                <p className={styles.serviceCardDesc}>Specialist recovery across the M11 corridor, from Junction 4 to 14.</p>
                <Link href="/m11-recovery" className={styles.serviceCardLink}>
                  VIEW M11 COVERAGE <ArrowRight size={14} />
                </Link>
              </div>
              <div className={styles.serviceCardImageWrapper}>
                <Image src="/images/cta.jpg" alt="M11 Motorway" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className={styles.serviceCardFade} />
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}><span className={styles.textRed}>CAR</span> RECOVERY</h3>
                <p className={styles.serviceCardDesc}>Fast, safe and reliable recovery for cars of all makes.</p>
                <Link href="/car-recovery" className={styles.serviceCardLink}>
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
              <div className={styles.serviceCardImageWrapper}>
                <Image src="/images/cambridge.jpg" alt="Car Recovery" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className={styles.serviceCardFade} />
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}><span className={styles.textRed}>VAN</span> RECOVERY</h3>
                <p className={styles.serviceCardDesc}>Professional recovery for vans and commercial vehicles.</p>
                <Link href="/van-recovery" className={styles.serviceCardLink}>
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
              <div className={styles.serviceCardImageWrapper}>
                <Image src="/images/hero.jpg" alt="Van Recovery" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className={styles.serviceCardFade} />
              </div>
            </div>
          </FadeInWhenVisible>

        </div>
      </section>

      {/* How It Works & Bottom CTA (Single Row Layout) */}
      <section className={styles.bottomSection}>
        <div className={`container ${styles.bottomContainer}`}>
          
          {/* Left Header */}
          <div className={styles.howItWorksHeader}>
            <div className={styles.howEyebrow}>HOW IT WORKS</div>
            <h2 className={styles.howTitle}>Simple. Fast. Reliable.</h2>
            <div className={styles.howLine}></div>
          </div>

          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.stepIconWrap}>
              <Phone size={28} className={styles.textRed} strokeWidth={1.5} />
              <div className={styles.stepBadge}>01</div>
            </div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>CALL US</h4>
              <p className={styles.stepDesc}>Get in touch 24/7.<br/>We're ready to help.</p>
            </div>
            <div className={styles.stepConnector}></div>
          </div>
          
          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.stepIconWrap}>
              <MapPin size={28} className={styles.textRed} strokeWidth={1.5} />
              <div className={styles.stepBadge}>02</div>
            </div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>SHARE LOCATION</h4>
              <p className={styles.stepDesc}>Tell us where you are<br/>and what's happened.</p>
            </div>
            <div className={styles.stepConnector}></div>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.stepIconWrap}>
              <Truck size={28} className={styles.textRed} strokeWidth={1.5} />
              <div className={styles.stepBadge}>03</div>
            </div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>WE'LL GET TO YOU</h4>
              <p className={styles.stepDesc}>We'll dispatch the nearest<br/>recovery vehicle.</p>
            </div>
          </div>

          {/* Right Red CTA Block */}
          <div className={styles.bottomCtaBlock}>
            <div className={styles.ctaBlockContent}>
              <h3 className={styles.ctaBlockTitle}>NEED IMMEDIATE HELP?</h3>
              <p className={styles.ctaBlockDesc}>We're just one call away.</p>
              <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.ctaBlockPhone}>
                <Phone size={24} />
                {businessConfig.phone}
              </a>
              <div className={styles.ctaBlockBadge}>AVAILABLE 24/7</div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Services Section */}
      <section className={styles.ourServicesSection}>
        <div className={`container ${styles.ourServicesContainer}`}>
          
          <div className={styles.ourServicesHeader}>
            <div className={styles.ourServicesEyebrow}>OUR SERVICES</div>
            <h2 className={styles.ourServicesTitle}>
              Everything You Need <span className={styles.textRed}>On The Road</span>
            </h2>
            <p className={styles.ourServicesDesc}>
              Professional emergency services available 24/7 across the entire United Kingdom
            </p>
          </div>

          {/* Premium Service Cards Grid */}
          <div className={styles.servicesGridNew}>
            {[
              {
                title: 'Breakdown Vehicle Recovery',
                icon: Truck,
                iconBgColor: '#FFF0F0',
                iconColor: '#D71920',
                description: 'Fast, reliable 24/7 breakdown recovery across the UK with 15–30 minute response times.',
                imageSrc: '/images/breakdown.jpg',
                imageAlt: 'Breakdown Vehicle Recovery',
              },
              {
                title: 'Auction & Garage Collection',
                icon: Building2,
                iconBgColor: '#e6f4fb',
                iconColor: '#0284c7',
                description: 'Professional vehicle collection from auctions and garages across the UK.',
                imageSrc: '/images/auction.jpg',
                imageAlt: 'Auction and Garage Collection',
              },
              {
                title: 'Jump Start & Tyre Change',
                icon: Zap,
                iconBgColor: '#eefcf1',
                iconColor: '#16a34a',
                description: 'Fast roadside jump start and tyre change assistance.',
                imageSrc: '/images/jumpstart.jpg',
                imageAlt: 'Jump Start and Tyre Change',
              },
              {
                title: 'Classic Car & Special Vehicle Transport',
                icon: Car,
                iconBgColor: '#f5f3ff',
                iconColor: '#7c3aed',
                description: 'Specialist handling and transport for classic cars and special vehicles.',
                imageSrc: '/images/classic.jpg',
                imageAlt: 'Classic Car Transport',
              }
            ].map((card, index) => (
              <ServiceCard 
                key={index}
                title={card.title}
                icon={card.icon}
                iconBgColor={card.iconBgColor}
                iconColor={card.iconColor}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <EmergencyBooking />

      {/* Dedicated M11 Route Section */}
      <section className={styles.m11Section}>
        <div className={`container ${styles.m11Container}`}>
          <FadeInWhenVisible>
            <div className={styles.m11Header}>
              <h2 className={styles.m11Title}>
                <span className={styles.textRed}>M11</span> VEHICLE RECOVERY
              </h2>
              <p className={styles.m11Desc}>
                Rapid emergency recovery across the entire M11 corridor.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className={styles.routeVisual}>
            <div className={styles.routeLineHorizontal}></div>
            <div className={styles.routeNodesContainer}>
              {m11Junctions.map((j, idx) => (
                <FadeInWhenVisible key={j} delay={idx * 0.05}>
                  <Link href={`/m11-recovery/junction-${j.replace('J', '')}`} className={styles.routeNodeBlock}>
                    <div className={styles.routeDotHorizontal}></div>
                    <span className={styles.routeJunctionText}>{j}</span>
                  </Link>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Dedicated Cambridge Section */}
      <section className={styles.cambridgeSection}>
        <div className={`container ${styles.cambridgeContainer}`}>
          <FadeInWhenVisible>
            <h2 className={styles.cambridgeTitle}>
              <span className={styles.textRed}>CAMBRIDGE</span> VEHICLE RECOVERY
            </h2>
            <p className={styles.cambridgeDesc}>
              Professional car and van recovery across Cambridge and surrounding areas.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Directory Section */}
      <section className={styles.directorySection}>
        <div className={`container ${styles.directoryContainer}`}>
          <div className={styles.directoryCol}>
            <h4 className={styles.directoryTitle}>CAMBRIDGESHIRE</h4>
            <div className={styles.directoryLinks}>
              {cambridgeLocations.map(loc => (
                <Link key={loc} href={`/vehicle-recovery/${loc.toLowerCase().replace(' ', '-')}`}>{loc}</Link>
              ))}
            </div>
          </div>
          <div className={styles.directoryCol}>
            <h4 className={styles.directoryTitle}>M11 CORRIDOR</h4>
            <div className={styles.directoryLinks}>
              {m11Locations.map(loc => (
                <Link key={loc} href={`/vehicle-recovery/${loc.toLowerCase().replace(' ', '-')}`}>{loc}</Link>
              ))}
            </div>
          </div>
          <div className={styles.directoryCol}>
            <h4 className={styles.directoryTitle}>ESSEX / HERTS</h4>
            <div className={styles.directoryLinks}>
              {essexHertsLocations.map(loc => (
                <Link key={loc} href={`/vehicle-recovery/${loc.toLowerCase().replace(' ', '-')}`}>{loc}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Trust Strip */}
      <div className={styles.preFooterStrip}>
        <div className={`container ${styles.preFooterGrid}`}>
          <div className={styles.preFooterItem}>
            <Users size={24} className={styles.textRed} />
            <div className={styles.pfText}>
              <div className={styles.pfTitle}>PROFESSIONAL TEAM</div>
              <div className={styles.pfSub}>Experienced & Trained</div>
            </div>
          </div>
          <div className={styles.preFooterItem}>
            <Truck size={24} className={styles.textRed} />
            <div className={styles.pfText}>
              <div className={styles.pfTitle}>MODERN FLEET</div>
              <div className={styles.pfSub}>Latest Recovery Vehicles</div>
            </div>
          </div>
          <div className={styles.preFooterItem}>
            <Zap size={24} className={styles.textRed} />
            <div className={styles.pfText}>
              <div className={styles.pfTitle}>RAPID RESPONSE</div>
              <div className={styles.pfSub}>When You Need Us Most</div>
            </div>
          </div>
          <div className={styles.preFooterItem}>
            <Star size={24} className={styles.textRed} />
            <div className={styles.pfText}>
              <div className={styles.pfTitle}>LOCAL EXPERTS</div>
              <div className={styles.pfSub}>Cambridge & M11 Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
