import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { schemes } from '../../data/schemes';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import { SchemeCard } from '../../components/schemes';
import styles from './Schemes.module.css';

const CATEGORIES = [
  { id: 'all', label: 'All Schemes' },
  { id: 'women-child', label: 'Women & Family' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'agriculture', label: 'Agriculture & Farmers' },
  { id: 'skill-business', label: 'Skills & Enterprise' },
  { id: 'pension-insurance', label: 'Pension & Insurance' },
  { id: 'education', label: 'Scholarships' },
  { id: 'housing', label: 'Housing' },
  { id: 'social-welfare', label: 'Social Welfare' },
];

export default function SchemesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  const whatsappNumber = business.whatsappNumber || '919987772424';
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';

  const [prevParams, setPrevParams] = useState({ cat: initialCategory, q: initialSearch });
  const paramCategory = searchParams.get('category') || 'all';
  const paramSearch = searchParams.get('search') || '';
  if (prevParams.cat !== paramCategory || prevParams.q !== paramSearch) {
    setPrevParams({ cat: paramCategory, q: paramSearch });
    if (paramCategory !== selectedCategory) setSelectedCategory(paramCategory);
    if (paramSearch !== searchQuery) setSearchQuery(paramSearch);
  }

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

  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      const matchesCategory =
        selectedCategory === 'all' || scheme.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        q === '' ||
        scheme.title.toLowerCase().includes(q) ||
        scheme.summary.toLowerCase().includes(q) ||
        scheme.overview.toLowerCase().includes(q) ||
        (scheme.department && scheme.department.toLowerCase().includes(q)) ||
        (scheme.financialAssistance && scheme.financialAssistance.toLowerCase().includes(q)) ||
        scheme.benefits.some((b) => b.toLowerCase().includes(q)) ||
        scheme.documents.some((d) => d.name.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const schemesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Current Government Schemes & Welfare Updates in Maharashtra',
    description:
      'Verified government welfare schemes, eligibility guidelines, required certificates checklist, and application support at Maha E-Seva Kendra Nerul.',
    url: 'https://mahaesevakendra.in/schemes',
    provider: {
      '@type': 'GovernmentOffice',
      name: business.name,
      telephone: business.phoneNumbers[0]?.number,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.full,
        addressLocality: 'Nerul, Navi Mumbai',
        postalCode: '400706',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Current Government Schemes & Subsidies in Maharashtra | Maha E-Seva Kendra"
        description="Explore verified Maharashtra & Central Government schemes at Maha E-Seva Kendra Nerul: Majhi Ladki Bahin Yojana, PM Kisan, Ayushman Bharat, PM Vishwakarma, PMAY, APY, MahaDBT scholarships."
        schema={schemesSchema}
      />

      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'Government Schemes' }]} />
          <h1 className={styles.title}>Government Schemes &amp; Welfare Updates</h1>
          <p className={styles.subtitle}>
            Explore verified Maharashtra State &amp; Central Government welfare schemes. Get in-person assistance for eligibility verification, document compilation, and online portal submissions at our Kendra in Nerul East.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles.contentWrap}>
        {/* Controls Section: Search & Category Filter */}
        <section className={styles.controlsSection} aria-label="Scheme filters">
          {/* Search Bar */}
          <div className={styles.searchBox}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.searchIcon}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search schemes by name, keyword, or benefit (e.g. Ladki Bahin, PM Kisan, Vishwakarma, Ayushman)..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
              aria-label="Search government schemes"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className={styles.clearBtn}
                aria-label="Clear scheme search query"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className={styles.filterTabs} role="tablist" aria-label="Scheme categories">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? schemes.length
                  : schemes.filter((s) => s.category === cat.id).length;

              if (count === 0 && cat.id !== 'all') return null;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  className={`${styles.tabBtn} ${
                    selectedCategory === cat.id ? styles.tabBtnActive : ''
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className={styles.tabCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results Status Bar */}
        <div className={styles.statusBar}>
          <span>
            Showing <strong>{filteredSchemes.length}</strong> {filteredSchemes.length === 1 ? 'government scheme' : 'government schemes'}
            {selectedCategory !== 'all' && ` in "${CATEGORIES.find((c) => c.id === selectedCategory)?.label}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('all');
                handleSearchChange('');
              }}
              className={styles.resetBtn}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Schemes Grid */}
        {filteredSchemes.length > 0 ? (
          <div className={styles.schemesGrid}>
            {filteredSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon} aria-hidden="true">🏛️</div>
            <h3 className={styles.emptyTitle}>No matching schemes found</h3>
            <p className={styles.emptyDesc}>
              We couldn't find any government schemes matching "{searchQuery}". Try searching for popular schemes such as "Ladki Bahin", "PM Kisan", "Ayushman Bharat", or reset filters to browse all verified schemes.
            </p>
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('all');
                handleSearchChange('');
              }}
              className={styles.resetBigBtn}
            >
              View All Schemes
            </button>
          </div>
        )}

        {/* Kendra In-Person Assistance Banner */}
        <section className={styles.assistanceBanner} aria-label="Kendra scheme assistance">
          <div className={styles.bannerText}>
            <span className={styles.bannerTag}>In-Person Offline Assistance</span>
            <h2 className={styles.bannerTitle}>Need Help Applying for a Government Scheme?</h2>
            <p className={styles.bannerDesc}>
              Avoid application rejection due to incorrect documents or portal errors. Visit our Kendra in Nerul East for document checklist verification, Aadhaar e-KYC, and certified online form submissions.
            </p>
          </div>
          <div className={styles.bannerActions}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hello Maha E-Seva Kendra, I need guidance applying for a government scheme. Please assist me with the required documents and eligibility.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWaBanner}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>Ask on WhatsApp</span>
            </a>
            <a href={`tel:${primaryPhone}`} className={styles.btnCallBanner}>
              📞 Call: {primaryPhone}
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
