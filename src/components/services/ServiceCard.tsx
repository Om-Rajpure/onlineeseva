import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../../types';
import { categories } from '../../data/categories';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  const categoryLabel =
    categories.find((c) => c.id === service.category)?.label || service.category;

  const imageSrc = service.image || `/images/services/${service.slug}.jpg`;
  const imageAlt = service.imageAlt || `${service.name} assistance at Maha E-Seva Kendra Nerul`;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={styles.cardLink}
      aria-label={`View document checklist for ${service.name}`}
    >
      <article className={[styles.card, featured ? styles.cardFeatured : ''].join(' ')}>
        {/* 1. Realistic Service Image Container (16:10 ratio) */}
        <div className={styles.imageContainer}>
          {!imgError ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.serviceImage}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.imageFallback}>
              <span>{categoryLabel}</span>
              <strong>{service.name}</strong>
            </div>
          )}

          {/* Price Badge Overlay */}
          <span className={styles.priceOverlay}>{service.priceLabel}</span>

          {/* Popular Tag */}
          {service.popular && !featured && (
            <span className={styles.popularBadge}>Popular</span>
          )}
        </div>

        {/* 2. Card Content Area (Equal height flex container) */}
        <div className={styles.content}>
          <span className={styles.categoryBadge}>{categoryLabel}</span>

          <h3 className={styles.title}>{service.name}</h3>

          <p className={styles.description}>{service.shortDescription}</p>

          {/* Supporting Trust & Fee info */}
          <div className={styles.supportingInfo}>
            <span className={styles.trustTag}>✓ Expert assisted</span>
            {service.governmentFee && (
              <span className={styles.govtFeeTag}>+ Govt Fee</span>
            )}
          </div>

          {/* 3. CTA — Pushed to Bottom */}
          <div className={styles.ctaWrap}>
            <div className={styles.ctaButton}>
              <span>View Checklist</span>
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
