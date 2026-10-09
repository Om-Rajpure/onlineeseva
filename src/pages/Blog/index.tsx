import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { articles, blogCategories } from '../../data/articles';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import { BlogCard } from '../../components/blog';
import styles from './Blog.module.css';

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Guides';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  const whatsappNumber = business.whatsappNumber || '919987772424';
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';

  const [prevParams, setPrevParams] = useState({ cat: initialCategory, q: initialSearch });
  const paramCategory = searchParams.get('category') || 'All Guides';
  const paramSearch = searchParams.get('search') || '';
  if (prevParams.cat !== paramCategory || prevParams.q !== paramSearch) {
    setPrevParams({ cat: paramCategory, q: paramSearch });
    if (paramCategory !== selectedCategory) setSelectedCategory(paramCategory);
    if (paramSearch !== searchQuery) setSearchQuery(paramSearch);
  }

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All Guides') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
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

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Guides' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        q === '' ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        (article.keyTakeaways &&
          article.keyTakeaways.some((t) => t.toLowerCase().includes(q))) ||
        (article.sections &&
          article.sections.some(
            (s) =>
              s.heading.toLowerCase().includes(q) || s.body.toLowerCase().includes(q)
          ));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Maharashtra Citizen Services & Government Document Guides',
    description:
      'Helpful educational articles, document checklists, and application guides for Domicile, Income, Caste certificates, Aadhaar-PAN linking, Passport, and Schemes in Nerul Navi Mumbai.',
    url: 'https://mahaesevakendra.in/blog',
    publisher: {
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
        title="Guides & Knowledge Base | Government Certificates & Online Services Nerul"
        description="Comprehensive citizen guides on applying for Domicile, Income, Caste certificates, PAN-Aadhaar correction, Passport slot booking, and Maharashtra government schemes."
        schema={blogSchema}
      />

      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'Guides & Knowledge Base' }]} />
          <h1 className={styles.title}>Citizen Services Guides &amp; Knowledge Base</h1>
          <p className={styles.subtitle}>
            Clear, step-by-step guides and verified document checklists for government certificates, identity updates, passport applications, and Maharashtra welfare schemes in Nerul &amp; Navi Mumbai.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles.contentWrap}>
        {/* Controls Section: Search & Category Filter */}
        <section className={styles.controlsSection} aria-label="Blog filters">
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
              placeholder="Search guides (e.g. Domicile, PAN link, Passport, Ladki Bahin, Income Certificate)..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
              aria-label="Search articles and guides"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className={styles.clearBtn}
                aria-label="Clear article search query"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className={styles.filterTabs} role="tablist" aria-label="Article categories">
            {blogCategories.map((cat) => {
              const count =
                cat === 'All Guides'
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length;

              if (count === 0 && cat !== 'All Guides') return null;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`${styles.tabBtn} ${
                    selectedCategory === cat ? styles.tabBtnActive : ''
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span>{cat}</span>
                  <span className={styles.tabCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results Status Bar */}
        <div className={styles.statusBar}>
          <span>
            Showing <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'guide' : 'guides'}
            {selectedCategory !== 'All Guides' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== 'All Guides' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('All Guides');
                handleSearchChange('');
              }}
              className={styles.resetBtn}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon} aria-hidden="true">📖</div>
            <h3 className={styles.emptyTitle}>No matching guides found</h3>
            <p className={styles.emptyDesc}>
              We couldn't find any articles matching "{searchQuery}". Try searching for popular topics like "Domicile", "PAN Card", "Passport", or "Ladki Bahin", or browse all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('All Guides');
                handleSearchChange('');
              }}
              className={styles.resetBigBtn}
            >
              View All Guides
            </button>
          </div>
        )}

        {/* Kendra Assistance Banner */}
        <section className={styles.assistanceBanner} aria-label="Need personalized assistance">
          <div className={styles.bannerText}>
            <span className={styles.bannerTag}>In-Person Service Desk</span>
            <h2 className={styles.bannerTitle}>Have Questions About Your Document Application?</h2>
            <p className={styles.bannerDesc}>
              Avoid documentation errors and portal rejections. Visit Maha E-Seva Kendra in Nerul East (near Janta Market Bridge) for fast, expert guidance on all Maharashtra and Central citizen services.
            </p>
          </div>
          <div className={styles.bannerActions}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hello Maha E-Seva Kendra, I read your online guide and need assistance with my document application.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWaBanner}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>Chat on WhatsApp</span>
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
