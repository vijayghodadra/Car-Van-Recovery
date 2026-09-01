'use client';

import React, { useState } from 'react';
import { Zap, Phone, ShieldCheck, PoundSterling, MapPin, MessageCircle, User, MapPinned, Car, Wrench, FileText } from 'lucide-react';
import styles from './EmergencyBooking.module.css';
import { businessConfig } from '@/config/business';

export default function EmergencyBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pickupLocation: '',
    destination: '',
    vehicleType: '',
    serviceRequired: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API.
    console.log('Form submitted:', formData);
    alert('Booking submitted successfully! Our dispatch team will contact you shortly.');
  };

  const handleWhatsApp = () => {
    const text = `*Emergency Booking Request*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickupLocation}%0A*Destination:* ${formData.destination}%0A*Vehicle:* ${formData.vehicleType}%0A*Service:* ${formData.serviceRequired}%0A*Notes:* ${formData.notes}`;
    window.open(`https://wa.me/${businessConfig.phone.replace(/[\s+]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className={styles.bookingSection}>
      <div className={`container ${styles.bookingContainer}`}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <Zap size={16} fill="currentColor" />
            <span>EMERGENCY BOOKING</span>
          </div>
          <h2 className={styles.headline}>
            Book Emergency <span className={styles.textRed}>Recovery Now</span>
          </h2>
          <p className={styles.subtext}>Available 24/7 — dispatched within minutes</p>
        </div>

        {/* Two Column Layout */}
        <div className={styles.contentGrid}>
          
          {/* LEFT: Booking Form */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBoxRed}>
                <Zap size={24} color="#D71920" fill="currentColor" />
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.cardTitle}>Emergency Booking Form</h3>
                <p className={styles.cardSub}>Details go directly to our dispatch team</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow2}>
                <div className={styles.inputGroup}>
                  <label>Full Name <span className={styles.textRed}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number <span className={styles.textRed}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <Phone size={18} className={styles.inputIcon} />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7700 000000" required />
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Pickup Location <span className={styles.textRed}>*</span></label>
                <div className={styles.inputWrapper}>
                  <MapPin size={18} className={styles.inputIcon} />
                  <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="e.g. M11 Junction 12, near Cambridge" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Destination <span className={styles.textGray}>(optional)</span></label>
                <div className={styles.inputWrapper}>
                  <MapPinned size={18} className={styles.inputIcon} />
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Home / nearest garage / dealer" />
                </div>
              </div>

              <div className={styles.formRow2}>
                <div className={styles.inputGroup}>
                  <label>Vehicle Type <span className={styles.textRed}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <Car size={18} className={styles.inputIcon} />
                    <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
                      <option value="">Select vehicle...</option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="Motorcycle">Motorcycle</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Service Required <span className={styles.textRed}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <Wrench size={18} className={styles.inputIcon} />
                    <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} required>
                      <option value="">Select service...</option>
                      <option value="Breakdown Recovery">Breakdown Recovery</option>
                      <option value="Jump Start">Jump Start</option>
                      <option value="Tyre Change">Tyre Change</option>
                      <option value="Transport">Vehicle Transport</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Additional Notes</label>
                <div className={styles.inputWrapper}>
                  <FileText size={18} className={styles.inputIconTextArea} />
                  <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any extra details about the situation..." rows={3}></textarea>
                </div>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.btnSubmit}>
                  <Zap size={20} fill="currentColor" /> Submit Emergency Booking
                </button>
                <button type="button" className={styles.btnWhatsApp} onClick={handleWhatsApp}>
                  <MessageCircle size={20} /> Send via WhatsApp Instead
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Why Choose Us */}
          <div className={styles.card}>
            <h3 className={styles.whyHeading}>Why Choose Cambridge Vehicle Recovery?</h3>
            
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIconOutline}>
                  <Zap size={20} color="#D71920" />
                </div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>15–30 Min Response</h4>
                  <p className={styles.featureDesc}>Nationwide fleet ensures rapid dispatch wherever you are.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconOutline}>
                  <ShieldCheck size={20} color="#D71920" />
                </div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Fully Insured & Certified</h4>
                  <p className={styles.featureDesc}>All technicians professionally trained and insured.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconOutline}>
                  <PoundSterling size={20} color="#D71920" />
                </div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>No Hidden Fees</h4>
                  <p className={styles.featureDesc}>Transparent pricing — know the cost before we begin.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconOutline}>
                  <MapPin size={20} color="#D71920" />
                </div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Nationwide Coverage</h4>
                  <p className={styles.featureDesc}>All of England, Scotland and Wales 24/7/365.</p>
                </div>
              </div>
            </div>

            <div className={styles.whatsappCard}>
              <MessageCircle size={24} color="#25D366" />
              <div className={styles.featureText}>
                <h4 className={styles.waTitle}>WhatsApp Available</h4>
                <p className={styles.waDesc}>Message us directly for instant confirmation from our dispatch team.</p>
              </div>
            </div>

            <a href={`tel:${businessConfig.phone.replace(/[\s+]/g, '')}`} className={styles.phoneCta}>
              <div className={styles.phoneIconBox}>
                <Phone size={24} color="#fff" />
              </div>
              <div className={styles.phoneCtaText}>
                <span className={styles.phoneNum}>{businessConfig.phone}</span>
                <span className={styles.phoneSub}>Free call — available 24/7</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
