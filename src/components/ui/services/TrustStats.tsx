import { Clock, ShieldCheck, Truck, ThumbsUp } from 'lucide-react';
import styles from './TrustStats.module.css';

interface Stat {
  title: string;
  desc: string;
  icon: 'clock' | 'shield' | 'truck' | 'thumbsup';
}

interface TrustStatsProps {
  stats?: Stat[];
}

export default function TrustStats({ stats }: TrustStatsProps) {
  const defaultStats: Stat[] = [
    { title: '24/7 AVAILABLE', desc: 'Ready Day & Night', icon: 'clock' },
    { title: '30-45 MINS', desc: 'Average Response', icon: 'truck' },
    { title: '100% SECURE', desc: 'Safe Vehicle Handling', icon: 'thumbsup' },
    { title: 'FULLY INSURED', desc: 'Complete Peace of Mind', icon: 'shield' },
  ];

  const displayStats = stats || defaultStats;

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'clock': return <Clock size={28} strokeWidth={1.5} />;
      case 'shield': return <ShieldCheck size={28} strokeWidth={1.5} />;
      case 'truck': return <Truck size={28} strokeWidth={1.5} />;
      case 'thumbsup': return <ThumbsUp size={28} strokeWidth={1.5} />;
      default: return <ShieldCheck size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <div className={styles.trustStats}>
      <div className={`container ${styles.trustContainer}`}>
        {displayStats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.iconWrapper}>
              {renderIcon(stat.icon)}
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>{stat.title}</span>
              <span className={styles.statDesc}>{stat.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
