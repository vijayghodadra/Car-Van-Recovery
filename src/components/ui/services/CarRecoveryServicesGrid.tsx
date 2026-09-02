import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Truck, Building2, BatteryCharging, Car, Check } from 'lucide-react';
import { businessConfig } from '@/config/business';
import styles from './CarRecoveryServicesGrid.module.css';

const services = [
  {
    id: 1,
    title: 'Breakdown Vehicle Recovery',
    description: 'Fast, reliable 24/7 breakdown recovery across the UK with 15-30 minute response times.',
    image: '/images/breakdown.jpg',
    icon: Truck,
    iconBg: '#fef2f2' // light red
  },
  {
    id: 2,
    title: 'Auction & Garage Collection',
    description: 'Professional vehicle collection from auctions and garages across the UK — fully insured transport.',
    image: '/images/auction.jpg',
    icon: Building2,
    iconBg: '#f5f3ff' // light purple
  },
  {
    id: 3,
    title: 'Jump Start & Tyre Change',
    description: 'Fast on-the-spot jump start and tyre change service. We carry a wide range of tyres and equipment.',
    image: '/images/jumpstart.jpg', // or flat_battery_assistance.jpg if preferred
    icon: BatteryCharging,
    iconBg: '#f0fdf4' // light green
  },
  {
    id: 4,
    title: 'Classic Car & Special Vehicle Transport',
    description: 'Specialist handling and transport for classic cars and special vehicles with full care and insurance.',
    image: '/images/classic.jpg',
    icon: Car,
    iconBg: '#fff1f2' // light rose
  }
];

export default function CarRecoveryServicesGrid() {
  const whatsappUrl = `https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`;
  const phoneUrl = `tel:${businessConfig.phone.replace(/\s/g, '')}`;

  return (
    <section className={styles.gridContainer}>
      <div className="container">
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={styles.card}>
                
                <div className={styles.imageContainer}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardContent}>
                  
                  <div className={styles.availability}>
                    <Check size={16} />
                    <span>24/7 Available</span>
                  </div>

                  <div className={styles.titleRow}>
                    <div className={styles.iconWrapper} style={{ backgroundColor: service.iconBg }}>
                      <Icon size={20} className={styles.icon} />
                    </div>
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>

                  <p className={styles.description}>
                    {service.description}
                  </p>

                  <div className={styles.buttons}>
                    <a href={phoneUrl} className={styles.btnCall}>
                      <Phone size={16} /> Emergency Call
                    </a>
                    <a href={whatsappUrl} className={styles.btnWhatsapp}>
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
