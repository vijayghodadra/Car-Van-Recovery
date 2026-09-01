import { Metadata } from 'next';
import { generateLocalSchema, generateFAQSchema } from '@/config/seo';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import { roads } from '@/config/locations';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return roads.map((r) => ({
    road: r.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ road: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const roadData = roads.find(r => r.slug === resolvedParams.road);
  
  if (!roadData) {
    return {
      title: 'Road Not Found',
    };
  }

  return {
    title: `${roadData.name} Breakdown Recovery | Car & Van Towing`,
    description: `Professional breakdown recovery on the ${roadData.name}. Fast 24/7 response for cars and vans. ${roadData.descriptionContext}`,
    alternates: {
      canonical: `/road-recovery/${resolvedParams.road}`,
    }
  };
}

export default async function RoadRecoveryPage({ params }: { params: Promise<{ road: string }> }) {
  const resolvedParams = await params;
  const roadData = roads.find(r => r.slug === resolvedParams.road);

  if (!roadData) {
    notFound();
  }
  
  const faqs = [
    {
      question: `Do you provide vehicle recovery along the ${roadData.name}?`,
      answer: `Yes, our recovery units patrol and service the ${roadData.name} and surrounding areas 24 hours a day.`
    },
    {
      question: `What should I do if I break down on the ${roadData.name}?`,
      answer: `Pull over to a safe location if possible, turn on your hazard lights, and exit the vehicle safely. Once you are safe, call us for immediate assistance.`
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
            &larr; View all service areas
          </Link>
          <h1 style={{ fontSize: 'var(--font-4xl)', marginBottom: 'var(--spacing-4)' }}>{roadData.name} Breakdown Recovery</h1>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
            Fast, reliable car and van recovery services along the {roadData.name}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            <div>
              <h2>24/7 Assistance on the {roadData.name}</h2>
              <p>
                A breakdown on a major road like the {roadData.name} requires swift action. Our professional recovery teams are strategically located to reach stranded motorists quickly and safely.
              </p>
              
              <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-primary)', padding: 'var(--spacing-6)', margin: 'var(--spacing-6) 0', borderRadius: '0 8px 8px 0' }}>
                <h3 style={{ marginTop: 0, fontSize: 'var(--font-lg)' }}>Route Context</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  {roadData.descriptionContext}
                </p>
              </div>

              <p>
                We handle everything from simple flat batteries and tyre changes to complete accident recovery for both private cars and commercial vans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Available Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: 'var(--spacing-8)' }}>
            <ServiceCard 
              title={`Car Recovery on the ${roadData.name}`} 
              description={`Safe transport for broken down cars to your home or preferred garage.`}
              href="/car-recovery"
            />
            <ServiceCard 
              title={`Van Recovery on the ${roadData.name}`} 
              description={`Specialized towing for light commercial vehicles.`}
              href="/van-recovery"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{roadData.name} Recovery FAQs</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
