import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../../data/articles';
import { getRelatedServices } from '../../data/services';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import { ServiceCard } from '../../components/services';
import { BlogCard } from '../../components/blog';
import styles from './Article.module.css';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedServicesList = getRelatedServices(article.relatedServices || []);
  const relatedArticlesList = getRelatedArticles(article.relatedArticles || []);
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const whatsappMessage = `Hello Maha E-Seva Kendra, I read your guide "${article.title}" and need help with my document application.`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
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
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mahaesevakendra.in/blog/${article.slug}`,
    },
  };

  return (
    <div className={styles.page}>
      <SEO
        title={article.seo.title}
        description={article.seo.description}
        canonical={article.seo.canonical}
        ogType="article"
        schema={articleSchema}
      />

      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Guides & Knowledge Base', href: '/blog' },
              { label: article.category, href: `/blog?category=${encodeURIComponent(article.category)}` },
              { label: article.title },
            ]}
          />

          <div className={styles.headerContent}>
            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{article.category}</span>
              <span className={styles.metaItem}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {article.readingTime} min read
              </span>
              <span className={styles.metaItem}>• Published: {article.publishedAt}</span>
              {article.author && (
                <span className={styles.metaItem}>• By {article.author}</span>
              )}
            </div>

            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.excerpt}>{article.excerpt}</p>
          </div>
        </Container>
      </div>

      {/* Main Content Layout */}
      <Container size="lg" className={styles.mainContainer}>
        <div className={styles.contentLayout}>
          {/* Main Body */}
          <main className={styles.mainBody}>
            {/* 1. Key Takeaways Box */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className={styles.takeawaysBox}>
                <div className={styles.takeawaysHeader}>
                  <span className={styles.takeawaysIcon} aria-hidden="true">⚡</span>
                  <h2 className={styles.takeawaysTitle}>Key Takeaways &amp; Summary</h2>
                </div>
                <ul className={styles.takeawaysList}>
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className={styles.takeawayItem}>
                      <span className={styles.takeawayBullet} aria-hidden="true">✓</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 2. Structured Sections Content */}
            <article className={styles.articleBody}>
              {article.sections &&
                article.sections.map((sec, idx) => (
                  <section key={idx} className={styles.sectionBlock}>
                    <h2 className={styles.sectionHeading}>{sec.heading}</h2>
                    <p className={styles.sectionText}>{sec.body}</p>

                    {sec.points && (
                      <ul className={styles.pointsList}>
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} className={styles.pointItem}>
                            <span className={styles.pointBullet} aria-hidden="true">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.callout && (
                      <div className={styles.calloutBox}>
                        💡 {sec.callout}
                      </div>
                    )}
                  </section>
                ))}

              {/* Share & Copy Link Bar */}
              <div className={styles.shareBar}>
                <span className={styles.shareTitle}>Found this guide helpful? Share it:</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={styles.btnCopyLink}
                  aria-label="Copy article link to clipboard"
                >
                  {copiedLink ? '✓ Link Copied!' : '🔗 Copy Article Link'}
                </button>
              </div>

              {/* Important Editorial Notice */}
              <div className={styles.editorialNotice}>
                <strong>Editorial Disclaimer:</strong> This guide is compiled and published for citizen education by Maha E-Seva Kendra Nerul. We assist citizens with application preparation, document scanning, and online portal submissions. We are not a government department, and government certificate approvals are made solely by the competent revenue and administrative authorities.
              </div>
            </article>

            {/* 3. Frequently Asked Questions */}
            {article.faqs && article.faqs.length > 0 && (
              <section className={styles.subSection} aria-labelledby="guide-faqs">
                <span className={styles.subSectionEyebrow}>COMMON QUESTIONS</span>
                <h2 id="guide-faqs" className={styles.subSectionHeading}>
                  Frequently Asked Questions
                </h2>
                <Accordion
                  items={article.faqs.map((f, i) => ({
                    id: `guide-faq-${i}`,
                    title: f.question,
                    content: f.answer,
                  }))}
                />
              </section>
            )}

            {/* 4. Related Citizen Services */}
            {relatedServicesList.length > 0 && (
              <section className={styles.subSection} aria-labelledby="related-services-heading">
                <span className={styles.subSectionEyebrow}>RELATED SERVICES</span>
                <h2 id="related-services-heading" className={styles.subSectionHeading}>
                  Apply at Maha E-Seva Kendra Nerul
                </h2>
                <div className={styles.relatedGrid}>
                  {relatedServicesList.slice(0, 2).map((service) => (
                    <div key={service.id}>
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Related Guides */}
            {relatedArticlesList.length > 0 && (
              <section className={styles.subSection} aria-labelledby="related-articles-heading">
                <span className={styles.subSectionEyebrow}>MORE HELPFUL GUIDES</span>
                <h2 id="related-articles-heading" className={styles.subSectionHeading}>
                  Related Citizen Guides
                </h2>
                <div className={styles.relatedGrid}>
                  {relatedArticlesList.map((relArt) => (
                    <div key={relArt.id}>
                      <BlogCard article={relArt} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Right Sticky Sidebar / Conversion Box */}
          <aside className={styles.sidebarCol}>
            <div className={styles.stickyCard}>
              <h3 className={styles.sidebarTitle}>Need Help with Your Documents?</h3>
              <p className={styles.sidebarSubtitle}>
                Get accurate, in-person assistance for your certificate or scheme application from our certified operator in Nerul East.
              </p>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWhatsappPrimary}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Ask on WhatsApp</span>
                </a>

                <a href={`tel:${primaryPhone}`} className={styles.btnCallSecondary}>
                  📞 Call: {primaryPhone}
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnDirections}
                >
                  📍 Get Directions to Kendra
                </a>
              </div>

              {/* Kendra Location & Hours */}
              <div className={styles.kendraInfoBox}>
                <h4>Kendra Details</h4>
                <p>
                  <strong>Address:</strong>
                  <br />
                  {business.address.full}
                </p>
                <p>
                  <strong>Opening Hours:</strong>
                  <br />
                  Open Daily: 9:00 AM – 10:00 PM (Monday to Sunday)
                </p>
                <div className={styles.googleRatingNote}>
                  ★ <strong>4.9 / 5</strong> Google Rating (1,466+ reviews)
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
