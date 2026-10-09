import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { business } from '../../data/business';
import { Container } from '../ui/Container';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Schemes', href: '/schemes' },
    { label: 'Documents Guide', href: '/documents' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={[styles.header, isScrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      {/* Top Banner with Business Status & Direct Contacts */}
      <div className={styles.topbar}>
        <Container size="lg" className={styles['topbar-inner']}>
          <div className={styles['topbar-left']}>
            <span className={styles['status-indicator']}>
              <span className={styles['status-dot']} />
              Open Daily: 9:00 AM – 10:00 PM
            </span>
            <span className={styles['topbar-sep']}>•</span>
            <span className={styles['topbar-location']}>Shop No-15, Janta Market Bridge, Nerul East</span>
          </div>
          <div className={styles['topbar-right']}>
            <a href={`tel:${primaryPhone}`} className={styles['topbar-link']}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{business.phoneNumbers[0]?.display || '099877 72424'}</span>
            </a>
            <span className={styles['topbar-sep']}>•</span>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I have an inquiry about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['topbar-link-wa']}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <nav className={styles.navbar} aria-label="Main navigation">
        <Container size="lg" className={styles['navbar-inner']}>
          {/* Logo */}
          <Link to="/" className={styles.brand} aria-label="Online e-Seva Home">
            <img
              src="/images/maha-eseva-logo.png"
              alt="Online e-Seva logo"
              className={styles['brand-logo-img']}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className={styles['nav-links']}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={[styles['nav-link'], isActive ? styles['nav-link-active'] : ''].filter(Boolean).join(' ')}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className={styles['nav-actions']}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need assistance with an online service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['cta-whatsapp']}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/contact" className={styles['cta-primary']}>
              Get Directions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles['menu-toggle']}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className={styles['mobile-menu']}>
          <Container size="lg" className={styles['mobile-menu-inner']}>
            <ul className={styles['mobile-nav-list']}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={[styles['mobile-nav-link'], isActive ? styles['mobile-nav-link-active'] : ''].filter(Boolean).join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles['mobile-actions']}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need assistance with an online service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['mobile-cta-wa']}
              >
                <span>WhatsApp Us Directly</span>
              </a>
              <a href={`tel:${primaryPhone}`} className={styles['mobile-cta-call']}>
                <span>Call {business.phoneNumbers[0]?.display || '099877 72424'}</span>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
