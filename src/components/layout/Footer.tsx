import Link from 'next/link';
import { businessConfig } from '@/config/business';
import styles from './Footer.module.css';
import { 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  ShieldCheck,
  UserCheck,
  ChevronRight,
  Truck
} from 'lucide-react';

const FacebookIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      {/* Red Emergency CTA */}
      <div className={styles.redCta}>
        <div className={`container ${styles.redCtaContainer}`}>
          <div className={styles.redCtaLeft}>
            <div className={styles.redCtaHeader}>
              <MapPin size={36} className={styles.redCtaPin} />
              <div>
                <h2 className={styles.redCtaTitle}>NEED VEHICLE RECOVERY?</h2>
                <div className={styles.redCtaSub}>Our recovery team is available 24/7 across our service areas.</div>
              </div>
            </div>
            <div className={styles.redCtaTrustRow}>
              <div className={styles.redCtaTrustItem}><Clock size={16} /> 24/7 Available</div>
              <div className={styles.redCtaTrustItem}><Truck size={16} /> Fast Response</div>
              <div className={styles.redCtaTrustItem}><ShieldCheck size={16} /> Fully Insured</div>
              <div className={styles.redCtaTrustItem}><UserCheck size={16} /> Professional Team</div>
            </div>
          </div>
          
          <div className={styles.redCtaCenter}>
            <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.redCtaPhoneRow}>
              <Phone size={28} className={styles.redCtaPhoneIcon} />
              <span className={styles.redCtaPhoneNum}>{businessConfig.phone}</span>
            </a>
            <div className={styles.redCtaButtonsRow}>
              <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className={styles.redCtaBtnCall}>
                <Phone size={16} /> Call Now
              </a>
              <a href={`https://wa.me/${businessConfig.phone.replace(/\s/g, '').replace('+', '')}`} className={styles.redCtaBtnWhatsapp}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className={styles.redCtaRightImg}>
            <div className={styles.redCtaOverlay}></div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={`container ${styles.footerContainer}`}>
          
          <div className={styles.footerGrid}>
            {/* Column 1: Brand */}
            <div className={styles.brandCol}>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>CAR<span className={styles.textRed}>&</span>VAN</span>
                <span className={styles.logoSub}>RECOVERY</span>
              </div>
              <p className={styles.brandDesc}>
                Premium 24/7 vehicle recovery and breakdown assistance across Cambridge and the M11 corridor. Fast, professional, and reliable when you need us most.
              </p>
              
              <div className={styles.brandFeatures}>
                <div className={styles.brandFeature}>
                  <div className={styles.featureIconWrap}><ShieldCheck size={20} /></div>
                  <span>FULLY<br/>INSURED</span>
                </div>
                <div className={styles.brandFeature}>
                  <div className={styles.featureIconWrap}><UserCheck size={20} /></div>
                  <span>PROFESSIONAL<br/>OPERATORS</span>
                </div>
                <div className={styles.brandFeature}>
                  <div className={styles.featureIconWrap}><Clock size={20} /></div>
                  <span>24/7<br/>AVAILABLE</span>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className={styles.navCol}>
              <h4 className={styles.navTitle}>SERVICES</h4>
              <ul className={styles.navList}>
                <li><Link href="/car-recovery"><ChevronRight size={14} className={styles.navIcon} /> Car Recovery</Link></li>
                <li><Link href="/van-recovery"><ChevronRight size={14} className={styles.navIcon} /> Van Recovery</Link></li>
                <li><Link href="/breakdown-recovery"><ChevronRight size={14} className={styles.navIcon} /> Breakdown Recovery</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Accident Recovery</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Mobile Tyre Service</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Jump Starts</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Auction Collection</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Garage Collection</Link></li>
              </ul>
            </div>

            {/* Column 3: Coverage */}
            <div className={styles.navCol}>
              <h4 className={styles.navTitle}>COVERAGE AREA</h4>
              <ul className={styles.navList}>
                <li><Link href="/vehicle-recovery/cambridge"><ChevronRight size={14} className={styles.navIcon} /> Cambridge</Link></li>
                <li><Link href="/m11-recovery"><ChevronRight size={14} className={styles.navIcon} /> M11 Motorway</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Huntingdon</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Royston</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> St Neots</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Newmarket</Link></li>
                <li><Link href="/cambridge-vehicle-recovery"><ChevronRight size={14} className={styles.navIcon} /> All Locations</Link></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className={styles.navCol}>
              <h4 className={styles.navTitle}>COMPANY</h4>
              <ul className={styles.navList}>
                <li><Link href="/about"><ChevronRight size={14} className={styles.navIcon} /> About Us</Link></li>
                <li><Link href="/contact"><ChevronRight size={14} className={styles.navIcon} /> Contact Us</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> FAQs</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Privacy Policy</Link></li>
                <li><Link href="#"><ChevronRight size={14} className={styles.navIcon} /> Terms & Conditions</Link></li>
              </ul>
            </div>

          </div>


        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottomBar}>
          <div className={`container ${styles.bottomBarContainer}`}>
            <div className={styles.copyright}>
              © {currentYear} <span className={styles.textRed}>Car&Van Recovery.</span> All rights reserved.
            </div>

            <div className={styles.socials}>
              <span>Follow Us:</span>
              <a href="#" className={styles.socialLink}><FacebookIcon size={16} /></a>
              <a href="#" className={styles.socialLink}><InstagramIcon size={16} /></a>
              <a href="#" className={styles.socialLink}><MessageCircle size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
