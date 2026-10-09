import { Link } from 'react-router-dom';
import type { Scheme } from '../../types';
import styles from './SchemeCard.module.css';

interface SchemeCardProps {
  scheme: Scheme;
}

export function SchemeCard({ scheme }: SchemeCardProps) {
  const getStatusLabel = (status: Scheme['status']) => {
    switch (status) {
      case 'open':
        return 'Applications Open';
      case 'new':
        return 'New Scheme';
      case 'updated':
        return 'Recently Updated';
      case 'deadline-soon':
        return 'Deadline Soon';
      case 'closed':
        return 'Applications Closed';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Active';
    }
  };

  const statusClass = styles[`status-${scheme.status}`] || styles['status-open'];

  return (
    <Link
      to={`/schemes/${scheme.slug}`}
      className={styles.cardLink}
      aria-label={`View details and required documents for ${scheme.title}`}
    >
      <article className={styles.card}>
        {/* Header Row: Status Badge & Verified Date */}
        <div className={styles.headerRow}>
          <span className={`${styles.statusBadge} ${statusClass}`}>
            <span className={styles.statusDot} aria-hidden="true" />
            {getStatusLabel(scheme.status)}
          </span>
          <span className={styles.verifiedDate}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Verified {scheme.lastUpdated}
          </span>
        </div>

        {/* Department Name */}
        {scheme.department && (
          <div className={styles.department}>{scheme.department}</div>
        )}

        {/* Title */}
        <h3 className={styles.title}>{scheme.title}</h3>

        {/* Financial / Primary Benefit Highlight */}
        {scheme.financialAssistance && (
          <div className={styles.financialHighlight}>
            <span aria-hidden="true">💰</span>
            <span>{scheme.financialAssistance}</span>
          </div>
        )}

        {/* Short Summary */}
        <p className={styles.summary}>{scheme.summary}</p>

        {/* Footer: Kendra Assistance Tag & CTA */}
        <div className={styles.footer}>
          <span className={styles.kendraAssistance}>
            ✓ Kendra Assisted
          </span>
          <div className={styles.ctaWrap}>
            <span>View Requirements</span>
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
