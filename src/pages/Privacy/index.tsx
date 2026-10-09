import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SEO } from '../../components/common/SEO';
import { business } from '../../data/business';
import styles from './Privacy.module.css';

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy' },
  ];

  return (
    <div className={styles['privacy-page']}>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy and document handling principles of Maha E-Seva Kendra (onlineeseva.com) in Nerul, Navi Mumbai."
        canonical="https://onlineeseva.com/privacy"
      />

      <Container size="md">
        <Breadcrumbs items={breadcrumbs} />

        <article className={styles['content-card']}>
          <h1 className={styles['page-title']}>Privacy Policy &amp; Data Protection</h1>
          <p className={styles['meta-date']}>Last updated: October 2026 | Maha E-Seva Kendra, Nerul East, Navi Mumbai</p>

          <div className={styles['highlight-box']}>
            <strong>Our Core Privacy Promise:</strong> Maha E-Seva Kendra (onlineeseva.com) treats your personal documents, identity proofs, and application data with strict confidentiality. We do not store biometric records, financial credentials, or identity documents beyond the direct assistance required to submit your application on official government portals.
          </div>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>1. Information We Collect</h2>
            <p className={styles.paragraph}>
              When you visit our service centre in Nerul East or contact us via our website (onlineeseva.com), phone, or WhatsApp, we may collect the following information necessary to assist with your citizen application:
            </p>
            <ul className={styles.list}>
              <li><strong>Contact Information:</strong> Your name, mobile phone number, email address, and residential address in Navi Mumbai / Maharashtra.</li>
              <li><strong>Application Documents:</strong> Proof of identity, address, age, income, caste, educational qualifications, or photos required specifically for government certificates (e.g. Domicile, Income, Non-Creamy Layer, PAN, Passport).</li>
              <li><strong>Inquiry Details:</strong> Specific service requests submitted via our website inquiry form or WhatsApp chat.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>2. How We Use Your Information</h2>
            <p className={styles.paragraph}>
              All collected details and documents are used exclusively for:
            </p>
            <ul className={styles.list}>
              <li>Facilitating and submitting your citizen service applications on official state and central government portals (e.g. Aaple Sarkar, UIDAI, NSDL, Passport Seva, Parivahan).</li>
              <li>Communicating application progress, application numbers, acknowledgment receipts, and appointment schedules to you.</li>
              <li>Responding to your direct inquiries via WhatsApp, phone, or email.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>3. Strict Data Minimization &amp; Security</h2>
            <p className={styles.paragraph}>
              As an authorized facilitation centre, we adhere strictly to government data guidelines and data privacy principles:
            </p>
            <ul className={styles.list}>
              <li>We <strong>never</strong> ask for or store your bank account passwords, UPI PINs, Aadhaar OTPs, or debit card CVVs.</li>
              <li>We <strong>do not sell, rent, or trade</strong> your personal information to any third-party marketing or advertising networks.</li>
              <li>Physical copies submitted for scanning are handed back to you immediately upon scanning.</li>
              <li>Digital files created solely for upload to government servers are purged routinely in accordance with data sanitation standards.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>4. Third-Party Official Portals</h2>
            <p className={styles.paragraph}>
              Our website links to official government websites (such as aaplesarkar.mahaonline.gov.in, passportindia.gov.in, incometax.gov.in). Once you navigate to external government portals, your interaction is governed by the respective portal's privacy policy and security protocols.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles['section-title']}>5. Contact Us Regarding Your Privacy</h2>
            <p className={styles.paragraph}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our centre directly:
            </p>
            <ul className={styles.list}>
              <li><strong>Business:</strong> {business.displayName} ({business.legalName})</li>
              <li><strong>Location:</strong> {business.address.full}</li>
              <li><strong>Phone:</strong> {business.phoneNumbers[0]?.display} / {business.phoneNumbers[1]?.display}</li>
              <li><strong>Domain:</strong> onlineeseva.com</li>
            </ul>
          </section>
        </article>
      </Container>
    </div>
  );
}
