import { Link } from 'react-router-dom';
import type { Article } from '../../types';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={styles.cardLink}
      aria-label={`Read guide: ${article.title}`}
    >
      <article className={styles.card}>
        <div className={styles.metaTop}>
          <span className={styles.categoryBadge}>{article.category}</span>
          <span className={styles.readingTime}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readingTime} min read
          </span>
        </div>

        <h3 className={styles.title}>{article.title}</h3>

        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.authorDate}>
            {article.publishedAt}
          </span>
          <div className={styles.ctaWrap}>
            <span>Read Guide</span>
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
