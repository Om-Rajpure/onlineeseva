import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { categories } from '../../data/categories';
import { Container } from '../ui/Container';
import styles from './Footer.module.css';

const categoryIcons: Record<string, string> = {
  'identity': '🪪',
  'certificates': '📜',
  'health-welfare': '🏥',
  'travel-transport': '✈️',
  'employment': '💼',
  'business-registration': '🏢',
  'banking': '🏦',
  'insurance': '🛡️',
  'photography-printing': '📸',
  'government-forms': '📋',
  'other': '⚙️',
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const displayPhone = business.phoneNumbers[0]?.display || '099877 72424';
  const altPhone = business.phoneNumbers[1]?.display || '8850 77 24 24';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  return (
    <footer className={styles.footer}>
      {/* Pre-Footer Action Banner */}
      <div className={styles.banner}>
        <Container size="lg" className={styles['banner-inner']}>
          <div className={styles['banner-text']}>
            <h2 className={styles['banner-title']}>Need help with your documents or application?</h2>
            <p className={styles['banner-desc']}>
              Visit our Kendra at Shop No-15, Janta Market Bridge, Nerul East or message us on WhatsApp for fast, guided assistance.
            </p>
          </div>
          <div className={styles['banner-actions']}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need guidance with document application.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['banner-wa-btn']}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>WhatsApp Us Now</span>
            </a>
            <a href={`tel:${primaryPhone}`} className={styles['banner-call-btn']}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call {displayPhone}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Info */}
      <Container size="lg" className={styles['footer-main']}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Business Details */}
          <div className={styles.col}>
            <div className={styles.brand}>
              <img
                src="/images/maha-eseva-logo.png"
                alt="Online e-Seva logo"
                className={styles['brand-logo-img']}
              />
            </div>
            <p className={styles.tagline}>
              Your trusted local assistance centre for government certificates, identity documents, schemes, bill payments, and online citizen services.
            </p>
            <div className={styles['hours-box']}>
              <div className={styles['hours-header']}>
                <span className={styles['status-dot']} />
                <strong>Business Hours (Verified)</strong>
              </div>
              <p className={styles['hours-time']}>Monday – Sunday: 9:00 AM – 10:00 PM</p>
              <span className={styles['hours-badge']}>Open 7 Days a Week</span>
            </div>
          </div>

          {/* Column 2: Service Categories */}
          <div className={styles.col}>
            <h3 className={styles['col-title']}>Service Categories</h3>
            <ul className={styles['link-list']}>
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/services?category=${cat.id}`} className={styles.link}>
                    <span className={styles['cat-icon']}>{categoryIcons[cat.id] || '📄'}</span>
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className={styles.col}>
            <h3 className={styles['col-title']}>Quick Links</h3>
            <ul className={styles['link-list']}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/services" className={styles.link}>All 32 Services</Link></li>
              <li><Link to="/schemes" className={styles.link}>Government Schemes</Link></li>
              <li><Link to="/documents" className={styles.link}>Document Checklists</Link></li>
              <li><Link to="/blog" className={styles.link}>Helpful Guides &amp; Blog</Link></li>
              <li><Link to="/about" className={styles.link}>About Our Kendra</Link></li>
              <li><Link to="/faq" className={styles.link}>FAQs</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact &amp; Location</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className={styles.col}>
            <h3 className={styles['col-title']}>Visit Our Centre</h3>
            <address className={styles.address}>
              <div className={styles['address-line']}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['address-icon']}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{business.address.full}</span>
              </div>
              <div className={styles['contact-lines']}>
                <p>
                  <strong>Primary:</strong>{' '}
                  <a href={`tel:${primaryPhone}`} className={styles['inline-phone']}>{displayPhone}</a>
                </p>
                <p>
                  <strong>Secondary:</strong>{' '}
                  <a href={`tel:${business.phoneNumbers[1]?.number}`} className={styles['inline-phone']}>{altPhone}</a>
                </p>
              </div>
            </address>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['maps-link']}
            >
              <span>Get Directions on Google Maps</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar / Disclaimer */}
        <div className={styles['bottom-bar']}>
          <div className={styles['disclaimer-box']}>
            <p>
              <strong>Disclaimer:</strong> Maha E-Seva Kendra (Shop No-15, Nerul East) is an authorized citizen facilitation centre providing guided online application and documentation services for government schemes, certificates, and digital services. All government application fees, rules, and approvals are governed strictly by respective government departments.
            </p>
          </div>
          <div className={styles['copyright-row']}>
            <p>© {currentYear} Maha E-Seva Kendra, Nerul East, Navi Mumbai. All rights reserved.</p>
            <div className={styles['footer-meta-links']}>
              <Link to="/about" className={styles['meta-link']}>About</Link>
              <span className={styles['meta-sep']}>•</span>
              <Link to="/privacy" className={styles['meta-link']}>Privacy Policy</Link>
              <span className={styles['meta-sep']}>•</span>
              <Link to="/terms" className={styles['meta-link']}>Terms of Service</Link>
              <span className={styles['meta-sep']}>•</span>
              <Link to="/faq" className={styles['meta-link']}>FAQ</Link>
              <span className={styles['meta-sep']}>•</span>
              <Link to="/contact" className={styles['meta-link']}>Contact</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
