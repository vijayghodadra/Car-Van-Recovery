import { Metadata } from 'next';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import { locations, junctions, roads } from '@/config/locations';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locData = locations.find(l => l.slug === resolvedParams.location);
  
  if (!locData) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Vehicle Recovery ${locData.name} | 24/7 Car & Van Recovery`,
    description: `Professional 24-hour vehicle recovery in ${locData.name}, ${locData.county}. Fast emergency response for car and van breakdowns, towing, and accident recovery near ${locData.nearbyRoads.join(', ')}.`,
    alternates: {
      canonical: `/vehicle-recovery/${resolvedParams.location}`,
    }
  };
}

export default async function LocationRecovery({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const locData = locations.find(l => l.slug === resolvedParams.location);

  if (!locData) {
    notFound();
  }
  
  const faqs = [
    {
      question: `Do you provide 24-hour vehicle recovery in ${locData.name}?`,
      answer: `Yes, our recovery services operate in and around ${locData.name} 24 hours a day, 7 days a week.`
    },
    {
      question: `How quickly can you reach me in ${locData.name}?`,
      answer: `Thanks to our strategic positioning and local knowledge of ${locData.county}, we aim to dispatch a recovery unit to ${locData.name} immediately upon receiving your call.`
    },
    {
      question: `Can you recover my vehicle from my home address in ${locData.name}?`,
      answer: `Yes, if your vehicle won't start at your home in ${locData.name}, we can come to your driveway and transport it to your preferred garage.`
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
          <Link href="/cambridge-vehicle-recovery" style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-sm)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-4)', textDecoration: 'none' }}>
            &larr; View all local areas
          </Link>
          <h1 style={{ fontSize: 'var(--font-4xl)', marginBottom: 'var(--spacing-4)' }}>Vehicle Recovery {locData.name}</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Fast, local car and van breakdown recovery services in {locData.name}, {locData.county}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            <div>
              <h2>24/7 Breakdown Recovery in {locData.name}</h2>
              <p>
                If you are stranded in or around {locData.name}, our professional vehicle recovery team is ready to assist. We offer prompt, reliable towing and roadside assistance for all types of vehicles, from family cars to commercial vans.
              </p>
              
              <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-primary)', padding: 'var(--spacing-6)', margin: 'var(--spacing-6) 0', borderRadius: '0 8px 8px 0' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)' }}>Local Context</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  {locData.descriptionContext}
                </p>
              </div>

              <p>
                As local experts, we know the {locData.name} area and its surrounding roads well, meaning we can locate you quickly and get you moving again or recovered safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Available Services in {locData.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: 'var(--spacing-8)' }}>
            <ServiceCard 
              title={`Car Recovery ${locData.name}`} 
              description={`Safe transport for broken down cars across the ${locData.name} area.`}
              href="/car-recovery"
            />
            <ServiceCard 
              title={`Van Recovery ${locData.name}`} 
              description={`Specialized towing for commercial vehicles near ${locData.name}.`}
              href="/van-recovery"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Areas & Roads We Cover Nearby</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-8)', marginTop: 'var(--spacing-8)' }}>
            
            {locData.nearbyJunctions.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-6)', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)', color: 'var(--accent-primary)' }}>M11 Junctions</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {locData.nearbyJunctions.map(jSlug => {
                    const jData = junctions.find(j => j.slug === jSlug);
                    return jData ? (
                      <li key={jSlug} style={{ marginBottom: '0.5rem' }}>
                        <Link href={`/m11-recovery/${jSlug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>
                          {jData.name}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}

            {locData.nearbyLocations.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-6)', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)', color: 'var(--accent-primary)' }}>Nearby Towns & Villages</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {locData.nearbyLocations.map(lSlug => {
                    const lData = locations.find(l => l.slug === lSlug);
                    return lData ? (
                      <li key={lSlug} style={{ marginBottom: '0.5rem' }}>
                        <Link href={`/vehicle-recovery/${lSlug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>
                          {lData.name}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}

            {locData.nearbyRoads.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--spacing-6)', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)', color: 'var(--accent-primary)' }}>Major Roads</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {locData.nearbyRoads.map(rSlug => {
                    const rData = roads.find(r => r.slug === rSlug);
                    return rData ? (
                      <li key={rSlug} style={{ marginBottom: '0.5rem' }}>
                        <Link href={`/road-recovery/${rSlug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>
                          {rData.name}
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
          <h2 className="section-title">{locData.name} Recovery FAQs</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
