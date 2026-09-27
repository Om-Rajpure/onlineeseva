// FAQ Page — PHASE 0 STUB — Full implementation in Phase 3
import { Link } from 'react-router-dom';
import { globalFAQs } from '../../data/faqs';

export default function FAQ() {
  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '2rem' }}>
        <Link to="/" style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', display: 'inline-block', marginBottom: '1rem' }}>← Home</Link>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
        <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
          {globalFAQs.map((faq) => (
            <li key={faq.id} style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>{faq.question}</p>
              <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)' }}>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
