import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, getServiceBySlug } from '../../../data/services';
import { categories } from '../../../data/categories';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { ServiceCard, FeaturedServiceCard } from '../../../components/services';
import styles from './PopularServices.module.css';

export function PopularServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Featured Priority 1 & 2: PAN Card and Passport
  const panService = getServiceBySlug('pan-card');
  const passportService = getServiceBySlug('passport-online-application');

  // Normal popular grid (excluding the 2 featured ones from the general list or highlighting top ones)
  const popularServices = services.filter((s) => s.popular && s.slug !== 'pan-card' && s.slug !== 'passport-online-application');

  const filteredServices =
    selectedCategory === 'all'
      ? popularServices
      : services.filter((s) => s.category === selectedCategory);

  const displayedServices = filteredServices.slice(0, 6);

  return (
    <section className={styles.section} id="popular-services">
      <Container size="lg">
        {/* Section Heading with required approved copy */}
        <SectionHeading
          badge="Most Requested Services"
          title="Popular services, made simple"
          subtitle="Get guided assistance for important government and citizen services in Nerul East."
        />

        {/* ============================================================
            FEATURED SERVICES SPOTLIGHT (PAN Card & Passport)
            Prominently showcased with realistic commercial visuals
           ============================================================ */}
        <div className={styles['featured-spotlight-wrap']}>
          <div className={styles['featured-grid']}>
            {panService && (
              <FeaturedServiceCard service={panService} variant="pan" />
            )}
            {passportService && (
              <FeaturedServiceCard service={passportService} variant="passport" />
            )}
          </div>
        </div>

        {/* ============================================================
            POPULAR SERVICES GRID WITH CATEGORY FILTERS
           ============================================================ */}
        <div className={styles['grid-header']}>
          <h3 className={styles['grid-title']}>Frequently Used Citizen Services</h3>
          <p className={styles['grid-subtitle']}>
            Select a category to quickly check document requirements and centre fees.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className={styles['filter-bar']}>
          <button
            type="button"
            className={[
              styles['filter-chip'],
              selectedCategory === 'all' ? styles['filter-chip-active'] : '',
            ].join(' ')}
            onClick={() => setSelectedCategory('all')}
          >
            Top Popular
          </button>
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={[
                styles['filter-chip'],
                selectedCategory === cat.id ? styles['filter-chip-active'] : '',
              ].join(' ')}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          <Link to="/services" className={styles['filter-more-link']}>
            All 32 Services →
          </Link>
        </div>

        {/* Uniform Height Service Cards Grid */}
        <div className={styles.grid}>
          {displayedServices.map((service) => (
            <div key={service.id} className={styles['card-col']}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* View All Bottom Banner */}
        <div className={styles['bottom-cta']}>
          <div className={styles['bottom-cta-text']}>
            <h4>Need a specific government certificate or licence?</h4>
            <p>We provide full documentation assistance for 32+ official services at our Nerul Kendra.</p>
          </div>
          <Link to="/services" className={styles['btn-all-services']}>
            Explore All 32 Services with Checklists →
          </Link>
        </div>
      </Container>
    </section>
  );
}
