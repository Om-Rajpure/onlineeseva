import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';
import { categories } from '../../../data/categories';
import { business } from '../../../data/business';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import styles from './PopularServices.module.css';

export function PopularServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const filteredServices = selectedCategory === 'all'
    ? services.filter(s => s.popular)
    : services.filter(s => s.category === selectedCategory);

  const displayedServices = filteredServices.slice(0, 8);

  return (
    <section className={styles.section} id="popular-services">
      <Container size="lg">
        <SectionHeading
          badge="Most Requested in Nerul"
          title="Popular Citizen & Government Services"
          subtitle="Clear centre charges, zero hidden fees, and full guidance on required documents."
        />

        {/* Category Filter Chips */}
        <div className={styles['filter-bar']}>
          <button
            type="button"
            className={[styles['filter-chip'], selectedCategory === 'all' ? styles['filter-chip-active'] : ''].join(' ')}
            onClick={() => setSelectedCategory('all')}
          >
            🔥 Top Popular
          </button>
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={[styles['filter-chip'], selectedCategory === cat.id ? styles['filter-chip-active'] : ''].join(' ')}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          <Link to="/services" className={styles['filter-more-link']}>
            View All Categories →
          </Link>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {displayedServices.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles['card-header']}>
                <span className={styles['category-tag']}>{service.category}</span>
                <span className={styles.price}>{service.priceLabel}</span>
              </div>

              <h3 className={styles['service-title']}>
                <Link to={`/services/${service.slug}`} className={styles['title-link']}>
                  {service.name}
                </Link>
              </h3>

              <p className={styles['service-desc']}>
                {service.shortDescription}
              </p>

              {/* Service Highlights */}
              <div className={styles.meta}>
                {service.governmentFee && (
                  <span className={styles['govt-fee-note']}>
                    Govt Fee: {service.governmentFee}
                  </span>
                )}
                <span className={styles['verified-tag']}>
                  ✓ Expert assisted
                </span>
              </div>

              {/* Card Footer Actions */}
              <div className={styles['card-footer']}>
                <Link to={`/services/${service.slug}`} className={styles['btn-details']}>
                  View Checklist
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I want to apply for ${service.name}. What documents are needed?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-whatsapp-sm']}
                  aria-label={`Inquire about ${service.name} on WhatsApp`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Apply on WA</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Bottom Banner */}
        <div className={styles['bottom-cta']}>
          <p>Looking for a specific service not listed above?</p>
          <Link to="/services" className={styles['btn-all-services']}>
            Explore All 32 Kendra Services with Pricing &amp; Checklists →
          </Link>
        </div>
      </Container>
    </section>
  );
}
