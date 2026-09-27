import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';
import { business } from '../../../data/business';
import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import styles from './DocumentChecker.module.css';
import docsPhoto from '../../../assets/documents.jpg';

export function DocumentChecker() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('2'); // Default to PAN card
  const [copied, setCopied] = useState(false);

  const selectedService = services.find((s) => s.id === selectedServiceId) || services[0];
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const handleCopyChecklist = () => {
    const text = `📋 Document Checklist for ${selectedService.name} at Maha E-Seva Kendra:\n` +
      `Centre Fee: ${selectedService.priceLabel}\n` +
      `Documents:\n` +
      selectedService.documents.map((d, idx) => `${idx + 1}. ${d.name} (${d.required ? 'Required' : 'Optional'})`).join('\n') +
      `\n\nVisit: ${business.address.full}\nHours: 9:00 AM - 10:00 PM Daily\nPhone: 099877 72424`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className={styles.section} id="document-checker">
      <Container size="lg">
        <SectionHeading
          badge="Avoid Multiple Trips"
          title="Instant Document Checklist Guide"
          subtitle="Select your service to see the exact papers and IDs you need before visiting our centre."
        />

        <div className={styles.card}>
          <div className={styles.grid}>
            {/* Left side: Selector & Checklist */}
            <div className={styles['checker-main']}>
              <label htmlFor="service-select" className={styles.label}>
                Select Service to Check Requirements:
              </label>
              <div className={styles['select-wrap']}>
                <select
                  id="service-select"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className={styles.select}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.priceLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Quick Summary */}
              <div className={styles['service-summary']}>
                <div className={styles['summary-header']}>
                  <div>
                    <h3 className={styles['service-name']}>{selectedService.name}</h3>
                    <p className={styles['service-tagline']}>{selectedService.shortDescription}</p>
                  </div>
                  <div className={styles['price-badge']}>
                    <span className={styles['price-label']}>Centre Fee</span>
                    <span className={styles['price-val']}>{selectedService.priceLabel}</span>
                  </div>
                </div>

                {selectedService.governmentFee && (
                  <div className={styles['govt-fee-alert']}>
                    ⚠️ Note: Separate government statutory fee of {selectedService.governmentFee} applies for this application.
                  </div>
                )}
              </div>

              {/* Document List */}
              <div className={styles['docs-section']}>
                <h4 className={styles['docs-title']}>Required Documents to Bring:</h4>
                {selectedService.documents && selectedService.documents.length > 0 ? (
                  <ul className={styles['docs-list']}>
                    {selectedService.documents.map((doc, idx) => (
                      <li key={idx} className={styles['doc-item']}>
                        <span className={styles['doc-icon']}>✓</span>
                        <div className={styles['doc-info']}>
                          <span className={styles['doc-name']}>
                            {doc.name}
                            {doc.required ? (
                              <span className={styles['required-tag']}>Required</span>
                            ) : (
                              <span className={styles['optional-tag']}>Optional</span>
                            )}
                          </span>
                          {doc.description && (
                            <span className={styles['doc-note']}>{doc.description}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles['no-docs-box']}>
                    <p>
                      Original Aadhaar Card, proof of address, and passport size photographs are generally recommended for this service.
                    </p>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, what exact documents are required for ${selectedService.name}?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['ask-wa-link']}
                    >
                      Click here to ask our agent on WhatsApp →
                    </a>
                  </div>
                )}
              </div>

              {/* Checklist Actions */}
              <div className={styles.actions}>
                <button
                  type="button"
                  onClick={handleCopyChecklist}
                  className={styles['btn-copy']}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copied ? '✓ Checklist Copied!' : 'Copy Document List'}</span>
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I want to apply for ${selectedService.name}. Can you confirm if my documents are complete?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-wa-checklist']}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Send Documents on WhatsApp</span>
                </a>

                <Link
                  to={`/services/${selectedService.slug}`}
                  className={styles['btn-full-guide']}
                >
                  Full Step-by-Step Guide →
                </Link>
              </div>
            </div>

            {/* Right side: Helpful Info Card & Photo */}
            <div className={styles['checker-sidebar']}>
              <div className={styles['photo-wrap']}>
                <img
                  src={docsPhoto}
                  alt="Government application documents preparation"
                  className={styles['sidebar-photo']}
                  loading="lazy"
                />
              </div>

              <div className={styles['pro-tip-box']}>
                <div className={styles['pro-tip-title']}>
                  <span>💡</span>
                  <strong>Quick Citizen Tips:</strong>
                </div>
                <ul className={styles['tips-list']}>
                  <li>Always carry original documents along with 1 Xerox copy.</li>
                  <li>Ensure your mobile number linked to Aadhaar is active for OTP verification.</li>
                  <li>We provide instant passport photo & Xerox printing at our Kendra.</li>
                  <li>Centre is open 9:00 AM – 10:00 PM all 7 days in Nerul East.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
