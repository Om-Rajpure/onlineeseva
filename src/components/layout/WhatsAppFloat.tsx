import { business } from '../../data/business';
import styles from './WhatsAppFloat.module.css';

export function WhatsAppFloat() {
  const whatsappNumber = business.whatsappNumber || '919987772424';
  const message = 'Hello Maha E-Seva Kendra, I want to inquire about a service.';

  return (
    <aside aria-label="Quick contact" className={styles['float-wrapper']}>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['wa-button']}
        aria-label="Chat with Maha E-Seva Kendra on WhatsApp"
      >
        <span className={styles['pulse-ring']} />
        <svg
          className={styles['wa-icon']}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
        </svg>
        <span className={styles.tooltip}>
          <strong>Chat on WhatsApp</strong>
          <span>Instant reply • 9am–10pm</span>
        </span>
      </a>
    </aside>
  );
}
