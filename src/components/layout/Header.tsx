'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { businessConfig } from '@/config/business';
import styles from './Header.module.css';
import { 
  Menu, X, Phone, ChevronDown, 
  MessageSquare, Star, Wrench, Fuel, Navigation, Building2, Zap, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Crisp Solid Red Filled Icons matching Reference Image 2 exactly
const FilledHomeIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const FilledCarIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM7.5 17C6.67 17 6 16.33 6 15.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const FilledVanIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M20 8h-3V4H1v13h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h3v-6l-4-3zM6 18.5A1.5 1.5 0 1 1 7.5 17 1.5 1.5 0 0 1 6 18.5zm12 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM17 9.5h2.5l1.93 2.5H17V9.5z" />
  </svg>
);

const FilledTowTruckIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M23 13.5l-3.08-3.69C19.57 9.3 19.06 9 18.5 9H17V6c0-1.1-.9-2-2-2H9c-.55 0-1 .45-1 1s.45 1 1 1h6v3H4.5A2.5 2.5 0 0 0 2 11.5V17h2a3 3 0 0 0 6 0h5a3 3 0 0 0 6 0h3v-3.5zM7 18.5A1.5 1.5 0 1 1 8.5 17 1.5 1.5 0 0 1 7 18.5zm11 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM17 11h1.5l1.67 2H17v-2zM9 4.5L5.5 8H3.71l2.79-2.79C6.88 4.83 7.39 4.5 7.95 4.5H9z" />
  </svg>
);

const FilledMapPinIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const FilledPlaneIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

const FilledUsersIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const FilledMailIcon = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#D71920" className={className}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    if (openMobileDropdown === name) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(name);
    }
  };

  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', line1: 'HOME', line2: '', href: '/', icon: FilledHomeIcon },
    { name: 'CAR RECOVERY', line1: 'CAR', line2: 'RECOVERY', href: '/car-recovery', icon: FilledCarIcon },
    { name: 'VAN RECOVERY', line1: 'VAN', line2: 'RECOVERY', href: '/van-recovery', icon: FilledVanIcon },
    { 
      name: 'BREAKDOWN RECOVERY SERVICES', 
      line1: 'BREAKDOWN RECOVERY',
      line2: 'SERVICES',
      href: '/breakdown-recovery',
      icon: FilledTowTruckIcon,
      subItems: [
        { name: 'LWB Van Recovery', href: '/services/lbw-van-recovery', icon: Navigation },
        { name: 'Jumpstart Service', href: '/services/jumpstart-service', icon: Zap },
        { name: 'Tyre Change & Tyre Repair Service', href: '/services/tyre-change-and-repair', icon: Wrench },
        { name: 'Fuel Delivery', href: '/services/fuel-delivery', icon: Fuel },
        { name: 'Auction & Garage Collection', href: '/services/auction-and-garage-collection', icon: Building2 },
        { name: 'Vehicle Transportation', href: '/services/vehicle-transportation', icon: Target },
      ]
    },
    { 
      name: 'AREAS WE COVER', 
      line1: 'AREAS WE',
      line2: 'COVER',
      href: '/areas-we-cover',
      icon: FilledMapPinIcon,
      subItems: [
        { name: 'M11', href: '/areas-we-cover/m11' },
        { name: 'Harlow', href: '/areas-we-cover/harlow' },
        { name: 'Stevenage', href: '/areas-we-cover/stevenage' },
        { name: "Bishop's Stortford", href: '/areas-we-cover/bishops-stortford' },
        { name: 'Stansted Airport', href: '/areas-we-cover/stansted-airport' },
        { name: 'Haverhill', href: '/areas-we-cover/haverhill' },
        { name: 'Cambridge', href: '/areas-we-cover/cambridge' },
        { name: 'Cambridgeshire', href: '/areas-we-cover/cambridgeshire' },
        { name: 'Newmarket', href: '/areas-we-cover/newmarket' },
        { name: 'Norwich', href: '/areas-we-cover/norwich' },
        { name: 'Bury St Edmunds', href: '/areas-we-cover/bury-st-edmunds' },
        { name: 'Huntingdon', href: '/areas-we-cover/huntingdon' },
        { name: 'St Neots', href: '/areas-we-cover/st-neots' },
        { name: 'St Ives', href: '/areas-we-cover/st-ives' }
      ]
    },
    { 
      name: 'STANSTED SERVICES', 
      line1: 'STANSTED',
      line2: 'SERVICES',
      href: '#',
      icon: FilledPlaneIcon,
      subItems: [
        { name: 'Jumpstart Service', href: '/stansted-services/jumpstart-service' },
        { name: 'Tyre Repair & Tyre Change', href: '/stansted-services/tyre-change-repair' },
        { name: 'Breakdown Recovery', href: '/stansted-services/breakdown-recovery' },
      ]
    },
    { 
      name: 'ABOUT US', 
      line1: 'ABOUT',
      line2: 'US',
      href: '/about-us', 
      icon: FilledUsersIcon,
      subItems: [
        { name: 'Reviews', href: '/reviews', icon: Star },
        { name: 'FAQ', href: '/faq', icon: MessageSquare },
      ]
    },
    { name: 'CONTACT US', line1: 'CONTACT', line2: 'US', href: '/contact', icon: FilledMailIcon },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Left Side: Logo & Divider */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <FilledTowTruckIcon className={styles.logoIcon} />
            <div className={styles.logoTextStack}>
              <div className={styles.logoTop}>CAR<span className={styles.logoAmpersand}>&</span>VAN</div>
              <div className={styles.logoBottom}>RECOVERY</div>
            </div>
          </Link>
          <div className={styles.logoDivider}></div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            
            return (
              <div key={link.name} className={styles.navItemWrapper}>
                <Link 
                  href={link.href} 
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  <div className={styles.iconContainer}>
                    <Icon className={styles.navMainIcon} />
                  </div>
                  <div className={styles.navLabelWrapper}>
                    <div className={styles.navLabelTextStack}>
                      <span>{link.line1}</span>
                      {link.line2 && <span>{link.line2}</span>}
                    </div>
                    {link.subItems && <ChevronDown size={11} strokeWidth={2.5} className={styles.dropdownIcon} />}
                  </div>
                </Link>
                
                {link.subItems && (
                  <div className={styles.dropdownMenu}>
                    {link.subItems.map(subItem => {
                      const SubIcon = (subItem as any).icon;
                      return (
                        <Link key={subItem.name} href={subItem.href} className={styles.dropdownItem}>
                          {SubIcon && <SubIcon size={16} className={styles.dropdownItemIcon} />}
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.callButton}>
            <Phone size={20} strokeWidth={2} className={styles.callIcon} />
            <div className={styles.callText}>
              <span className={styles.callLabel}>CALL NOW</span>
              <span className={styles.callNumber}>{businessConfig.phone}</span>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <nav className={styles.mobileNavLinks}>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.name} className={styles.mobileNavItem}>
                    {link.subItems ? (
                      <>
                        <button 
                          className={styles.mobileNavLink}
                          onClick={() => toggleMobileDropdown(link.name)}
                          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Icon className={styles.mobileNavLinkIcon} />
                            {link.name}
                          </div>
                          <ChevronDown 
                            size={16} 
                            style={{ 
                              transform: openMobileDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s' 
                            }} 
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={styles.mobileDropdown}
                            >
                              {link.subItems.map(subItem => (
                                <Link 
                                  key={subItem.name} 
                                  href={subItem.href}
                                  className={styles.mobileDropdownItem}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link 
                        href={link.href} 
                        className={styles.mobileNavLink}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ display: 'flex', width: '100%' }}
                      >
                        <Icon className={styles.mobileNavLinkIcon} />
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className={styles.mobileMenuFooter}>
              <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.callButton} style={{ width: '100%' }}>
                <Phone size={20} className={styles.callIcon} />
                <div className={styles.callText}>
                  <span className={styles.callLabel}>CALL NOW</span>
                  <span className={styles.callNumber}>{businessConfig.phone}</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
