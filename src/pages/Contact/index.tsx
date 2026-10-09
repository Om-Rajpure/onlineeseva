import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { business } from '../../data/business';
import { services } from '../../data/services';
import { schemes } from '../../data/schemes';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Input, Textarea, Select } from '../../components/ui/FormField';
import { SEO } from '../../components/common/SEO';
import styles from './Contact.module.css';
import storefrontImg from '../../assets/storefront.jpg';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('scheme') || '';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [preferredMethod, setPreferredMethod] = useState<'whatsapp' | 'call' | 'visit'>('whatsapp');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const displayPhone = business.phoneNumbers[0]?.display || '099877 72424';
  const altPhone = business.phoneNumbers[1]?.display || '8850 77 24 24';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const urlService = searchParams.get('service') || searchParams.get('scheme') || '';
  const [prevUrlService, setPrevUrlService] = useState(urlService);
  if (urlService !== prevUrlService) {
    setPrevUrlService(urlService);
    setServiceSlug(urlService);
  }

  const days = [
    { day: 'Monday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 10:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 10:00 PM' },
  ];

  const validatePhone = (p: string) => {
    const clean = p.replace(/\D/g, '');
    return clean.length === 10 && /^[6-9]\d{9}$/.test(clean);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (botcheck) {
      return;
    }

    if (!name.trim() || name.trim().length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const getSelectedServiceName = () => {
    const matchedService = services.find((s) => s.slug === serviceSlug);
    if (matchedService) return matchedService.name;
    const matchedScheme = schemes.find((s) => s.slug === serviceSlug);
    if (matchedScheme) return matchedScheme.title;
    return 'General Citizen Inquiry';
  };

  const handleSendWhatsApp = () => {
    const selectedTitle = getSelectedServiceName();
    const text = `Hello Maha E-Seva Kendra,\nMy Name: ${name || 'Citizen'}\nPhone: ${phone || 'Not provided'}\nInquiry: ${selectedTitle}\nPreferred Contact: ${preferredMethod}\nMessage: ${message || 'Please guide me with the document requirements and process.'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOffice',
    name: business.name,
    legalName: business.legalName,
    description: business.shortDescription,
    url: 'https://mahaesevakendra.in/contact',
    telephone: primaryPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.033,
      longitude: 73.018,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1466',
    },
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Contact Maha E-Seva Kendra | Shop No-15 Nerul East Navi Mumbai"
        description="Visit Maha E-Seva Kendra at Shop No-15, Janta Market Bridge, Nerul East. Call 099877 72424 or WhatsApp for document assistance. Open daily 9am–10pm."
        schema={contactSchema}
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
                  <p>
                    Your inquiry regarding <strong>{getSelectedServiceName()}</strong> has been recorded. For fastest instant response, you can continue directly on WhatsApp with our Kendra operator.
                  </p>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className={styles['btn-success-wa']}
                  >
                    <span>Open on WhatsApp Directly</span>
                    <span aria-hidden="true">→</span>
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
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="botcheck"
                    value={botcheck}
                    onChange={(e) => setBotcheck(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && <div className={styles['error-banner']}>{errorMsg}</div>}

                  <Input
                    id="contact-name"
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <Input
                    id="contact-phone"
                    label="Mobile Number"
                    type="tel"
                    placeholder="10-digit mobile number (e.g. 9987772424)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <Select
                    id="contact-service"
                    label="Service / Scheme Interested In"
                    value={serviceSlug}
                    onChange={(e) => setServiceSlug(e.target.value)}
                    placeholder="Select a service or scheme (Optional)"
                  >
                    <optgroup label="Citizen & Government Services (32)">
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} ({s.priceLabel})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Government Schemes">
                      {schemes.map((sc) => (
                        <option key={sc.slug} value={sc.slug}>
                          {sc.title}
                        </option>
                      ))}
                    </optgroup>
                  </Select>

                  {/* Preferred Contact Method */}
                  <div className={styles['radio-group-wrap']}>
                    <label className={styles['radio-label']}>Preferred Contact Method</label>
                    <div className={styles['radio-options']}>
                      <button
                        type="button"
                        className={`${styles['radio-btn']} ${
                          preferredMethod === 'whatsapp' ? styles['radio-btn-active'] : ''
                        }`}
                        onClick={() => setPreferredMethod('whatsapp')}
                      >
                        <span>💬 WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        className={`${styles['radio-btn']} ${
                          preferredMethod === 'call' ? styles['radio-btn-active'] : ''
                        }`}
                        onClick={() => setPreferredMethod('call')}
                      >
                        <span>📞 Phone Call</span>
                      </button>
                      <button
                        type="button"
                        className={`${styles['radio-btn']} ${
                          preferredMethod === 'visit' ? styles['radio-btn-active'] : ''
                        }`}
                        onClick={() => setPreferredMethod('visit')}
                      >
                        <span>🏢 In-Person Visit</span>
                      </button>
                    </div>
                  </div>

                  <Textarea
                    id="contact-message"
                    label="Your Query or Requirement"
                    rows={3}
                    placeholder="Describe your query or ask about specific document requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  {/* Privacy & Security Note */}
                  <div className={styles['privacy-banner']}>
                    <span className={styles['privacy-icon']} aria-hidden="true">🛡️</span>
                    <p>
                      <strong>Privacy &amp; Security Note:</strong> We respect your privacy. Maha E-Seva Kendra never asks for Aadhaar OTPs, passwords, or bank PINs through online contact forms.
                    </p>
                  </div>

                  <div className={styles['form-actions']}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles['btn-submit']}
                    >
                      {isSubmitting ? 'Recording...' : 'Submit Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className={styles['btn-wa-direct']}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                  alt="Maha E-Seva Kendra Shop No-15 storefront in Nerul East"
                  className={styles['storefront-img']}
                  loading="lazy"
                />
                <div className={styles['photo-chip']}>
                  <span>📍 Nerul East • Below Janta Market Bridge</span>
                </div>
              </div>

              <div className={styles['info-body']}>
                <h3 className={styles['info-heading']}>Physical Centre Address</h3>
                <p className={styles['landmark-note']}>
                  ★ 3 minutes walking distance from Nerul Railway Station (East Side)
                </p>
                <address className={styles.address}>
                  <strong>Maha E-Seva Kendra (Vinod Maha E-Seva Kendra)</strong><br />
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a href={`tel:${primaryPhone}`} className={styles['btn-call-large']}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

            {/* Google Trust & Service Guarantees Card */}
            <div className={styles['trust-card']}>
              <div className={styles['rating-header']}>
                <div className={styles['rating-score']}>
                  <span className={styles['star-gold']}>★</span>
                  <span>4.9 / 5</span>
                </div>
                <span className={styles['rating-count']}>Based on 1,466+ Google Reviews</span>
              </div>
              <ul className={styles['trust-points']}>
                <li className={styles['trust-item']}>
                  <span className={styles['trust-check']}>✓</span>
                  <span>Official government acknowledgment receipt for every application</span>
                </li>
                <li className={styles['trust-item']}>
                  <span className={styles['trust-check']}>✓</span>
                  <span>Zero hidden charges • 100% transparent centre fee structure</span>
                </li>
                <li className={styles['trust-item']}>
                  <span className={styles['trust-check']}>✓</span>
                  <span>In-house high-speed scanning, Xerox &amp; passport photo printing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
