// ============================================================
// 404 Not Found Page — Phase 10 Performance, Accessibility & QA
// ============================================================

import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { business } from '../../data/business';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
        padding: '3rem 1.5rem',
        backgroundColor: 'var(--color-background, #FDF8F3)',
        textAlign: 'center',
      }}
    >
      <SEO
        title="404 — Page Not Found | Maha E-Seva Kendra"
        description="The requested page could not be found. Explore our government certificates, schemes, or citizen guides."
      />

      <div
        style={{
          maxWidth: '560px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid var(--color-border, #E2E8F0)',
          padding: '3rem 2rem',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.06)',
        }}
      >
        <p
          style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            color: 'var(--color-primary, #FF6F00)',
            lineHeight: 1,
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--color-ink, #1A202C)',
            margin: '0 0 0.75rem 0',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--color-muted, #718096)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          Explore our primary services or connect with us directly.
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
              background: 'var(--color-primary, #FF6F00)',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.25)',
            }}
          >
            🏠 Return Home
          </Link>
          <Link
            to="/services"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #CBD5E0',
              backgroundColor: '#F7FAFC',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A202C)',
            }}
          >
            📋 All 32 Services
          </Link>
          <Link
            to="/schemes"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #CBD5E0',
              backgroundColor: '#F7FAFC',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A202C)',
            }}
          >
            🏛️ Government Schemes
          </Link>
          <Link
            to="/blog"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #CBD5E0',
              backgroundColor: '#F7FAFC',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              color: 'var(--color-ink, #1A202C)',
            }}
          >
            📚 Citizen Guides
          </Link>
        </div>

        {/* WhatsApp Help */}
        <div
          style={{
            borderTop: '1px solid #EDF2F7',
            paddingTop: '1.5rem',
            fontSize: '0.875rem',
            color: '#718096',
          }}
        >
          <span>Need immediate assistance? </span>
          <a
            href={`https://wa.me/91${business.whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I reached a 404 page and need help finding a service.')}`}
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
