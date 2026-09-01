import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './EmergencyCTA.module.css';

interface EmergencyCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function EmergencyCTA({ 
  headline = 'NEED EMERGENCY ASSISTANCE?', 
  subheadline = 'Our professional recovery team is ready to dispatch immediately 24/7.' 
}: EmergencyCTAProps) {
  
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaOverlay}></div>
      <div className="container">
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaHeadline}>{headline}</h2>
          <p className={styles.ctaSub}>{subheadline}</p>
          
          <div className={styles.ctaButtons}>
            <a href={phoneUrl} className={styles.btnCall}>
              <Phone size={24} /> {businessConfig.phone}
            </a>
            <a href={whatsappUrl} className={styles.btnWhatsapp}>
              <MessageCircle size={24} /> WHATSAPP US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
