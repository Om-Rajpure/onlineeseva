// ============================================================
// Home Page — PHASE 0 STUB
// Full implementation in Phase 3
// ============================================================

export default function Home() {
  return (
    <main style={{ minHeight: '100dvh', fontFamily: 'var(--font-sans)', padding: '2rem', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem' }}>
        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          MAHA E-SEVA KENDRA
        </p>
        <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Government &amp; Online Services
        </h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Phase 0 complete. Full homepage coming in Phase 3.
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
          Shop No-15, Janta Market Bridge, Nerul East, Navi Mumbai — 099877 72424
        </p>
      </div>
    </main>
  );
}
