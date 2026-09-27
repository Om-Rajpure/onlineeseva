// Contact Page — PHASE 0 STUB — Full implementation in Phase 8
import { Link } from 'react-router-dom';
import { business } from '../../data/business';

export default function Contact() {
  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', display: 'inline-block', marginBottom: '1rem' }}>← Home</Link>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem' }}>Contact Us</h1>
        <div style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-ink)' }}>{business.displayName}</p>
          <p style={{ color: 'var(--color-muted)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>{business.address.full}</p>
          {business.phoneNumbers.map((p) => (
            <p key={p.number} style={{ marginBottom: '0.25rem' }}>
              <a href={`tel:${p.number}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{p.display}</a>
            </p>
          ))}
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)' }}>Full contact form and location map coming in Phase 8.</p>
      </div>
    </main>
  );
}
