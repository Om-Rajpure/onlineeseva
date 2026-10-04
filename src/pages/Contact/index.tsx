// ============================================================
// Contact, Location & Trust Page — Phase 8 Full Implementation
// ============================================================

import { useState, useMemo, type FormEvent } from 'react';
import { business } from '../../data/business';
import { services } from '../../data/services';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Input, Textarea, Select } from '../../components/ui/FormField';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import styles from './Contact.module.css';

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

  // Dynamic Open / Closed calculation (9 AM to 10 PM daily)
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 9 && hours < 22;
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and 10-digit contact mobile number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const selectedServiceName = services.find((s) => s.slug === serviceSlug)?.name || 'General Inquiry';
    const text = `Hello Maha E-Seva Kendra,\nMy Name: ${name || 'Citizen'}\nPhone: ${phone || 'Not provided'}\nInquiring about: ${selectedServiceName}\nMessage: ${message || 'Please guide me with required documents and process.'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const contactFaqs = [
    {
      id: 'faq-appointment',
      title: 'Do I need to book an appointment before visiting the Kendra?',
      content:
        'No appointment is needed! We operate on a walk-in basis 7 days a week from 9:00 AM to 10:00 PM. Our multiple operator counters ensure minimal waiting times.',
    },
    {
      id: 'faq-whatsapp-docs',
      title: 'Can I send my documents on WhatsApp for pre-verification before coming?',
      content:
        'Yes! You can WhatsApp clear photos of your documents to 099877 72424. Our operators will check them, confirm eligibility, and tell you if any additional proofs are needed before you visit.',
    },
    {
      id: 'faq-xerox-photos',
      title: 'Do I need to bring separate Xerox copies and passport photos?',
      content:
        'You can bring original documents directly. We have high-speed digital Xerox, colour laser printing, scanning, lamination, and instant digital passport photo capture in-house at Shop No-15.',
    },
    {
      id: 'faq-payment-modes',
      title: 'What payment modes are accepted at the Kendra?',
      content:
        'We accept all standard payment methods including UPI (Google Pay, PhonePe, Paytm), QR Code scan, Net Banking, and Cash for all government portal and Kendra service fees.',
    },
    {
      id: 'faq-urgent-service',
      title: 'Is emergency or same-day processing available for urgent applications?',
      content:
        'Yes, for urgent requirements such as immediate Tatkal PAN creation, instant Aadhaar reprint, fast police verification submission, or urgent affidavit typing, we prioritize same-day portal submission.',
    },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Contact Maha E-Seva Kendra | Shop No-15 Nerul East Navi Mumbai"
        description="Visit Maha E-Seva Kendra at Shop No-15, Janta Market Bridge, Nerul East. Call 099877 72424 or WhatsApp for document assistance. Open daily 9am–10pm."
        canonical="https://mahaesevanerul.in/contact"
      />

      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <h1 className={styles.title}>Contact &amp; Kendra Location</h1>
          <p className={styles.subtitle}>
            Visit our Kendra in Nerul East, call our helpline, or message us on WhatsApp for rapid
            assistance. Open 7 days a week, 9:00 AM to 10:00 PM.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles.contentWrap}>
        {/* Trust & Guarantee Bar */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⭐</span>
            <div>
              <div className={styles.trustTitle}>4.9 / 5 Rating</div>
              <div className={styles.trustSub}>1,466+ Verified Google Reviews</div>
            </div>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏛️</span>
            <div>
              <div className={styles.trustTitle}>Authorized Centre</div>
              <div className={styles.trustSub}>Certified Aaple Sarkar Facilitators</div>
            </div>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🖨️</span>
            <div>
              <div className={styles.trustTitle}>In-House Facilities</div>
              <div className={styles.trustSub}>Xerox, Scanning &amp; Color Photo Studio</div>
            </div>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <div>
              <div className={styles.trustTitle}>Data Confidentiality</div>
              <div className={styles.trustSub}>100% Secure Document Handling</div>
            </div>
          </div>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Form & Online Inquiry */}
          <div className={styles.formColumn}>
            <div className={styles.cardBox}>
              <div className={styles.formHeader}>
                <span className={styles.formBadge}>⚡ Direct Help</span>
                <h2 className={styles.formTitle}>Send an Inquiry or Document Request</h2>
                <p className={styles.formDesc}>
                  Fill out your details below and we will prepare your document checklist or connect with you on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Thank you, {name}!</h3>
                  <p>
                    Your inquiry has been recorded. For fastest reply, you can also continue the conversation on WhatsApp directly with our operator.
                  </p>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className={styles.btnSuccessWa}
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
                    className={styles.btnResetForm}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

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

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.btnSubmit}>
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className={styles.btnWaDirect}
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
          <div className={styles.infoColumn}>
            {/* Storefront & Address Card */}
            <div className={styles.cardBox}>
              <div className={styles.photoWrap}>
                <img
                  src="/assets/storefront-Y3bWOUh5.jpg"
                  alt="Maha E-Seva Kendra Shop No-15 storefront Nerul East"
                  className={styles.storefrontImg}
                  loading="lazy"
                />
                <div className={styles.photoChip}>
                  <span>📍 Nerul East • Near Janta Market Bridge</span>
                </div>
              </div>

              <div className={styles.infoBody}>
                <h3 className={styles.infoHeading}>Physical Centre Address</h3>
                <address className={styles.address}>
                  <strong>Maha E-Seva Kendra</strong>
                  <br />
                  Shop No-15, Janta Market Bridge,
                  <br />
                  Nerul East, Sector 3, Nerul,
                  <br />
                  Navi Mumbai, Maharashtra 400706
                </address>

                <div className={styles.actionButtons}>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnMaps}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    <span>Open in Google Maps</span>
                  </a>

                  <a href={`tel:${primaryPhone}`} className={styles.btnCallLarge}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Call Primary: {displayPhone}</span>
                  </a>

                  <a href={`tel:${business.phoneNumbers[1]?.number}`} className={styles.btnCallSecondary}>
                    <span>Call Secondary: {altPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className={styles.cardBox}>
              <div className={styles.hoursHeader}>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot} />
                  <strong>{isOpenNow ? 'Open Now (9 AM – 10 PM)' : 'Closed Now (Opens at 9 AM)'}</strong>
                </div>
                <span className={styles.hoursChip}>Open 7 Days</span>
              </div>

              <div className={styles.hoursTable}>
                {days.map((item, idx) => (
                  <div key={idx} className={styles.hoursRow}>
                    <span className={styles.hoursDay}>{item.day}</span>
                    <span className={styles.hoursVal}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks & How to Reach Us */}
        <section className={styles.landmarksCard} aria-labelledby="landmarks-title">
          <h2 id="landmarks-title" className={styles.landmarksTitle}>
            How to Reach Our Kendra in Nerul East
          </h2>
          <p className={styles.landmarksSubtitle}>
            Easily accessible from all major public transit points across Navi Mumbai.
          </p>

          <div className={styles.directionsGrid}>
            <div className={styles.directionItem}>
              <div className={styles.directionIcon}>🚆</div>
              <h3 className={styles.directionFrom}>From Nerul Railway Station (East)</h3>
              <p className={styles.directionSteps}>
                Exit from Nerul Railway Station East side. Walk or take an auto toward Sector 3 / Janta Market Bridge (approx. 5–7 minutes walk). Shop No-15 is located right near the bridge.
              </p>
            </div>

            <div className={styles.directionItem}>
              <div className={styles.directionIcon}>🚌</div>
              <h3 className={styles.directionFrom}>From LP Bus Stop / Sion-Panvel Highway</h3>
              <p className={styles.directionSteps}>
                From LP (London Pride) junction, head straight along the main Nerul East arterial road toward Sector 3 / Janta Market. Landmark: Janta Market Bridge.
              </p>
            </div>

            <div className={styles.directionItem}>
              <div className={styles.directionIcon}>🚗</div>
              <h3 className={styles.directionFrom}>From Seawoods / Belapur / Vashi</h3>
              <p className={styles.directionSteps}>
                Take Palm Beach Road or Sion-Panvel Expressway, exit into Nerul East Sector 3. Two-wheeler and car roadside parking is easily available near the market bridge.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Visit FAQs */}
        <section className={styles.contactFaqSection} aria-labelledby="contact-faqs-title">
          <h2 id="contact-faqs-title" className={styles.faqHeading}>
            Frequently Asked Questions About Visiting Us
          </h2>
          <Accordion items={contactFaqs} />
        </section>
      </Container>
    </div>
  );
}

export default ContactPage;
