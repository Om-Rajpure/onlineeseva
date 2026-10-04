// ============================================================
// Maha E-Seva Kendra — Schemes Data
// Phase 6 — Full Implementation
//
// RULES (from PRD §12, Technical Architecture §13):
// - Never display stale information as currently active
// - Every scheme must have a lastUpdated / verified field
// - Never invent deadlines or eligibility
// - Link to official sources when available
// - Mark status: 'new' | 'updated' | 'open' | 'deadline-soon' | 'closed' | 'upcoming'
// ============================================================

import type { Scheme } from '../types';

export const schemes: Scheme[] = [
  // ── 1. Ladki Bahin Yojana ─────────────────────────────────
  {
    id: 'ladki-bahin-yojana',
    slug: 'ladki-bahin-yojana',
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana',
    status: 'open',
    summary:
      'Monthly financial assistance of ₹1,500 for eligible women of Maharashtra aged 21–65 years.',
    overview:
      'The Maharashtra government\'s flagship women-empowerment scheme provides direct benefit transfer of ₹1,500 per month to eligible women. The goal is to strengthen the financial independence of women and improve their quality of life. Applications are processed through Maha E-Seva Kendra centres across the state.',
    eligibility: [
      'Female resident of Maharashtra (domicile certificate required)',
      'Age between 21 and 65 years',
      'Annual family income below ₹2.5 lakh',
      'Must hold a valid Aadhaar card linked to a bank account',
      'Should not be an income-tax payer',
      'Should not receive benefits under similar central/state schemes',
    ],
    benefits: [
      '₹1,500 per month transferred directly to beneficiary\'s bank account',
      'Cumulative annual benefit of ₹18,000',
      'No repayment required — not a loan',
    ],
    documents: [
      { name: 'Aadhaar Card', required: true, description: 'Linked to active bank account' },
      { name: 'Ration Card / Yellow / Orange / Antyodaya card', required: true },
      {
        name: 'Maharashtra Domicile Certificate',
        required: true,
        description: 'Confirming Maharashtra residency',
      },
      { name: 'Bank Passbook (first page)', required: true, description: 'Account must be in applicant\'s name' },
      {
        name: 'Income Certificate',
        required: true,
        description: 'Annual family income below ₹2.5 lakh — issued by Tehsildar',
      },
      { name: 'Passport-size photograph', required: true },
      {
        name: 'Self-declaration form',
        required: true,
        description: 'Provided at the Seva Kendra at the time of application',
      },
      {
        name: 'Age proof (Birth Certificate / 10th Marksheet)',
        required: false,
        note: 'Required only if date of birth not on Aadhaar',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Visit Maha E-Seva Kendra',
        description:
          'Bring original documents plus photocopies to our Nerul East centre. Our staff will guide you through the form.',
      },
      {
        step: 2,
        title: 'Fill the application form',
        description: 'The form is filled digitally at the kendra. No handwritten form is needed.',
      },
      {
        step: 3,
        title: 'Document verification & upload',
        description: 'Documents are scanned, verified and uploaded on the official portal.',
      },
      {
        step: 4,
        title: 'Receive acknowledgement receipt',
        description:
          'You will receive a printed acknowledgement with your application number for tracking.',
      },
      {
        step: 5,
        title: 'Benefit credited to bank account',
        description:
          'On approval, ₹1,500/month is credited directly to your linked bank account via DBT.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Scheme launched', date: 'July 2024' },
        { label: 'Applications status', date: 'Ongoing — no current deadline announced' },
      ],
    },
    officialSource: {
      label: 'Official Scheme Portal — Maharashtra Government',
      url: 'https://ladakibahin.maharashtra.gov.in',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['aadhaar-services', 'income-certificate', 'domicile-certificate'],
    seo: {
      title: 'Ladki Bahin Yojana Application — Maha E-Seva Kendra Nerul',
      description:
        'Apply for Mukhyamantri Majhi Ladki Bahin Yojana at our Nerul E-Seva centre. Get ₹1,500/month DBT. We help with documents, form fill & submission.',
    },
  },

  // ── 2. PM Awas Yojana (Urban) ─────────────────────────────
  {
    id: 'pm-awas-yojana-urban',
    slug: 'pm-awas-yojana-urban',
    title: 'Pradhan Mantri Awas Yojana — Urban (PMAY-U)',
    status: 'open',
    summary:
      'Housing subsidy scheme for economically weaker sections, low-income groups, and middle-income groups to purchase or construct a home.',
    overview:
      'PMAY-Urban aims to provide affordable housing to all eligible urban citizens. Beneficiaries can get interest subsidy on home loans under the Credit Linked Subsidy Scheme (CLSS). Applications can be made through Maha E-Seva Kendra.',
    eligibility: [
      'Indian citizen residing in an urban area',
      'EWS: Annual household income up to ₹3 lakh',
      'LIG: Annual household income ₹3 lakh – ₹6 lakh',
      'MIG-I: Annual household income ₹6 lakh – ₹12 lakh',
      'MIG-II: Annual household income ₹12 lakh – ₹18 lakh',
      'Should not own a pucca house in India',
      'First-time home buyers preferred for CLSS benefit',
    ],
    benefits: [
      'Interest subsidy on home loans (upto 6.5% for EWS/LIG)',
      'Reduced EMI due to upfront subsidy credit to loan account',
      'Maximum loan tenure considered: 20 years',
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'PAN Card', required: true },
      { name: 'Income Proof / Income Certificate', required: true },
      { name: 'Bank Loan Sanction Letter (if loan availed)', required: false },
      { name: 'Proof of Property / Agreement to Sale', required: false },
      { name: 'Caste Certificate (if SC/ST/OBC)', required: false },
      { name: 'Passport-size photograph', required: true },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Check eligibility',
        description: 'Confirm your income category (EWS / LIG / MIG) and that you do not own a pucca house.',
      },
      {
        step: 2,
        title: 'Visit our kendra with documents',
        description: 'Bring all originals and copies. We assist with the online application on the PMAY portal.',
      },
      {
        step: 3,
        title: 'Application submitted on PMAY portal',
        description: 'We fill and submit the application on pmaymis.gov.in. You receive an acknowledgement.',
      },
      {
        step: 4,
        title: 'Verification by urban local body',
        description: 'The local municipal body verifies the application and documents.',
      },
      {
        step: 5,
        title: 'Subsidy credited',
        description: 'On approval, the interest subsidy amount is credited directly to your home loan account.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Current phase open', date: 'Ongoing — PMAY-U Phase II in progress' },
      ],
    },
    officialSource: {
      label: 'PMAY Urban Portal — Ministry of Housing & Urban Affairs',
      url: 'https://pmaymis.gov.in',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['pan-card', 'aadhaar-services', 'income-certificate'],
    seo: {
      title: 'PM Awas Yojana Urban Application — Maha E-Seva Kendra Nerul',
      description:
        'Apply for PMAY Urban housing subsidy at Maha E-Seva Kendra, Nerul East. We help with form filling, document upload & submission on the official portal.',
    },
  },

  // ── 3. Atal Pension Yojana ────────────────────────────────
  {
    id: 'atal-pension-yojana',
    slug: 'atal-pension-yojana',
    title: 'Atal Pension Yojana (APY)',
    status: 'open',
    summary:
      'Government-backed pension scheme for workers in the unorganised sector, guaranteeing a fixed monthly pension of ₹1,000–₹5,000 after age 60.',
    overview:
      'Atal Pension Yojana is a pension scheme administered by the Pension Fund Regulatory and Development Authority (PFRDA). Any Indian citizen aged 18–40 years can enrol through their savings bank account. The government also co-contributes 50% (up to ₹1,000/year) for eligible subscribers.',
    eligibility: [
      'Indian citizen aged between 18 and 40 years',
      'Must hold a savings bank account (nationalised / scheduled bank / post office)',
      'Not a member of any statutory social security scheme (e.g. EPF/EPS)',
      'Not an income-tax payer (for government co-contribution)',
    ],
    benefits: [
      'Guaranteed monthly pension of ₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 after age 60',
      'Government co-contribution of 50% (up to ₹1,000/year) for eligible subscribers (5 years)',
      'On subscriber\'s death, spouse receives pension; nominee gets corpus',
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'Savings Bank Account details (passbook / account number)', required: true },
      { name: 'Mobile number linked to bank account', required: true },
      { name: 'Nomination details (name & relationship)', required: true },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Confirm bank account eligibility',
        description: 'Ensure you have an active savings bank account and a mobile number linked to it.',
      },
      {
        step: 2,
        title: 'Enrol at our kendra',
        description: 'We fill the APY registration form and submit it electronically to your bank.',
      },
      {
        step: 3,
        title: 'Choose your pension amount',
        description: 'Select your desired monthly pension (₹1,000 to ₹5,000) — the contribution amount is calculated accordingly.',
      },
      {
        step: 4,
        title: 'Auto-debit set up by bank',
        description: 'Your bank sets up auto-debit of the monthly contribution from your savings account.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Scheme enrolment', date: 'Open throughout the year' },
      ],
    },
    officialSource: {
      label: 'National Pension System Trust — APY',
      url: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['banking-services'],
    seo: {
      title: 'Atal Pension Yojana (APY) Enrolment — Maha E-Seva Kendra Nerul',
      description:
        'Enrol in Atal Pension Yojana at Maha E-Seva Kendra, Nerul. Guaranteed pension ₹1,000–₹5,000/month after 60. We handle form & bank submission.',
    },
  },

  // ── 4. Pradhan Mantri Jeevan Jyoti Bima Yojana ───────────
  {
    id: 'pmjjby',
    slug: 'pmjjby',
    title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    status: 'open',
    summary:
      'Life insurance scheme offering ₹2 lakh cover at just ₹436/year for individuals aged 18–50.',
    overview:
      'PMJJBY is a government-backed life insurance scheme available through banks and post offices. It offers a ₹2 lakh life cover for a renewable premium of ₹436 per year. Our kendra helps you enrol or renew via your savings account.',
    eligibility: [
      'Age between 18 and 50 years',
      'Must hold a savings bank account in a participating bank',
      'Aadhaar must be the primary KYC for the account',
    ],
    benefits: [
      '₹2 lakh paid to nominee in case of death (any cause)',
      'Very low premium: ₹436/year (auto-debited annually on 1 June)',
      'Renewable every year without fresh medical tests',
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'Bank account details (passbook)', required: true },
      { name: 'Nominee details (name, relationship, Aadhaar)', required: true },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Visit our kendra',
        description: 'Bring your Aadhaar and bank passbook.',
      },
      {
        step: 2,
        title: 'Enrolment form submitted',
        description: 'We fill and submit the form to link to your savings account.',
      },
      {
        step: 3,
        title: 'Auto-debit of ₹436',
        description: 'The annual premium is auto-debited from your account on 1 June each year.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Annual renewal window', date: 'May–June each year' },
      ],
    },
    officialSource: {
      label: 'Jan Suraksha — Ministry of Finance',
      url: 'https://jansuraksha.gov.in/Forms-PMJJBY.aspx',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['insurance-services', 'banking-services'],
    seo: {
      title: 'PMJJBY Life Insurance Enrolment — Maha E-Seva Kendra Nerul',
      description:
        'Enrol in PMJJBY at Maha E-Seva Kendra Nerul. ₹2 lakh life cover for ₹436/year. Quick form fill & bank submission at our Nerul East centre.',
    },
  },

  // ── 5. Pradhan Mantri Suraksha Bima Yojana ───────────────
  {
    id: 'pmsby',
    slug: 'pmsby',
    title: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    status: 'open',
    summary:
      'Accidental insurance scheme offering ₹2 lakh cover for accidental death/permanent disability at just ₹20/year.',
    overview:
      'PMSBY is a government accident insurance scheme available through any savings bank account. For a premium of just ₹20 per year, it covers accidental death and permanent total disability at ₹2 lakh, and partial disability at ₹1 lakh.',
    eligibility: [
      'Age between 18 and 70 years',
      'Must hold a savings bank account in a participating bank',
    ],
    benefits: [
      '₹2 lakh on accidental death or permanent total disability',
      '₹1 lakh on permanent partial disability',
      'Ultra-low premium: ₹20/year (auto-debited)',
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'Bank account details (passbook)', required: true },
      { name: 'Nominee details', required: true },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Visit our kendra with Aadhaar and bank passbook',
        description: 'Our staff will submit the enrolment form linked to your savings account.',
      },
      {
        step: 2,
        title: 'Auto-debit of ₹20 per year',
        description: 'The premium is auto-debited on 1 June each year from your savings account.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Annual renewal window', date: 'May–June each year' },
      ],
    },
    officialSource: {
      label: 'Jan Suraksha — Ministry of Finance',
      url: 'https://jansuraksha.gov.in/Forms-PMSBY.aspx',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['insurance-services', 'banking-services'],
    seo: {
      title: 'PMSBY Accidental Insurance — Maha E-Seva Kendra Nerul',
      description:
        'Enrol in PMSBY at Maha E-Seva Kendra, Nerul. ₹2 lakh accidental cover at just ₹20/year. We help with form & bank submission.',
    },
  },

  // ── 6. Mahatma Jyotiba Phule Jan Arogya Yojana ───────────
  {
    id: 'mjpjay',
    slug: 'mjpjay',
    title: 'Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)',
    status: 'open',
    summary:
      'Maharashtra\'s health insurance scheme offering cashless medical treatment up to ₹1.5 lakh per year for eligible families.',
    overview:
      'MJPJAY (formerly RGJAY) is Maharashtra\'s state health insurance scheme for economically weaker sections. It covers cashless hospitalisation at empanelled hospitals for 996+ medical procedures. Our kendra helps you with the registration/renewal process.',
    eligibility: [
      'Holders of Yellow, Orange, Antyodaya (white) ration cards issued by Maharashtra',
      'Journalists registered with Maharashtra government',
      'Farmers covered under Farmer\'s Pradhan Mantri Fasal Bima Yojana',
      'Construction workers registered with Maharashtra Building & Other Construction Workers Board',
    ],
    benefits: [
      'Cashless treatment up to ₹1.5 lakh per family per year at empanelled hospitals',
      'Coverage for 996+ surgical procedures including cardiac, neuro, ortho and oncology',
      'Kidney transplant covered up to ₹2.5 lakh (lifetime)',
      'No premium required for ration-card holders',
    ],
    documents: [
      {
        name: 'Ration Card (Yellow / Orange / Antyodaya)',
        required: true,
        description: 'Must be Maharashtra-issued and valid',
      },
      { name: 'Aadhaar Card of all family members', required: true },
      { name: 'Passport-size photograph of beneficiary', required: true },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Check ration card eligibility',
        description: 'Yellow, Orange, and Antyodaya (white) card holders are automatically eligible.',
      },
      {
        step: 2,
        title: 'Enrolment at our kendra',
        description: 'We register your family on the MJPJAY portal with Aadhaar and ration card details.',
      },
      {
        step: 3,
        title: 'Smart health card issued',
        description: 'A biometric smart card is issued (or digital card) linking all family members.',
      },
      {
        step: 4,
        title: 'Use at empanelled hospitals',
        description: 'Present your card at any MJPJAY-empanelled hospital to avail cashless treatment.',
      },
    ],
    dates: {
      importantDates: [
        { label: 'Scheme status', date: 'Active — registrations ongoing' },
      ],
    },
    officialSource: {
      label: 'MJPJAY Official Portal — Maharashtra Government',
      url: 'https://www.jeevandayee.gov.in',
    },
    lastUpdated: '2025-09-01',
    relatedServices: ['health-welfare-services'],
    seo: {
      title: 'MJPJAY Health Insurance Registration — Maha E-Seva Kendra Nerul',
      description:
        'Register for Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY) at our Nerul E-Seva centre. Cashless health cover up to ₹1.5 lakh. We help with full enrolment.',
    },
  },
];

// ---- Utility functions ----

export const getSchemeBySlug = (slug: string): Scheme | undefined =>
  schemes.find((s) => s.slug === slug);

export const getActiveSchemes = (): Scheme[] =>
  schemes.filter((s) => s.status !== 'closed');

export const getFeaturedSchemes = (): Scheme[] =>
  schemes.filter((s) => ['new', 'updated', 'open', 'deadline-soon'].includes(s.status));
