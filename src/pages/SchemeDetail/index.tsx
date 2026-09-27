// SchemeDetail Page — PHASE 0 STUB — Full implementation in Phase 6
import { useParams, Link } from 'react-router-dom';
import { getSchemeBySlug } from '../../data/schemes';

export default function SchemeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const scheme = slug ? getSchemeBySlug(slug) : null;

  if (!scheme) {
    return (
      <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-ink)', marginBottom: '1rem' }}>Scheme not found</h1>
          <Link to="/schemes" style={{ color: 'var(--color-primary)' }}>View all schemes</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/schemes" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', display: 'inline-block', marginBottom: '1rem' }}>← All Schemes</Link>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem' }}>{scheme.title}</h1>
        <p style={{ color: 'var(--color-muted)' }}>Full scheme details in Phase 6.</p>
      </div>
    </main>
  );
}
