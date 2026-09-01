import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Car & Van Recovery',
  description: 'Find answers to common questions about our 24/7 vehicle recovery, breakdown assistance, mobile tyre fitting, and jump start services.',
  alternates: {
    canonical: '/faq',
  }
};

const allFaqs = [
  { q: "How quickly can you arrive?", a: "We aim to reach most breakdowns within 30-45 minutes depending on your exact location and current traffic conditions. We prioritize emergency situations on busy roads." },
  { q: "Are you available 24/7?", a: "Yes, our recovery services operate 24 hours a day, 7 days a week, 365 days a year. Breakdowns don't wait for business hours, and neither do we." },
  { q: "Can you recover commercial vans?", a: "Absolutely. We have heavy-duty flatbed trucks capable of securely loading and transporting commercial vans, LWB vehicles, and large passenger cars." },
  { q: "Do you offer roadside tyre changes?", a: "Yes, our mobile tyre fitting service can replace your damaged wheel with your spare, or in some cases, perform a safe, permanent roadside puncture repair." },
  { q: "What happens if my car won't start?", a: "Our technicians carry surge-protected jump packs to safely start dead batteries. If the issue is mechanical, we will recover your vehicle to a local garage." },
  { q: "Do you cover the M11 and Stansted Airport?", a: "Yes, we are highly experienced in safe motorway recoveries along the M11 corridor and all areas surrounding Stansted Airport." },
  { q: "Is your service fully insured?", a: "Yes, we are fully insured and our operators are highly trained to ensure your vehicle is protected during loading, transit, and unloading." },
  { q: "How much does vehicle recovery cost?", a: "Costs vary depending on your location, vehicle type, and the distance it needs to be transported. Call or WhatsApp us with your location for an immediate, transparent quote." }
];

export default function FAQPage() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map((faq) => ({
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
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/breakdown.jpg"
              alt="Customer service representative answering vehicle recovery questions"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>CUSTOMER SUPPORT</span>
            <h1 className={styles.heroTitle}>FREQUENTLY ASKED QUESTIONS</h1>
            <p className={styles.heroDesc}>
              Find quick answers to common questions regarding our 24/7 breakdown recovery, towing, and roadside assistance services.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <HelpCircle size={48} className={styles.textRed} style={{ marginBottom: '16px' }} />
              <h2 className={styles.h2}>HOW CAN WE HELP?</h2>
            </div>
            
            <div className={styles.faqContainer}>
              {allFaqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

