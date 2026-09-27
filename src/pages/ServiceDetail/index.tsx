import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../../data/services';
import { getCategoryById } from '../../data/categories';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import styles from './ServiceDetail.module.css';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;
  const [copied, setCopied] = useState(false);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const categoryConfig = getCategoryById(service.category);
  const relatedList = getRelatedServices(service.relatedServices || []);
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const defaultProcessSteps = [
    {
      step: 1,
      title: 'Document Verification',
      description: 'Visit our Kendra with your documents or send clear photos on WhatsApp for pre-verification.',
    },
    {
      step: 2,
      title: 'Online Application Submission',
      description: 'Our certified operator accurately fills out the official government portal form and uploads necessary proofs.',
    },
    {
      step: 3,
      title: 'Fee Payment & Receipt',
      description: 'Transparent payment is made and you receive an official acknowledgment slip with tracking application ID.',
    },
    {
      step: 4,
      title: 'Status Tracking & Delivery',
      description: 'We track your application progress until official issuance and deliver the printed/digital certificate.',
    },
  ];

  const stepsToDisplay = service.processSteps && service.processSteps.length > 0
    ? service.processSteps
    : defaultProcessSteps;

  const defaultEligibility = [
    'Applicant must be an Indian citizen / Maharashtra resident where applicable.',
    'Must have a valid primary photo identity proof (such as Aadhaar card).',
    'Mobile number should be available to receive government OTP verifications.',
  ];

  const eligibilityToDisplay = service.eligibility && service.eligibility.length > 0
    ? service.eligibility
    : defaultEligibility;

  const defaultServiceFAQs = [
    {
      id: 'faq-time',
      title: `How much time does it take for ${service.name}?`,
      content: service.processingInfo || 'Processing times depend on the respective government department verification (typically 3 to 15 working days). We provide an official tracking receipt immediately upon form submission.',
    },
    {
      id: 'faq-xerox',
      title: 'Do I need to bring Xerox copies and passport photos?',
      content: 'You can bring original documents directly. We have in-house high-speed scanning, Xerox copying, and instant passport size photo printing facilities at our Kendra.',
    },
    {
      id: 'faq-tracking',
      title: 'How can I check the status of my application?',
      content: 'You will receive an official acknowledgment receipt with your Application Reference Number. You can also message us on WhatsApp with your receipt number for instant status updates.',
    },
  ];

  const faqItems = service.faqs && service.faqs.length > 0
    ? service.faqs.map((f, i) => ({ id: `s-faq-${i}`, title: f.question, content: f.answer }))
    : defaultServiceFAQs;

  const handleCopyChecklist = () => {
    const text = `📋 Document Checklist for ${service.name} at Maha E-Seva Kendra:\n` +
      `Centre Fee: ${service.priceLabel}\n` +
      (service.governmentFee ? `Government Fee: ${service.governmentFee}\n` : '') +
      `Required Documents:\n` +
      (service.documents.length > 0
        ? service.documents.map((d, i) => `${i + 1}. ${d.name} (${d.required ? 'Required' : 'Optional'})`).join('\n')
        : '1. Original Aadhaar Card\n2. Address Proof\n3. Passport Photos') +
      `\n\nKendra Location: ${business.address.full}\nOpen: 9:00 AM – 10:00 PM Daily\nPhone: 099877 72424`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
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
    offers: {
      '@type': 'Offer',
      price: service.price ? String(service.price) : 'Contact for pricing',
      priceCurrency: 'INR',
    },
  };

  return (
    <div className={styles.page}>
      <SEO
        title={`${service.name} in Nerul Navi Mumbai | Fees, Documents & Process`}
        description={`Get fast, expert assistance for ${service.name} at Maha E-Seva Kendra Nerul. Centre fee: ${service.priceLabel}. Check required documents, eligibility, and steps.`}
        schema={serviceSchema}
      />

      {/* Header Breadcrumbs & Overview */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              ...(categoryConfig ? [{ label: categoryConfig.label, href: `/services?category=${categoryConfig.id}` }] : []),
              { label: service.name },
            ]}
          />

          <div className={styles['header-content']}>
            <div className={styles['header-left']}>
              <span className={styles['category-badge']}>{categoryConfig?.label || service.category}</span>
              <h1 className={styles.title}>{service.name}</h1>
              <p className={styles.description}>{service.shortDescription}</p>
            </div>

            <div className={styles['price-card']}>
              <span className={styles['price-title']}>Centre Service Charge</span>
              <div className={styles['price-value']}>{service.priceLabel}</div>
              {service.governmentFee && (
                <div className={styles['govt-fee-badge']}>
                  + {service.governmentFee} (Official Govt Fee)
                </div>
              )}
              <span className={styles['pricing-guarantee']}>✓ Transparent fixed fee • No hidden costs</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content Layout */}
      <Container size="lg" className={styles['content-container']}>
        <div className={styles['layout-grid']}>
          {/* Main Info Column */}
          <main className={styles['main-column']}>
            {/* Required Documents Section */}
            <section className={styles.section} id="documents">
              <div className={styles['section-header']}>
                <h2 className={styles['section-title']}>Required Documents &amp; Proofs</h2>
                <button
                  type="button"
                  onClick={handleCopyChecklist}
                  className={styles['btn-copy-sm']}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copied ? '✓ Copied!' : 'Copy Document List'}</span>
                </button>
              </div>

              {service.documents && service.documents.length > 0 ? (
                <div className={styles['docs-grid']}>
                  {service.documents.map((doc, idx) => (
                    <div key={idx} className={styles['doc-card']}>
                      <div className={styles['doc-card-top']}>
                        <span className={styles['doc-check']}>✓</span>
                        <strong className={styles['doc-card-title']}>{doc.name}</strong>
                        {doc.required ? (
                          <span className={styles['badge-req']}>Mandatory</span>
                        ) : (
                          <span className={styles['badge-opt']}>Optional</span>
                        )}
                      </div>
                      {doc.description && (
                        <p className={styles['doc-card-desc']}>{doc.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles['default-docs-box']}>
                  <p>Standard documents required for this service:</p>
                  <ul className={styles['bullet-list']}>
                    <li>Original Aadhaar Card with linked active mobile number</li>
                    <li>Current Address Proof (Electricity bill, Ration card, or Rent agreement)</li>
                    <li>2 recent passport-size photographs</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Step by Step Process */}
            <section className={styles.section} id="process">
              <h2 className={styles['section-title']}>How to Apply: Step-by-Step Procedure</h2>
              <div className={styles['steps-timeline']}>
                {stepsToDisplay.map((stepItem, idx) => (
                  <div key={idx} className={styles['step-row']}>
                    <div className={styles['step-number']}>{stepItem.step || idx + 1}</div>
                    <div className={styles['step-body']}>
                      <h3 className={styles['step-title']}>{stepItem.title}</h3>
                      <p className={styles['step-desc']}>{stepItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility Section */}
            <section className={styles.section} id="eligibility">
              <h2 className={styles['section-title']}>Eligibility &amp; Guidelines</h2>
              <ul className={styles['eligibility-list']}>
                {eligibilityToDisplay.map((item, idx) => (
                  <li key={idx} className={styles['eligibility-item']}>
                    <span className={styles['check-bullet']}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Service FAQs */}
            <section className={styles.section} id="faqs">
              <h2 className={styles['section-title']}>Frequently Asked Questions</h2>
              <Accordion items={faqItems} />
            </section>

            {/* Related Services */}
            {relatedList.length > 0 && (
              <section className={styles.section} id="related">
                <h2 className={styles['section-title']}>Related &amp; Complementary Services</h2>
                <div className={styles['related-grid']}>
                  {relatedList.map((rel) => (
                    <Link key={rel.id} to={`/services/${rel.slug}`} className={styles['related-card']}>
                      <span className={styles['related-cat']}>{rel.category}</span>
                      <strong className={styles['related-name']}>{rel.name}</strong>
                      <span className={styles['related-price']}>{rel.priceLabel} →</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar Action Card */}
          <aside className={styles.sidebar}>
            <div className={styles['sticky-box']}>
              <div className={styles['box-header']}>
                <span className={styles['kendra-badge']}>🏛️ Maha E-Seva Kendra</span>
                <h3 className={styles['box-title']}>Apply for {service.name}</h3>
                <div className={styles['box-price']}>{service.priceLabel}</div>
              </div>

              <div className={styles['box-features']}>
                <div className={styles['feature-row']}>
                  <span>📍</span>
                  <span>Shop No-15, Nerul East, Navi Mumbai</span>
                </div>
                <div className={styles['feature-row']}>
                  <span>⏰</span>
                  <span>Open Daily 9:00 AM – 10:00 PM</span>
                </div>
                <div className={styles['feature-row']}>
                  <span>⚡</span>
                  <span>Instant receipt with official tracking ID</span>
                </div>
              </div>

              <div className={styles['box-ctas']}>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I want to apply for ${service.name}. Please guide me with documents and next steps.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-sidebar-wa']}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Apply on WhatsApp</span>
                </a>

                <a href={`tel:${primaryPhone}`} className={styles['btn-sidebar-call']}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call {business.phoneNumbers[0]?.display}</span>
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-sidebar-directions']}
                >
                  Get Kendra Directions →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
