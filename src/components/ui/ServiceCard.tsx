import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, CheckCircle, LucideIcon } from 'lucide-react';
import styles from './ServiceCard.module.css';
import { businessConfig } from '@/config/business';

export interface ServiceCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  icon?: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  availability?: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  icon: Icon,
  iconBgColor = '#FFF0F0',
  iconColor = '#D71920',
  availability = '24/7 Available',
  description,
  href,
}: ServiceCardProps) {
  if (href) {
    return (
      <Link href={href} className={styles.card} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <Image 
              src={imageSrc} 
              alt={imageAlt || title} 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        )}
        
        <div className={styles.content}>
          <div className={styles.availability}>
            <CheckCircle size={18} className={styles.checkIcon} />
            {availability}
          </div>
          
          <div className={styles.titleRow}>
            {Icon && (
              <div className={styles.iconWrap} style={{ backgroundColor: iconBgColor }}>
                <Icon size={24} style={{ color: iconColor }} />
              </div>
            )}
            <h4 className={styles.title}>{title}</h4>
          </div>
          
          <div className={styles.underline}></div>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.card}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image 
            src={imageSrc} 
            alt={imageAlt || title} 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.availability}>
          <CheckCircle size={18} className={styles.checkIcon} />
          {availability}
        </div>
        
        <div className={styles.titleRow}>
          {Icon && (
            <div className={styles.iconWrap} style={{ backgroundColor: iconBgColor }}>
              <Icon size={24} style={{ color: iconColor }} />
            </div>
          )}
          <h4 className={styles.title}>{title}</h4>
        </div>
        
        <div className={styles.underline}></div>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.actions}>
          <a href={`tel:${businessConfig.phone.replace(/[\s+]/g, '')}`} className={styles.btnRed}>
            <Phone size={18} />
            <span className={styles.btnTitle}>Emergency Call</span>
          </a>
          <a href={`https://wa.me/${businessConfig.phone.replace(/[\s+]/g, '')}`} className={styles.btnGreen} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} />
            <span className={styles.btnTitle}>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
