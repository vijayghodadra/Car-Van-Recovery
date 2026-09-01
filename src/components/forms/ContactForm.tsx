'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <h3>Request Received</h3>
        <p>Our team has received your request and will contact you immediately.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" required placeholder="John Doe" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number *</label>
        <input type="tel" inputMode="tel" id="phone" required placeholder="07123 456789" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="vehicle">Vehicle Type *</label>
        <select id="vehicle" required>
          <option value="">Select vehicle type...</option>
          <option value="car">Car / SUV</option>
          <option value="van">Van / Light Commercial</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="location">Current Location / Breakdown Point *</label>
        <input type="text" id="location" required placeholder="e.g. M11 Junction 10 Southbound" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="destination">Destination (Optional)</label>
        <input type="text" id="destination" placeholder="Where do you need to go?" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="problem">What's the problem?</label>
        <textarea id="problem" rows={4} placeholder="Briefly describe the issue (e.g. flat tyre, won't start, accident)"></textarea>
      </div>

      <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Request Recovery'}
      </button>
    </form>
  );
}
