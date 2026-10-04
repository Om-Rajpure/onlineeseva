// ============================================================
// Schemes Listing Page — Phase 6 Full Implementation
// ============================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { Container } from '../../components/ui/Container';
import { schemes } from '../../data/schemes';
import { business } from '../../data/business';
import type { SchemeStatus } from '../../types';
import styles from './Schemes.module.css';

type Filter = 'all' | SchemeStatus;

const STATUS_LABELS: Record<SchemeStatus, string> = {
  open: 'Open',
  new: 'New',
  updated: 'Updated',
  'deadline-soon': 'Deadline Soon',
  upcoming: 'Upcoming',
  closed: 'Closed',
};

const STATUS_DOT: Record<SchemeStatus, string> = {
  open: '🟢',
  new: '🔵',
  updated: '🟡',
  'deadline-soon': '🔴',
  upcoming: '⚪',
  closed: '⚫',
};

function StatusBadge({ status }: { status: SchemeStatus }) {
  const cls = styles[`status-${status}`] ?? '';
  return (
    <span className={`${styles['status-badge']} ${cls}`}>
      {STATUS_DOT[status]} {STATUS_LABELS[status]}
    </span>
  );
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Schemes' },
  { value: 'open', label: 'Open Now' },
  { value: 'new', label: 'New' },
  { value: 'updated', label: 'Updated' },
  { value: 'deadline-soon', label: 'Deadline Soon' },
  { value: 'upcoming', label: 'Upcoming' },
];

export default function Schemes() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const whatsappNumber = business.whatsappNumber || '919987772424';
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';

  const filtered =
    activeFilter === 'all'
      ? schemes
      : schemes.filter((s) => s.status === activeFilter);

  const openCount = schemes.filter((s) => s.status === 'open').length;

  return (
    <>
      <SEO
        title="Government Schemes | Maha E-Seva Kendra Nerul"
        description={`Discover ${schemes.length} government welfare schemes available at Maha E-Seva Kendra, Nerul East. Ladki Bahin Yojana, PMAY, APY, PMJJBY and more. We help you apply quickly.`}
      />

      <div className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <Container size="lg" className={styles['hero-inner']}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden>›</span>
              <span>Government Schemes</span>
            </nav>

            <div className={styles['hero-badge']}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Maharashtra Welfare Schemes
            </div>

            <h1 className={styles['hero-title']}>
              Government Schemes We Help<br />You Apply For
            </h1>
            <p className={styles['hero-subtitle']}>
              We guide you through eligibility, documents, and submission for major
              central and state government welfare schemes — all from our Nerul East centre.
            </p>

            <div className={styles['hero-stats']}>
              <div className={styles['hero-stat']}>
                <span className={styles['hero-stat-value']}>{schemes.length}</span>
                <span className={styles['hero-stat-label']}>Schemes listed</span>
              </div>
              <div className={styles['hero-stat']}>
                <span className={styles['hero-stat-value']}>{openCount}</span>
                <span className={styles['hero-stat-label']}>Currently open</span>
              </div>
              <div className={styles['hero-stat']}>
                <span className={styles['hero-stat-value']}>Free</span>
                <span className={styles['hero-stat-label']}>Application guidance</span>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Notice Bar ── */}
        <div className={styles['notice-bar']}>
          <Container size="lg" className={styles['notice-bar-inner']}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <strong>Important:</strong>{' '}
            Scheme details and eligibility may change. Always verify with the official
            government portal before applying. Our kendra provides guidance — we are not
            a government authority.
          </Container>
        </div>

        {/* ── Content ── */}
        <div className={styles['content-wrapper']}>
          <Container size="lg">
            {/* Filter Bar */}
            <div className={styles['filter-bar']} role="group" aria-label="Filter schemes by status">
              <span className={styles['filter-label']}>Filter:</span>
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className={[
                    styles['filter-btn'],
                    activeFilter === f.value ? styles['filter-btn-active'] : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setActiveFilter(f.value)}
                  aria-pressed={activeFilter === f.value}
                >
                  {f.label}
                  {f.value !== 'all' && (
                    <span>
                      (
                      {schemes.filter((s) => s.status === f.value).length}
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-muted)' }}>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>No schemes found</p>
                <p style={{ fontSize: 'var(--text-sm)', marginTop: '0.5rem' }}>
                  Try a different filter or{' '}
                  <button
                    type="button"
                    style={{ color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                    onClick={() => setActiveFilter('all')}
                  >
                    view all schemes
                  </button>
                </p>
              </div>
            ) : (
              <ul className={styles['schemes-grid']} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {filtered.map((scheme) => (
                  <li key={scheme.id}>
                    <Link to={`/schemes/${scheme.slug}`} className={styles['scheme-card']}>
                      <div className={styles['card-top']}>
                        <div className={styles['card-status-row']}>
                          <StatusBadge status={scheme.status} />
                          <div className={styles['card-arrow']} aria-hidden>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        <h2 className={styles['card-title']}>{scheme.title}</h2>
                        <p className={styles['card-summary']}>{scheme.summary}</p>
                      </div>
                      <div className={styles['card-bottom']}>
                        <span className={styles['card-benefits-count']}>
                          {scheme.benefits.length} benefit{scheme.benefits.length !== 1 ? 's' : ''}
                          {' · '}
                          {scheme.documents.filter((d) => d.required).length} key documents
                        </span>
                        <span className={styles['card-updated']}>
                          Updated {scheme.lastUpdated}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className={styles['cta-section']}>
              <h2 className={styles['cta-title']}>Not Sure Which Scheme You Qualify For?</h2>
              <p className={styles['cta-text']}>
                Our staff will help you check eligibility across multiple schemes and assist
                with the complete application process at our Nerul East centre.
              </p>
              <div className={styles['cta-actions']}>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need help checking which government schemes I am eligible for.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['cta-whatsapp']}
                  id="schemes-whatsapp-cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${primaryPhone}`}
                  className={styles['cta-call']}
                  id="schemes-call-cta"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
