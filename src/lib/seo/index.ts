// ============================================================
// Maha E-Seva Kendra — SEO Utilities
// Source: Technical Architecture §10, §11, PRD §9
// ============================================================

import { business } from '../../data/business';

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mahaesevakendra.in';
export const SITE_NAME = business.displayName;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
  };
  noindex?: boolean;
  jsonLd?: object;
}

/**
 * Build canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Build service page SEO metadata
 */
export function buildServiceSEO(
  title: string,
  description: string,
  slug: string
): PageSEO {
  const canonical = getCanonicalUrl(`/services/${slug}`);
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    canonical,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      image: DEFAULT_OG_IMAGE,
      type: 'website',
    },
  };
}

/**
 * Build LocalBusiness structured data (JSON-LD)
 * Only use verified facts from business.ts
 */
export function buildLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.displayName,
    alternateName: business.legalName,
    description: business.shortDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    telephone: business.phoneNumbers[0]?.number,
    url: SITE_URL,
    // Only include rating if verified
    ...(business.rating?.verified
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: business.rating.score,
            reviewCount: business.rating.count,
          },
        }
      : {}),
    areaServed: business.serviceArea,
  };
}

/**
 * Build BreadcrumbList structured data (JSON-LD)
 */
export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Build FAQ structured data (JSON-LD)
 */
export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * WhatsApp deep link with optional prefilled message
 * Source: Technical Architecture §16
 */
export function buildWhatsAppUrl(
  message?: string,
  phoneNumber: string = business.whatsappNumber
): string {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hello ${business.displayName}, I need assistance with a service. Could you help me?`);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * WhatsApp URL pre-filled with a service-specific message
 */
export function buildServiceWhatsAppUrl(serviceName: string): string {
  const message = `Hello ${business.displayName}, I need help with ${serviceName}. Please tell me the documents required and the process.`;
  return buildWhatsAppUrl(message);
}

/**
 * Phone call URL
 */
export function buildCallUrl(number: string): string {
  return `tel:${number.replace(/\s/g, '')}`;
}
