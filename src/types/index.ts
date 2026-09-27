// ============================================================
// Maha E-Seva Kendra — Core TypeScript Data Models
// Source of truth: Technical Architecture Document §6
// ============================================================

// ------- Service Category -------
export type ServiceCategory =
  | 'identity'
  | 'certificates'
  | 'health-welfare'
  | 'travel-transport'
  | 'employment'
  | 'business-registration'
  | 'banking'
  | 'insurance'
  | 'photography-printing'
  | 'government-forms'
  | 'other';

// ------- Document Requirement -------
export interface DocumentRequirement {
  name: string;
  description?: string;
  required: boolean;
  note?: string;
}

// ------- Process Step -------
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ------- FAQ Item -------
export interface FAQ {
  question: string;
  answer: string;
}

// ------- SEO Data -------
export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
  };
  noindex?: boolean;
}

// ------- Service -------
export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  /** Centre service charge in INR, null if not confirmed */
  price: number | null;
  /** Label shown on UI, e.g. "₹300" or "Contact for pricing" */
  priceLabel: string;
  /** Government fee note, e.g. "₹1,500 government fee (separate)" */
  governmentFee: string | null;
  documents: DocumentRequirement[];
  eligibility: string[];
  processSteps: ProcessStep[];
  /** Processing time info, null if unverified */
  processingInfo: string | null;
  faqs: FAQ[];
  popular: boolean;
  featured: boolean;
  status: 'active' | 'paused';
  lastUpdated: string;
  seo: SEOData;
  /** Related service slugs for cross-linking */
  relatedServices?: string[];
  /** Related blog slugs */
  relatedArticles?: string[];
  /** Icon name from Lucide React */
  icon?: string;
}

// ------- Service Category Config -------
export interface CategoryConfig {
  id: ServiceCategory;
  label: string;
  description: string;
}

// ------- Scheme Status -------
export type SchemeStatus = 'new' | 'updated' | 'open' | 'deadline-soon' | 'closed' | 'upcoming';

// ------- Scheme -------
export interface Scheme {
  id: string;
  slug: string;
  title: string;
  status: SchemeStatus;
  summary: string;
  overview: string;
  eligibility: string[];
  benefits: string[];
  documents: DocumentRequirement[];
  applicationSteps: ProcessStep[];
  dates: {
    startDate?: string;
    endDate?: string;
    lastDate?: string;
    importantDates?: { label: string; date: string }[];
  };
  officialSource?: {
    label: string;
    url: string;
  };
  lastUpdated: string;
  relatedServices: string[];
  seo: SEOData;
}

// ------- Blog Article -------
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  readingTime: number; // in minutes
  relatedServices: string[];
  relatedArticles: string[];
  seo: SEOData;
  noindex?: boolean;
}

// ------- Business Configuration -------
export interface PhoneNumber {
  number: string;
  display: string;
  whatsapp: boolean;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface BusinessConfig {
  name: string;
  displayName: string;
  legalName?: string;
  shortDescription: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    full: string;
  };
  phoneNumbers: PhoneNumber[];
  hours: BusinessHours[];
  hoursVerified: boolean;
  googleMapsUrl: string;
  whatsappNumber: string;
  rating?: {
    score: number;
    count: number;
    verified: boolean;
    lastChecked: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
  serviceArea: string[];
  lastVerified: string;
  founded?: string;
}

// ------- Analytics Events -------
export type AnalyticsEvent =
  | { event: 'service_view'; serviceSlug: string; category: string }
  | { event: 'service_cta_click'; serviceSlug: string; action: string }
  | { event: 'whatsapp_click'; serviceSlug?: string; location: string }
  | { event: 'call_click'; serviceSlug?: string; location: string }
  | { event: 'directions_click'; location: string }
  | { event: 'contact_submit'; service?: string; success: boolean }
  | { event: 'scheme_view'; schemeSlug: string }
  | { event: 'blog_view'; articleSlug: string }
  | { event: 'service_search'; query: string }
  | { event: 'service_filter'; category: string };
