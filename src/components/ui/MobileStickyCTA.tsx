'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './MobileStickyCTA.module.css';
import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Optional: Hide on scroll down, show on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`${styles.mobileStickyCta} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        <Link href="/contact" className={styles.secondaryBtn}>
          GET RECOVERY
        </Link>
        <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.primaryBtn}>
          <Phone size={16} /> CALL NOW
        </a>
      </div>
    </div>
  );
}
