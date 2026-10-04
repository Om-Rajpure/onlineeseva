// ============================================================
// ErrorBoundary — Phase 10: Performance, Accessibility & QA
// Gracefully catches runtime errors with a user-friendly UI
// ============================================================

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { business } from '../../data/business';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Maha E-Seva Kendra application:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <main
          style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.5rem',
            fontFamily: 'var(--font-sans, system-ui, sans-serif)',
            backgroundColor: 'var(--color-background, #FDF8F3)',
            color: 'var(--color-ink, #1A202C)',
            textAlign: 'center',
          }}
          role="alert"
        >
          <div
            style={{
              maxWidth: '540px',
              backgroundColor: '#ffffff',
              padding: '3rem 2rem',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--color-ink, #1A202C)',
                marginBottom: '0.75rem',
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-muted, #718096)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              We encountered an unexpected error while rendering this page. You can reload the page, return
              home, or reach out to our team directly on WhatsApp.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                onClick={this.handleReset}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-primary, #FF6F00)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Return Home
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#F7FAFC',
                  color: 'var(--color-ink, #1A202C)',
                  border: '1px solid #CBD5E0',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Reload Page
              </button>
              <a
                href={`https://wa.me/91${business.whatsappNumber}?text=${encodeURIComponent('Hello Maha E-Seva Kendra, I ran into an issue on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                💬 WhatsApp Helpline
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
