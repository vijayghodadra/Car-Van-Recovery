import * as Icons from 'lucide-react';
import styles from './ServiceFeatureGrid.module.css';

interface Feature {
  title: string;
  desc?: string;
  iconName?: string;
}

interface ServiceFeatureGridProps {
  title: string;
  features: Feature[];
}

export default function ServiceFeatureGrid({ title, features }: ServiceFeatureGridProps) {
  
  // Helper to dynamically render icon from lucide-react string name
  const renderIcon = (iconName: string) => {
    // @ts-ignore - dynamic icon rendering
    const IconComponent = Icons[iconName];
    if (!IconComponent) return <Icons.CheckCircle size={24} />;
    return <IconComponent size={24} />;
  };

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>{title}</h2>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {renderIcon(feature.iconName || 'CheckCircle')}
              </div>
              <h3 className={styles.featureCardTitle}>{feature.title}</h3>
              {feature.desc && <p className={styles.featureCardDesc}>{feature.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
