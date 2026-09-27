// ============================================================
// Maha E-Seva Kendra — Comprehensive FAQs
// ============================================================

import type { FAQ } from '../types';

export interface FAQItem extends FAQ {
  id: string;
  category: 'general' | 'identity' | 'certificates' | 'visiting' | 'pricing';
}

export const globalFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Maha E-Seva Kendra (Nerul)?',
    answer:
      'Maha E-Seva Kendra is an authorized citizen facilitation and online assistance centre located in Nerul East, Navi Mumbai. We help citizens apply for government certificates, identity cards, public welfare schemes, banking, insurance, and bill payments quickly and accurately without errors.',
  },
  {
    id: 'faq-2',
    category: 'visiting',
    question: 'Where is your Kendra located and what are the business hours?',
    answer:
      'We are located at Shop No-15, Janta Market Bridge, Nerul East, Sector 3, Nerul, Navi Mumbai, Maharashtra 400706 (walking distance from Nerul East railway station). We are open 7 days a week from 9:00 AM to 10:00 PM.',
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'How does your pricing work? Are there hidden fees?',
    answer:
      'We operate on 100% transparent pricing. Our centre facilitation charge covers operator assistance, form filling, document scanning, and status tracking (e.g. ₹40 for Aadhaar Smart Card, ₹150 for PAN Card, ₹300 for Passport assistance). If the government portal levies a statutory fee (such as ₹1,500 for Passports), it is clearly listed and paid directly to the official portal.',
  },
  {
    id: 'faq-4',
    category: 'identity',
    question: 'Can I update my phone number or address in my Aadhaar Card?',
    answer:
      'Yes! We assist with demographic and biometric updates for Aadhaar cards. Please carry your original Aadhaar Card and address proof (if updating address). Ensure the registered mobile is active to receive the verification OTP.',
  },
  {
    id: 'faq-5',
    category: 'identity',
    question: 'What documents are required to apply for a new PAN Card?',
    answer:
      'For a new PAN Card, you will need: 1) Original Aadhaar Card (serving as identity and date of birth proof), 2) Active mobile number linked with Aadhaar, and 3) 2 passport-size photographs (which can also be taken instantly at our Kendra).',
  },
  {
    id: 'faq-6',
    category: 'certificates',
    question: 'How do I get a Domicile or Income Certificate in Maharashtra?',
    answer:
      'We prepare and submit your application on Maharashtra’s official Aaple Sarkar portal. You will need proof of 15-year state residence (for Domicile), ration card/electricity bill, school leaving certificate, and salary slips or Talathi income report (for Income Certificate). We give you an official tracking slip immediately.',
  },
  {
    id: 'faq-7',
    category: 'visiting',
    question: 'Do I need to take an appointment before visiting?',
    answer:
      'No prior appointment is required! You can walk in anytime between 9:00 AM and 10:00 PM, Monday through Sunday. You can also send us a message on WhatsApp beforehand if you want us to pre-verify your documents.',
  },
  {
    id: 'faq-8',
    category: 'general',
    question: 'Do you offer Xerox, scanning, and passport photo printing services?',
    answer:
      'Yes! We have full in-house high-speed scanning, Xerox photocopying, color printing, thermal lamination, and instant digital passport-size photo studio facilities at our Kendra.',
  },
  {
    id: 'faq-9',
    category: 'certificates',
    question: 'How do I check the status of my submitted application?',
    answer:
      'Every application submitted at our Kendra is accompanied by an official government acknowledgment receipt with an Application ID / Token Number. You can track it online or WhatsApp your receipt to 099877 72424 for an instant status check.',
  },
  {
    id: 'faq-10',
    category: 'pricing',
    question: 'What payment modes are accepted at the Kendra?',
    answer:
      'We accept all payment methods: UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards, Net Banking, and Cash.',
  },
];

export const getFAQsByCategory = (category: string): FAQItem[] =>
  category === 'all' ? globalFAQs : globalFAQs.filter((f) => f.category === category);
