import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import styles from './WhyChooseUs.module.css';
import serviceAgentImg from '../../../assets/service-agent.jpg';

export function WhyChooseUs() {
  const pillars = [
    {
      icon: '🛡️',
      title: '100% Accurate & Rejection-Free',
      description:
        'Government application forms are complex. Our trained service operators ensure every detail and document attachment meets exact state & central portal requirements.',
    },
    {
      icon: '💎',
      title: 'Transparent Fixed Pricing',
      description:
        'Clear, fixed centre service fees with zero hidden markups. We clearly distinguish between Kendra facilitation charges and official statutory government fees.',
    },
    {
      icon: '⏰',
      title: 'Open 7 Days (9 AM – 10 PM)',
      description:
        'Longest working hours in Nerul East. Visit before work, after office hours, or on weekends for seamless application submission without taking leave.',
    },
    {
      icon: '🔒',
      title: 'Complete Document Privacy',
      description:
        'Your Aadhaar, PAN, and income papers are handled with strict confidentiality. No data is stored, shared, or misused beyond your explicit application process.',
    },
  ];

  return (
    <section className={styles.section} id="why-choose-us">
      <Container size="lg">
        <div className={styles.grid}>
          {/* Left Column: Pillars List */}
          <div className={styles['pillars-wrap']}>
            <SectionHeading
              align="left"
              badge="Why Nerul Chooses Us"
              title="A Kendra Built on Trust, Accuracy & Speed"
              subtitle="Over 1,400+ Navi Mumbai citizens rely on our centre for hassle-free government document processing."
            />

            <div className={styles['pillars-grid']}>
              {pillars.map((pillar, idx) => (
                <div key={idx} className={styles['pillar-card']}>
                  <div className={styles['pillar-icon']}>{pillar.icon}</div>
                  <div className={styles['pillar-content']}>
                    <h3 className={styles['pillar-title']}>{pillar.title}</h3>
                    <p className={styles['pillar-desc']}>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Trust Badge */}
          <div className={styles['visual-wrap']}>
            <div className={styles['photo-frame']}>
              <img
                src={serviceAgentImg}
                alt="Helpful service staff at Maha E-Seva Kendra Nerul"
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles['rating-overlay']}>
                <div className={styles['rating-stars']}>★★★★★</div>
                <div className={styles['rating-score']}>4.9 / 5.0 Rating</div>
                <div className={styles['rating-source']}>Based on 1,460+ local reviews in Navi Mumbai</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
