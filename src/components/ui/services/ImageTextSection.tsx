import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import styles from './ImageTextSection.module.css';

interface ImageTextSectionProps {
  title: string;
  description: string;
  image: string;
  listItems?: string[];
  reverse?: boolean;
}

export default function ImageTextSection({ title, description, image, listItems, reverse = false }: ImageTextSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container} ${reverse ? styles.reverse : ''}`}>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          {listItems && listItems.length > 0 && (
            <ul className={styles.list}>
              {listItems.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <CheckCircle size={20} className={styles.listIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.visual}>
          <Image 
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
}
