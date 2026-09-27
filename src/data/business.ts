// ============================================================
// Maha E-Seva Kendra — Business Configuration
// Source of truth for all business data across the site.
// ALL components must import business data from this file.
// NEVER hardcode business facts in JSX components.
// ============================================================

import type { BusinessConfig } from '../types';

export const business: BusinessConfig = {
  name: 'Maha E-Seva Kendra',
  displayName: 'Maha E-Seva Kendra',
  legalName: 'Vinod Maha E-Seva Kendra',
  shortDescription:
    'Government & Online Service Assistance Centre in Nerul, Navi Mumbai. Certificates, identity documents, applications, banking, insurance and more.',
  address: {
    line1: 'Shop No-15, Janta Market Bridge',
    line2: 'Nerul East, Sector 3',
    city: 'Nerul, Navi Mumbai',
    district: 'Navi Mumbai',
    state: 'Maharashtra',
    pincode: '400706',
    full: 'Shop No-15, Janta Market Bridge, Nerul East, Sector 3, Nerul, Navi Mumbai, Maharashtra 400706',
  },
  phoneNumbers: [
    {
      number: '09987772424',
      display: '099877 72424',
      whatsapp: true,
    },
    {
      number: '08850772424',
      display: '8850 77 24 24',
      whatsapp: false,
    },
  ],
  // Business hours NOT verified by owner yet — do not display until confirmed
  hours: [],
  hoursVerified: false,
  // Google Maps URL for directions — to be verified by owner
  googleMapsUrl:
    'https://www.google.com/maps/search/Maha+E-Seva+Kendra,+Shop+No-15+Janta+Market+Bridge+Nerul+East+Navi+Mumbai',
  // WhatsApp number — to be verified by owner
  whatsappNumber: '919987772424',
  // Rating: 4.9 / 5 from 1,466 reviews at time of project planning.
  // This value must be treated as a reference snapshot, not a live feed.
  rating: {
    score: 4.9,
    count: 1466,
    verified: false,          // set to true only when owner confirms currency
    lastChecked: '2026-09',
  },
  socialLinks: [],           // Not supplied — to be added after owner provides
  serviceArea: [
    'Nerul',
    'Nerul East',
    'Navi Mumbai',
    'Sector 3 Nerul',
    'Belapur',
    'Seawoods',
    'CBD Belapur',
    'Airoli',
    'Maharashtra',
  ],
  lastVerified: '2026-09-27', // Date of documentation; owner to re-verify before launch
};
