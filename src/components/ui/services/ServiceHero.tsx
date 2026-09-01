import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  image: string;
  layout?: 'full' | 'split';
}

export default function ServiceHero({ eyebrow, headline, subheadline, image, layout = 'full' }: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  if (layout === 'split') {
    return (
      <section className={styles.heroSplit}>
        <div className={styles.splitLeft}>
          <div className={styles.contentContainer} style={{ marginLeft: 'auto', maxWidth: '600px', width: '100%' }}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h1 className={`${styles.headline} ${styles.headlineSplit}`}>{headline}</h1>
            <p className={`${styles.subheadline} ${styles.subheadlineSplit}`}>{subheadline}</p>
            
            <div className={styles.buttonGroup}>
              <a href={phoneUrl} className={styles.btnPrimary}>
                <Phone size={20} /> CALL NOW
              </a>
              <a href={whatsappUrl} className={styles.btnWhatsapp}>
                <MessageCircle size={20} /> WHATSAPP US
              </a>
            </div>
          </div>
        </div>
        <div className={styles.splitRight}>
          <Image 
            src={image}
            alt={headline}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.heroFull}>
      <div className={styles.bgImageContainer}>
        <Image 
          src={image}
          alt={headline}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
        />
      </div>
      <div className={styles.bgOverlay} />
      
      <div className={`container ${styles.contentContainer}`}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={`${styles.headline} ${styles.headlineFull}`}>{headline}</h1>
        <p className={`${styles.subheadline} ${styles.subheadlineFull}`}>{subheadline}</p>
        
        <div className={styles.buttonGroup}>
          <a href={phoneUrl} className={styles.btnPrimary}>
            <Phone size={20} /> CALL NOW
          </a>
          <a href={whatsappUrl} className={styles.btnWhatsapp}>
            <MessageCircle size={20} /> WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}
