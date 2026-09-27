// ============================================================
// Maha E-Seva Kendra — Analytics Abstraction
// Source: Technical Architecture §24
//
// Components must use this abstraction, NOT call any analytics
// provider directly. This allows switching providers later.
// ============================================================

import type { AnalyticsEvent } from '../../types';

/**
 * Track an analytics event.
 * In Phase 0 this is a no-op. Wire up to GA4 or similar in Phase 12.
 */
export function trackEvent(event: AnalyticsEvent): void {
  // Development logging
  if (import.meta.env.DEV) {
    console.debug('[Analytics]', event);
  }

  // Phase 12: Replace below with actual analytics call
  // Example: window.gtag?.('event', event.event, eventParams);
}

// Convenience helpers
export const trackServiceView = (serviceSlug: string, category: string) =>
  trackEvent({ event: 'service_view', serviceSlug, category });

export const trackServiceCTAClick = (serviceSlug: string, action: string) =>
  trackEvent({ event: 'service_cta_click', serviceSlug, action });

export const trackWhatsAppClick = (location: string, serviceSlug?: string) =>
  trackEvent({ event: 'whatsapp_click', serviceSlug, location });

export const trackCallClick = (location: string, serviceSlug?: string) =>
  trackEvent({ event: 'call_click', serviceSlug, location });

export const trackDirectionsClick = (location: string) =>
  trackEvent({ event: 'directions_click', location });

export const trackContactSubmit = (success: boolean, service?: string) =>
  trackEvent({ event: 'contact_submit', service, success });

export const trackSchemeView = (schemeSlug: string) =>
  trackEvent({ event: 'scheme_view', schemeSlug });

export const trackBlogView = (articleSlug: string) =>
  trackEvent({ event: 'blog_view', articleSlug });

export const trackServiceSearch = (query: string) =>
  trackEvent({ event: 'service_search', query });

export const trackServiceFilter = (category: string) =>
  trackEvent({ event: 'service_filter', category });
