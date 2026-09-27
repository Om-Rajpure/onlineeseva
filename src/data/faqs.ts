// ============================================================
// Maha E-Seva Kendra — Global FAQs
// PHASE 0 STUB: Data model established.
// Full FAQ content will be added during Phase 3+ development.
// ============================================================

import type { FAQ } from '../types';

export interface FAQItem extends FAQ {
  id: string;
  category?: string;
}

// Global/homepage FAQs — to be expanded in Phase 3
export const globalFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Maha E-Seva Kendra?',
    answer:
      'Maha E-Seva Kendra is a local service centre in Nerul, Navi Mumbai that helps residents with government certificates, identity documents, online applications, banking, insurance, photography and other digital services.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Where is Maha E-Seva Kendra located?',
    answer:
      'We are located at Shop No-15, Janta Market Bridge, Nerul East, Sector 3, Nerul, Navi Mumbai, Maharashtra 400706.',
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'What services does the centre offer?',
    answer:
      'The centre offers 32 services including Aadhaar, PAN Card, Voter ID, Passport, Driving Licence, government certificates, banking, insurance, photography and more. Browse our Services page for the complete list.',
  },
  {
    id: 'faq-4',
    category: 'pricing',
    question: 'What is the difference between the centre charge and a government fee?',
    answer:
      'The centre charge is our service fee for assisting you with the application process. Government fees are separate amounts payable directly to government departments where applicable. We clearly show both where they apply.',
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'Do I need to pay a government fee in addition to the centre charge?',
    answer:
      'For some services like Passport applications, there is a separate government fee (₹1,500) payable to the government in addition to our service charge (₹300). For most other services, the centre charge is the only fee. We always display both clearly.',
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'How can I contact the centre?',
    answer:
      'You can call us at 099877 72424 or 8850 77 24 24. You can also reach us via WhatsApp. Visit our Contact page for full details.',
  },
];

export const getFAQsByCategory = (category: string): FAQItem[] =>
  globalFAQs.filter((f) => f.category === category);
