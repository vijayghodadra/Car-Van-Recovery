import React from 'react';
import Image from 'next/image';
import styles from './VansWeRecover.module.css';
import { CheckCircle2 } from 'lucide-react';

const vanTypes = [
  {
    id: '1',
    title: 'TRANSIT VANS',
    features: [
      'Ford Transit',
      'Standard panel vans',
      'Very common commercial vans in the UK'
    ],
    image: '/images/Van Recovery/transit.png'
  },
  {
    id: '2',
    title: 'LWB VANS',
    features: [
      'Long Wheelbase vans',
      'Extended chassis',
      'Extra-long commercial vehicles'
    ],
    image: '/images/Van Recovery/LBW.png'
  },
  {
    id: '3',
    title: 'LUTON BOX VANS',
    features: [
      'Luton body vans',
      'High-roof box vans',
      'Tail-lift equipped vans'
    ],
    image: '/images/Van Recovery/Luton Box Van.png'
  },
  {
    id: '4',
    title: 'SPRINTER VANS',
    features: [
      'Mercedes-Benz Sprinter',
      'Large commercial vans',
      'Common for courier and business fleets'
    ],
    image: '/images/Van Recovery/Sprinter Van.png'
  },
  {
    id: '5',
    title: 'BOX VANS',
    features: [
      'Box-body delivery vans',
      'High-roof vehicles',
      'Commercial delivery vehicles'
    ],
    image: '/images/Van Recovery/Box Van.png'
  },
  {
    id: '6',
    title: 'CAMPERVANS & MOTORHOMES',
    features: [
      'Campervans',
      'Motorhomes',
      'Touring vehicles',
      'Important because they can require specialist recovery'
    ],
    image: '/images/Van Recovery/Campervan & Motorhome.png'
  },
  {
    id: '7',
    title: 'SMALL VANS',
    features: [
      'Ford Transit Connect',
      'Volkswagen Caddy',
      'Peugeot Partner',
      'Citroën Berlingo',
      'Compact commercial vans'
    ],
    image: '/images/Van Recovery/Small van.png'
  }
];

export default function VansWeRecover() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>VANS <span className={styles.highlight}>WE</span> RECOVER</h2>
          <p className={styles.subtitle}>Specialist recovery for all types of vans across the UK</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {vanTypes.map((van) => {
            return (
              <div key={van.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.numberBadge}>{van.id}</div>
                  <h3 className={styles.cardTitle}>{van.title}</h3>
                </div>
                
                <div className={styles.imageContainer}>
                  <Image 
                    src={van.image} 
                    alt={van.title} 
                    width={400} 
                    height={250} 
                    className={styles.vanImage}
                  />
                </div>

                <div className={styles.features}>
                  {van.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
