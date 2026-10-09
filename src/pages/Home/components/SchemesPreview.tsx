import { Link } from 'react-router-dom';
import { getFeaturedSchemes } from '../../../data/schemes';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { SchemeCard } from '../../../components/schemes';
import styles from './SchemesPreview.module.css';

export function SchemesPreview() {
  const featuredSchemes = getFeaturedSchemes().slice(0, 3);

  if (featuredSchemes.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="schemes-preview" aria-label="Government schemes preview">
      <Container size="lg">
        <SectionHeading
          badge="Government Welfare &amp; Subsidies"
          title="Current Government Schemes &amp; Updates"
          subtitle="Discover active Maharashtra State and Central Government schemes with verified eligibility criteria, required documents, and offline application assistance at our Nerul Kendra."
        />

        <div className={styles.grid}>
          {featuredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomCtaText}>
            <h4>Looking for other state or central welfare schemes?</h4>
            <p>
              We provide document verification and online form-filling support for Ladki Bahin, PM Kisan, Ayushman Bharat, PM Vishwakarma, and student scholarships.
            </p>
          </div>
          <Link to="/schemes" className={styles.btnAllSchemes}>
            <span>View All Government Schemes</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
