import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import styles from './Documents.module.css';

export default function DocumentsPage() {
  const [searchDoc, setSearchDoc] = useState('');
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const filteredServices = services.filter((s) => {
    if (!searchDoc.trim()) return true;
    const q = searchDoc.toLowerCase().trim();
    return (
      s.name.toLowerCase().includes(q) ||
      s.documents.some((d) => d.name.toLowerCase().includes(q) || (d.note && d.note.toLowerCase().includes(q)))
    );
  });

  return (
    <div className={styles.page}>
      <SEO
        title="Document Checklist & Preparation Guide | Maha E-Seva Kendra Nerul"
        description="Comprehensive document checklist for Aadhaar, PAN, Domicile, Income Certificates, Passport, and Licences before visiting Maha E-Seva Kendra Nerul East, Navi Mumbai."
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'Documents Guide' }]} />
          <h1 className={styles.title}>Citizen Document Preparation Guide</h1>
          <p className={styles.subtitle}>
            Know exactly what original documents, proofs, and photographs to carry before visiting our Kendra in Nerul East. Save time with zero rejection hassle.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles['content-wrap']}>
        {/* Important Kendra In-House Facilities Banner */}
        <div className={styles['facility-card']}>
          <div className={styles['facility-icon']}>💡</div>
          <div className={styles['facility-content']}>
            <h3>In-House Facilities Available at Shop No-15, Nerul East</h3>
            <p>
              Don't worry if you don't have photocopies or passport photos ready. Our Kendra is fully equipped with <strong>instant passport-size photo studio printing (30 photos for ₹100)</strong>, <strong>high-speed document scanning</strong>, <strong>Xerox copying</strong>, and <strong>thermal lamination</strong>.
            </p>
          </div>
        </div>

        {/* Search Document Box */}
        <div className={styles['search-bar-wrap']}>
          <input
            type="text"
            placeholder="Search by document (e.g. Electricity Bill, Ration Card, School Leaving, 15-year proof)..."
            value={searchDoc}
            onChange={(e) => setSearchDoc(e.target.value)}
            className={styles['search-input']}
          />
        </div>

        {/* Categorized Checklists */}
        <div className={styles['checklist-list']}>
          {filteredServices.map((service) => (
            <article key={service.id} className={styles['service-doc-card']}>
              <div className={styles['card-header']}>
                <div>
                  <span className={styles['category-tag']}>{service.category}</span>
                  <h2 className={styles['service-name']}>{service.name}</h2>
                </div>
                <div className={styles['price-tag']}>{service.priceLabel}</div>
              </div>

              <div className={styles['doc-items-grid']}>
                {service.documents.map((doc, idx) => (
                  <div key={idx} className={styles['doc-item']}>
                    <div className={styles['check-icon']}>✓</div>
                    <div className={styles['doc-info']}>
                      <div className={styles['doc-title-row']}>
                        <span className={styles['doc-title']}>{doc.name}</span>
                        <span className={doc.required ? styles['tag-mandatory'] : styles['tag-optional']}>
                          {doc.required ? 'Mandatory' : 'Optional / If Available'}
                        </span>
                      </div>
                      {doc.note && <p className={styles['doc-note']}>{doc.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles['card-footer']}>
                <Link to={`/services/${service.slug}`} className={styles['btn-view-full']}>
                  View Complete Service Process &amp; Eligibility →
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Maha E-Seva Kendra, I have questions about required documents for ${service.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['btn-wa-inquire']}
                >
                  Ask Kendra on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
