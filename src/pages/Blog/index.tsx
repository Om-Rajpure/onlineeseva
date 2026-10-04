// ============================================================
// Blog Listing Page — Phase 7 Full Implementation
// ============================================================

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { articles, getBlogCategories } from '../../data/articles';
import { business } from '../../data/business';
import styles from './Blog.module.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => ['all', ...getBlogCategories()], []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first one or matches category
  const featuredArticle = useMemo(() => {
    if (selectedCategory === 'all' && searchQuery.trim() === '') {
      return articles[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredArticles.filter((a) => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle]);

  return (
    <div className={styles.page}>
      <SEO
        title="Guides & Articles — Maha E-Seva Kendra Nerul"
        description="Comprehensive citizen guides for government certificates, PAN card, Aadhaar linking, FSSAI, and welfare schemes in Maharashtra and Navi Mumbai."
        canonical="https://mahaesevanerul.in/blog"
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog & Guides</span>
          </nav>

          <span className={styles.badge}>
            <span>📚</span> Citizen Guidance & Explanations
          </span>

          <h1 className={styles.title}>Government Services & Citizen Guides</h1>
          <p className={styles.subtitle}>
            Step-by-step instructions, essential document checklists, eligibility criteria, and local
            guidance for Maharashtra government schemes and administrative certificates.
          </p>

          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search guides (e.g. Income Certificate, PAN, Domicile, FSSAI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles and guides"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className={styles.container}>
        {/* Category Filter Chips */}
        <div className={styles.filterBar} role="tablist" aria-label="Article categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category}
              className={`${styles.filterChip} ${
                selectedCategory === category ? styles.filterChipActive : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Guides' : category}
            </button>
          ))}
        </div>

        {/* Featured Article (when on 'all' and no active query) */}
        {featuredArticle && (
          <section className={styles.featuredSection} aria-label="Featured Guide">
            <Link to={`/blog/${featuredArticle.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img
                  src={featuredArticle.featuredImage?.src || '/assets/documents-Ksnj-Xlp.jpg'}
                  alt={featuredArticle.featuredImage?.alt || featuredArticle.title}
                  className={styles.featuredImage}
                  loading="eager"
                />
                <span className={styles.featuredBadge}>Featured Guide</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryTag}>{featuredArticle.category}</span>
                  <span>•</span>
                  <span>⏱️ {featuredArticle.readingTime} min read</span>
                  <span>•</span>
                  <span>📅 {new Date(featuredArticle.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
                <span className={styles.readMoreBtn}>
                  Read Full Guide <span>→</span>
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Grid Title */}
        <h2 className={styles.gridTitle}>
          {selectedCategory === 'all'
            ? searchQuery
              ? `Search Results (${filteredArticles.length})`
              : 'All Citizen Articles & Guides'
            : `${selectedCategory} (${filteredArticles.length})`}
        </h2>

        {/* Articles Grid */}
        {gridArticles.length > 0 ? (
          <div className={styles.articlesGrid}>
            {gridArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className={styles.articleCard}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={article.featuredImage?.src || '/assets/documents-Ksnj-Xlp.jpg'}
                    alt={article.featuredImage?.alt || article.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryTag}>{article.category}</span>
                    <span>⏱️ {article.readingTime} min</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span>By {article.author}</span>
                    <span className={styles.readMoreBtn}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>No matching guides found</p>
            <p className={styles.emptyDesc}>
              Try adjusting your search terms or filter selection to find relevant guides.
            </p>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Help & Centre CTA */}
        <section className={styles.helpCard}>
          <h2 className={styles.helpTitle}>Need Personal Assistance with an Application?</h2>
          <p className={styles.helpSubtitle}>
            Our experienced staff at Maha E-Seva Kendra Nerul East helps with document scrutiny,
            portal submissions, and error-free processing for all Maharashtra state services.
          </p>
          <div className={styles.helpButtons}>
            <a
              href={`https://wa.me/91${business.whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I need guidance regarding a government document/service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              💬 WhatsApp Assistance
            </a>
            <Link to="/contact" className={styles.secondaryBtn}>
              📍 Visit Nerul Kendra
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
