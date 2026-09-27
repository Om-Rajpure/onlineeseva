// Blog Page — PHASE 0 STUB — Full implementation in Phase 7
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', display: 'inline-block', marginBottom: '1rem' }}>← Home</Link>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem' }}>Blog & Guides</h1>
        <p style={{ color: 'var(--color-muted)' }}>Articles and local service guides will be published here in Phase 7.</p>
      </div>
    </main>
  );
}
