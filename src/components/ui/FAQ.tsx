'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
        >
          <button 
            className={styles.faqQuestion} 
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span className={styles.faqIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <div 
            className={styles.faqAnswerWrapper}
            style={{ maxHeight: openIndex === index ? '1000px' : '0px' }}
          >
            <div className={styles.faqAnswer}>
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
