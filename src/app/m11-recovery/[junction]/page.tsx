import { Metadata } from 'next';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { junctions, locations, roads } from '@/config/locations';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return junctions.map((j) => ({
    junction: j.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ junction: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const jData = junctions.find(j => j.slug === resolvedParams.junction);
  
  if (!jData) {
    return {
      title: 'Junction Not Found',
    };
  }

  return {
    title: `${jData.name} Recovery | M11 Breakdown Assistance`,
    description: `Stranded near ${jData.name}? Fast, 24/7 car and van recovery services. ${jData.descriptionContext} Call now for emergency assistance.`,
    alternates: {
      canonical: `/m11-recovery/${resolvedParams.junction}`,
    }
  };
}

export default async function M11JunctionPage({ params }: { params: Promise<{ junction: string }> }) {
  const resolvedParams = await params;
  const jData = junctions.find(j => j.slug === resolvedParams.junction);
  
  if (!jData) {
    notFound();
  }
  
  const faqs = [
    {
      question: `How fast can you reach ${jData.name}?`,
      answer: `Our recovery units are strategically located along the M11. Once dispatched, we aim to reach Junction ${jData.junctionNumber} as quickly and safely as traffic conditions allow.`
    },
    {
      question: "Where will you take my vehicle?",
      answer: `We can recover your vehicle to any destination you choose—your home, a local garage near Junction ${jData.junctionNumber}, or your preferred dealership.`
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
          <Link href="/m11-recovery" style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-sm)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-4)', textDecoration: 'none' }}>
            &larr; Back to M11 Hub
          </Link>
          <h1 style={{ fontSize: 'var(--font-4xl)', marginBottom: 'var(--spacing-4)' }}>{jData.name} Recovery</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Emergency car and van breakdown recovery around {jData.name}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            <div>
              <h2>Emergency Assistance at Junction {jData.junctionNumber}</h2>
              <p>
                If you have broken down on the M11 near Junction {jData.junctionNumber}, our 24/7 recovery team is ready to deploy. We provide safe, professional towing for both cars and commercial vans.
              </p>

              <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-primary)', padding: 'var(--spacing-6)', margin: 'var(--spacing-6) 0', borderRadius: '0 8px 8px 0' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)' }}>Location Overview</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  {jData.descriptionContext}
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)', borderLeft: '4px solid var(--accent-primary)', padding: 'var(--spacing-4)', margin: 'var(--spacing-6) 0', borderRadius: '0 4px 4px 0' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-2)' }}>Safety Advice</h4>
                <p style={{ margin: 0, fontSize: 'var(--font-sm)' }}>Move your vehicle to the left as far as possible. Exit via the passenger side and wait safely behind the barrier. Have your exact location ready when calling.</p>
              </div>

              <h3>Services Provided at J{jData.junctionNumber}</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-6)', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>Car & SUV Recovery</li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>Commercial Van Recovery</li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>Accident Recovery</li>
                <li style={{ marginBottom: 'var(--spacing-2)' }}>Flat Tyres & Jump Starts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Connected Areas & Roads</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-8)', marginTop: 'var(--spacing-8)' }}>
            
            {jData.nearbyLocations.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-6)', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)', color: 'var(--accent-primary)' }}>Nearby Towns & Villages</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {jData.nearbyLocations.map(lSlug => {
                    const lData = locations.find(l => l.slug === lSlug);
                    return lData ? (
                      <li key={lSlug} style={{ marginBottom: '0.5rem' }}>
                        <Link href={`/vehicle-recovery/${lSlug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>
                          {lData.name} Recovery
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}

            {jData.nearbyRoads.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-6)', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)', color: 'var(--accent-primary)' }}>Connecting Roads</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {jData.nearbyRoads.map(rSlug => {
                    const rData = roads.find(r => r.slug === rSlug);
                    return rData ? (
                      <li key={rSlug} style={{ marginBottom: '0.5rem' }}>
                        <Link href={`/road-recovery/${rSlug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>
                          {rData.name} Recovery
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Junction {jData.junctionNumber} FAQs</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
