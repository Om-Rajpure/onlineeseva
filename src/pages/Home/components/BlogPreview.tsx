import { Link } from 'react-router-dom';
import { articles } from '../../../data/articles';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { BlogCard } from '../../../components/blog';
import styles from './BlogPreview.module.css';

export function BlogPreview() {
  const featuredArticles = articles.slice(0, 3);

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="blog-preview" aria-label="Citizen guides preview">
      <Container size="lg">
        <SectionHeading
          badge="Citizen Guides &amp; Knowledge"
          title="Helpful Guides for Government Services"
          subtitle="Read verified step-by-step guides on required documents, application procedures, and common issues for Maharashtra certificates, passport, PAN, and welfare schemes."
        />

        <div className={styles.grid}>
          {featuredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomCtaText}>
            <h4>Need answers on document requirements or fees?</h4>
            <p>
              Explore our full collection of verified Maharashtra citizen guides and FAQs.
            </p>
          </div>
          <Link to="/blog" className={styles.btnAllGuides}>
            <span>Explore All Guides &amp; Articles</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
