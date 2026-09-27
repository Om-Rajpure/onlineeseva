import { Link } from 'react-router-dom';
import { categories } from '../../../data/categories';
import { services } from '../../../data/services';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import styles from './CategoryGrid.module.css';

const categoryIcons: Record<string, string> = {
  'identity': '🪪',
  'certificates': '📜',
  'health-welfare': '🏥',
  'travel-transport': '✈️',
  'employment': '💼',
  'business-registration': '🏢',
  'banking': '🏦',
  'insurance': '🛡️',
  'photography-printing': '📸',
  'government-forms': '📋',
  'other': '⚙️',
};

export function CategoryGrid() {
  return (
    <section className={styles.section} id="categories">
      <Container size="lg">
        <SectionHeading
          badge="Browse By Department"
          title="All Service Categories"
          subtitle="Explore our comprehensive catalogue of government schemes, documents, and business registrations."
        />

        <div className={styles.grid}>
          {categories.map((cat) => {
            const count = services.filter((s) => s.category === cat.id).length;
            const icon = categoryIcons[cat.id] || '📄';

            return (
              <Link
                key={cat.id}
                to={`/services?category=${cat.id}`}
                className={styles.card}
              >
                <div className={styles['icon-wrap']}>{icon}</div>
                <div className={styles.info}>
                  <h3 className={styles['cat-name']}>{cat.label}</h3>
                  <p className={styles['cat-desc']}>{cat.description}</p>
                  <span className={styles['cat-count']}>
                    {count} {count === 1 ? 'Service' : 'Services'} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
