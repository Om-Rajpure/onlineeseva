import { Link } from 'react-router-dom';
import type { Service } from '../../types';
import styles from './FeaturedServiceCard.module.css';

interface FeaturedServiceCardProps {
  service: Service;
  variant?: 'pan' | 'passport';
}

export function FeaturedServiceCard({ service, variant = 'pan' }: FeaturedServiceCardProps) {
  const isPassport = variant === 'passport' || service.slug === 'passport-online-application';

  return (
    <Link
      to={`/services/${service.slug}`}
      className={styles.cardLink}
      aria-label={`View document checklist for ${service.name}`}
    >
      <article
        className={[
          styles.featuredCard,
          isPassport ? styles.passportVariant : styles.panVariant,
        ].join(' ')}
      >
        {/* Large Realistic Image */}
        <div className={styles.imageWrap}>
          <img
            src={service.image || `/images/services/${service.slug}.jpg`}
            alt={service.imageAlt || `${service.name} assistance at Maha E-Seva Kendra Nerul`}
            className={styles.image}
            loading="eager"
          />
          <span className={[styles.badgePopular, isPassport ? styles.passportBadge : ''].join(' ')}>
            ★ Most Requested
          </span>
          <span className={styles.priceTag}>{service.priceLabel}</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            {isPassport ? 'TRAVEL & GOVERNMENT ASSISTANCE' : 'OFFICIAL IDENTITY SERVICE'}
          </span>

          <h3 className={styles.title}>{service.name}</h3>

          <p className={styles.description}>{service.shortDescription}</p>

          <div className={styles.trustList}>
            <span className={styles.trustItem}>✓ Guided assistance</span>
            <span className={styles.trustItem}>✓ Error-free verification</span>
            <span className={styles.trustItem}>✓ Fast appointment slot</span>
          </div>

          <div className={styles.ctaButton}>
            <span>View Checklist</span>
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
