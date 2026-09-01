import Link from 'next/link';
import { businessConfig } from '@/config/business';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge}>
          <span className={styles.dot}></span> 24/7 Emergency Assistance
        </div>
        <h1 className="animate-fade-in">24/7 Car & Van Recovery</h1>
        <p className={`animate-fade-in ${styles.subtitle}`}>
          Fast, professional vehicle recovery across Cambridge, the M11 and surrounding areas.
        </p>
        
        <div className={styles.actions}>
          <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={`btn-primary ${styles.heroBtn}`}>
            Call Now
          </a>
          <Link href="/contact" className={`btn-secondary ${styles.heroBtn}`}>
            Get a Quote
          </Link>
        </div>

        <div className={styles.trustIndicators}>
          <div className={styles.indicator}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Cars & Vans</span>
          </div>
          <div className={styles.indicator}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>M11 Coverage</span>
          </div>
          <div className={styles.indicator}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Professional Recovery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
