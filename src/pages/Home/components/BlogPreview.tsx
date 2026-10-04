// ============================================================
// BlogPreview — Phase 7: Homepage citizen guides preview section
// ============================================================

import { Link } from 'react-router-dom';
import { articles } from '../../../data/articles';
import { Container } from '../../../components/ui/Container';
import styles from './BlogPreview.module.css';

export function BlogPreview() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="blog-preview-heading">
      <Container size="lg">
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.badge}>
              <span>📚</span> Knowledge Base & Updates
            </span>
            <h2 id="blog-preview-heading" className={styles.heading}>
              Latest Citizen Guides & Explanations
            </h2>
            <p className={styles.subtitle}>
              Clear walkthroughs, required document checklists, and eligibility guidelines to help you
              navigate government procedures smoothly.
            </p>
          </div>
          <Link to="/blog" className={styles.viewAllBtn}>
            View All Guides <span>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={article.featuredImage?.src || '/assets/documents-Ksnj-Xlp.jpg'}
                  alt={article.featuredImage?.alt || article.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryTag}>{article.category}</span>
                  <span>⏱️ {article.readingTime} min read</span>
                </div>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span>Read Step-by-Step Guide</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
