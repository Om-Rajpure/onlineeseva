import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { business } from '../../../data/business';
import { services } from '../../../data/services';
import { Container } from '../../../components/ui/Container';
import styles from './Hero.module.css';
import heroImg from '../../../assets/hero-interior.jpg';

export function Hero() {
  const [query, setQuery] = useState('');
  const [isOpenSuggestions, setIsOpenSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredServices = query.trim().length > 1
    ? services.filter(s =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/services?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const quickTags = [
    { label: 'Aadhaar Card', slug: 'aadhaar-smart-card' },
    { label: 'PAN Card', slug: 'pan-card' },
    { label: 'Domicile', slug: 'domicile-certificate' },
    { label: 'Income Certificate', slug: 'income-certificate' },
    { label: 'Passport', slug: 'passport-online-application' },
    { label: 'ABHA Card', slug: 'abha-card' },
  ];

  return (
    <section className={styles.hero}>
      {/* Top verified status chip */}
      <Container size="lg" className={styles['hero-container']}>
        <div className={styles['hero-grid']}>
          {/* Left Column: Content & Search */}
          <div className={styles['hero-content']}>
            <div className={styles['status-chip']}>
              <span className={styles['pulse-dot']} />
              <span>Kendra Open Today: 9:00 AM – 10:00 PM (Daily)</span>
            </div>

            <h1 className={styles.title}>
              Government &amp; Citizen Online Services in <span className={styles.highlight}>Nerul East</span>
            </h1>

            <p className={styles.subtitle}>
              Fast, accurate, and 100% guided assistance for 32+ government certificates, identity documents, schemes, and applications. Visit Shop No-15 or get instant WhatsApp guidance.
            </p>

            {/* Quick Search Box */}
            <div className={styles['search-wrapper']}>
              <form onSubmit={handleSearch} className={styles['search-form']}>
                <span className={styles['search-icon']} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search service (e.g., Aadhaar, PAN, Domicile, Passport)..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpenSuggestions(true);
                  }}
                  onFocus={() => setIsOpenSuggestions(true)}
                  className={styles['search-input']}
                  aria-label="Search government services"
                />
                <button type="submit" className={styles['search-btn']}>
                  Find Service
                </button>
              </form>

              {/* Autocomplete Dropdown */}
              {isOpenSuggestions && filteredServices.length > 0 && (
                <div className={styles.suggestions}>
                  {filteredServices.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={styles['suggestion-item']}
                      onClick={() => {
                        navigate(`/services/${item.slug}`);
                        setIsOpenSuggestions(false);
                      }}
                    >
                      <div className={styles['suggestion-info']}>
                        <span className={styles['suggestion-name']}>{item.name}</span>
                        <span className={styles['suggestion-desc']}>{item.shortDescription}</span>
                      </div>
                      <span className={styles['suggestion-price']}>{item.priceLabel}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick search chips */}
            <div className={styles['quick-tags']}>
              <span className={styles['quick-tags-label']}>Popular:</span>
              <div className={styles['tags-list']}>
                {quickTags.map((tag) => (
                  <button
                    key={tag.slug}
                    type="button"
                    className={styles.tag}
                    onClick={() => navigate(`/services/${tag.slug}`)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className={styles['hero-actions']}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I want to inquire about a service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['btn-whatsapp']}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                <span>WhatsApp Instant Help</span>
              </a>

              <a href={`tel:${primaryPhone}`} className={styles['btn-call']}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Centre</span>
              </a>

              <button
                type="button"
                onClick={() => navigate('/services')}
                className={styles['btn-browse']}
              >
                Browse All 32 Services →
              </button>
            </div>

            {/* Trust Stats Bar */}
            <div className={styles['trust-stats']}>
              <div className={styles['stat-item']}>
                <div className={styles['stat-rating']}>
                  <span className={styles['star-icon']}>★</span>
                  <strong>4.9</strong>
                  <span className={styles['stat-sub']}>(1,460+ Reviews)</span>
                </div>
                <span className={styles['stat-label']}>Trusted in Nerul</span>
              </div>
              <div className={styles['stat-divider']} />
              <div className={styles['stat-item']}>
                <strong>32+</strong>
                <span className={styles['stat-label']}>Govt Services</span>
              </div>
              <div className={styles['stat-divider']} />
              <div className={styles['stat-item']}>
                <strong>7 Days</strong>
                <span className={styles['stat-label']}>9 AM – 10 PM</span>
              </div>
              <div className={styles['stat-divider']} />
              <div className={styles['stat-item']}>
                <strong className={styles['stat-green']}>Direct Support</strong>
                <span className={styles['stat-label']}>No Middlemen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className={styles['hero-visual']}>
            <div className={styles['visual-card']}>
              <div className={styles['image-wrap']}>
                <img
                  src={heroImg}
                  alt="Maha E-Seva Kendra interior in Nerul Navi Mumbai"
                  className={styles['hero-image']}
                  loading="eager"
                />
                <div className={styles['image-overlay-badge']}>
                  <span className={styles['kendra-icon']}>🏛️</span>
                  <div>
                    <span className={styles['kendra-title']}>Maha E-Seva Kendra</span>
                    <span className={styles['kendra-sub']}>Shop No-15, Nerul East</span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Action Card */}
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>⚡</div>
                <div className={styles['feature-text']}>
                  <strong>Instant Document Verification</strong>
                  <span>Check exact required papers before you visit</span>
                </div>
              </div>

              {/* Floating Hours Badge */}
              <div className={styles['hours-float-badge']}>
                <span className={styles['badge-dot']} />
                <div>
                  <div className={styles['badge-hours']}>9:00 AM – 10:00 PM</div>
                  <div className={styles['badge-days']}>Open All 7 Days • Nerul East</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
