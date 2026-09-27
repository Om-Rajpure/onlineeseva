import { Link } from 'react-router-dom';
import { globalFAQs } from '../../../data/faqs';
import { business } from '../../../data/business';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { Accordion } from '../../../components/ui/Accordion';
import styles from './HomeFAQ.module.css';

export function HomeFAQ() {
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const homeFaqItems = globalFAQs.slice(0, 6).map((faq, idx) => ({
    id: `faq-${idx}`,
    title: faq.question,
    content: faq.answer,
    defaultOpen: idx === 0,
  }));

  return (
    <section className={styles.section} id="faq">
      <Container size="md">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers about document processing, government fees, and Kendra visiting procedures."
        />

        <div className={styles['accordion-wrap']}>
          <Accordion items={homeFaqItems} />
        </div>

        {/* Still Have Questions CTA */}
        <div className={styles['more-help-card']}>
          <div className={styles['more-help-text']}>
            <h3 className={styles['more-help-title']}>Have a specific query not answered above?</h3>
            <p className={styles['more-help-desc']}>
              Our team is ready to answer your questions on WhatsApp or over phone call.
            </p>
          </div>
          <div className={styles['more-help-actions']}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I have a question about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['btn-wa-ask']}
            >
              Ask on WhatsApp
            </a>
            <Link to="/faq" className={styles['btn-view-all-faq']}>
              Read All FAQs →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
