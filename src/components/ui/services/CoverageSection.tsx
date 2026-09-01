import Image from 'next/image';
import { MapPin } from 'lucide-react';
import styles from './CoverageSection.module.css';

export default function CoverageSection() {
  const locations = [
    'Cambridge', 'M11 Motorway', 'Stansted Airport', 'Harlow',
    'Stevenage', 'Newmarket', 'Huntingdon', 'St Neots'
  ];

  return (
    <section className={styles.coverageSection}>
      <div className={styles.bgMap}></div>
      <div className={`container ${styles.coverageContainer}`}>
        
        <div className={styles.coverageContent}>
          <h2 className={styles.coverageTitle}>CAR & VAN RECOVERY ACROSS CAMBRIDGE & THE M11</h2>
          <p className={styles.coverageDesc}>
            Our central location means we can dispatch recovery vehicles rapidly across the M11 corridor and surrounding areas. We know the local roads and aim to reach you in 30-45 minutes.
          </p>
          
          <div className={styles.locationsGrid}>
            {locations.map((loc, index) => (
              <div key={index} className={styles.locationItem}>
                <MapPin size={18} className={styles.locationIcon} /> {loc}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.coverageVisual}>
          <Image 
            src="/images/hero-wide.jpg"
            alt="Service Coverage Map"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
}
