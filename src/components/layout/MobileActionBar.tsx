import { business } from '../../data/business';
import styles from './MobileActionBar.module.css';

export function MobileActionBar() {
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  return (
    <nav aria-label="Quick mobile actions" className={styles['action-bar']}>
      {/* Call Button */}
      <a
        href={`tel:${primaryPhone}`}
        className={styles['action-btn']}
        aria-label="Call Maha E-Seva Kendra"
      >
        <div className={[styles['action-icon'], styles['icon-call']].join(' ')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <span className={styles['action-label']}>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need assistance with an online service.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={[styles['action-btn'], styles['action-btn-featured']].join(' ')}
        aria-label="Chat on WhatsApp"
      >
        <div className={[styles['action-icon'], styles['icon-wa']].join(' ')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
          </svg>
        </div>
        <span className={styles['action-label']}>WhatsApp</span>
      </a>

      {/* Directions Button */}
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['action-btn']}
        aria-label="Get directions to Maha E-Seva Kendra in Nerul"
      >
        <div className={[styles['action-icon'], styles['icon-maps']].join(' ')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        </div>
        <span className={styles['action-label']}>Directions</span>
      </a>
    </nav>
  );
}
