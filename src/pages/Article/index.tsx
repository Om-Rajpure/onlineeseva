// ============================================================
// Article Detail Page — Phase 7 Full Implementation
// ============================================================

import type { ReactNode } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { getArticleBySlug, getRelatedArticles, articles } from '../../data/articles';
import { getServiceBySlug } from '../../data/services';
import { business } from '../../data/business';
import styles from './Article.module.css';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className={styles.page}>
        <div style={{ maxWidth: '700px', margin: '4rem auto', textAlign: 'center', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Article Not Found</h1>
          <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
            The requested guide could not be found or may have moved.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary, #FF6F00)',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            ← Back to All Guides
          </Link>
        </div>
      </div>
    );
  }

  // Related articles
  const relatedArticles = getRelatedArticles(article).slice(0, 3);
  const fallbackRelated =
    relatedArticles.length === 0
      ? articles.filter((a) => a.id !== article.id).slice(0, 2)
      : relatedArticles;

  // Related services
  const relatedServicesList = article.relatedServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  // Article JSON-LD Schema
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage?.src
      ? `https://mahaesevanerul.in${article.featuredImage.src}`
      : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://mahaesevanerul.in',
    },
    publisher: {
      '@type': 'Organization',
      name: business.displayName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://mahaesevanerul.in/assets/storefront-Y3bWOUh5.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mahaesevanerul.in/blog/${article.slug}`,
    },
  };

  // Helper to parse markdown-like bold, links, lists into JSX
  const renderFormattedContent = (content: string): ReactNode[] => {
    const lines = content.trim().split('\n');
    const elements: ReactNode[] = [];
    let listBuffer: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let tableBuffer: string[] = [];
    let inTable = false;

    const flushList = () => {
      if (listBuffer.length > 0 && listType) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`list-${elements.length}`}>
              {listBuffer.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`list-${elements.length}`}>
              {listBuffer.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              ))}
            </ol>
          );
        }
        listBuffer = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableBuffer.length > 0) {
        const headerLine = tableBuffer[0];
        const dataLines = tableBuffer.slice(2); // skip separator line |---|
        const headers = headerLine
          .split('|')
          .map((s) => s.trim())
          .filter(Boolean);

        elements.push(
          <div style={{ overflowX: 'auto' }} key={`table-${elements.length}`}>
            <table>
              <thead>
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} dangerouslySetInnerHTML={{ __html: formatInline(h) }} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataLines.map((row, rIdx) => {
                  const cells = row
                    .split('|')
                    .map((s) => s.trim())
                    .filter(Boolean);
                  return (
                    <tr key={rIdx}>
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        tableBuffer = [];
        inTable = false;
      }
    };

    const formatInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        flushList();
        if (inTable) flushTable();
        continue;
      }

      // Check for table
      if (line.startsWith('|') && line.endsWith('|')) {
        flushList();
        inTable = true;
        tableBuffer.push(line);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headings
      if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={`h3-${i}`}>{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('---')) {
        flushList();
        elements.push(<hr key={`hr-${i}`} />);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        if (listType !== 'ul') flushList();
        listType = 'ul';
        listBuffer.push(line.replace(/^[-*]\s+/, ''));
      } else if (/^\d+\.\s+/.test(line)) {
        if (listType !== 'ol') flushList();
        listType = 'ol';
        listBuffer.push(line.replace(/^\d+\.\s+/, ''));
      } else {
        flushList();
        elements.push(
          <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        );
      }
    }

    flushList();
    if (inTable) flushTable();

    return elements;
  };

  return (
    <div className={styles.page}>
      <SEO
        title={article.seo.title || `${article.title} — Maha E-Seva Kendra`}
        description={article.seo.description || article.excerpt}
        canonical={`https://mahaesevanerul.in/blog/${article.slug}`}
        schema={articleSchema}
      />

      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog & Guides</Link>
            <span>/</span>
            <span>{article.title}</span>
          </nav>

          <div className={styles.metaBadgeRow}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <span className={styles.readTime}>⏱️ {article.readingTime} min read</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>

          <div className={styles.authorDateBar}>
            <span>✍️ {article.author}</span>
            <span>•</span>
            <span>
              📅 Published on{' '}
              {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            {article.updatedAt && (
              <>
                <span>•</span>
                <span>
                  🔄 Updated on{' '}
                  {new Date(article.updatedAt).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className={styles.container}>
        {/* Main Column */}
        <div className={styles.mainColumn}>
          {article.featuredImage && (
            <div className={styles.featuredImageCard}>
              <img
                src={article.featuredImage.src}
                alt={article.featuredImage.alt}
                className={styles.featuredImage}
              />
            </div>
          )}

          <article className={styles.articleBody}>
            {renderFormattedContent(article.content)}

            {/* Author Box */}
            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>🏢</div>
              <div>
                <div className={styles.authorName}>{article.author}</div>
                <div className={styles.authorBio}>
                  Verified government service facilitators at Maha E-Seva Kendra, Nerul East, Navi
                  Mumbai. Helping citizens with error-free application processing since 2018.
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Related Kendra Services */}
          {relatedServicesList.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>
                <span>📋</span> Related Kendra Services
              </h3>
              <div className={styles.serviceList}>
                {relatedServicesList.map((srv) => (
                  <Link
                    key={srv?.id}
                    to={`/services/${srv?.slug}`}
                    className={styles.servicePill}
                  >
                    <span>{srv?.name}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Visit / Contact CTA */}
          <div className={styles.kendraHelpCard}>
            <h3>Need Help With This?</h3>
            <p>
              Avoid portal rejections and long queues. Visit our certified Kendra in Nerul East or
              chat with our operators on WhatsApp.
            </p>
            <a
              href={`https://wa.me/91${business.whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I was reading your guide on "${article.title}" and need assistance.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sidebarCtaBtn}
            >
              💬 WhatsApp Assistance
            </a>
            <Link to="/contact" className={styles.sidebarSecBtn}>
              📍 Kendra Address & Hours
            </Link>
          </div>
        </aside>
      </main>

      {/* Related Guides Section */}
      {fallbackRelated.length > 0 && (
        <section className={styles.relatedArticlesSection} aria-label="Related Guides">
          <h2 className={styles.relatedTitle}>Explore Related Citizen Guides</h2>
          <div className={styles.relatedGrid}>
            {fallbackRelated.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-primary, #FF6F00)',
                    textTransform: 'uppercase',
                  }}
                >
                  {rel.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-ink, #1A202C)',
                    lineHeight: 1.35,
                  }}
                >
                  {rel.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#718096',
                    lineHeight: 1.5,
                  }}
                >
                  {rel.excerpt}
                </p>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-primary, #FF6F00)',
                    marginTop: 'auto',
                  }}
                >
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
