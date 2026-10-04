// ============================================================
// SchemesPreview — Phase 6: Homepage schemes preview section
// Shows featured/open schemes with a link to the full listing
// ============================================================

import { Link } from 'react-router-dom';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { getFeaturedSchemes } from '../../../data/schemes';
import type { SchemeStatus } from '../../../types';
import styles from './SchemesPreview.module.css';

const STATUS_LABELS: Record<SchemeStatus, string> = {
  open: 'Open Now',
  new: 'New',
  updated: 'Updated',
  'deadline-soon': 'Deadline Soon',
  upcoming: 'Upcoming',
  closed: 'Closed',
};

const STATUS_COLORS: Record<SchemeStatus, string> = {
  open: '#065F46',
  new: '#1E40AF',
  updated: '#92400E',
  'deadline-soon': '#991B1B',
  upcoming: '#374151',
  closed: '#6B7280',
};

const STATUS_BG: Record<SchemeStatus, string> = {
  open: '#D1FAE5',
  new: '#DBEAFE',
  updated: '#FEF3C7',
  'deadline-soon': '#FEE2E2',
  upcoming: '#F3F4F6',
  closed: '#F3F4F6',
};

export function SchemesPreview() {
  const featured = getFeaturedSchemes().slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className={styles.section} id="schemes-preview">
      <Container size="lg">
        <div className={styles.header}>
          <SectionHeading
            badge="Government Welfare"
            title="Current Schemes We Help You Apply For"
            subtitle="We guide eligible residents through application, document preparation, and submission for major Maharashtra and Central government schemes."
          />
          <Link to="/schemes" className={styles['view-all']}>
            All Schemes →
          </Link>
        </div>

        <ul className={styles.grid} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {featured.map((scheme) => (
            <li key={scheme.id}>
              <Link to={`/schemes/${scheme.slug}`} className={styles.card}>
                <div className={styles['card-top']}>
                  <span
                    className={styles['status-pill']}
                    style={{
                      background: STATUS_BG[scheme.status],
                      color: STATUS_COLORS[scheme.status],
                    }}
                  >
                    {STATUS_LABELS[scheme.status]}
                  </span>

                  <h3 className={styles['card-title']}>{scheme.title}</h3>
                  <p className={styles['card-summary']}>{scheme.summary}</p>
                </div>

                <div className={styles['card-footer']}>
                  <span className={styles['card-benefits']}>
                    {scheme.benefits.length} key benefits
                  </span>
                  <span className={styles['card-cta']}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles['bottom-cta']}>
          <Link to="/schemes" className={styles['bottom-cta-btn']}>
            View All Government Schemes
          </Link>
        </div>
      </Container>
    </section>
  );
}
