// ============================================================
// Maha E-Seva Kendra — SEO Utilities
// Source: Technical Architecture §10, §11, PRD §9
// Domain: onlineeseva.com
// ============================================================

import { business } from '../../data/business';

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://onlineeseva.com';
export const SITE_NAME = business.displayName;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png`;

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
    title: `${title} | Online e-Seva Services Nerul | ${SITE_NAME}`,
    description,
    canonical,
    openGraph: {
      title: `${title} | Online e-Seva Services Nerul | ${SITE_NAME}`,
      description,
      image: DEFAULT_OG_IMAGE,
      type: 'website',
    },
  };
}

/**
 * Build Organization structured data (JSON-LD)
 */
export function buildOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.displayName,
    alternateName: [business.legalName, 'Online e-Seva', 'e-Seva Kendra Nerul'],
    url: SITE_URL,
    logo: `${SITE_URL}/images/maha-eseva-logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91-${business.phoneNumbers[0]?.number.replace(/^0/, '')}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Marathi', 'Hindi'],
      },
    ],
  };
}

/**
 * Build WebSite structured data (JSON-LD) with SearchAction
 */
export function buildWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.displayName,
    alternateName: 'Online e-Seva Kendra Navi Mumbai',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
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
    '@type': 'GovernmentPermitOrLicensingService',
    additionalType: 'https://schema.org/LocalBusiness',
    name: business.displayName,
    alternateName: business.legalName,
    image: `${SITE_URL}/images/maha-eseva-logo.png`,
    description: business.shortDescription,
    priceRange: '₹40 - ₹1200',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: 'Nerul, Navi Mumbai',
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0330,
      longitude: 73.0169,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
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
    areaServed: business.serviceArea.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
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
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
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
