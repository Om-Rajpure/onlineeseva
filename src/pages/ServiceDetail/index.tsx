// ServiceDetail Page — PHASE 0 STUB — Full implementation in Phase 5
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../../data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return (
      <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)', marginBottom: '1rem' }}>Service not found</h1>
          <Link to="/services" style={{ color: 'var(--color-primary)' }}>View all services</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/services" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', display: 'inline-block', marginBottom: '1rem' }}>← All Services</Link>
        <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{service.category}</p>
        <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem' }}>{service.name}</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem' }}>{service.shortDescription}</p>
        <div style={{ padding: '1rem 1.25rem', background: 'var(--color-primary-soft)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: 'var(--text-xl)' }}>Our Service Charge: {service.priceLabel}</p>
          {service.governmentFee && (
            <p style={{ color: 'var(--color-ink-secondary)', marginTop: '0.5rem', fontSize: 'var(--text-sm)' }}>{service.governmentFee}</p>
          )}
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)' }}>Full service details available in Phase 5.</p>
      </div>
    </main>
  );
}
