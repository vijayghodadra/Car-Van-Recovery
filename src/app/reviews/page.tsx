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
  },
  {
    name: "Alex K.",
    location: "Stevenage",
    date: "February 2026",
    rating: 5,
    text: "Our family SUV broke down on the way home late at night. Car&Van Recovery dispatched a driver immediately who arrived in less than 25 minutes. Exceptionally professional service and extremely reasonable pricing."
  },
  {
    name: "Hassan R.",
    location: "Haverhill",
    date: "January 2026",
    rating: 5,
    text: "Top-notch roadside assistance. Had a flat tyre and a rusted wheel nut that wouldn't budge. The technician had heavy-duty tools and solved the issue safely on the spot. Will definitely save their number!"
  }
];

const GoogleLogo = () => (
  <svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.24 10.43v2.85h6.63c-.26 1.71-1.95 5.01-6.63 5.01-3.99 0-7.25-3.3-7.25-7.38S5.25 3.53 9.24 3.53c2.27 0 3.79.97 4.66 1.8l2.25-2.17C14.7 1.8 12.22.75 9.24.75 4.14.75 0 4.89 0 9.99s4.14 9.24 9.24 9.24c5.34 0 8.88-3.75 8.88-9.04 0-.61-.06-1.07-.13-1.53H9.24z" fill="#4285F4"/>
    <path d="M24.28 7.42c-3.13 0-5.6 2.37-5.6 5.57s2.47 5.57 5.6 5.57c3.13 0 5.6-2.37 5.6-5.57s-2.47-5.57-5.6-5.57zm0 8.97c-1.72 0-3.2-1.42-3.2-3.4 0-1.99 1.48-3.4 3.2-3.4 1.72 0 3.2 1.41 3.2 3.4 0 1.98-1.48 3.4-3.2 3.4z" fill="#EA4335"/>
    <path d="M36.46 7.42c-3.13 0-5.6 2.37-5.6 5.57s2.47 5.57 5.6 5.57c3.13 0 5.6-2.37 5.6-5.57s-2.47-5.57-5.6-5.57zm0 8.97c-1.72 0-3.2-1.42-3.2-3.4 0-1.99 1.48-3.4 3.2-3.4 1.72 0 3.2 1.41 3.2 3.4 0 1.98-1.48 3.4-3.2 3.4z" fill="#FBBC05"/>
    <path d="M47.79 7.74h-.12c-.56-.67-1.64-1.28-3-1.28-2.83 0-5.41 2.47-5.41 5.54 0 3.04 2.58 5.54 5.41 5.54 1.36 0 2.44-.61 3-1.3h.12v.81c0 2.12-1.13 3.25-2.96 3.25-1.49 0-2.42-1.07-2.8-1.98l-2.49 1.04c.72 1.73 2.62 3.86 5.29 3.86 3.08 0 5.69-1.81 5.69-5.78V7.74h-2.73v1.07zm-2.87 8.65c-1.72 0-3.03-1.45-3.03-3.38 0-1.95 1.31-3.38 3.03-3.38 1.69 0 3.03 1.45 3.03 3.4 0 1.93-1.34 3.36-3.03 3.36z" fill="#4285F4"/>
    <path d="M54.15 1.25h2.82v17.26h-2.82V1.25z" fill="#34A853"/>
    <path d="M62.9 16.39c-1.52 0-2.61-.7-3.3-2.04l9.1-3.77-.3-.75c-.56-1.52-2.28-4.41-5.81-4.41-3.5 0-6.42 2.76-6.42 5.57 0 3.1 2.89 5.57 6.42 5.57 2.84 0 4.49-1.74 5.17-2.75l-2.12-1.41c-.7.99-1.65 1.59-2.74 1.59zm-.19-7.66c1.2 0 2.22.61 2.56 1.49l-6.11 2.53c0-2.44 1.74-4.02 3.55-4.02z" fill="#EA4335"/>
  </svg>
);

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
        <section style={{ backgroundColor: '#f8fafc', color: '#111827', padding: '20px 0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={22} />
                <span style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>Verified Customer Feedback</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={22} />
                <span style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>Fully Insured Operators</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 color="var(--accent-red)" size={22} />
                <span style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>Rapid 24/7 Response</span>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID - GOOGLE VERIFIED CARDS */}
        <section className={styles.section} style={{ backgroundColor: 'var(--bg-light)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {reviews.map((review, idx) => (
                <div key={idx} className={styles.googleReviewCard}>
                  {/* Google Logo & Verified Badge Header */}
                  <div className={styles.googleHeader}>
                    <GoogleLogo />
                    <div className={styles.verifiedBadge}>
                      <CheckCircle2 size={16} color="#16a34a" fill="none" strokeWidth={2.5} />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className={styles.starRow}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className={styles.reviewQuoteText}>
                    "{review.text}"
                  </p>
                  
                  {/* Footer with Author & Location */}
                  <div className={styles.googleFooter}>
                    <h3 className={styles.authorName}>{review.name}</h3>
                    <div>
                      <p className={styles.authorLocation}>{review.location}</p>
                      <p className={styles.authorDate}>{review.date}</p>
                    </div>
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

