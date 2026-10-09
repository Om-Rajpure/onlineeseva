// ============================================================
// Maha E-Seva Kendra — Blog Articles & Guides Data
// Source of truth: Technical Architecture §12, PRD §12
// SEO-Driven Educational Guides for High-Intent Local Searches
//
// EDITORIAL RULES (from PRD §12 & Technical Architecture §12):
// - Educate and guide; do not present as government authority
// - Clear step-by-step instructions and document checklists
// - Cross-linked with corresponding Kendra services
// - Canonical URLs and structured metadata for search ranking
// ============================================================

import type { Article } from '../types';

export const blogCategories = [
  'All Guides',
  'Certificates',
  'Aadhaar & PAN',
  'Passport',
  'Government Schemes',
  'Business Services',
  'Healthcare & Insurance',
  'Pension & Banking',
];

export const articles: Article[] = [
  {
    id: 'article-1',
    slug: 'how-to-apply-domicile-certificate-maharashtra-nerul',
    title: 'How to Apply for Domicile Certificate in Maharashtra: Complete Nerul & Navi Mumbai Guide',
    excerpt: 'Step-by-step guide to applying for a Maharashtra Domicile and Age Certificate. Learn the mandatory 15-year residence proofs, Tahsildar process, fees, and how to avoid common rejection reasons.',
    category: 'Certificates',
    author: 'Maha E-Seva Kendra Nerul Expert Desk',
    publishedAt: 'October 15, 2024',
    updatedAt: 'October 2024',
    readingTime: 5,
    keyTakeaways: [
      'A Domicile Certificate proves 15+ years continuous residence in Maharashtra and has lifetime validity.',
      'Mandatory for Maharashtra state quota college admissions (CAP rounds), government jobs, and state welfare schemes.',
      'Requires 15-year address proof such as continuous school leaving certificates, 15-year old ration card, or electricity bills.',
      'Our Kendra in Nerul East provides complete dossier compilation, affidavit typing, and fast-track Aaple Sarkar portal submission.',
    ],
    sections: [
      {
        heading: 'What is a Maharashtra Domicile Certificate?',
        body: 'A Domicile Certificate (also known as Residence and Age Certificate) is an official legal document issued under the authority of the Sub-Divisional Officer (SDO) or Tahsildar in Maharashtra. It certifies that a person is a permanent resident of the state of Maharashtra and has resided continuously in the state for a minimum period of 15 years.',
        callout: 'Important: A Domicile Certificate in Maharashtra has lifetime validity once issued. You do not need to renew it every year.',
      },
      {
        heading: 'Why Do You Need a Domicile Certificate?',
        body: 'In Maharashtra, having a Domicile Certificate is compulsory for several critical educational and administrative purposes:',
        points: [
          'State Quota College Admissions: Required for Engineering (MHT-CET), Medical (NEET state quota), Pharmacy, MBA, and Polytechnic CAP admissions.',
          'MahaDBT Scholarships: Essential for claiming tuition fee waivers and maintenance allowances for SC, ST, OBC, VJNT, and EBC students.',
          'Maharashtra Government Recruitment: Mandatory for MPSC examinations, police recruitment, municipal corporation jobs (NMMC), and state administrative posts.',
          'Government Housing Schemes: Applying for CIDCO lottery, MHADA housing, and PMAY urban subsidies.',
        ],
      },
      {
        heading: 'Mandatory Documents Required for Domicile',
        body: 'To apply successfully at our Kendra in Nerul East, please carry the following original documents:',
        points: [
          'Primary Photo ID: Original Aadhaar Card or Voter ID Card.',
          '15-Year Residence Proof: School Leaving Certificate showing place of birth/study in Maharashtra, continuous electricity bills, or 15-year old Ration Card.',
          'Applicant / Parent Residence Proof: Father or Mother\'s Domicile / School Leaving Certificate if applicant is minor.',
          'Current Address Proof in Nerul / Navi Mumbai: Electricity bill, registered rent agreement, or telephone bill.',
          'Passport Size Photograph: 2 recent colour photographs (instant photos available at Kendra).',
          'Self-Declaration Affidavit: Standard format provided and notarized at our Kendra.',
        ],
      },
      {
        heading: 'Step-by-Step Application Process at Our Kendra',
        body: 'Applying through Maha E-Seva Kendra Nerul is designed to be smooth, accurate, and transparent:',
        points: [
          'Step 1: Document Verification — We inspect your original proofs to verify the continuous 15-year residency chain and prevent portal rejection.',
          'Step 2: High-Speed Scanning — All documents are scanned in high DPI and compressed to government portal specifications.',
          'Step 3: Aaple Sarkar Portal Filing — Our certified operator completes the official online form with precise revenue tehsil mapping.',
          'Step 4: Tracking Receipt & Issuance — You receive an official government acknowledgment receipt with an Application ID to track the Tahsildar digital signature.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a married woman use her husband’s domicile in Maharashtra?',
        answer: 'If a woman has lived in Maharashtra for 15 years prior to marriage or has resided in Maharashtra continuously after marriage with supporting marriage certificate and address proofs, she can apply for her independent Domicile Certificate.',
      },
      {
        question: 'How many days does it take to receive the certificate?',
        answer: 'Standard government processing by the Sub-Divisional Revenue Office takes between 7 to 15 working days. You can track your application status anytime on WhatsApp with our Kendra team.',
      },
    ],
    relatedServices: ['domicile-certificate', 'income-certificate', 'caste-certificate', 'non-creamy-layer-certificate'],
    relatedArticles: ['income-certificate-maharashtra-application-guide', 'majhi-ladki-bahin-yojana-online-form-documents-guide'],
    seo: {
      title: 'How to Apply for Domicile Certificate in Maharashtra | Nerul Guide',
      description: 'Complete guide on applying for Maharashtra Domicile Certificate in Nerul Navi Mumbai. Documents checklist, 15-year residence proofs, fees, and fast-track Kendra assistance.',
      canonical: 'https://mahaesevakendra.in/blog/how-to-apply-domicile-certificate-maharashtra-nerul',
    },
  },
  {
    id: 'article-2',
    slug: 'aadhaar-pan-card-link-and-correction-guide',
    title: 'Aadhaar & PAN Card Linkage & Correction Guide: How to Fix Name and DOB Mismatches',
    excerpt: 'Facing issues linking your PAN with Aadhaar due to spelling mistakes or date of birth mismatches? Learn how to correct PAN and Aadhaar records and complete biometric linkage.',
    category: 'Aadhaar & PAN',
    author: 'Maha E-Seva Kendra Documentation Team',
    publishedAt: 'October 12, 2024',
    updatedAt: 'October 2024',
    readingTime: 4,
    keyTakeaways: [
      'Unlinked PAN cards become inoperative, affecting income tax filings, high-value banking transactions, and loan approvals.',
      'Even minor spelling differences (e.g. initials vs full name) or date of birth discrepancies will cause portal linkage rejection.',
      'Demographic mismatch requires correcting either the PAN card via NSDL/UTIITSL or Aadhaar via UIDAI before re-attempting linkage.',
      'Our Kendra in Nerul provides in-person biometric verification and name-matching correction services.',
    ],
    sections: [
      {
        heading: 'Why is Aadhaar-PAN Linking Mandatory?',
        body: 'Under Section 139AA of the Income-tax Act, 1961, every person who has been allotted a PAN and is eligible to obtain Aadhaar must link their PAN with Aadhaar. If unlinked, the PAN becomes inoperative, resulting in higher TDS deductions, blocked mutual fund investments, and frozen bank accounts.',
      },
      {
        heading: 'Common Reasons for Linking Failure',
        body: 'In over 90% of failed linkage attempts, the failure occurs due to mismatched demographic data across the two databases:',
        points: [
          'Name Spelling Mismatch: Surname placed first on PAN but middle on Aadhaar, or abbreviated initials.',
          'Date of Birth Discrepancy: Aadhaar showing only year of birth (e.g., 1985) while PAN records exact DD/MM/YYYY.',
          'Father\'s Name Difference: Discrepancy between the spelling on PAN database and birth documents.',
          'Gender Mismatch: Incorrectly captured gender code in older PAN applications.',
        ],
      },
      {
        heading: 'How to Fix the Mismatch at Our Nerul Kendra',
        body: 'Instead of struggling with multiple portal rejections, visit Maha E-Seva Kendra Nerul for a structured correction workflow:',
        points: [
          '1. Diagnostic Audit: We check both your UIDAI database and NSDL/UTIITSL PAN database records to pinpoint the exact difference.',
          '2. Correction Filing: If Aadhaar needs updating, we initiate demographic correction. If PAN requires correction, we file an official CSF (Correction & Changes in PAN) form with supporting proofs.',
          '3. Instant Biometric e-KYC: We authenticate the revised credentials through fingerprint/OTP on the Income Tax e-Filing portal.',
          '4. High-Gloss PVC Card Printing: Once corrected, we print your updated PAN card and PVC Aadhaar Smart Card.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What happens if my PAN is inoperative right now?',
        answer: 'Once you submit the linking request with the government penalty fee and your biometric data is matched, your PAN becomes operative again within 24 to 48 hours.',
      },
      {
        question: 'Can I do instant biometric correction at your Nerul Kendra?',
        answer: 'Yes, our Kendra is equipped with authorized biometric fingerprint and iris scanners to verify your identity on the spot.',
      },
    ],
    relatedServices: ['pan-card', 'aadhaar-smart-card', 'lost-aadhaar-pan-card', 'banking-related-services'],
    relatedArticles: ['how-to-apply-domicile-certificate-maharashtra-nerul', 'msme-udyam-registration-gumasta-licence-navi-mumbai'],
    seo: {
      title: 'Aadhaar PAN Linking & Correction Guide Nerul | Name & DOB Mismatch',
      description: 'Fix PAN and Aadhaar name, date of birth, and spelling mismatches in Nerul Navi Mumbai. Complete biometric linking and reprint PVC cards at Maha E-Seva Kendra.',
      canonical: 'https://mahaesevakendra.in/blog/aadhaar-pan-card-link-and-correction-guide',
    },
  },
  {
    id: 'article-3',
    slug: 'passport-online-application-police-verification-navi-mumbai',
    title: 'Passport Online Application & Police Verification in Navi Mumbai: Complete Process',
    excerpt: 'Everything you need to know about applying for a Fresh or Reissue Indian Passport in Navi Mumbai. PSK appointment booking, required documents, police verification steps, and Kendra assistance.',
    category: 'Passport',
    author: 'Passport Assistance Desk, Nerul',
    publishedAt: 'October 10, 2024',
    updatedAt: 'October 2024',
    readingTime: 6,
    keyTakeaways: [
      'Applying for a passport involves online form filing, payment of ₹1,500 government fee, PSK appointment scheduling, and local police verification.',
      'Navi Mumbai applicants can choose convenient Passport Seva Kendras (PSK) at Thane, Lower Parel, or Malad, or local Post Office PSKs (POPSK).',
      'Accurate document matching between Aadhaar, PAN, School Leaving, and address proofs prevents appointment cancellations.',
      'Maha E-Seva Kendra Nerul assists with form filling, fee payment, slot booking, Annexure declarations, and police station guidance.',
    ],
    sections: [
      {
        heading: 'Types of Passport Applications',
        body: 'Depending on your needs, you can apply under two categories:',
        points: [
          'Fresh Passport: For first-time applicants who have never held an Indian passport before.',
          'Reissue of Passport: For passport renewal (due to 10-year validity expiry), exhaustion of visa pages, change of address/marital status, or lost/damaged passport.',
          'Normal Scheme: Standard processing with police verification before or after issuance (₹1,500 govt fee).',
          'Tatkaal Scheme: Urgent processing within 1–3 business days with additional government fees and strict document requirements.',
        ],
      },
      {
        heading: 'Mandatory Documents for Passport Application',
        body: 'Ensure you have the following original documents ready before visiting the PSK:',
        points: [
          'Proof of Identity & Present Address: Original Aadhaar Card (with matching current address in Navi Mumbai).',
          'Proof of Date of Birth: Birth Certificate issued by Municipal Corporation (NMMC) or School Leaving Certificate / Matriculation Marksheet.',
          'Non-ECR Proof (Emigration Check Not Required): 10th standard (SSC) passing marksheet or higher degree certificate.',
          'Supporting Address Proofs (if living on rent): Registered Leave & License Agreement with utility bill, or bank passbook with photo stamped by bank.',
          'Old Passport Original: Required in case of Reissue / Renewal.',
        ],
      },
      {
        heading: 'Navi Mumbai Police Verification Process',
        body: 'After attending your PSK appointment, your passport file is dispatched electronically to the Navi Mumbai Police Commissionerate and forwarded to your local police station (e.g. Nerul, Seawoods, NRI, or CBD Belapur):',
        points: [
          '1. SMS Notification: You will receive an SMS from Navi Mumbai Police asking you to visit the local police station with original documents.',
          '2. In-Person Visit: Carry original Aadhaar, PAN, Electricity Bill / Rent Agreement, two neighbour witness forms with ID copies, and 2 passport photos.',
          '3. Verification Clearance: The verification officer verifies no criminal records exist and submits the electronic clearance report directly to the Regional Passport Office (RPO Mumbai).',
        ],
      },
      {
        heading: 'How Maha E-Seva Kendra Nerul Helps You',
        body: 'We remove all friction from the passport application process: We fill your comprehensive 4-page passport portal application, pay the exact ₹1,500 government fee through secure gateway, book the earliest available PSK slot in Thane or Mumbai, prepare your document docket, and print your appointment receipt.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to carry physical passport photos to the PSK?',
        answer: 'No. At the Passport Seva Kendra (PSK), your live photograph and biometric fingerprints are captured digitally. However, carry 2 photos for the local police station verification.',
      },
      {
        question: 'Can I apply for a passport if my permanent address and current Navi Mumbai address are different?',
        answer: 'Yes. You must mention both your permanent address and your present address in Navi Mumbai. You must provide valid proof of residence for your present Navi Mumbai address.',
      },
    ],
    relatedServices: ['passport-online-application', 'police-verification', 'passport-size-photo', 'e-registration-rent'],
    relatedArticles: ['how-to-apply-domicile-certificate-maharashtra-nerul', 'aadhaar-pan-card-link-and-correction-guide'],
    seo: {
      title: 'Passport Online Application & Police Verification Navi Mumbai | Nerul Guide',
      description: 'Complete guide for Indian passport application and police verification in Nerul Navi Mumbai. PSK appointment booking, documents required, and Kendra assistance.',
      canonical: 'https://mahaesevakendra.in/blog/passport-online-application-police-verification-navi-mumbai',
    },
  },
  {
    id: 'article-4',
    slug: 'majhi-ladki-bahin-yojana-online-form-documents-guide',
    title: 'Majhi Ladki Bahin Yojana Online Form Guide: Documents, Eligibility & e-KYC Steps',
    excerpt: 'Detailed guide for Maharashtra Mukhyamantri Majhi Ladki Bahin Yojana (₹1,500/month). Learn required documents, income certificate rules, bank Aadhaar-linking (NPCI), and Kendra application support.',
    category: 'Government Schemes',
    author: 'Welfare Schemes Desk',
    publishedAt: 'October 08, 2024',
    updatedAt: 'October 2024',
    readingTime: 5,
    keyTakeaways: [
      'Eligible women aged 21 to 65 years receive ₹1,500 per month directly into their Aadhaar-linked bank accounts.',
      'Annual family income must be below ₹2.5 Lakh or family must possess a valid Yellow/Orange Ration Card.',
      'Bank account must have active NPCI Aadhaar mapping to receive monthly Direct Benefit Transfers (DBT).',
      'Maha E-Seva Kendra Nerul assists with document verification, Domicile/Income certificates, Hamipatra printing, and online submission.',
    ],
    sections: [
      {
        heading: 'What is Majhi Ladki Bahin Yojana?',
        body: 'Mukhyamantri Majhi Ladki Bahin Yojana is a landmark financial empowerment program introduced by the Government of Maharashtra. Under this initiative, eligible female residents of the state receive ₹1,500 per month (totaling ₹18,000 per year) deposited directly into their personal bank accounts to promote financial independence and healthcare security.',
      },
      {
        heading: 'Key Eligibility Criteria',
        body: 'To qualify for the monthly ₹1,500 financial grant, applicants must satisfy the following conditions:',
        points: [
          'Resident of Maharashtra: Must have valid Maharashtra Domicile Certificate, 15-year residence proof, or 15-year old ration card/voter card.',
          'Age Limit: Between 21 years and 65 years as on the application date.',
          'Income Ceiling: Annual family income must not exceed ₹2.50 Lakh (or family should hold a Yellow/Orange Ration Card).',
          'Aadhaar-Seeded Bank Account: Bank account must be in the applicant\'s own name and linked with NPCI Aadhaar Payment Bridge.',
          'Exclusions: Family members should not be permanent government employees or regular income tax payers.',
        ],
      },
      {
        heading: 'Document Checklist for Ladki Bahin Form',
        body: 'Bring the following original documents to our Kendra in Nerul East:',
        points: [
          'Aadhaar Card (linked to an active mobile phone for OTP).',
          'Yellow or Orange Ration Card (or Tehsildar Income Certificate under ₹2.5L).',
          'Maharashtra Domicile Certificate / 15-Year Residence Proof.',
          'Bank Passbook showing Account Number, IFSC, and applicant\'s name.',
          'Hamipatra (Self-declaration form — typed & printed at our Kendra).',
          'Recent Passport-size photographs.',
        ],
      },
      {
        heading: 'Why Many Applications Get Stuck (And How to Prevent It)',
        body: 'The most frequent cause of DBT payment failure is unseeded bank accounts. Having an Aadhaar-linked phone number is not the same as NPCI bank seeding. At Maha E-Seva Kendra Nerul, we verify your bank account NPCI status on the government portal before submitting your application, ensuring guaranteed payment delivery.',
      },
    ],
    faqs: [
      {
        question: 'Is an Income Certificate mandatory if I have an Orange Ration Card?',
        answer: 'If you possess a valid Yellow or Orange Ration card issued in Maharashtra, you generally do not need a separate Tahsildar Income Certificate.',
      },
      {
        question: 'Can unmarried women or single daughters apply for this scheme?',
        answer: 'Yes! Any woman between 21 and 65 years meeting the residency and income criteria can apply, regardless of whether she is married, unmarried, widowed, or divorced.',
      },
    ],
    relatedServices: ['domicile-certificate', 'income-certificate', 'aadhaar-smart-card', 'banking-related-services'],
    relatedArticles: ['how-to-apply-domicile-certificate-maharashtra-nerul', 'income-certificate-maharashtra-application-guide'],
    seo: {
      title: 'Majhi Ladki Bahin Yojana Online Form Guide Nerul | Documents & Eligibility',
      description: 'Apply for Majhi Ladki Bahin Yojana (₹1,500/mo) in Nerul Navi Mumbai. Detailed document checklist, income rules, NPCI bank seeding, and online form assistance.',
      canonical: 'https://mahaesevakendra.in/blog/majhi-ladki-bahin-yojana-online-form-documents-guide',
    },
  },
  {
    id: 'article-5',
    slug: 'income-certificate-maharashtra-application-guide',
    title: 'Maharashtra Income Certificate by Tahsildar: Validity, Documents & Fast-Track Application',
    excerpt: 'Need a Tahsildar Income Certificate for college admission, MahaDBT scholarship, or government schemes? Read our complete Maharashtra guide on 1-year and 3-year certificates.',
    category: 'Certificates',
    author: 'Revenue Services Specialist',
    publishedAt: 'October 05, 2024',
    updatedAt: 'October 2024',
    readingTime: 4,
    keyTakeaways: [
      'An Income Certificate issued by the Tahsildar serves as legal proof of total annual family earnings from all sources.',
      'Available in 1-Year and 3-Year validity formats depending on your educational or administrative requirement.',
      'Essential for MahaDBT scholarships, EWS reservations, fee concessions, and government welfare benefits.',
      'Maha E-Seva Kendra Nerul handles income affidavit preparation, employer slip verification, and Aaple Sarkar digital submission.',
    ],
    sections: [
      {
        heading: 'What is a Tehsildar Income Certificate?',
        body: 'An Income Certificate is an official certificate issued by the Revenue Department (Tahsildar / Sub-Divisional Magistrate) of Maharashtra. It certifies the total gross annual income of an individual or family derived from all sources, including salary, business, agriculture, pensions, and rental income.',
      },
      {
        heading: '1-Year vs 3-Year Income Certificate: Which Do You Need?',
        body: 'Understanding the difference between the two formats is essential before applying:',
        points: [
          '1-Year Income Certificate: Valid for the specific financial year (April 1 to March 31). Commonly required for annual scholarship renewals, school fee waivers, and short-term scheme benefits.',
          '3-Year Income Certificate: Certifies income across the last 3 financial years. Recommended for professional degree admissions (CAP rounds), Non-Creamy Layer (NCL) certificate applications, and long-term financial grants.',
        ],
      },
      {
        heading: 'Required Documents Checklist',
        body: 'Carry the following documents to our Kendra in Nerul East:',
        points: [
          'Aadhaar Card of Applicant / Family Head.',
          'Ration Card (showing names of all dependent family members).',
          'Income Proof: Salary Slip (last 3 months) / Form 16 / ITR V acknowledgement / Income declaration affidavit.',
          'For Business / Shop Owners: CA Certificate or self-declaration of business income + Gumasta/MSME license copy.',
          'For Farmers: 7/12 land extract and crop revenue records.',
          'Self-Declaration Affidavit (typed and notarized at our Kendra).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is a 1-year Income Certificate valid in Maharashtra?',
        answer: 'A 1-year income certificate is valid until the end of the financial year in which it was issued (i.e., until March 31st of that academic/financial year).',
      },
      {
        question: 'Can I apply for an Income Certificate if I do not have a salary slip?',
        answer: 'Yes. If you work in the unorganized sector or run a small informal business, an income declaration affidavit supported by your ration card and bank passbook is accepted by the Tahsildar.',
      },
    ],
    relatedServices: ['income-certificate', 'non-creamy-layer-certificate', 'domicile-certificate', 'caste-certificate'],
    relatedArticles: ['how-to-apply-domicile-certificate-maharashtra-nerul', 'majhi-ladki-bahin-yojana-online-form-documents-guide'],
    seo: {
      title: 'Tahsildar Income Certificate Maharashtra Guide | Nerul Navi Mumbai',
      description: 'Apply for 1-year and 3-year Income Certificate in Nerul Navi Mumbai. Complete Tahsildar revenue process, document requirements, and Maha E-Seva Kendra assistance.',
      canonical: 'https://mahaesevakendra.in/blog/income-certificate-maharashtra-application-guide',
    },
  },
  {
    id: 'article-6',
    slug: 'msme-udyam-registration-gumasta-licence-navi-mumbai',
    title: 'MSME Udyam Registration & Gumasta Licence: Business Setup Guide for Navi Mumbai',
    excerpt: 'Starting a shop, consultancy, or enterprise in Navi Mumbai? Learn how to get MSME Udyam registration, Shop & Establishment Gumasta license, and open a current bank account.',
    category: 'Business Services',
    author: 'Business Registration Cell',
    publishedAt: 'October 01, 2024',
    updatedAt: 'October 2024',
    readingTime: 5,
    keyTakeaways: [
      'MSME Udyam Registration is a free lifetime central government certificate enabling priority sector loans, collateral-free credit, and subsidy benefits.',
      'Gumasta (Shop & Establishment) License is legally mandatory for any commercial establishment or shop operating within Navi Mumbai (NMMC).',
      'Both certificates are the primary legal documents required by banks to open a Business Current Account.',
      'Maha E-Seva Kendra Nerul provides complete assisted registration with instant certificate generation.',
    ],
    sections: [
      {
        heading: 'Why Do You Need Both Udyam & Gumasta?',
        body: 'When starting any commercial business, retail store, consultancy, or service enterprise in Nerul or Navi Mumbai, two core registrations are required:',
        points: [
          'Udyam MSME Registration (Central): Grants micro, small, and medium enterprise status under the Ministry of MSME. Provides 1% interest subvention on bank loans, protection against delayed payments from buyers, and government tender exemptions.',
          'Shop & Establishment Gumasta Licence (State / NMMC): Issued by the Labour Department / Municipal Corporation to certify legal operation of commercial premises, regulation of working hours, and compliance with local municipal bylaws.',
        ],
      },
      {
        heading: 'Documents Required for MSME Udyam Registration',
        body: 'MSME registration is completely paperless when completed through our Kendra:',
        points: [
          'Proprietor / Partner / Director\'s Aadhaar Card (with active OTP phone).',
          'PAN Card of Business / Proprietor.',
          'Business Name & Physical Office Address in Navi Mumbai.',
          'Bank Account Number and IFSC Code.',
          'National Industrial Classification (NIC) activity selection (assisted by our operator).',
        ],
      },
      {
        heading: 'Documents for Shop & Establishment (Gumasta)',
        body: 'To obtain a Gumasta licence in Nerul / Navi Mumbai:',
        points: [
          'Photo of the Shop / Office entrance with name board in Marathi / English.',
          'Proof of Business Premises: Electricity bill / Property tax receipt / Registered Rent Agreement with NOC from owner.',
          'Aadhaar and PAN Card of the Proprietor / Partners.',
          'List of employees and working hours declaration.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much time does it take to get the MSME Udyam Certificate?',
        answer: 'MSME Udyam registration is processed digitally, and your official government certificate with a QR code is generated within 1 to 2 business days.',
      },
      {
        question: 'Is Gumasta renewal required annually in Maharashtra?',
        answer: 'Under recent Maharashtra government amendments, shops and establishments with fewer than 10 employees receive a lifetime Intimation Receipt that does not require annual renewal.',
      },
    ],
    relatedServices: ['small-scale-business-msme-licence', 'shop-establishment-licence-gumasta', 'banking-related-services', 'e-registration-rent'],
    relatedArticles: ['aadhaar-pan-card-link-and-correction-guide', 'passport-online-application-police-verification-navi-mumbai'],
    seo: {
      title: 'MSME Udyam & Gumasta Licence in Navi Mumbai | Business Guide Nerul',
      description: 'Get MSME Udyam certificate and Shop & Establishment Gumasta license in Nerul Navi Mumbai. Complete documents checklist, NMMC rules, and Kendra assistance.',
      canonical: 'https://mahaesevakendra.in/blog/msme-udyam-registration-gumasta-licence-navi-mumbai',
    },
  },
  {
    id: 'article-7',
    slug: 'ayushman-bharat-golden-card-mjpjay-hospital-guide',
    title: 'How to Get Ayushman Bharat Golden Card & MJPJAY Free Healthcare in Maharashtra',
    excerpt: 'Complete guide to obtaining your Ayushman Bharat PM-JAY & MJPJAY Golden Card for ₹5 Lakh cashless treatment per family in Maharashtra hospitals.',
    category: 'Healthcare & Insurance',
    author: 'Health Welfare Desk',
    publishedAt: 'September 28, 2024',
    updatedAt: 'October 2024',
    readingTime: 5,
    keyTakeaways: [
      'Provides up to ₹5,00,000 cashless medical insurance per family per year across empaneled hospitals.',
      'Integrated MJPJAY scheme covers all Ration Card holders (Yellow, Orange, White) across Maharashtra.',
      'Senior citizens aged 70+ years now receive an independent ₹5 Lakh top-up cover under Ayushman Vay Vandana.',
      'PVC Ayushman Card printing and instant biometric verification available at Maha E-Seva Kendra Nerul.',
    ],
    sections: [
      {
        heading: 'What is Ayushman Bharat PM-JAY & MJPJAY?',
        body: 'The integrated Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY) and Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY) is the largest government-sponsored health assurance scheme in the world. It provides comprehensive financial cover up to ₹5,00,000 per family annually for secondary and tertiary hospital care.',
      },
      {
        heading: 'What Treatments are Covered?',
        body: 'The scheme covers more than 1,350 specialized medical and surgical packages:',
        points: [
          'Cardiology: Angioplasty, bypass surgery (CABG), pacemaker implants.',
          'Oncology: Chemotherapy, radiation therapy, and surgical oncology.',
          'Orthopedics: Joint replacement, complex fracture trauma surgery.',
          'General Surgery & Critical Care: Hernia, gallbladder removal, ICU admissions, medications, and diagnostic tests 3 days prior to admission and 15 days post discharge.',
        ],
      },
      {
        heading: 'How to Check Eligibility and Get Your Card',
        body: 'Visit our Kendra in Nerul East with your family members\' Aadhaar cards and your Ration card. Our operator conducts an instant database search on the National Health Authority BIS portal, completes Aadhaar biometric e-KYC, and prints your official high-durability PVC Ayushman Card on the spot.',
      },
    ],
    faqs: [
      {
        question: 'Is there any premium or renewal fee for the Ayushman card?',
        answer: 'No. The health cover provided under PM-JAY / MJPJAY is 100% free with zero annual premium payable by the beneficiary family.',
      },
      {
        question: 'Can private hospitals in Navi Mumbai accept this card?',
        answer: 'Yes. Major private network hospitals in Navi Mumbai, Thane, and Mumbai that are officially empaneled with MJPJAY / PM-JAY accept the card for cashless admission.',
      },
    ],
    relatedServices: ['ayushman-bharat-card', 'abha-health-card', 'health-insurance'],
    relatedArticles: ['majhi-ladki-bahin-yojana-online-form-documents-guide', 'how-to-apply-domicile-certificate-maharashtra-nerul'],
    seo: {
      title: 'Ayushman Bharat Card & MJPJAY Free Health Scheme Nerul Navi Mumbai',
      description: 'Apply for Ayushman Bharat Card & MJPJAY in Nerul Navi Mumbai. Get ₹5 Lakh cashless treatment cover, biometric e-KYC, and instant PVC card printing at Kendra.',
      canonical: 'https://mahaesevakendra.in/blog/ayushman-bharat-golden-card-mjpjay-hospital-guide',
    },
  },
  {
    id: 'article-8',
    slug: 'digital-life-certificate-jeevan-pramaan-pensioners-nerul',
    title: 'Digital Life Certificate (Jeevan Pramaan) for Pensioners in Nerul: In-Person Biometric DLC',
    excerpt: 'Senior citizens and government pensioners in Nerul can now complete their annual Digital Life Certificate (DLC) submission via biometric scanning without standing in long bank queues.',
    category: 'Pension & Banking',
    author: 'Pensioner Assistance Desk',
    publishedAt: 'September 25, 2024',
    updatedAt: 'October 2024',
    readingTime: 3,
    keyTakeaways: [
      'Pensioners must submit an annual Life Certificate (Jeevan Pramaan Patra) every year (traditionally in October–November) to maintain uninterrupted pension disbursals.',
      'Eliminates the physical struggle of visiting bank branches or treasury offices in person.',
      'Biometric fingerprint or iris scanning generates an instant government Pramaan ID.',
      'Available with priority seating for senior citizens at Maha E-Seva Kendra Nerul East.',
    ],
    sections: [
      {
        heading: 'What is a Digital Life Certificate (Jeevan Pramaan)?',
        body: 'Jeevan Pramaan is a biometric-enabled digital service for pensioners initiated by the Government of India. Pensioners of Central Government, State Government of Maharashtra, Defense, Railways, Banks, and EPFO can generate a digital life certificate that is transmitted electronically to their Pension Disbursing Agency (PDA).',
      },
      {
        heading: 'What Pensioners Need to Bring',
        body: 'To generate your Digital Life Certificate in 5 minutes at our Kendra in Nerul East:',
        points: [
          'Aadhaar Card of the pensioner.',
          'Pension Payment Order (PPO) Number.',
          'Pension Bank Account Number and Bank Name.',
          'Active Mobile Phone (to receive the Pramaan ID confirmation SMS).',
        ],
      },
      {
        heading: 'Why Generate DLC at Maha E-Seva Kendra Nerul?',
        body: 'Senior citizens often encounter fingerprint readability issues on standard mobile apps due to aging skin patterns. Our Kendra is equipped with specialized STQC-certified high-sensitivity optical biometric scanners and iris readers to ensure 100% successful capture without repeated trips to the bank.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to submit the physical receipt to my bank after DLC generation?',
        answer: 'No. The Jeevan Pramaan digital certificate is automatically transferred to your pension disbursing bank electronically. You receive an instant SMS with your Pramaan ID for tracking.',
      },
      {
        question: 'Is priority seating available for elderly pensioners at your Kendra?',
        answer: 'Yes, we provide comfortable priority seating and immediate assisted verification for all senior citizens visiting our Nerul East centre.',
      },
    ],
    relatedServices: ['digital-life-certificate-pensioners', 'senior-citizen-card', 'banking-related-services', 'uan-pf-card'],
    relatedArticles: ['how-to-apply-domicile-certificate-maharashtra-nerul', 'aadhaar-pan-card-link-and-correction-guide'],
    seo: {
      title: 'Digital Life Certificate (Jeevan Pramaan) for Pensioners in Nerul Navi Mumbai',
      description: 'Complete annual Digital Life Certificate (DLC) for pensioners at Maha E-Seva Kendra Nerul. Fast biometric & iris Jeevan Pramaan generation with priority senior citizen assistance.',
      canonical: 'https://mahaesevakendra.in/blog/digital-life-certificate-jeevan-pramaan-pensioners-nerul',
    },
  },
];

// ---- Utility functions ----

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (category: string): Article[] =>
  category === 'All Guides'
    ? articles
    : articles.filter((a) => a.category === category);

export const getRelatedArticles = (slugs: string[]): Article[] =>
  articles.filter((a) => slugs.includes(a.slug));
