import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getSchemeBySlug } from '../../data/schemes';
import { getRelatedServices } from '../../data/services';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { Accordion } from '../../components/ui/Accordion';
import { SEO } from '../../components/common/SEO';
import { ServiceCard } from '../../components/services';
import styles from './SchemeDetail.module.css';

export default function SchemeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const scheme = slug ? getSchemeBySlug(slug) : null;
  const [copied, setCopied] = useState(false);

  if (!scheme) {
    return <Navigate to="/schemes" replace />;
  }

  const relatedServicesList = getRelatedServices(scheme.relatedServices || []);
  const primaryPhone = business.phoneNumbers[0]?.number || '09987772424';
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const getStatusLabel = (status: typeof scheme.status) => {
    switch (status) {
      case 'open':
        return 'Applications Open';
      case 'new':
        return 'New Scheme';
      case 'updated':
        return 'Recently Updated';
      case 'deadline-soon':
        return 'Deadline Soon';
      case 'closed':
        return 'Applications Closed';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Active';
    }
  };

  const statusClass = styles[`status-${scheme.status}`] || styles['status-open'];

  const defaultSchemeFAQs = [
    {
      id: 'scheme-faq-1',
      title: `How does Maha E-Seva Kendra assist with ${scheme.title}?`,
      content:
        'Our Kendra provides end-to-end guidance: verifying your eligibility, compiling required certificates (such as Income, Domicile, Caste), biometric e-KYC authentication on official government portals, and generating your official acknowledgment slip.',
    },
    {
      id: 'scheme-faq-2',
      title: 'Do I need to visit government offices separately after applying here?',
      content:
        'In most cases, applications submitted through our Kendra are processed digitally by the respective government department without requiring separate office visits. If a physical document submission is required by the local Tahsil or municipal body, we prepare the complete submission docket for you.',
    },
    {
      id: 'scheme-faq-3',
      title: 'How will I receive the financial benefit or status update?',
      content:
        'Financial benefits are transferred directly to your Aadhaar-linked bank account (DBT). You will receive an official application number upon registration, and you can track status at our Kendra or via WhatsApp.',
    },
  ];

  const handleCopyChecklist = () => {
    const docLines =
      scheme.documents && scheme.documents.length > 0
        ? scheme.documents
            .map(
              (d, i) =>
                `${i + 1}. ${d.name} (${d.required ? 'Mandatory' : 'Optional'})${
                  d.note ? ' — ' + d.note : ''
                }`
            )
            .join('\n')
        : '1. Original Aadhaar Card\n2. Domicile / Residence Proof\n3. Bank Passbook';

    const text = `📋 Document Checklist for ${scheme.title}:\n\nRequired Documents:\n${docLines}\n\nAssistance Kendra: ${business.name}\nAddress: ${business.address.full}\nOpen: 9:00 AM – 10:00 PM Daily\nPhone: 099877 72424 / 88507 72424`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = `Hello Maha E-Seva Kendra, I need help applying for ${scheme.title}. Please guide me with the eligibility, documents, and application process.`;

  const schemeSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: scheme.title,
    description: scheme.summary,
    serviceType: 'Government Welfare Scheme Assistance',
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
  };

  return (
    <div className={styles.page}>
      <SEO
        title={scheme.seo.title}
        description={scheme.seo.description}
        canonical={scheme.seo.canonical}
        schema={schemeSchema}
      />

      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Government Schemes', href: '/schemes' },
              { label: scheme.title },
            ]}
          />

          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <div className={styles.metaRow}>
                <span className={`${styles.statusBadge} ${statusClass}`}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  {getStatusLabel(scheme.status)}
                </span>
                <span className={styles.verifiedBadge}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Verified {scheme.lastUpdated}
                </span>
              </div>

              {scheme.department && (
                <div className={styles.department}>{scheme.department}</div>
              )}

              <h1 className={styles.title}>{scheme.title}</h1>
              <p className={styles.description}>{scheme.overview || scheme.summary}</p>
            </div>

            {/* Financial / Primary Highlight Card */}
            {scheme.financialAssistance && (
              <div className={styles.financialBox}>
                <span className={styles.financialLabel}>Financial Assistance / Benefit</span>
                <div className={styles.financialAmount}>{scheme.financialAssistance}</div>
                <div className={styles.financialNote}>
                  <span>✓ Direct Benefit Transfer (DBT)</span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Main Content Layout */}
      <Container size="lg" className={styles.mainContainer}>
        <div className={styles.contentLayout}>
          {/* Main Body */}
          <main className={styles.mainBody}>
            {/* 1. Scheme Summary & Official Source Box */}
            <section className={styles.section} aria-labelledby="scheme-overview">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>SCHEME INFORMATION</span>
                  <h2 id="scheme-overview" className={styles.sectionHeading}>
                    Overview &amp; Objectives
                  </h2>
                </div>
              </div>
              <p className={styles.sectionText}>{scheme.overview}</p>

              {scheme.officialSource && (
                <div className={styles.officialNoticeBox}>
                  <div className={styles.officialLinkRow}>
                    <span className={styles.officialTitle}>Official Portal Reference:</span>
                    <a
                      href={scheme.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.officialLink}
                    >
                      <span>{scheme.officialSource.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <p className={styles.officialDisclaimer}>
                    <strong>Notice:</strong> Maha E-Seva Kendra Nerul is an authorized local citizen facilitation centre. We assist citizens with eligibility review, document compilation, and online portal submissions. Final sanctions and disbursements are managed directly by the respective government department.
                  </p>
                </div>
              )}
            </section>

            {/* 2. Key Benefits */}
            <section className={styles.section} aria-labelledby="scheme-benefits">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>BENEFICIARY ADVANTAGES</span>
                  <h2 id="scheme-benefits" className={styles.sectionHeading}>
                    Key Scheme Benefits
                  </h2>
                </div>
              </div>
              <div className={styles.benefitsGrid}>
                {scheme.benefits.map((benefit, idx) => (
                  <div key={idx} className={styles.benefitCard}>
                    <div className={styles.benefitIcon} aria-hidden="true">✓</div>
                    <p className={styles.benefitText}>{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Eligibility Criteria */}
            <section className={styles.section} aria-labelledby="scheme-eligibility">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>QUALIFYING CONDITIONS</span>
                  <h2 id="scheme-eligibility" className={styles.sectionHeading}>
                    Who is Eligible?
                  </h2>
                </div>
              </div>
              <ul className={styles.eligibilityList}>
                {scheme.eligibility.map((item, idx) => (
                  <li key={idx} className={styles.eligibilityItem}>
                    <span className={styles.bulletIcon} aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Documents Required (Checklist) */}
            <section className={styles.section} id="documents-checklist" aria-labelledby="scheme-documents">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>PREPARATION CHECKLIST</span>
                  <h2 id="scheme-documents" className={styles.sectionHeading}>
                    Required Documents Checklist
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleCopyChecklist}
                  className={styles.btnCopyChecklist}
                  aria-label="Copy documents checklist to clipboard"
                >
                  {copied ? '✓ Checklist Copied!' : '📋 Copy Checklist'}
                </button>
              </div>

              <p className={styles.checklistIntro}>
                Please bring original copies of the following documents when visiting our Nerul East Kendra for scheme verification and submission.
              </p>

              <div className={styles.checklistGrid}>
                {scheme.documents.map((doc, idx) => (
                  <div key={idx} className={styles.checklistItem}>
                    <div className={styles.checklistIcon} aria-hidden="true">✓</div>
                    <div className={styles.checklistDetails}>
                      <div className={styles.docNameRow}>
                        <span className={styles.docName}>{doc.name}</span>
                        <span
                          className={
                            doc.required
                              ? styles.badgeRequired
                              : styles.badgeOptional
                          }
                        >
                          {doc.required ? 'Mandatory' : 'Optional / If Applicable'}
                        </span>
                      </div>
                      {doc.note && <p className={styles.docNote}>{doc.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.kendraScanNotice}>
                <span style={{ fontSize: '18px' }} aria-hidden="true">💡</span>
                <p>
                  <strong>Need certificates or xerox?</strong> We provide on-the-spot high-speed scanning, Xerox copying, and assistance in applying for mandatory certificates (Income, Domicile, Caste) at our centre.
                </p>
              </div>
            </section>

            {/* 5. Step-by-Step Application Process */}
            <section className={styles.section} aria-labelledby="scheme-process">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>APPLICATION STEPS</span>
                  <h2 id="scheme-process" className={styles.sectionHeading}>
                    How It Works at Our Kendra
                  </h2>
                </div>
              </div>
              <div className={styles.processSteps}>
                {scheme.applicationSteps.map((step) => (
                  <div key={step.step} className={styles.processCard}>
                    <div className={styles.stepNumber}>0{step.step}</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Important Dates (if present) */}
            {scheme.dates.importantDates && scheme.dates.importantDates.length > 0 && (
              <section className={styles.section} aria-labelledby="scheme-dates">
                <div className={styles.sectionHeader}>
                  <div>
                    <span className={styles.sectionEyebrow}>TIMELINE &amp; SCHEDULE</span>
                    <h2 id="scheme-dates" className={styles.sectionHeading}>
                      Important Dates &amp; Deadlines
                    </h2>
                  </div>
                </div>
                <div className={styles.datesGrid}>
                  {scheme.dates.importantDates.map((item, idx) => (
                    <div key={idx} className={styles.dateCard}>
                      <span className={styles.dateLabel}>{item.label}</span>
                      <div className={styles.dateValue}>{item.date}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Related Kendra Services */}
            {relatedServicesList.length > 0 && (
              <section className={styles.section} aria-labelledby="related-services">
                <div className={styles.sectionHeader}>
                  <div>
                    <span className={styles.sectionEyebrow}>REQUIRED CERTIFICATES &amp; SERVICES</span>
                    <h2 id="related-services" className={styles.sectionHeading}>
                      Related Citizen Services
                    </h2>
                  </div>
                </div>
                <div className={styles.relatedGrid}>
                  {relatedServicesList.slice(0, 3).map((rel) => (
                    <div key={rel.id}>
                      <ServiceCard service={rel} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 8. Scheme FAQs */}
            <section className={styles.section} aria-labelledby="scheme-faq">
              <div className={styles.sectionHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>COMMON QUESTIONS</span>
                  <h2 id="scheme-faq" className={styles.sectionHeading}>
                    Frequently Asked Questions
                  </h2>
                </div>
              </div>
              <Accordion items={defaultSchemeFAQs} />
            </section>
          </main>

          {/* Right Sticky Sidebar / Conversion Box */}
          <aside className={styles.sidebarCol}>
            <div className={styles.stickyCard}>
              <h3 className={styles.sidebarTitle}>Need Help Applying?</h3>
              <p className={styles.sidebarSubtitle}>
                Get certified offline assistance for {scheme.title} from our experienced Kendra operator in Nerul East.
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
                  <span>WhatsApp Application Help</span>
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
