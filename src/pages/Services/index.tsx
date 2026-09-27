// Services Page — PHASE 0 STUB — Full implementation in Phase 4
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

export default function Services() {
  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', marginBottom: '1rem', display: 'inline-block' }}>← Home</Link>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>All Services</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>{services.length} services — Phase 0 route verification</p>
        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem' }}>
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-ink)', textDecoration: 'none' }}
              >
                <span>{s.name}</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{s.priceLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
