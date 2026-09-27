import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { Container } from '../../components/ui/Container';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SEO } from '../../components/common/SEO';
import styles from './About.module.css';
import storefrontImg from '../../assets/storefront.jpg';
import serviceAgentImg from '../../assets/service-agent.jpg';

export function AboutPage() {
  const whatsappNumber = business.whatsappNumber || '919987772424';

  const facilities = [
    {
      icon: '🖨️',
      title: 'High-Speed Color Xerox & Laser Printing',
      desc: 'Crystal-clear color and B&W document printing, photocopy, and official application paper formatting.',
    },
    {
      icon: '📸',
      title: 'Instant Passport Photo Studio',
      desc: 'Official specification passport, visa, and government scheme photos taken and printed in 2 minutes.',
    },
    {
      icon: '🛡️',
      title: 'Heavy-Duty Thermal Lamination',
      desc: 'Waterproof protective lamination for Aadhaar cards, birth certificates, and important documents.',
    },
    {
      icon: '⚡',
      title: 'Authorized Portal Connectivity',
      desc: 'Direct access to Aaple Sarkar, UIDAI, NSDL, Sarathi, and Central Government welfare databases.',
    },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="About Maha E-Seva Kendra | Nerul East Navi Mumbai"
        description="Learn about Maha E-Seva Kendra in Nerul East, Navi Mumbai. Authorized facilitation centre for government certificates, identity documents, and citizen online applications."
      />

      {/* Header Banner */}
      <div className={styles['header-banner']}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <h1 className={styles.title}>About Maha E-Seva Kendra</h1>
          <p className={styles.subtitle}>
            Your reliable local facilitation centre in Nerul East, dedicated to making government paperwork, online certificates, and welfare applications simple, fast, and 100% accurate.
          </p>
        </Container>
      </div>

      <Container size="lg" className={styles['content-wrap']}>
        {/* Main Story & Vision */}
        <section className={styles['story-section']}>
          <div className={styles['story-grid']}>
            <div className={styles['story-text']}>
              <span className={styles['badge-tag']}>Our Purpose &amp; Commitment</span>
              <h2 className={styles['story-title']}>Serving Nerul &amp; Navi Mumbai Citizens with Integrity</h2>
              <p className={styles['story-p']}>
                Government digital portals like Aaple Sarkar, UIDAI, and NSDL have transformed citizen services in India. However, navigating document uploads, fee payments, and complex application requirements can still be overwhelming for many families and business owners.
              </p>
              <p className={styles['story-p']}>
                At <strong>Maha E-Seva Kendra (Shop No-15, Janta Market Bridge, Nerul East)</strong>, we bridge that gap. We provide patient, expert assistance to ensure every application is filled without errors, eliminating portal rejections and repeated visits to administrative offices.
              </p>
              <p className={styles['story-p']}>
                With transparent pricing, extended 7-day operating hours (<strong>9:00 AM – 10:00 PM</strong>), and in-house scanning and photo facilities, we make citizen services effortless.
              </p>

              <div className={styles['stats-grid']}>
                <div className={styles['stat-box']}>
                  <strong className={styles['stat-num']}>1,460+</strong>
                  <span className={styles['stat-desc']}>Satisfied Citizens in Nerul</span>
                </div>
                <div className={styles['stat-box']}>
                  <strong className={styles['stat-num']}>32+</strong>
                  <span className={styles['stat-desc']}>Government &amp; Online Services</span>
                </div>
                <div className={styles['stat-box']}>
                  <strong className={styles['stat-num']}>7 Days</strong>
                  <span className={styles['stat-desc']}>Open 9:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className={styles['story-visual']}>
              <div className={styles['image-stack']}>
                <img
                  src={serviceAgentImg}
                  alt="Operator assisting citizen at Maha E-Seva Kendra"
                  className={styles['img-top']}
                  loading="lazy"
                />
                <img
                  src={storefrontImg}
                  alt="Maha E-Seva Kendra storefront in Nerul East"
                  className={styles['img-bottom']}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kendra In-House Facilities */}
        <section className={styles['facilities-section']}>
          <SectionHeading
            badge="Centre Facilities"
            title="Everything Under One Roof"
            subtitle="No need to run around for Xerox, photo studios, or computer typing. Our Nerul Kendra is fully equipped."
          />

          <div className={styles['facilities-grid']}>
            {facilities.map((fac, idx) => (
              <div key={idx} className={styles['facility-card']}>
                <div className={styles['facility-icon']}>{fac.icon}</div>
                <h3 className={styles['facility-title']}>{fac.title}</h3>
                <p className={styles['facility-desc']}>{fac.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statutory Clarification Banner */}
        <section className={styles['disclaimer-section']}>
          <div className={styles['disclaimer-box']}>
            <div className={styles['disclaimer-header']}>
              <span className={styles['disclaimer-icon']}>ℹ️</span>
              <h3>Statutory Role &amp; Government Transparency</h3>
            </div>
            <p>
              <strong>Maha E-Seva Kendra (Nerul)</strong> operates as an independent private assistance and facilitation center. We assist citizens in preparing documentation, verifying eligibility, and submitting applications on official government portals (such as Maharashtra's Aaple Sarkar, UIDAI, Income Tax Department, Sarathi Parivahan, and Ministry of Corporate Affairs).
            </p>
            <p>
              We charge a nominal fixed centre facilitation fee for our time and operator assistance. Official statutory government portal processing fees are paid directly to the respective government department as per state laws.
            </p>
          </div>
        </section>

        {/* Kendra Visit & Contact CTA */}
        <section className={styles['cta-section']}>
          <div className={styles['cta-card']}>
            <div className={styles['cta-text']}>
              <h2>Visit Us in Nerul East Today</h2>
              <p>
                Shop No-15, Janta Market Bridge, Nerul East, Sector 3, Navi Mumbai, Maharashtra 400706
              </p>
              <span className={styles['cta-hours']}>Open Today: 9:00 AM – 10:00 PM</span>
            </div>
            <div className={styles['cta-actions']}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I want to visit your shop.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['btn-cta-wa']}
              >
                Chat on WhatsApp
              </a>
              <Link to="/contact" className={styles['btn-cta-contact']}>
                Get Full Directions &amp; Contact Info →
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutPage;
