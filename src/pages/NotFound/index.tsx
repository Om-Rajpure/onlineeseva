// 404 Not Found Page
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        padding: '2rem',
        background: 'var(--color-background)',
        textAlign: 'center',
      }}
    >
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be found on Maha E-Seva Kendra."
      />
      <div style={{ maxWidth: '480px' }}>
        <img
          src="/images/maha-eseva-logo.png"
          alt="Online e-Seva logo"
          style={{ height: '48px', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem' }}
        />
        <p style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>Page not found</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--color-primary)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Go Home
          </Link>
          <Link
            to="/services"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1.5px solid var(--color-border-strong)',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              textDecoration: 'none',
              color: 'var(--color-ink)',
            }}
          >
            View Services
          </Link>
          <Link
            to="/contact"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1.5px solid var(--color-border-strong)',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              textDecoration: 'none',
              color: 'var(--color-ink)',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
