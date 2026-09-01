import { Metadata } from 'next';
import Image from 'next/image';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './reviews.module.css';

export const metadata: Metadata = {
  title: 'Customer Reviews | 5-Star Vehicle Recovery Services',
  description: 'Read real customer reviews and testimonials about our 24/7 breakdown recovery, mobile tyre fitting, and emergency jump start services.',
  alternates: {
    canonical: '/reviews',
  }
};

const reviews = [
  {
    name: "James T.",
    location: "Stansted Airport",
    date: "August 2026",
    rating: 5,
    text: "Incredible service. I returned to Stansted after a 2-week holiday to a completely dead battery. I called them at 2 AM, and they arrived within 30 minutes. The technician was polite, professional, and got my car started immediately with a safe booster pack. Highly recommended!"
  },
  {
    name: "Sarah M.",
    location: "M11 Motorway",
    date: "July 2026",
    rating: 5,
    text: "Had a terrifying blowout on the M11. Called these guys and they were absolutely brilliant. They told me exactly where to stand to be safe while I waited. The recovery truck arrived fast, and they managed to change my tyre on the hard shoulder safely. Five stars aren't enough."
  },
  {
    name: "David L.",
    location: "Cambridge",
    date: "June 2026",
    rating: 5,
    text: "Needed my commercial van towed after the clutch went. As a tradesman, time is money, and I couldn't afford to be stuck for hours. They dispatched a heavy-duty flatbed immediately. Very professional setup, the driver clearly knew what he was doing."
  },
  {
    name: "Emma R.",
    location: "Bishop's Stortford",
    date: "May 2026",
    rating: 5,
    text: "Fast, reliable, and reasonably priced. I broke down on the school run and was panicking. The dispatcher was so calming on the phone. They recovered my car and took us straight to our local garage without any fuss."
  },
  {
    name: "Mark B.",
    location: "Harlow",
    date: "April 2026",
    rating: 5,
    text: "Excellent service from start to finish. I used their WhatsApp feature to send my live location because I wasn't entirely sure where I was on the country roads. They found me straight away. Flawless use of technology and great customer service."
  },
  {
    name: "Chloe W.",
    location: "Newmarket",
    date: "March 2026",
    rating: 5,
    text: "I had a puncture and didn't have a spare. They came out, assessed the tyre, and managed to do a safe, permanent roadside repair there and then. Saved me having to buy a brand new tyre and getting towed. Very honest company."
  }
];

export default function ReviewsPage() {
  return (
    <>
      {/* Schema Markup for AggregateRating & Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": businessConfig.name,
            "image": "https://carandvanrecovery.co.uk/images/hero-wide.jpg",
            "telephone": businessConfig.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "M11 Corridor",
              "addressLocality": "Stansted",
              "addressRegion": "Essex",
              "addressCountry": "UK"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": reviews.map(r => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating.toString(),
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": r.name
              },
              "datePublished": r.date,
              "reviewBody": r.text
            }))
          })
        }}
      />

      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src="/images/Poster/change tire.png"
              alt="Happy customer after a successful vehicle recovery"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay} style={{ background: 'rgba(0,0,0,0.8)' }}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <span className={styles.heroEyebrow}>CUSTOMER TESTIMONIALS</span>
            <h1 className={styles.heroTitle}>DON'T JUST TAKE OUR WORD FOR IT</h1>
            <p className={styles.heroDesc}>
              Read verified reviews from drivers across the M11, Stansted, and Cambridge who trusted us during their roadside emergencies.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <div style={{ display: 'flex', color: '#FFD700' }}>
                <Star size={28} fill="currentColor" />
                <Star size={28} fill="currentColor" />
                <Star size={28} fill="currentColor" />
                <Star size={28} fill="currentColor" />
                <Star size={28} fill="currentColor" />
              </div>
              <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>4.9/5 Average Rating</span>
            </div>
          </div>
        </section>

        {/* TRUST BADGES SECTION */}
        <section style={{ backgroundColor: 'var(--brand-black)', color: '#fff', padding: '24px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={24} />
                <span style={{ fontWeight: 600 }}>Verified Customer Feedback</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={24} />
                <span style={{ fontWeight: 600 }}>Fully Insured Operators</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={24} />
                <span style={{ fontWeight: 600 }}>Rapid 24/7 Response</span>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section className={styles.section} style={{ backgroundColor: 'var(--bg-light)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {reviews.map((review, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#fff', 
                  padding: '32px', 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', color: '#FFD700', gap: '2px' }}>
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <Quote size={24} color="var(--accent-red)" opacity={0.2} />
                  </div>
                  
                  <p style={{ 
                    color: 'var(--text-primary)', 
                    lineHeight: 1.6, 
                    fontSize: '1.1rem',
                    flexGrow: 1,
                    marginBottom: '24px',
                    fontStyle: 'italic'
                  }}>
                    "{review.text}"
                  </p>
                  
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-black)', marginBottom: '4px' }}>{review.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{review.location}</p>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
