// ============================================================
// Maha E-Seva Kendra — Schemes Data
// PHASE 0 STUB: Data model established.
// Full scheme records will be populated in Phase 6.
//
// RULES (from PRD §12, Technical Architecture §13):
// - Never display stale information as currently active
// - Every scheme must have a lastUpdated/verified field
// - Never invent deadlines or eligibility
// - Link to official sources when available
// ============================================================

import type { Scheme } from '../types';

// Phase 0 stub — empty array. Populated in Phase 6.
export const schemes: Scheme[] = [];

// ---- Utility functions ----

export const getSchemeBySlug = (slug: string): Scheme | undefined =>
  schemes.find((s) => s.slug === slug);

export const getActiveSchemes = (): Scheme[] =>
  schemes.filter((s) => s.status !== 'closed');

export const getFeaturedSchemes = (): Scheme[] =>
  schemes.filter((s) => ['new', 'updated', 'open', 'deadline-soon'].includes(s.status));
