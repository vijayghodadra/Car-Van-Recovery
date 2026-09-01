import { Metadata } from 'next';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata: Metadata = {
  title: 'Vehicle Recovery Cambridge | 24/7 Car & Van Recovery',
  description: 'Fast, professional vehicle recovery in Cambridge and surrounding areas. 24/7 emergency car and van towing, breakdown assistance, and accident recovery.',
  alternates: {
    canonical: '/cambridge-vehicle-recovery',
  }
};

const faqs = [
  {
    question: "Do you provide 24-hour vehicle recovery in Cambridge?",
    answer: "Yes, our recovery services in Cambridge operate 24 hours a day, 7 days a week, 365 days a year."
  },
  {
    question: "Can you recover my vehicle from the city centre?",
    answer: "Yes, our operators are familiar with Cambridge's narrow streets, one-way systems, and the city centre. We have the right equipment to safely extract and recover your vehicle."
  },
  {
    question: "Do you cover the villages surrounding Cambridge?",
    answer: "Absolutely. We cover all surrounding villages including Trumpington, Girton, Histon, Waterbeach, Milton, Sawston, and Great Shelford."
  }
];

export default function CambridgeRecovery() {
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
      
      <section className="section" style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-16) 0' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--font-4xl)', marginBottom: 'var(--spacing-4)' }}>Cambridge Vehicle Recovery</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Trusted, local 24/7 breakdown recovery and towing across Cambridge and surrounding villages.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            <div>
              <h2>Your Local Recovery Experts in Cambridge</h2>
              <p>
                Whether you've broken down on the A14, the M11, or right in the heart of Cambridge city centre, our local team is ready to respond. We pride ourselves on providing the highest standard of vehicle recovery for both cars and commercial vans in the Cambridgeshire area.
              </p>
              
              <h3 style={{ marginTop: 'var(--spacing-8)', marginBottom: 'var(--spacing-4)' }}>Local Coverage Areas</h3>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                {['Trumpington', 'Girton', 'Histon', 'Waterbeach', 'Milton', 'Sawston', 'Great Shelford'].map(area => (
                  <Link key={area} href={`/vehicle-recovery/${area.toLowerCase().replace(' ', '-')}`} style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    fontSize: 'var(--font-sm)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none'
                  }}>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Cambridge Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: 'var(--spacing-8)' }}>
            <ServiceCard 
              title="Car Recovery" 
              description="Safe transport for broken down or accident-damaged cars in Cambridge."
              href="/car-recovery"
            />
            <ServiceCard 
              title="Van Recovery" 
              description="Specialized towing for commercial vehicles to minimize your downtime."
              href="/van-recovery"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Cambridge Recovery FAQs</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
