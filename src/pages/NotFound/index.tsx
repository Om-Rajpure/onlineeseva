// 404 Not Found Page
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { business } from '../../data/business';

export default function NotFound() {
  const whatsappNum = business.whatsappNumber || '919987772424';

  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--color-background, #FAF7F2)',
        textAlign: 'center',
      }}
    >
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be found on Online e-Seva Kendra."
      />
      <div style={{ maxWidth: '520px' }}>
        <img
          src="/images/maha-eseva-logo.png"
          alt="Online e-Seva logo"
          style={{ height: '52px', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem' }}
        />
        <p style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--color-primary, #E8650A)', lineHeight: 1, margin: '0 0 0.5rem 0' }}>404</p>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--color-ink, #1A1208)',
            margin: '0 0 0.75rem 0',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--color-muted, #6B5E4C)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          Explore our services below or connect with us directly.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          <Link
            to="/"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--color-primary, #E8650A)',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(232, 101, 10, 0.25)',
            }}
          >
            🏠 Return Home
          </Link>
          <Link
            to="/services"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #E5DECA',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A1208)',
            }}
          >
            📋 All 32 Services
          </Link>
          <Link
            to="/schemes"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #E5DECA',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A1208)',
            }}
          >
            🏛️ Government Schemes
          </Link>
          <Link
            to="/contact"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #E5DECA',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A1208)',
            }}
          >
            📞 Contact Us
          </Link>
        </div>

        {/* WhatsApp Help */}
        <div
          style={{
            borderTop: '1px solid #E5DECA',
            paddingTop: '1.5rem',
            fontSize: '0.875rem',
            color: '#6B5E4C',
          }}
        >
          <span>Need immediate assistance? </span>
          <a
            href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I reached a 404 page and need help finding a service.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25D366',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Chat with our Nerul Operator on WhatsApp →
          </a>
        </div>
      </div>
    </main>
  );
}
