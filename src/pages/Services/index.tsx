import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { services } from '../../data/services';
import { categories } from '../../data/categories';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import styles from './Services.module.css';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<'popular' | 'name' | 'price-asc' | 'price-desc'>('popular');

  const whatsappNumber = business.whatsappNumber || '919987772424';

  useEffect(() => {
    const cat = searchParams.get('category');
    const q = searchParams.get('search');
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      searchParams.delete('search');
    } else {
      searchParams.set('search', query);
    }
    setSearchParams(searchParams);
  };

  const filteredServices = useMemo(() => {
    return services
      .filter((s) => {
        const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
        const matchesQuery =
          searchQuery.trim() === '' ||
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          if (a.popular === b.popular) return 0;
          return a.popular ? -1 : 1;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'price-asc') {
          const priceA = a.price ?? 99999;
          const priceB = b.price ?? 99999;
          return priceA - priceB;
        }
        if (sortBy === 'price-desc') {
          const priceA = a.price ?? -1;
          const priceB = b.price ?? -1;
          return priceB - priceA;
        }
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className={styles.page}>
      <SEO
        title="All 32 Government & Citizen Online Services in Nerul"
        description="Browse all 32 government online services provided at Maha E-Seva Kendra Nerul: Aadhaar card, PAN card, Domicile, Income certificates, Passport, Licences, MSME Udyam."
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'All Services' }]} />
          <h1 className={styles.title}>All Government &amp; Online Services</h1>
          <p className={styles.subtitle}>
            Official assistance with 32+ citizen documents, government certificates, welfare schemes, and license applications in Nerul East, Navi Mumbai.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles['content-wrap']}>
        <div className={styles['layout-grid']}>
          {/* Sidebar / Filters */}
          <aside className={styles.sidebar}>
            <div className={styles['filter-box']}>
              <h2 className={styles['filter-heading']}>Service Categories</h2>
              <ul className={styles['category-list']}>
                <li>
                  <button
                    type="button"
                    className={[
                      styles['category-btn'],
                      selectedCategory === 'all' ? styles['category-btn-active'] : '',
                    ].join(' ')}
                    onClick={() => handleCategoryChange('all')}
                  >
                    <span>All Services</span>
                    <span className={styles['count-badge']}>{services.length}</span>
                  </button>
                </li>
                {categories.map((cat) => {
                  const count = services.filter((s) => s.category === cat.id).length;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        className={[
                          styles['category-btn'],
                          selectedCategory === cat.id ? styles['category-btn-active'] : '',
                        ].join(' ')}
                        onClick={() => handleCategoryChange(cat.id)}
                      >
                        <span>{cat.label}</span>
                        <span className={styles['count-badge']}>{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Kendra Help Card */}
            <div className={styles['help-card']}>
              <h3 className={styles['help-title']}>Need Custom Assistance?</h3>
              <p className={styles['help-desc']}>
                Can't find your specific form or scheme? Message our Kendra operator directly.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need help finding a service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['btn-wa-help']}
              >
                Chat with Operator
              </a>
            </div>
          </aside>

          {/* Main Results Column */}
          <main className={styles['main-results']}>
            {/* Search & Sort Controls Bar */}
            <div className={styles['controls-bar']}>
              <div className={styles['search-box']}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['search-icon']}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by service name, keyword, or document..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={styles['search-input']}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange('')}
                    className={styles['clear-btn']}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className={styles['sort-wrap']}>
                <label htmlFor="sort-select" className={styles['sort-label']}>
                  Sort:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className={styles['sort-select']}
                >
                  <option value="popular">Most Popular</option>
                  <option value="name">Alphabetical (A–Z)</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Service Count Bar */}
            <div className={styles['status-bar']}>
              <span>
                Showing <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? 'service' : 'services'}
                {selectedCategory !== 'all' && ` in "${categories.find(c => c.id === selectedCategory)?.label}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    handleCategoryChange('all');
                    handleSearchChange('');
                  }}
                  className={styles['reset-btn']}
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Results Grid */}
            {filteredServices.length > 0 ? (
              <div className={styles['services-grid']}>
                {filteredServices.map((service) => (
                  <article key={service.id} className={styles.card}>
                    <div className={styles['card-top']}>
                      <span className={styles['category-chip']}>{service.category}</span>
                      <span className={styles['price-tag']}>{service.priceLabel}</span>
                    </div>

                    <h2 className={styles['service-name']}>
                      <Link to={`/services/${service.slug}`} className={styles['service-link']}>
                        {service.name}
                      </Link>
                    </h2>

                    <p className={styles['service-desc']}>{service.shortDescription}</p>

                    <div className={styles['card-middle']}>
                      {service.governmentFee && (
                        <div className={styles['govt-fee']}>
                          Govt Fee: {service.governmentFee}
                        </div>
                      )}
                      {service.documents && service.documents.length > 0 && (
                        <div className={styles['docs-count']}>
                          📋 {service.documents.length} required {service.documents.length === 1 ? 'document' : 'documents'}
                        </div>
                      )}
                    </div>

                    <div className={styles['card-actions']}>
                      <Link to={`/services/${service.slug}`} className={styles['btn-view']}>
                        View Checklist &amp; Process
                      </Link>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I want to apply for ${service.name}. Please guide me.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['btn-wa']}
                        aria-label={`Apply for ${service.name} via WhatsApp`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                        </svg>
                        <span>Apply</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles['no-results']}>
                <div className={styles['no-results-icon']}>🔍</div>
                <h3>No services found</h3>
                <p>
                  We couldn't find any services matching "{searchQuery}". Try searching for terms like "Aadhaar", "PAN", "Income", "Passport", or browse by category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    handleCategoryChange('all');
                    handleSearchChange('');
                  }}
                  className={styles['btn-clear-all']}
                >
                  View All 32 Services
                </button>
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
}
