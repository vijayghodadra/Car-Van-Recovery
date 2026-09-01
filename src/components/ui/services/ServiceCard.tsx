import Image from 'next/image';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  iconName: string;
  href: string;
}

export default function ServiceCard({ title, description, image, iconName, href }: ServiceCardProps) {
  // @ts-ignore
  const IconComponent = Icons[iconName] || Icons.CheckCircle;

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <IconComponent size={20} />
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.linkText}>
          VIEW SERVICE <Icons.ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
