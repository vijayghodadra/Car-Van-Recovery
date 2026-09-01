import { businessConfig } from '@/config/business';
import styles from './EmergencyCTA.module.css';

export default function EmergencyCTA() {
  return (
    <div className={styles.emergencyBar}>
      <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.callButton}>
        CALL NOW
      </a>
      <a href="/contact" className={styles.helpButton}>
        GET HELP
      </a>
    </div>
  );
}
