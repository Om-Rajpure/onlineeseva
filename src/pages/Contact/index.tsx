import { useState, type FormEvent } from 'react';
import { business } from '../../data/business';
import { services } from '../../data/services';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Input, Textarea, Select } from '../../components/ui/FormField';
import { SEO } from '../../components/common/SEO';
import styles from './Contact.module.css';
import storefrontImg from '../../assets/storefront.jpg';

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceSlug, setServiceSlug] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const displayPhone = business.phoneNumbers[0]?.display || '099877 72424';
  const altPhone = business.phoneNumbers[1]?.display || '8850 77 24 24';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const days = [
    { day: 'Monday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 10:00 PM' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const selectedServiceName = services.find(s => s.slug === serviceSlug)?.name || 'General Inquiry';
    const text = `Hello Maha E-Seva Kendra,\nMy Name: ${name || 'Citizen'}\nPhone: ${phone || 'Not provided'}\nInquiring about: ${selectedServiceName}\nMessage: ${message || 'Please guide me with documents.'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Contact Maha E-Seva Kendra | Shop No-15 Nerul East Navi Mumbai"
        description="Visit Maha E-Seva Kendra at Shop No-15, Janta Market Bridge, Nerul East. Call 099877 72424 or WhatsApp for document assistance. Open daily 9am–10pm."
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <h1 className={styles.title}>Contact &amp; Kendra Location</h1>
          <p className={styles.subtitle}>
            Visit our Kendra in Nerul East, call our helpline, or message us on WhatsApp for rapid assistance. Open 7 days a week, 9:00 AM to 10:00 PM.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles['content-wrap']}>
        <div className={styles['contact-grid']}>
          {/* Left Column: Form & Online Inquiry */}
          <div className={styles['form-column']}>
            <div className={styles['card-box']}>
              <div className={styles['form-header']}>
                <span className={styles['form-badge']}>Fast Response</span>
                <h2 className={styles['form-title']}>Send an Inquiry or Document Request</h2>
                <p className={styles['form-desc']}>
                  Fill out your details below and we will prepare your document checklist or connect with you on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className={styles['success-box']}>
                  <div className={styles['success-icon']}>✓</div>
                  <h3>Thank you, {name}!</h3>
                  <p>Your inquiry has been recorded. For fastest reply, you can also continue the conversation on WhatsApp directly with our operator.</p>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className={styles['btn-success-wa']}
                  >
                    Open on WhatsApp →
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className={styles['btn-reset-form']}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {errorMsg && <div className={styles['error-banner']}>{errorMsg}</div>}

                  <Input
                    id="contact-name"
                    label="Full Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <Input
                    id="contact-phone"
                    label="Mobile Number"
                    type="tel"
                    placeholder="10-digit mobile number (e.g. 9876543210)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <Select
                    id="contact-service"
                    label="Service You Need Assistance With"
                    value={serviceSlug}
                    onChange={(e) => setServiceSlug(e.target.value)}
                    placeholder="Select a service (Optional)"
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name} ({s.priceLabel})
                      </option>
                    ))}
                  </Select>

                  <Textarea
                    id="contact-message"
                    label="Your Query or Requirement"
                    rows={4}
                    placeholder="Describe your query or ask about specific document requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <div className={styles['form-actions']}>
                    <button type="submit" className={styles['btn-submit']}>
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className={styles['btn-wa-direct']}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Physical Address, Phones & Timetable */}
          <div className={styles['info-column']}>
            {/* Storefront & Address Card */}
            <div className={styles['card-box']}>
              <div className={styles['photo-wrap']}>
                <img
                  src={storefrontImg}
                  alt="Maha E-Seva Kendra Shop No-15 storefront"
                  className={styles['storefront-img']}
                  loading="lazy"
                />
                <div className={styles['photo-chip']}>
                  <span>📍 Nerul East • Near Janta Market Bridge</span>
                </div>
              </div>

              <div className={styles['info-body']}>
                <h3 className={styles['info-heading']}>Physical Centre Address</h3>
                <address className={styles.address}>
                  <strong>Maha E-Seva Kendra</strong><br />
                  Shop No-15, Janta Market Bridge,<br />
                  Nerul East, Sector 3, Nerul,<br />
                  Navi Mumbai, Maharashtra 400706
                </address>

                <div className={styles['action-buttons']}>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['btn-maps']}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    <span>Open in Google Maps</span>
                  </a>

                  <a href={`tel:${primaryPhone}`} className={styles['btn-call-large']}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Call Primary: {displayPhone}</span>
                  </a>

                  <a href={`tel:${business.phoneNumbers[1]?.number}`} className={styles['btn-call-secondary']}>
                    <span>Call Secondary: {altPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className={styles['card-box']}>
              <div className={styles['hours-header']}>
                <div className={styles['status-indicator']}>
                  <span className={styles['status-dot']} />
                  <strong>Operating Schedule (Verified)</strong>
                </div>
                <span className={styles['hours-chip']}>Open 7 Days</span>
              </div>

              <div className={styles['hours-table']}>
                {days.map((item, idx) => (
                  <div key={idx} className={styles['hours-row']}>
                    <span className={styles['hours-day']}>{item.day}</span>
                    <span className={styles['hours-val']}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
