import { useState, useMemo } from 'react';
import { globalFAQs } from '../../data/faqs';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import styles from './FAQ.module.css';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const whatsappNumber = business.whatsappNumber || '919987772424';

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Kendra' },
    { id: 'identity', label: 'Aadhaar & PAN' },
    { id: 'certificates', label: 'Certificates & Forms' },
    { id: 'visiting', label: 'Visiting & Hours' },
    { id: 'pricing', label: 'Fees & Payment' },
  ];

  const filteredFAQs = useMemo(() => {
    return globalFAQs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const accordionItems = filteredFAQs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Frequently Asked Questions (FAQ) | Maha E-Seva Kendra Nerul"
        description="Find answers to common questions about Aadhaar, PAN card, Domicile, Income certificate requirements, business hours, and processing fees at Maha E-Seva Kendra."
        schema={faqSchema}
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Clear guidance on documents, application procedures, processing timelines, and visiting information for our Nerul Kendra.
          </p>

          {/* Quick Search */}
          <div className={styles['search-box']}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['search-icon']}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search question or topic (e.g. fees, phone update, address proof, hours)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles['search-input']}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles['clear-btn']}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </Container>
      </div>

      <Container size="md" className={styles['content-wrap']}>
        {/* Category Filters */}
        <div className={styles['filter-bar']}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={[
                styles['filter-chip'],
                selectedCategory === cat.id ? styles['filter-chip-active'] : '',
              ].join(' ')}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        {accordionItems.length > 0 ? (
          <div className={styles['accordion-wrap']}>
            <Accordion items={accordionItems} allowMultiple />
          </div>
        ) : (
          <div className={styles['no-results']}>
            <p>No questions matched your search query "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className={styles['btn-reset']}
            >
              View All Questions
            </button>
          </div>
        )}

        {/* Bottom Help Box */}
        <div className={styles['bottom-card']}>
          <div className={styles['bottom-text']}>
            <h3>Have a specific question not covered here?</h3>
            <p>Our operator is online 9:00 AM – 10:00 PM daily to assist you directly.</p>
          </div>
          <div className={styles['bottom-actions']}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I have a question.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['btn-wa']}
            >
              Ask on WhatsApp
            </a>
            <a href={`tel:${business.phoneNumbers[0]?.number}`} className={styles['btn-call']}>
              Call {business.phoneNumbers[0]?.display}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
