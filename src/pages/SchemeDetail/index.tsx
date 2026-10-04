// ============================================================
// Scheme Detail Page — Phase 6 Full Implementation
// ============================================================

import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { Container } from '../../components/ui/Container';
import { getSchemeBySlug, schemes } from '../../data/schemes';
import { business } from '../../data/business';
import type { SchemeStatus } from '../../types';
import styles from './SchemeDetail.module.css';

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

export default function SchemeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const scheme = slug ? getSchemeBySlug(slug) : null;

  if (!scheme) {
    return <Navigate to="/schemes" replace />;
  }

  const whatsappNumber = business.whatsappNumber || '919987772424';
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';

  const whatsappMsg = encodeURIComponent(
    `Hello Maha E-Seva Kendra, I need assistance with the ${scheme.title} scheme.`
  );

  const relatedSchemes = schemes
    .filter((s) => s.id !== scheme.id && s.status !== 'closed')
    .slice(0, 3);

  const schemeSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: scheme.title,
    description: scheme.summary,
    provider: {
      '@type': 'GovernmentOffice',
      name: business.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${business.address.line1}, ${business.address.line2}`,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.pincode,
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <SEO
        title={scheme.seo.title}
        description={scheme.seo.description}
        schema={schemeSchema}
      />

      <div className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <Container size="lg">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden>›</span>
              <Link to="/schemes">Schemes</Link>
              <span aria-hidden>›</span>
              <span>{scheme.title}</span>
            </nav>

            <div className={styles['hero-status-row']}>
              <StatusBadge status={scheme.status} />
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.65)' }}>
                Updated: {scheme.lastUpdated}
              </span>
            </div>

            <h1 className={styles['hero-title']}>{scheme.title}</h1>
            <p className={styles['hero-summary']}>{scheme.summary}</p>
          </Container>
        </section>

        {/* ── Body ── */}
        <Container size="lg">
          <div className={styles['body-grid']}>
            {/* ── Main Column ── */}
            <main>
              {/* Overview */}
              <section className={styles.section} aria-labelledby="overview-heading">
                <div className={styles['section-header']}>
                  <div className={styles['section-icon']} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h2 id="overview-heading" className={styles['section-title']}>About This Scheme</h2>
                </div>
                <div className={styles['section-body']}>
                  <p className={styles['overview-text']}>{scheme.overview}</p>
                </div>
              </section>

              {/* Benefits */}
              <section className={styles.section} aria-labelledby="benefits-heading">
                <div className={styles['section-header']}>
                  <div className={styles['section-icon']} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 id="benefits-heading" className={styles['section-title']}>Key Benefits</h2>
                </div>
                <div className={styles['section-body']}>
                  <ul className={styles['benefit-list']}>
                    {scheme.benefits.map((b, i) => (
                      <li key={i} className={styles['benefit-item']}>
                        <div className={styles['benefit-icon']} aria-hidden>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Eligibility */}
              <section className={styles.section} aria-labelledby="eligibility-heading">
                <div className={styles['section-header']}>
                  <div className={styles['section-icon']} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h2 id="eligibility-heading" className={styles['section-title']}>Eligibility Criteria</h2>
                </div>
                <div className={styles['section-body']}>
                  <ul className={styles['eligibility-list']}>
                    {scheme.eligibility.map((e, i) => (
                      <li key={i} className={styles['eligibility-item']}>
                        <span className={styles['eligibility-bullet']} aria-hidden />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Required Documents */}
              <section className={styles.section} aria-labelledby="docs-heading">
                <div className={styles['section-header']}>
                  <div className={styles['section-icon']} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h2 id="docs-heading" className={styles['section-title']}>
                    Required Documents ({scheme.documents.filter((d) => d.required).length} required,{' '}
                    {scheme.documents.filter((d) => !d.required).length} optional)
                  </h2>
                </div>
                <div className={styles['section-body']}>
                  <ul className={styles['doc-list']}>
                    {scheme.documents.map((doc, i) => (
                      <li key={i} className={styles['doc-item']}>
                        <div className={`${styles['doc-icon']} ${doc.required ? styles['doc-required'] : styles['doc-optional']}`} aria-hidden>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <div className={styles['doc-info']}>
                          <div className={styles['doc-name']}>{doc.name}</div>
                          {(doc.description || doc.note) && (
                            <div className={styles['doc-desc']}>{doc.description || doc.note}</div>
                          )}
                        </div>
                        <span className={doc.required ? styles['doc-badge-required'] : styles['doc-badge-optional']}>
                          {doc.required ? 'Required' : 'Optional'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Application Steps */}
              <section className={styles.section} aria-labelledby="steps-heading">
                <div className={styles['section-header']}>
                  <div className={styles['section-icon']} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <h2 id="steps-heading" className={styles['section-title']}>How to Apply</h2>
                </div>
                <div className={styles['section-body']}>
                  <ol className={styles['steps-list']} style={{ paddingLeft: 0 }}>
                    {scheme.applicationSteps.map((step) => (
                      <li key={step.step} className={styles['step-item']}>
                        <div className={styles['step-number']} aria-hidden>{step.step}</div>
                        <div className={styles['step-content']}>
                          <div className={styles['step-title']}>{step.title}</div>
                          <div className={styles['step-desc']}>{step.description}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* Important Dates */}
              {scheme.dates.importantDates && scheme.dates.importantDates.length > 0 && (
                <section className={styles.section} aria-labelledby="dates-heading">
                  <div className={styles['section-header']}>
                    <div className={styles['section-icon']} aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <h2 id="dates-heading" className={styles['section-title']}>Important Dates</h2>
                  </div>
                  <div className={styles['section-body']}>
                    <ul className={styles['dates-list']}>
                      {scheme.dates.importantDates.map((d, i) => (
                        <li key={i} className={styles['date-item']}>
                          <span className={styles['date-label']}>{d.label}</span>
                          <span className={styles['date-value']}>{d.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Official Source */}
              {scheme.officialSource && (
                <section className={styles.section} aria-labelledby="source-heading">
                  <div className={styles['section-header']}>
                    <div className={styles['section-icon']} aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <h2 id="source-heading" className={styles['section-title']}>Official Source</h2>
                  </div>
                  <div className={styles['section-body']}>
                    <a
                      href={scheme.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['official-link']}
                      id={`scheme-official-link-${scheme.slug}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {scheme.officialSource.label}
                    </a>
                  </div>
                </section>
              )}

              {/* Related Schemes */}
              {relatedSchemes.length > 0 && (
                <section className={styles.section} aria-labelledby="related-heading">
                  <div className={styles['section-header']}>
                    <div className={styles['section-icon']} aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M17 1l4 4-4 4" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <path d="M7 23l-4-4 4-4" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                    </div>
                    <h2 id="related-heading" className={styles['section-title']}>Other Schemes</h2>
                  </div>
                  <div className={styles['section-body']}>
                    <ul className={styles['related-list']}>
                      {relatedSchemes.map((s) => (
                        <li key={s.id} className={styles['related-item']}>
                          <Link to={`/schemes/${s.slug}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}
            </main>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar}>
              {/* CTA Card */}
              <div className={styles['cta-card']}>
                <h2 className={styles['cta-card-title']}>Need Help Applying?</h2>
                <p className={styles['cta-card-text']}>
                  Our staff at the Nerul East centre will guide you through eligibility
                  verification, document preparation, and submission.
                </p>
                <div className={styles['cta-card-actions']}>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['btn-wa']}
                    id={`scheme-wa-cta-${scheme.slug}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                    WhatsApp for Assistance
                  </a>
                  <a
                    href={`tel:${primaryPhone}`}
                    className={styles['btn-call']}
                    id={`scheme-call-cta-${scheme.slug}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {business.phoneNumbers[0]?.display || 'Call Us'}
                  </a>
                </div>
              </div>

              {/* Info Summary Card */}
              <div className={styles['info-card']}>
                <h3 className={styles['info-card-title']}>Scheme Info</h3>
                <div className={styles['info-row']}>
                  <span className={styles['info-key']}>Status</span>
                  <StatusBadge status={scheme.status} />
                </div>
                <div className={styles['info-row']}>
                  <span className={styles['info-key']}>Benefits</span>
                  <span className={styles['info-val']}>{scheme.benefits.length} listed</span>
                </div>
                <div className={styles['info-row']}>
                  <span className={styles['info-key']}>Docs needed</span>
                  <span className={styles['info-val']}>
                    {scheme.documents.filter((d) => d.required).length} required
                  </span>
                </div>
                <div className={styles['info-row']}>
                  <span className={styles['info-key']}>Last updated</span>
                  <span className={styles['info-val']}>{scheme.lastUpdated}</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className={styles.disclaimer} role="note">
                <strong>Note:</strong> Scheme eligibility, benefits, and deadlines are subject
                to change by the government. The information on this page is for guidance only.
                Always verify with the official portal before applying.
              </div>

              {/* Back to Schemes */}
              <Link
                to="/schemes"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  textDecoration: 'none',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                All Schemes
              </Link>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
