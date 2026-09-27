import { business } from '../../../data/business';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import styles from './LocationHours.module.css';
import storefrontImg from '../../../assets/storefront.jpg';

export function LocationHours() {
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

  return (
    <section className={styles.section} id="location-hours">
      <Container size="lg">
        <SectionHeading
          badge="Visit Our Kendra"
          title="Centrally Located in Nerul East"
          subtitle="Easily accessible from Nerul Railway Station and Janta Market Bridge. Open daily 9:00 AM to 10:00 PM."
        />

        <div className={styles.card}>
          <div className={styles.grid}>
            {/* Left Side: Storefront Photo & Direction Links */}
            <div className={styles['visual-col']}>
              <div className={styles['photo-box']}>
                <img
                  src={storefrontImg}
                  alt="Maha E-Seva Kendra Shop Front at Nerul East Janta Market Bridge"
                  className={styles.photo}
                  loading="lazy"
                />
                <div className={styles['landmark-tag']}>
                  <span>📍</span>
                  <span>Nerul East • Janta Market Bridge</span>
                </div>
              </div>

              <div className={styles['quick-reach']}>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-maps']}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Open in Google Maps (Get Directions)</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am on my way to Maha E-Seva Kendra. Can you share exact shop location?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-location-wa']}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>WhatsApp for Live Location</span>
                </a>
              </div>
            </div>

            {/* Right Side: Address & Full Weekly Timetable */}
            <div className={styles['info-col']}>
              {/* Address details */}
              <div className={styles['address-block']}>
                <h3 className={styles['block-title']}>Physical Centre Address</h3>
                <address className={styles.address}>
                  <p className={styles['address-text']}>
                    <strong>Maha E-Seva Kendra</strong><br />
                    Shop No-15, Janta Market Bridge,<br />
                    Nerul East, Sector 3, Nerul,<br />
                    Navi Mumbai, Maharashtra 400706
                  </p>
                </address>

                <div className={styles.contacts}>
                  <div className={styles['contact-pill']}>
                    <span className={styles['pill-label']}>Primary Phone:</span>
                    <a href={`tel:${primaryPhone}`} className={styles['pill-link']}>
                      {displayPhone}
                    </a>
                  </div>
                  <div className={styles['contact-pill']}>
                    <span className={styles['pill-label']}>Secondary:</span>
                    <a href={`tel:${business.phoneNumbers[1]?.number}`} className={styles['pill-link']}>
                      {altPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Hours Table */}
              <div className={styles['hours-block']}>
                <div className={styles['hours-header']}>
                  <div className={styles['hours-title-wrap']}>
                    <span className={styles['status-indicator-dot']} />
                    <h3 className={styles['block-title']}>Operating Hours (Verified)</h3>
                  </div>
                  <span className={styles['all-days-badge']}>Open All 7 Days</span>
                </div>

                <div className={styles['hours-grid']}>
                  {days.map((item, idx) => (
                    <div key={idx} className={styles['hours-row']}>
                      <span className={styles['day-name']}>{item.day}</span>
                      <span className={styles['day-time']}>{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className={styles['after-hours-note']}>
                  ⚡ Need urgent assistance outside regular visits? Send a message on WhatsApp anytime and our team will get back to you promptly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
