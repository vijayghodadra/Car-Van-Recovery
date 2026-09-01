'use client';

import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '@/config/business';
import styles from './Header.module.css';
import { 
  Menu, X, Phone, ChevronDown, MapPin, 
  Home, Truck, Plane, Users, MessageSquare, Mail, Star,
  Car, Wrench, Battery, Fuel, Settings, Hammer, Navigation, Building2, Zap, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'HOME', href: '/', icon: Home },
    { 
      name: 'BREAKDOWN RECOVERY SERVICES', 
      href: '/breakdown-recovery',
      icon: Truck,
      subItems: [
        { name: 'Car Recovery', href: '/car-recovery', icon: Car },
        { name: 'Van Recovery', href: '/van-recovery', icon: Truck },
        { name: 'LWB Van Recovery', href: '/services/lbw-van-recovery', icon: Navigation },
        { name: 'Jumpstart Service', href: '/services/jumpstart-service', icon: Zap },
        { name: 'Tyre Change', href: '/services/tyre-change', icon: Wrench },
        { name: 'Fuel Delivery', href: '/services/fuel-delivery', icon: Fuel },
        { name: 'Tyre Change & Repair', href: '/services/tyre-change-and-repair', icon: Settings },
        { name: 'Auction & Garage Collection', href: '/services/auction-and-garage-collection', icon: Building2 },
        { name: 'Vehicle Transportation', href: '/services/vehicle-transportation', icon: Target },
      ]
    },
    { 
      name: 'AREAS WE COVER', 
      href: '/areas-we-cover',
      icon: MapPin,
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
      href: '#',
      icon: Plane,
      subItems: [
        { name: 'Jumpstart Service', href: '/stansted-services/jumpstart-service' },
        { name: 'Tyre Change & Repair', href: '/stansted-services/tyre-change-repair' },
        { name: 'Breakdown Recovery', href: '/stansted-services/breakdown-recovery' },
      ]
    },
    { name: 'ABOUT US', href: '/about-us', icon: Users },
    { name: 'REVIEWS', href: '/reviews', icon: Star },
    { name: 'FAQ', href: '/faq', icon: MessageSquare },
    { name: 'CONTACT US', href: '/contact', icon: Mail },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Left Side: Logo & Divider */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Truck size={32} strokeWidth={2.5} className={styles.logoIcon} />
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
                  <Icon size={18} strokeWidth={1.5} className={styles.navMainIcon} />
                  <div className={styles.navLabelWrapper}>
                    <span className={styles.navLabelText}>{link.name}</span>
                    {link.subItems && <ChevronDown size={12} strokeWidth={2} className={styles.dropdownIcon} />}
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
            <Phone size={24} strokeWidth={2} className={styles.callIcon} />
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
                            <Icon size={20} className={styles.mobileNavLinkIcon} />
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
                        <Icon size={20} className={styles.mobileNavLinkIcon} />
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
