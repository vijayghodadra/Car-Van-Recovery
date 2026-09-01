'use client';

import styles from './WhatsAppFloating.module.css';
import { businessConfig } from '@/config/business';
import { useEffect, useState } from 'react';

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay to not block initial render
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Format phone number for WhatsApp URL (remove spaces and plus)
  const waNumber = businessConfig.phone.replace(/[\s+]/g, '');
  const waUrl = `https://wa.me/${waNumber}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waFloat}
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 0C5.394 0 0 5.392 0 12.025a12.016 12.016 0 0 0 1.6 6L.51 24l6.155-1.611a12.026 12.026 0 0 0 5.366 1.272c6.634 0 12.028-5.393 12.028-12.025C24.06 5.393 18.665 0 12.03 0zm0 21.658c-1.85 0-3.664-.496-5.253-1.439l-.377-.223-3.896 1.02.102-3.8-2.45-3.892a9.98 9.98 0 0 1 1.492-5.187C3.393 4.298 7.42 2.035 12.03 2.035c5.51 0 9.993 4.482 9.993 9.99s-4.483 9.99-9.993 9.99v-3.357zm5.495-7.513c-.302-.15-1.786-.883-2.062-.983-.277-.1-.478-.15-.678.15s-.78 .982-.956 1.182c-.176.2-.352.225-.654.075-1.606-.803-2.883-1.89-4.004-3.37-.287-.38-.03-.585.122-.735.137-.135.302-.35.453-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525s-.678-1.633-.929-2.233c-.244-.585-.494-.505-.678-.515-.176-.008-.377-.008-.578-.008s-.527.075-.803.375c-.276.3-.929.907-.929 2.213s.954 2.565 1.08 2.735c.125.175 1.868 2.85 4.524 3.965 2.115.885 2.915 1.054 3.992.898.854-.122 2.66-.19 3.037-.375s.377-.375.263-.525c-.112-.15-.414-.24-.716-.39z" />
      </svg>
    </a>
  );
}
