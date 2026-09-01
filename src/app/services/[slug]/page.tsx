import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/config/pages';
import { generateLocalSchema } from '@/config/seo';
import { businessConfig } from '@/config/business';
import { Phone, MessageCircle, Clock, ShieldCheck, Truck, ThumbsUp, PenTool as Tool } from 'lucide-react';

import ServiceFeatureGrid from '@/components/ui/services/ServiceFeatureGrid';
import ProcessSteps from '@/components/ui/services/ProcessSteps';
import EmergencyCTA from '@/components/ui/services/EmergencyCTA';

import styles from '../../car-recovery/page.module.css';

// Pre-render all service pages
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalSchema()) }}
      />
      
      {/* Custom Hero Section based on Car Recovery Design */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="/images/car_towing_truck.jpg"
            alt={`${service.name} in Cambridge`}
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
                <Tool size={16} /> 24/7 PROFESSIONAL SERVICE
              </div>
              <h1 className={styles.title}>
                {service.headline.split(' ').slice(0, -1).join(' ')}<br/>
                <span>{service.headline.split(' ').slice(-1).join(' ')}</span>
              </h1>
              <p className={styles.description}>
                {service.subheadline}
              </p>
              
              <div className={styles.buttons}>
                <a href={phoneUrl} className={styles.btnPrimary}>
                  <Phone size={20} /> CALL NOW
                </a>
                <a href={whatsappUrl} className={styles.btnWhatsapp}>
                  <MessageCircle size={20} /> WHATSAPP US
                </a>
              </div>
            </div>

          </div>

          <div className={styles.glassStats}>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Clock size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>24/7 AVAILABLE</span>
                <span className={styles.glassStatDesc}>Ready Day & Night</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><Truck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>RAPID DISPATCH</span>
                <span className={styles.glassStatDesc}>Fast Response</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ShieldCheck size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>FULLY INSURED</span>
                <span className={styles.glassStatDesc}>Complete Peace of Mind</span>
              </div>
            </div>
            <div className={styles.glassStat}>
              <div className={styles.glassStatIcon}><ThumbsUp size={32} /></div>
              <div className={styles.glassStatText}>
                <span className={styles.glassStatTitle}>100% SECURE</span>
                <span className={styles.glassStatDesc}>Professional Handling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Section */}
      {service.seoContent && (
        <section className={styles.seoSection}>
          <div className="container">
            <div className={styles.seoContent}>
              <h2 className={styles.seoTitle}>{service.seoContent.title}</h2>
              {service.seoContent.paragraphs.map((para, index) => (
                <p key={index} className={styles.seoText} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.features && (
        <ServiceFeatureGrid 
          title={service.featuresTitle || 'FEATURES & BENEFITS'}
          features={service.features}
        />
      )}

      {service.processSteps && (
        <ProcessSteps 
          title={service.processTitle || 'HOW IT WORKS'}
          steps={service.processSteps}
        />
      )}

      <EmergencyCTA />
    </>
  );
}
