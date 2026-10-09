import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import { business } from '../../data/business';
import styles from './Terms.module.css';

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service' },
  ];

  return (
    <div className={styles['terms-page']}>
      <SEO
        title="Terms of Service & Disclaimer"
        description="Terms of Service and legal disclaimers for Maha E-Seva Kendra (onlineeseva.com) in Nerul, Navi Mumbai."
        canonical="https://onlineeseva.com/terms"
      />

      <Container size="md">
        <Breadcrumbs items={breadcrumbs} />

        <article className={styles['content-card']}>
          <h1 className={styles['page-title']}>Terms of Service &amp; Facilitation Disclaimer</h1>
          <p className={styles['meta-date']}>Last updated: October 2026 | Maha E-Seva Kendra, Nerul East, Navi Mumbai</p>

          <div className={styles['highlight-box']}>
            <strong>Important Legal Notice:</strong> Maha E-Seva Kendra (onlineeseva.com) is an independent citizen facilitation and document assistance centre. We are <strong>not</strong> the government authority that approves or issues certificates. We provide expert typing, scanning, documentation guidance, online portal form submission, and tracking assistance.
          </div>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>1. Nature of Services Provided</h2>
            <p className={styles.paragraph}>
              Our Kendra assists citizens and business owners with the following digital facilitation services:
            </p>
            <ul className={styles.list}>
              <li>Online form filling on government portals (e.g. MahaDBT, Aaple Sarkar, UIDAI, NSDL, Passport Seva, Parivahan, MSME Udyam).</li>
              <li>Document scanning, photo formatting, PDF compression, and digital upload compliance.</li>
              <li>PVC smart card printing, A4/card lamination, and passport-size photo printing.</li>
              <li>Guidance on eligibility criteria, required documents, and application tracking.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>2. Fees &amp; Transparent Pricing</h2>
            <p className={styles.paragraph}>
              We maintain full transparency regarding all service fees:
            </p>
            <ul className={styles.list}>
              <li><strong>Centre Service Charge:</strong> This covers the physical scanning, computer operator assistance, document checking, portal data entry, and printing services provided at our Kendra.</li>
              <li><strong>Official Government Fees:</strong> When applicable (e.g. ₹1,500 government passport fee, challan fees, or portal processing fees), these amounts go directly to the respective government department and are clearly segregated on your receipt.</li>
              <li>Charges for all standard services (such as ₹40 for PVC Aadhaar printing, ₹150 for PAN Card, ₹300 for Domicile/Income certificates) are displayed transparently before work commences.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>3. Client Responsibilities &amp; Genuine Documents</h2>
            <p className={styles.paragraph}>
              Clients utilizing our services agree to:
            </p>
            <ul className={styles.list}>
              <li>Provide true, accurate, valid, and genuine documents (Aadhaar, Ration Card, School Leaving Certificate, Electricity Bill, etc.).</li>
              <li>Verify all personal details (spelling of name, date of birth, address, father&apos;s name) during the preview screen before final submission.</li>
              <li>Understand that submission of forged or misleading documents is strictly prohibited under Indian law (IPC and IT Act) and will be reported to authorities.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>4. Government Authority Approval &amp; Timelines</h2>
            <p className={styles.paragraph}>
              Official approvals, certificate issuance, physical delivery schedules, and police verification procedures are under the exclusive jurisdiction of the respective government authorities (Tahsildar Office, UIDAI, Passport Seva Kendra, RTO, Income Tax Department, NMMC). Maha E-Seva Kendra cannot guarantee approval if the applicant fails to meet statutory criteria.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>5. Governing Law &amp; Jurisdiction</h2>
            <p className={styles.paragraph}>
              These terms are governed by the laws of Maharashtra, India. Any disputes arising from services rendered shall be subject to the exclusive jurisdiction of the competent courts in Navi Mumbai / Thane district.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>6. Contact Information</h2>
            <p className={styles.paragraph}>
              For any queries regarding service terms or assistance, visit our centre or contact:
            </p>
            <ul className={styles.list}>
              <li><strong>{business.displayName}</strong> ({business.legalName})</li>
              <li>Shop No-15, Janta Market Bridge, Nerul East, Sector 3, Nerul, Navi Mumbai 400706</li>
              <li>Call: {business.phoneNumbers[0]?.display} | WhatsApp: +91 99877 72424</li>
            </ul>
          </section>
        </article>
      </Container>
    </div>
  );
}
