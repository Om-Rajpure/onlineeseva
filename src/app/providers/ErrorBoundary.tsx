// ============================================================
// Maha E-Seva Kendra — Error Boundary
// Source: Technical Architecture §23, Implementation Phases §3
// ============================================================

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // In production, send to error reporting service
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          <h1 style={{ fontSize: 'var(--text-2xl)', marginBottom: '1rem', color: 'var(--color-error)' }}>
            Something went wrong
          </h1>
          <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', maxWidth: '480px' }}>
            We encountered an unexpected error. Please refresh the page or contact us if the problem persists.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Refresh Page
            </button>
            <a
              href="/"
              style={{
                padding: '0.75rem 1.5rem',
                border: '1.5px solid var(--color-border-strong)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                color: 'var(--color-ink)',
                fontWeight: 600,
              }}
            >
              Go to Home
            </a>
          </div>
          {import.meta.env.DEV && this.state.error && (
            <details
              style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'var(--color-error-soft)',
                borderRadius: 'var(--radius-md)',
                maxWidth: '600px',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <summary style={{ cursor: 'pointer', color: 'var(--color-error)', fontWeight: 600 }}>
                Error Details (dev only)
              </summary>
              <pre style={{ marginTop: '0.5rem', fontSize: '0.75rem', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
