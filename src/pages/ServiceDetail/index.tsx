import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../../data/services';
import { getCategoryById } from '../../data/categories';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import { ServiceCard } from '../../components/services';
import styles from './ServiceDetail.module.css';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

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
      description: 'Visit our Kendra with your original documents or send clear photos on WhatsApp for pre-verification.',
    },
    {
      step: 2,
      title: 'Online Portal Application',
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
      description: 'We track your application progress until official issuance and deliver the printed/digital document.',
    },
  ];

  const stepsToDisplay =
    service.processSteps && service.processSteps.length > 0
      ? service.processSteps
      : defaultProcessSteps;

  const defaultEligibility = [
    'Applicant must be an Indian citizen / Maharashtra resident where applicable.',
    'Must have a valid primary photo identity proof (such as Aadhaar card).',
    'Mobile number should be available to receive government OTP verifications.',
  ];

  const eligibilityToDisplay =
    service.eligibility && service.eligibility.length > 0
      ? service.eligibility
      : defaultEligibility;

  const defaultServiceFAQs = [
    {
      id: 'faq-time',
      title: `How much time does it take for ${service.name}?`,
      content:
        service.processingInfo ||
        'Processing times depend on the respective government department verification (typically 3 to 15 working days). We provide an official tracking receipt immediately upon form submission.',
    },
    {
      id: 'faq-xerox',
      title: 'Do I need to bring Xerox copies and passport photos?',
      content:
        'You can bring original documents directly. We have in-house high-speed scanning, Xerox copying, and instant passport size photo printing facilities at our Kendra.',
    },
    {
      id: 'faq-tracking',
      title: 'How can I check the status of my application?',
      content:
        'You will receive an official acknowledgment receipt with your Application Reference Number. You can also message us on WhatsApp with your receipt number for instant status updates.',
    },
  ];

  const faqItems =
    service.faqs && service.faqs.length > 0
      ? service.faqs.map((f, i) => ({
          id: `s-faq-${i}`,
          title: f.question,
          content: f.answer,
        }))
      : defaultServiceFAQs;

  const handleCopyChecklist = () => {
    const docLines =
      service.documents && service.documents.length > 0
        ? service.documents
            .map(
              (d, i) =>
                `${i + 1}. ${d.name} (${d.required ? 'Required' : 'Optional'})${d.note ? ' - ' + d.note : ''}`
            )
            .join('\n')
        : '1. Original Aadhaar Card\n2. Address Proof\n3. Passport Photos';

    const govtFeeLine = service.governmentFee ? `Government Fee: ${service.governmentFee}\n` : '';
    const text = `📋 Document Checklist for ${service.name} at Maha E-Seva Kendra:\nCentre Fee: ${service.priceLabel}\n${govtFeeLine}Required Documents:\n${docLines}\n\nKendra Location: ${business.address.full}\nOpen: 9:00 AM – 10:00 PM Daily\nPhone: 099877 72424`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = `Hello Maha E-Seva Kendra, I need help with ${service.name}. Please tell me the required documents and application process.`;

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

  const imageSrc = service.image || `/images/services/${service.slug}.jpg`;
  const imageAlt = service.imageAlt || `${service.name} checklist and assistance at Maha E-Seva Kendra Nerul`;

  return (
    <div className={styles.page}>
      <SEO
        title={`${service.name} in Nerul Navi Mumbai | Fees, Documents & Process`}
        description={`Get fast, expert assistance for ${service.name} at Maha E-Seva Kendra Nerul. Centre fee: ${service.priceLabel}. Check required documents checklist, eligibility, and step-by-step process.`}
        schema={serviceSchema}
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              ...(categoryConfig
                ? [{ label: categoryConfig.label, href: `/services?category=${categoryConfig.id}` }]
                : []),
              { label: service.name },
            ]}
          />

          <div className={styles['header-content']}>
            <div className={styles['header-left']}>
              <span className={styles['category-badge']}>
                {categoryConfig?.label || service.category}
              </span>
              <h1 className={styles.title}>{service.name}</h1>
              <p className={styles.description}>{service.description || service.shortDescription}</p>
            </div>

            {/* Price Box */}
            <div className={styles['price-card']}>
              <span className={styles['price-label-small']}>Centre Service Charge</span>
              <div className={styles['price-value']}>{service.priceLabel}</div>
              {service.governmentFee && (
                <div className={styles['govt-fee-box']}>
                  <span className={styles['govt-fee-badge']}>Government Fee</span>
                  <span className={styles['govt-fee-text']}>{service.governmentFee}</span>
                </div>
              )}
              <div className={styles['price-guarantee']}>
                ✓ Zero hidden charges • Official receipt provided
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Service Content Grid */}
      <Container size="lg" className={styles['main-container']}>
        <div className={styles['content-layout']}>
          {/* Left / Main Body */}
          <main className={styles['main-body']}>
            {/* Visual Service Banner (16:10 Ratio) */}
            <div className={styles['visual-banner']}>
              {!imgError ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={styles['banner-image']}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={styles['banner-fallback']}>
                  <span>{categoryConfig?.label || service.category}</span>
                  <h2>{service.name}</h2>
                </div>
              )}
            </div>

            {/* ============================================================
                PRIMARY SECTION: DOCUMENTS REQUIRED / CHECKLIST
               ============================================================ */}
            <section className={styles.section} id="documents-checklist">
              <div className={styles['section-header']}>
                <div className={styles['section-title-wrap']}>
                  <span className={styles['section-eyebrow']}>PREPARATION GUIDE</span>
                  <h2 className={styles['section-heading']}>Documents Required (Checklist)</h2>
                </div>
                <button
                  type="button"
                  onClick={handleCopyChecklist}
                  className={styles['btn-copy-checklist']}
                >
                  {copied ? '✓ Checklist Copied!' : '📋 Copy Checklist'}
                </button>
              </div>

              <p className={styles['checklist-intro']}>
                Please carry the following original documents when visiting our Kendra in Nerul East. We provide on-the-spot scanning, Xerox, and passport photos.
              </p>

              <div className={styles['checklist-grid']}>
                {service.documents && service.documents.length > 0 ? (
                  service.documents.map((doc, idx) => (
                    <div key={idx} className={styles['checklist-item']}>
                      <div className={styles['checklist-icon']}>✓</div>
                      <div className={styles['checklist-details']}>
                        <div className={styles['doc-name-row']}>
                          <span className={styles['doc-name']}>{doc.name}</span>
                          <span
                            className={
                              doc.required
                                ? styles['badge-required']
                                : styles['badge-optional']
                            }
                          >
                            {doc.required ? 'Mandatory' : 'Optional / If Applicable'}
                          </span>
                        </div>
                        {doc.note && <p className={styles['doc-note']}>{doc.note}</p>}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles['checklist-item']}>
                    <div className={styles['checklist-icon']}>✓</div>
                    <div className={styles['checklist-details']}>
                      <span className={styles['doc-name']}>Aadhaar Card (Original / Copy)</span>
                      <p className={styles['doc-note']}>Primary proof of identity and address.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles['kendra-scan-notice']}>
                <span className={styles['notice-icon']}>💡</span>
                <p>
                  <strong>Don't have photocopies or photos?</strong> No problem! Our Kendra provides in-house high-speed scanning, Xerox copying, and instant passport-size photos.
                </p>
              </div>
            </section>

            {/* ============================================================
                ELIGIBILITY SECTION
               ============================================================ */}
            <section className={styles.section}>
              <h2 className={styles['section-heading']}>Who is Eligible?</h2>
              <ul className={styles['eligibility-list']}>
                {eligibilityToDisplay.map((item, idx) => (
                  <li key={idx} className={styles['eligibility-item']}>
                    <span className={styles['bullet-icon']}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ============================================================
                HOW IT WORKS / STEP-BY-STEP PROCESS
               ============================================================ */}
            <section className={styles.section}>
              <h2 className={styles['section-heading']}>How It Works at Our Kendra</h2>
              <div className={styles['process-steps']}>
                {stepsToDisplay.map((step) => (
                  <div key={step.step} className={styles['process-card']}>
                    <div className={styles['step-number']}>0{step.step}</div>
                    <div className={styles['step-content']}>
                      <h3 className={styles['step-title']}>{step.title}</h3>
                      <p className={styles['step-desc']}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ============================================================
                SERVICE FAQS
               ============================================================ */}
            <section className={styles.section}>
              <h2 className={styles['section-heading']}>Frequently Asked Questions</h2>
              <Accordion items={faqItems} />
            </section>

            {/* ============================================================
                RELATED SERVICES
               ============================================================ */}
            {relatedList.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles['section-heading']}>Related Citizen Services</h2>
                <div className={styles['related-grid']}>
                  {relatedList.slice(0, 3).map((rel) => (
                    <div key={rel.id} className={styles['related-col']}>
                      <ServiceCard service={rel} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Right Sticky Sidebar / Conversion Box */}
          <aside className={styles['sidebar-col']}>
            <div className={styles['sticky-card']}>
              <h3 className={styles['sidebar-title']}>Need Help Applying?</h3>
              <p className={styles['sidebar-subtitle']}>
                Get instant guidance from our Nerul Kendra operator on WhatsApp or visit our centre directly.
              </p>

              {/* Action Buttons */}
              <div className={styles['action-buttons']}>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-whatsapp-primary']}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>WhatsApp Application Assistance</span>
                </a>

                <a href={`tel:${primaryPhone}`} className={styles['btn-call-secondary']}>
                  📞 Call: {primaryPhone}
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-directions']}
                >
                  📍 Get Directions to Kendra
                </a>
              </div>

              {/* Kendra Timings & Location */}
              <div className={styles['kendra-info-box']}>
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
                <div className={styles['google-rating-note']}>
                  ★ <strong>4.9 / 5</strong> rating (1,466+ Google reviews)
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
