import { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import FAQ from '@/components/ui/FAQ';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import { junctions, roads, locations } from '@/config/locations';

export const metadata: Metadata = {
  title: 'M11 Breakdown Recovery | 24/7 Motorway Towing & Assistance',
  description: 'Fast M11 breakdown recovery covering junctions 4 to 14. Emergency towing, car recovery, and van assistance along the entire M11 corridor into Cambridge.',
  alternates: {
    canonical: '/m11-recovery',
  }
};

export default function M11RecoveryPage() {
  const faqs = [
    {
      question: "Are you permitted to recover vehicles from the M11?",
      answer: "Yes, our recovery vehicles and operators are fully equipped and insured to provide safe breakdown recovery on the M11 and all UK motorways."
    },
    {
      question: "How long will it take you to reach me on the M11?",
      answer: "We aim for an immediate response. Depending on traffic and your exact junction, we often reach stranded motorists on the M11 within 30-45 minutes."
    },
    {
      question: "What should I do while waiting on the hard shoulder?",
      answer: "Exit your vehicle via the left-hand doors, stand well behind the safety barrier, and face oncoming traffic. Never attempt to repair the vehicle yourself on the hard shoulder."
    }
  ];

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
          <h1 style={{ fontSize: 'var(--font-4xl)', marginBottom: 'var(--spacing-4)' }}>M11 Breakdown Recovery</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Emergency motorway towing and roadside assistance across the entire M11 corridor, from London to Cambridge.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            <div>
              <h2>Rapid Response on the M11 Motorway</h2>
              <p>
                Breaking down on the M11 can be stressful and highly dangerous. Whether you are caught between junctions or stuck at a busy interchange like J14 (Girton) or J8 (Stansted), our dedicated motorway recovery fleet is ready to dispatch immediately.
              </p>
              <p>
                We provide rapid, safe recovery for cars, 4x4s, and commercial vans. Our drivers are trained in motorway safety protocols to ensure you and your vehicle are recovered securely to your chosen destination.
              </p>
              
              <div style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)', borderLeft: '4px solid var(--accent-primary)', padding: 'var(--spacing-4)', margin: 'var(--spacing-6) 0', borderRadius: '0 4px 4px 0' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-2)' }}>Motorway Safety First</h4>
                <p style={{ margin: 0, fontSize: 'var(--font-sm)' }}>If your vehicle develops a problem on the M11, try to reach the next junction or service area. If you must stop, use the hard shoulder, put your hazard lights on, and wait safely behind the barrier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">M11 Junction Coverage</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-8)' }}>
            We provide comprehensive recovery coverage along the M11. Select your nearest junction below for specific local information.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {junctions.map((j) => (
              <Link 
                key={j.slug} 
                href={`/m11-recovery/${j.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--spacing-4)',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <span style={{ fontWeight: '600', color: 'var(--accent-primary)', fontSize: 'var(--font-lg)', marginBottom: '0.25rem' }}>{j.name}</span>
                <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)' }}>{j.nearbyLocations.map(slug => locations.find(l => l.slug === slug)?.name).join(', ')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Connecting Major Roads</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-8)' }}>
            Our recovery network extends seamlessly into the major arteries connecting to the M11 corridor.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {roads.filter(r => r.slug !== 'm11').map(road => (
              <ServiceCard 
                key={road.slug}
                title={`${road.name} Recovery`} 
                description={road.descriptionContext}
                href={`/road-recovery/${road.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">M11 Breakdown FAQs</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
