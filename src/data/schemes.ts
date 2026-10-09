// ============================================================
// Maha E-Seva Kendra — Government Schemes Data
// Source of truth: Technical Architecture §13, PRD §12
// Verified Schemes for Maharashtra & Central Citizen Welfare
//
// FRESHNESS RULES:
// - Never display stale information as currently active
// - Every scheme has a verified lastUpdated field
// - No invented deadlines or eligibility
// - Direct links to official government sources
// ============================================================

import type { Scheme } from '../types';

export const schemes: Scheme[] = [
  {
    id: 'scheme-1',
    slug: 'majhi-ladki-bahin-yojana',
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana',
    status: 'open',
    category: 'women-child',
    department: 'Department of Women & Child Development, Govt of Maharashtra',
    financialAssistance: '₹1,500 per month (Direct Bank Transfer)',
    summary: 'Maharashtra state flagship welfare scheme providing ₹1,500 monthly financial assistance directly into bank accounts of eligible women aged 21–65 years.',
    overview: 'Mukhyamantri Majhi Ladki Bahin Yojana is an empowering social welfare initiative launched by the Government of Maharashtra. Under this scheme, eligible women residing in Maharashtra receive direct financial aid of ₹1,500 per month (₹18,000 annually) to support economic independence, nutritional health, and family well-being.',
    benefits: [
      '₹1,500 monthly financial assistance transferred directly via DBT into Aadhaar-linked bank account.',
      '₹18,000 total annual financial support for the beneficiary family.',
      'No application fee or hidden service commission on official government processing.',
      'Fast-track verification and offline documentation guidance at our Kendra.',
    ],
    eligibility: [
      'Must be a permanent female resident of Maharashtra state.',
      'Age must be between 21 years and 65 years at the time of application.',
      'Combined annual family income must not exceed ₹2.5 Lakh (or family must possess a valid Yellow/Orange Ration Card).',
      'Applicant must possess an individual bank account seeded with Aadhaar (NPCI active).',
      'No family member should be a regular/permanent government employee or an income tax payer.',
    ],
    documents: [
      {
        name: 'Aadhaar Card',
        required: true,
        note: 'Linked with active mobile number for OTP verification',
      },
      {
        name: 'Maharashtra Domicile Certificate / 15-Year Residence Proof',
        required: true,
        note: 'Can use 15-year old Ration Card, Voter ID, or School Leaving Certificate if Domicile is unavailable',
      },
      {
        name: 'Income Certificate (Under ₹2.5 Lakh) OR Yellow/Orange Ration Card',
        required: true,
        note: 'Tahsildar issued Income Certificate or valid Ration Card',
      },
      {
        name: 'Bank Account Passbook / Statement',
        required: true,
        note: 'Must be in the applicant woman\'s name and linked with Aadhaar/NPCI',
      },
      {
        name: 'Hamipatra (Self-Declaration Form)',
        required: true,
        note: 'We provide and print the prescribed declaration form at our Kendra',
      },
      {
        name: 'Passport Size Photographs',
        required: true,
        note: 'Instant passport photo printing available at our Kendra',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Document & Eligibility Verification',
        description: 'Bring your Aadhaar card, ration card/income certificate, and bank passbook to our Nerul Kendra. We verify NPCI Aadhaar-linking status.',
      },
      {
        step: 2,
        title: 'Nari Shakti Doot / Portal Form Filling',
        description: 'Our operator accurately enters all demographic and family details into the official Maharashtra government Ladki Bahin portal.',
      },
      {
        step: 3,
        title: 'Biometric / Mobile OTP e-KYC',
        description: 'Instant Aadhaar OTP authentication is performed to validate identity and Aadhaar payment bridge (APB).',
      },
      {
        step: 4,
        title: 'Acknowledgment Slip & Status Tracking',
        description: 'You receive an official government acknowledgment receipt with an application reference number for tracking.',
      },
    ],
    dates: {
      startDate: 'July 2024',
      lastDate: 'Ongoing / Active Portal',
      importantDates: [
        { label: 'Scheme Launch', date: 'July 2024' },
        { label: 'DBT Installment Schedule', date: 'Monthly' },
        { label: 'Verification Window', date: 'Active at Kendra' },
      ],
    },
    officialSource: {
      label: 'Official Ladki Bahin Portal (Govt of Maharashtra)',
      url: 'https://ladakibahin.maharashtra.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['domicile-certificate', 'income-certificate', 'aadhaar-smart-card', 'banking-related-services'],
    seo: {
      title: 'Majhi Ladki Bahin Yojana Online Form in Nerul | Eligibility, Documents & Apply',
      description: 'Apply for Maharashtra Mukhyamantri Majhi Ladki Bahin Yojana (₹1,500/month) at Maha E-Seva Kendra Nerul. Check required documents, eligibility, income certificate, and application process.',
      canonical: 'https://mahaesevakendra.in/schemes/majhi-ladki-bahin-yojana',
    },
  },
  {
    id: 'scheme-2',
    slug: 'pm-kisan-samman-nidhi',
    title: 'PM Kisan Samman Nidhi Yojana (with e-KYC & Land Seeding)',
    status: 'open',
    category: 'agriculture',
    department: 'Ministry of Agriculture & Farmers Welfare, Govt of India',
    financialAssistance: '₹6,000 per year (in 3 equal installments of ₹2,000)',
    summary: 'Central sector scheme delivering ₹6,000 annual income support to farmer families, along with mandatory Aadhaar biometric e-KYC and 7/12 land seeding.',
    overview: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides financial support to all landholding farmer families across India. The scheme transfers ₹6,000 per year directly to beneficiaries in three 4-monthly installments of ₹2,000 each. Maha E-Seva Kendra Nerul assists farmers with new registrations, mandatory biometric e-KYC, land-record seeding, and correction of bank account/Aadhaar mismatches.',
    benefits: [
      '₹6,000 annual income support transferred directly into bank accounts via DBT.',
      'Financial support disbursed in three equal 4-month installments of ₹2,000 each.',
      'Instant biometric/OTP based e-KYC completion at Kendra.',
      'Assistance with 7/12 land record linkage and beneficiary status rectification.',
    ],
    eligibility: [
      'All landholder farmer families with cultivable landholding in their name.',
      'Farmer must have valid Aadhaar card and Aadhaar-seeded active bank account.',
      'Exclusions apply to institutional landholders, government employees, and income tax payees.',
    ],
    documents: [
      {
        name: 'Aadhaar Card of Landholder',
        required: true,
        note: 'Original card for biometric fingerprint scanning or OTP',
      },
      {
        name: '7/12 & 8A Land Extract (Saat Bara Utara)',
        required: true,
        note: 'Updated computerized revenue record showing land ownership',
      },
      {
        name: 'Bank Passbook / Statement',
        required: true,
        note: 'Must have active NPCI mapping for DBT receipt',
      },
      {
        name: 'Active Mobile Number',
        required: true,
        note: 'To receive PM-Kisan status updates and installment SMS',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Land Record & Document Check',
        description: 'Verify the 7/12 land extract and farmer name alignment with Aadhaar credentials.',
      },
      {
        step: 2,
        title: 'Portal Submission / e-KYC Authentication',
        description: 'Complete online registration or biometric eKYC using UIDAI biometric scanner at our Kendra.',
      },
      {
        step: 3,
        title: 'Land Record Seeding',
        description: 'Link the khasra/survey number and land details into the PM-Kisan database.',
      },
      {
        step: 4,
        title: 'Receipt & Tracking Slip',
        description: 'Receive official acknowledgment receipt with farmer registration number for installment tracking.',
      },
    ],
    dates: {
      startDate: 'December 2018',
      lastDate: 'Ongoing (Installments released periodically)',
      importantDates: [
        { label: 'e-KYC Requirement', date: 'Mandatory for all installments' },
        { label: 'Next Installment Cycle', date: 'Every 4 months' },
      ],
    },
    officialSource: {
      label: 'Official PM-Kisan Portal (Govt of India)',
      url: 'https://pmkisan.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['aadhaar-smart-card', 'banking-related-services', 'income-certificate'],
    seo: {
      title: 'PM Kisan Samman Nidhi Online Form & eKYC in Nerul | Maha E-Seva Kendra',
      description: 'Complete PM Kisan registration, biometric e-KYC, and land record seeding at Maha E-Seva Kendra Nerul. Get ₹6,000/yr farmer income support with official assistance.',
      canonical: 'https://mahaesevakendra.in/schemes/pm-kisan-samman-nidhi',
    },
  },
  {
    id: 'scheme-3',
    slug: 'ayushman-bharat-pmjay-mjpjay',
    title: 'Ayushman Bharat PM-JAY & MJPJAY Health Scheme',
    status: 'open',
    category: 'healthcare',
    department: 'National Health Authority & State Health Assurance Society (Maharashtra)',
    financialAssistance: 'Up to ₹5,00,000 per family/year (Cashless Hospitalization)',
    summary: 'Universal cashless health protection covering up to ₹5 Lakh per family annually across empaneled government and private hospitals in Maharashtra and nationwide.',
    overview: 'Under the integrated Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) and Maharashtra\'s Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY), all eligible citizens in Maharashtra can access cashless secondary and tertiary medical treatments up to ₹5,00,000 per family per year. Our Kendra facilitates BIS portal family lookup, e-KYC verification, and PVC Ayushman Card printing.',
    benefits: [
      'Up to ₹5,00,000 free cashless healthcare cover per family per year.',
      'Covers 1,350+ medical procedures, surgeries, ICU expenses, and medications.',
      'Pre-existing diseases covered from day one of card activation.',
      'Cashless treatment across thousands of empaneled network hospitals throughout India.',
      'Instant PVC Ayushman Card generation and lamination at our Kendra.',
    ],
    eligibility: [
      'All ration card holders (Yellow, Orange, White) in Maharashtra under integrated MJPJAY scheme.',
      'Families identified under Socio-Economic Caste Census (SECC) database.',
      'Senior citizens aged 70+ years (eligible for separate ₹5 Lakh Ayushman Vay Vandana cover).',
    ],
    documents: [
      {
        name: 'Ration Card (Yellow, Orange, or White)',
        required: true,
        note: 'Must contain names of all family members seeking coverage',
      },
      {
        name: 'Aadhaar Card (for each family member)',
        required: true,
        note: 'Original for biometric fingerprint or OTP authentication',
      },
      {
        name: 'Active Mobile Number',
        required: true,
        note: 'For receiving verification OTP during BIS portal enrollment',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Beneficiary Database Search',
        description: 'We search your family details on the National Health Authority BIS portal using Ration Card or Aadhaar number.',
      },
      {
        step: 2,
        title: 'Individual Aadhaar e-KYC',
        description: 'Biometric fingerprint or mobile OTP authentication is performed for each individual family member.',
      },
      {
        step: 3,
        title: 'Instant Approval & Card Generation',
        description: 'Once approved by the government authority, the official Ayushman PMJAY digital card is issued.',
      },
      {
        step: 4,
        title: 'PVC Smart Card Printing',
        description: 'We print a durable PVC Ayushman Bharat card with micro-security QR code ready for hospital admission.',
      },
    ],
    dates: {
      startDate: 'September 2018',
      lastDate: 'Ongoing (No deadline)',
      importantDates: [
        { label: 'Universal Maharashtra Coverage', date: 'Active' },
        { label: 'Senior 70+ Vay Vandana Card', date: 'Available now' },
      ],
    },
    officialSource: {
      label: 'National Health Authority (PM-JAY Portal)',
      url: 'https://pmjay.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['ayushman-bharat-card', 'abha-health-card', 'health-insurance'],
    seo: {
      title: 'Ayushman Bharat Card & MJPJAY Online Application in Nerul | Maha E-Seva Kendra',
      description: 'Apply for Ayushman Bharat Card & MJPJAY in Nerul Navi Mumbai. Get ₹5 Lakh cashless health cover per family. Fast biometric eKYC and PVC card printing.',
      canonical: 'https://mahaesevakendra.in/schemes/ayushman-bharat-pmjay-mjpjay',
    },
  },
  {
    id: 'scheme-4',
    slug: 'pm-vishwakarma-yojana',
    title: 'PM Vishwakarma Scheme (Artisans & Craftsmen Support)',
    status: 'open',
    category: 'skill-business',
    department: 'Ministry of MSME & Ministry of Skill Development, Govt of India',
    financialAssistance: '₹15,000 Toolkit Incentive + Loans up to ₹3,00,000 @ 5%',
    summary: 'Comprehensive central government scheme providing recognition, skill training with daily stipend, ₹15,000 modern tool e-voucher, and collateral-free concessional loans.',
    overview: 'The PM Vishwakarma Scheme provides holistic end-to-end support to traditional artisans and craftspersons across 18 specialized trades (such as carpenters, blacksmiths, goldsmiths, potters, cobblers, masons, and tailors). Beneficiaries receive a formal PM Vishwakarma Certificate, free skill upskilling with ₹500/day stipend, ₹15,000 toolkit digital voucher, and collateral-free enterprise credit at an ultra-low 5% interest rate.',
    benefits: [
      'Official PM Vishwakarma Certificate and Digital ID Card.',
      'Basic skill training (5–7 days) and Advanced training (15 days) with ₹500/day stipend.',
      '₹15,000 e-voucher financial grant for purchasing modern professional toolkits.',
      'Collateral-free enterprise credit up to ₹3,00,000 at 5% interest (Tranche 1: ₹1 Lakh, Tranche 2: ₹2 Lakh).',
      'Digital transaction cashback incentives up to ₹100 per month.',
    ],
    eligibility: [
      'Artisan or craftsperson working with hands and tools in one of the 18 recognized traditional trades.',
      'Minimum age of 18 years on the date of application.',
      'Should not have availed loans under PMEGP, PM SVANidhi, or MUDRA in the last 5 years.',
      'Registration is restricted to one member per family.',
    ],
    documents: [
      {
        name: 'Aadhaar Card',
        required: true,
        note: 'Biometric fingerprint authentication is mandatory at Kendra',
      },
      {
        name: 'Active Mobile Number',
        required: true,
        note: 'Must be linked with Aadhaar',
      },
      {
        name: 'Bank Account Passbook / Statement',
        required: true,
        note: 'For receiving stipend, toolkit grant, and loan disbursement',
      },
      {
        name: 'Ration Card',
        required: true,
        note: 'Family verification requirement',
      },
      {
        name: 'Trade / Skill Declaration',
        required: true,
        note: 'Assisted trade selection at Kendra',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Trade & Family Verification',
        description: 'We identify your qualifying trade among the 18 eligible categories and verify family ration details.',
      },
      {
        step: 2,
        title: 'Biometric Aadhaar Authentication',
        description: 'Perform secure biometric verification on the PM Vishwakarma CSC portal.',
      },
      {
        step: 3,
        title: 'Skill & Bank Details Submission',
        description: 'Complete your business profile, bank details, and preferred training centre preferences.',
      },
      {
        step: 4,
        title: 'Application ID & Certificate Generation',
        description: 'Receive an official application receipt for Gram Panchayat / Urban Local Body (ULB) verification.',
      },
    ],
    dates: {
      startDate: 'September 2023',
      lastDate: 'Ongoing Scheme (2023–2028)',
      importantDates: [
        { label: 'Scheme Window', date: 'Active throughout 2024–2028' },
        { label: 'Training Batches', date: 'Scheduled post registration' },
      ],
    },
    officialSource: {
      label: 'PM Vishwakarma Official Portal (Govt of India)',
      url: 'https://pmvishwakarma.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['small-scale-business-msme-licence', 'aadhaar-smart-card', 'all-types-bank-loan'],
    seo: {
      title: 'PM Vishwakarma Scheme Registration in Nerul | Toolkit & Loan Assistance',
      description: 'Apply for PM Vishwakarma Yojana at Maha E-Seva Kendra Nerul. Get ₹15,000 toolkit voucher, skill training stipend, and 5% interest loans for artisans and craftsmen.',
      canonical: 'https://mahaesevakendra.in/schemes/pm-vishwakarma-yojana',
    },
  },
  {
    id: 'scheme-5',
    slug: 'pm-awas-yojana-urban',
    title: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U / Housing for All)',
    status: 'open',
    category: 'housing',
    department: 'Ministry of Housing & Urban Affairs & CIDCO / MHADA Maharashtra',
    financialAssistance: 'Interest Subsidy up to ₹2.67 Lakh / Central Assistance ₹1.5 Lakh',
    summary: 'Housing welfare initiative facilitating interest subsidies on home loans and direct financial assistance for Economically Weaker Sections (EWS) and Low-Income Groups (LIG).',
    overview: 'Pradhan Mantri Awas Yojana – Urban (PMAY-U 2.0) addresses the housing requirement of urban poor, including slum dwellers, EWS, and LIG families in Navi Mumbai and urban Maharashtra. Our Kendra assists eligible applicants in completing online application submissions, generating assessment IDs, and preparing mandatory income and domicile documentation.',
    benefits: [
      'Credit Linked Subsidy Scheme (CLSS) interest subsidy up to ₹2.67 Lakh on home loans.',
      'Direct central assistance of up to ₹1.5 Lakh per house for Beneficiary-Led Construction (BLC).',
      'Affordable housing in partnership with CIDCO / MHADA housing lottery schemes in Navi Mumbai.',
      'Ownership of an all-weather pucca house with basic civic amenities.',
    ],
    eligibility: [
      'Beneficiary family must not own a pucca house anywhere in India in any family member\'s name.',
      'Economically Weaker Section (EWS): Annual family income up to ₹3,00,000.',
      'Low Income Group (LIG): Annual family income between ₹3,00,001 and ₹6,00,000.',
      'Female ownership or co-ownership is mandatory in property documents for new purchases.',
    ],
    documents: [
      {
        name: 'Aadhaar Card (All Family Members)',
        required: true,
        note: 'Mandatory for unique identification and deduplication',
      },
      {
        name: 'Maharashtra Domicile / Residence Proof',
        required: true,
        note: 'Minimum proof of residence in Navi Mumbai / Maharashtra',
      },
      {
        name: 'Income Certificate / Salary Slips / ITR',
        required: true,
        note: 'Issued by competent Tahsildar authority or employer',
      },
      {
        name: 'Bank Account Passbook',
        required: true,
        note: 'Showing last 6 months transaction history',
      },
      {
        name: 'Affidavit / Self-Declaration of No Pucca House',
        required: true,
        note: 'Standard notarized format',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Income Category & Scheme Component Review',
        description: 'Determine whether you qualify for CLSS subsidy, Affordable Housing, or BLC house construction.',
      },
      {
        step: 2,
        title: 'PMAY-Urban Portal Data Entry',
        description: 'Accurately enter family member details, current dwelling address, and Aadhaar numbers into the PMAY MIS.',
      },
      {
        step: 3,
        title: 'Document Upload & Geo-Tagging Linkage',
        description: 'Upload verified scanned identity, income certificates, and bank documents.',
      },
      {
        step: 4,
        title: 'Assessment ID Generation',
        description: 'Generate your official PMAY Assessment Application Receipt to submit to your lending bank or municipal authority.',
      },
    ],
    dates: {
      startDate: 'June 2015',
      lastDate: 'Active (PMAY-U 2.0 implementation)',
      importantDates: [
        { label: 'PMAY-U 2.0 Extension', date: 'Active through 2028' },
        { label: 'CIDCO Lottery Linkage', date: 'As announced per scheme' },
      ],
    },
    officialSource: {
      label: 'Ministry of Housing & Urban Affairs (PMAY Portal)',
      url: 'https://pmay-urban.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['income-certificate', 'domicile-certificate', 'e-registration-rent', 'all-types-bank-loan'],
    seo: {
      title: 'PMAY Urban Online Application in Nerul Navi Mumbai | Housing Subsidy Form',
      description: 'Apply for Pradhan Mantri Awas Yojana (PMAY-U) housing subsidy in Nerul Navi Mumbai. Document assistance, assessment ID generation, and eligibility verification at Maha E-Seva Kendra.',
      canonical: 'https://mahaesevakendra.in/schemes/pm-awas-yojana-urban',
    },
  },
  {
    id: 'scheme-6',
    slug: 'sanjay-gandhi-niradhar-anudan-yojana',
    title: 'Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra Pension)',
    status: 'open',
    category: 'social-welfare',
    department: 'Social Justice & Special Assistance Department, Govt of Maharashtra',
    financialAssistance: '₹1,500 per month pension for single destitute / ₹2,400 for families with 2+ children',
    summary: 'Maharashtra state pension offering monthly financial sustenance to destitute persons, widows, divorced women, and persons with severe disabilities.',
    overview: 'The Sanjay Gandhi Niradhar Anudan Yojana (SGNAY) is a vital social security safety net implemented by the Government of Maharashtra. It provides monthly direct financial pension to destitute individuals, widows, abandoned women, orphans, and persons suffering from major illness or physical disability. Our Kendra assists applicants with dossier preparation, Tahsildar income verification, and portal submission.',
    benefits: [
      '₹1,500 monthly pension for single destitute beneficiaries transferred directly to bank account.',
      '₹2,400 monthly pension for beneficiary families with two or more dependent children.',
      'Lifelong financial protection and dignified living support.',
      'Complete assistance with Tahsil office submission dossiers and tracking.',
    ],
    eligibility: [
      'Permanent resident of Maharashtra residing in the state for at least 15 years.',
      'Age criteria: Destitute person below 65 years; Widows / abandoned women; Divyang persons (40%+ disability).',
      'Annual family income must not exceed ₹21,000 (or ₹50,000 for special medical categories).',
      'Must not have adult earning children capable of providing maintenance.',
    ],
    documents: [
      {
        name: 'Maharashtra Domicile Certificate / 15-Year Residence Certificate',
        required: true,
        note: 'Tahsildar issued Domicile or verified 15-year residential proof',
      },
      {
        name: 'Tahsildar Income Certificate (Under ₹21,000/yr)',
        required: true,
        note: 'Official income certificate from competent Revenue Authority',
      },
      {
        name: 'Age Proof / School Leaving Certificate',
        required: true,
        note: 'Birth certificate, school leaving, or voter card',
      },
      {
        name: 'Category Specific Certificate (Death Certificate of husband / Medical / Disability)',
        required: true,
        note: 'Civil Surgeon Disability Certificate (40%+) or Husband Death Certificate',
      },
      {
        name: 'Aadhaar Card & Bank Passbook',
        required: true,
        note: 'Individual bank account seeded with Aadhaar',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Eligibility & Dossier Verification',
        description: 'Verify 15-year Maharashtra residence, income ceiling, and specific medical/widowhood proofs.',
      },
      {
        step: 2,
        title: 'Aaple Sarkar Portal Application',
        description: 'Fill out the prescribed government form on the Aaple Sarkar Maharashtra Revenue portal.',
      },
      {
        step: 3,
        title: 'Tehsil Committee Submission File',
        description: 'Prepare the compiled physical dossier required for the Sanjay Gandhi Scheme Sanction Committee.',
      },
      {
        step: 4,
        title: 'Acknowledgment & Order Tracking',
        description: 'Track application movement until sanction order issuance and DBT disbursement.',
      },
    ],
    dates: {
      startDate: 'Active State Scheme',
      lastDate: 'Ongoing (Applications received continuously)',
      importantDates: [
        { label: 'Sanction Committee Meetings', date: 'Monthly at Tehsil level' },
        { label: 'Pension Disbursement', date: 'Monthly DBT' },
      ],
    },
    officialSource: {
      label: 'Maharashtra Social Justice & Special Assistance Dept',
      url: 'https://sjsa.maharashtra.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['domicile-certificate', 'income-certificate', 'digital-life-certificate-pensioners'],
    seo: {
      title: 'Sanjay Gandhi Niradhar Yojana Online Form in Nerul | Maharashtra Pension',
      description: 'Apply for Sanjay Gandhi Niradhar Anudan Yojana pension (₹1,500/mo) in Nerul Navi Mumbai. Complete dossier preparation, Domicile, and Income certificate assistance.',
      canonical: 'https://mahaesevakendra.in/schemes/sanjay-gandhi-niradhar-anudan-yojana',
    },
  },
  {
    id: 'scheme-7',
    slug: 'mahadbt-post-matric-scholarship',
    title: 'MahaDBT Post-Matric Scholarship Scheme (Maharashtra Students)',
    status: 'deadline-soon',
    category: 'education',
    department: 'Directorate of Higher Education & Social Justice Dept, Govt of Maharashtra',
    financialAssistance: '100% / 50% Tuition Fee Reimbursement + Monthly Maintenance Allowance',
    summary: 'Maharashtra state scholarship portal offering tuition fee waivers, exam fee reimbursements, and maintenance allowances for SC, ST, OBC, VJNT, SEBC, and EBC students.',
    overview: 'The MahaDBT Post-Matric Scholarship portal enables college and university students in Maharashtra to apply for government scholarship and freeship schemes. It supports students enrolled in post-SSC diplomas, degree programs, engineering, medical, MBA, and other professional courses. Our Kendra handles student profile creation, Aadhaar biometric authentication, scheme matching, and document uploading.',
    benefits: [
      '100% or 50% college tuition and examination fees waived/reimbursed directly to the institution.',
      'Monthly student maintenance allowance deposited via DBT into Aadhaar-seeded bank account.',
      'Hostel maintenance allowance for outstation hostel residents.',
      'Multiple departmental schemes accessible under a single verified MahaDBT profile.',
    ],
    eligibility: [
      'Must be a resident/domicile of Maharashtra state.',
      'Admitted to a recognized post-matric course (Degree, Diploma, Post-Graduate, Professional).',
      'SC / ST category: Annual family income up to ₹2.50 Lakh.',
      'OBC / VJNT / SBC category: Annual family income up to ₹1.50 Lakh (or ₹8.00 Lakh for Freeship with Non-Creamy Layer).',
      'EBC (Economically Backward Class): Annual family income up to ₹8.00 Lakh admitted through CAP round.',
    ],
    documents: [
      {
        name: 'Maharashtra Domicile Certificate',
        required: true,
        note: 'Mandatory proof of Maharashtra state residence',
      },
      {
        name: 'Tahsildar Income Certificate (Current FY)',
        required: true,
        note: 'Valid for the current academic year issued by competent Revenue Authority',
      },
      {
        name: 'Caste Certificate & Caste Validity Certificate',
        required: true,
        note: 'Required for SC, ST, OBC, VJNT, SBC category students',
      },
      {
        name: 'Non-Creamy Layer Certificate (NCL)',
        required: false,
        note: 'Mandatory for OBC, VJNT, SBC, SEBC students',
      },
      {
        name: 'Previous Year Marksheets (SSC / HSC / Last Semester)',
        required: true,
        note: 'Clear attested copies',
      },
      {
        name: 'College Admission Fee Receipt & Allotment Letter',
        required: true,
        note: 'CAP allotment confirmation slip',
      },
      {
        name: 'Aadhaar Card & Aadhaar-Linked Bank Passbook',
        required: true,
        note: 'Must have active NPCI mapping',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'MahaDBT User Profile Creation',
        description: 'We create your official MahaDBT profile, linking your 12-digit Aadhaar via biometric/OTP verification.',
      },
      {
        step: 2,
        title: 'Academic & Course Mapping',
        description: 'Input past qualification scores, college AISHE code, course details, and CAP admission proof.',
      },
      {
        step: 3,
        title: 'Document Upload & Scheme Selection',
        description: 'Upload scanned Domicile, Income, Caste, and NCL certificates under the exact departmental scheme.',
      },
      {
        step: 4,
        title: 'Application Submission & College Verification Slip',
        description: 'Submit application and print the verified submission docket for college desk endorsement.',
      },
    ],
    dates: {
      startDate: 'August 2024',
      lastDate: 'Active Academic Session Window',
      importantDates: [
        { label: 'Fresh Application Window', date: 'Active for Current Session' },
        { label: 'Renewal Application Window', date: 'Active' },
      ],
    },
    officialSource: {
      label: 'MahaDBT Official Portal (Govt of Maharashtra)',
      url: 'https://mahadbt.maharashtra.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['caste-certificate', 'domicile-certificate', 'income-certificate', 'non-creamy-layer-certificate'],
    seo: {
      title: 'MahaDBT Scholarship Online Form Filling in Nerul | Post Matric Form',
      description: 'Expert MahaDBT scholarship online form filling at Maha E-Seva Kendra Nerul. Assistance for SC, ST, OBC, EBC students with profile registration, Domicile, and Income proofs.',
      canonical: 'https://mahaesevakendra.in/schemes/mahadbt-post-matric-scholarship',
    },
  },
  {
    id: 'scheme-8',
    slug: 'atal-pension-yojana',
    title: 'Atal Pension Yojana (APY - Guaranteed Monthly Pension)',
    status: 'open',
    category: 'pension-insurance',
    department: 'Pension Fund Regulatory and Development Authority (PFRDA), Govt of India',
    financialAssistance: 'Guaranteed Lifetime Pension ₹1,000 to ₹5,000 / month',
    summary: 'Government-guaranteed pension scheme for unorganized sector workers and self-employed citizens, ensuring fixed monthly retirement pension after age 60.',
    overview: 'Atal Pension Yojana (APY) is a flagship national social security program focused on unorganized workers and self-employed individuals. Administered by PFRDA, it provides a guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 from age 60 until lifetime based on affordable monthly contributions made during working age.',
    benefits: [
      'Guaranteed lifelong monthly pension of ₹1,000 to ₹5,000 after age 60.',
      'Same pension amount payable to the spouse upon death of the subscriber.',
      'Full accumulated pension corpus returned to the nominee after demise of both subscriber and spouse.',
      'Tax benefits under Section 80CCD of the Income Tax Act.',
      'Extremely affordable monthly contribution rates depending on entry age.',
    ],
    eligibility: [
      'Any Indian citizen aged between 18 and 40 years.',
      'Must possess an active savings bank account or post office savings account.',
      'Applicant should not be an income-tax payer (effective from Oct 1, 2022).',
      'Should maintain sufficient balance in the bank account for monthly auto-debit.',
    ],
    documents: [
      {
        name: 'Aadhaar Card',
        required: true,
        note: 'Primary proof of identity and age',
      },
      {
        name: 'Savings Bank Account Passbook / Cheque',
        required: true,
        note: 'Must show Account Number and IFSC Code for auto-debit setup',
      },
      {
        name: 'Active Mobile Number',
        required: true,
        note: 'For receiving PRAN number and monthly contribution SMS',
      },
      {
        name: 'Nominee Aadhaar & Details',
        required: true,
        note: 'Spouse/family nominee details',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Pension Slab & Premium Calculation',
        description: 'We calculate your required monthly contribution table based on your current age and chosen pension amount.',
      },
      {
        step: 2,
        title: 'APY Portal Form Filing',
        description: 'Submit subscriber KYC details, bank account linkage, and nominee information.',
      },
      {
        step: 3,
        title: 'Auto-Debit Authorization Setup',
        description: 'Set up standing auto-debit instruction on your savings bank account.',
      },
      {
        step: 4,
        title: 'PRAN Allotment & e-PRAN Card Print',
        description: 'Receive permanent APY PRAN number and get your printed APY subscriber card.',
      },
    ],
    dates: {
      startDate: 'May 2015',
      lastDate: 'Ongoing (Enrollment open throughout the year)',
      importantDates: [
        { label: 'Entry Age Bracket', date: '18 to 40 Years' },
        { label: 'Pension Start Age', date: '60 Years' },
      ],
    },
    officialSource: {
      label: 'NSDL CRA / PFRDA Official APY Portal',
      url: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['banking-related-services', 'uan-pf-card', 'digital-life-certificate-pensioners'],
    seo: {
      title: 'Atal Pension Yojana (APY) Registration in Nerul | Monthly Pension Plan',
      description: 'Enroll in Atal Pension Yojana at Maha E-Seva Kendra Nerul. Get guaranteed ₹1,000 to ₹5,000 monthly pension after 60. Fast PRAN generation and bank auto-debit setup.',
      canonical: 'https://mahaesevakendra.in/schemes/atal-pension-yojana',
    },
  },
  {
    id: 'scheme-9',
    slug: 'pm-suraksha-jeevan-jyoti-bima',
    title: 'PM Suraksha Bima (PMSBY) & Jeevan Jyoti Bima (PMJJBY)',
    status: 'open',
    category: 'pension-insurance',
    department: 'Department of Financial Services, Ministry of Finance, Govt of India',
    financialAssistance: '₹2 Lakh Life Cover (₹436/yr) + ₹2 Lakh Accidental Cover (₹20/yr)',
    summary: 'Government-backed micro-insurance offering ₹2 Lakh life insurance and ₹2 Lakh accidental death/disability coverage at nominal annual premiums of ₹436 and ₹20.',
    overview: 'The twin schemes Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) and Pradhan Mantri Suraksha Bima Yojana (PMSBY) provide ultra-affordable financial protection to ordinary citizens. PMJJBY covers death due to any reason with a sum assured of ₹2,00,000 for just ₹436/year. PMSBY covers accidental death and permanent total disability with a sum assured of ₹2,00,000 for just ₹20/year.',
    benefits: [
      '₹2,00,000 life insurance cover under PMJJBY for death due to any reason.',
      '₹2,00,000 accidental death and total disability cover under PMSBY.',
      '₹1,00,000 partial permanent disability cover under PMSBY.',
      'Extremely affordable: Combined annual cost is only ₹456 (less than ₹1.25 per day).',
      'Direct auto-debit from bank account ensures continuous risk cover.',
    ],
    eligibility: [
      'PMJJBY: All individual bank account holders aged between 18 and 50 years.',
      'PMSBY: All individual bank account holders aged between 18 and 70 years.',
      'Must give consent to join and enable auto-debit facility on the bank account.',
    ],
    documents: [
      {
        name: 'Aadhaar Card',
        required: true,
        note: 'Primary identity and age verification',
      },
      {
        name: 'Bank Account Passbook / Statement',
        required: true,
        note: 'Showing active account number and IFSC code',
      },
      {
        name: 'Nominee Information',
        required: true,
        note: 'Full name, relationship, and date of birth of the nominee',
      },
      {
        name: 'Active Mobile Number',
        required: true,
        note: 'To receive policy confirmation and auto-debit alerts',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Bank & Nominee Verification',
        description: 'Verify your savings account status and register official nominee KYC details.',
      },
      {
        step: 2,
        title: 'Consent & Mandate Filing',
        description: 'Submit electronic enrollment form with auto-debit consent for ₹436 (PMJJBY) and ₹20 (PMSBY).',
      },
      {
        step: 3,
        title: 'Policy Issuance & Receipt',
        description: 'Receive policy registration acknowledgment receipt and insurance certificate copy.',
      },
    ],
    dates: {
      startDate: 'May 2015',
      lastDate: 'Ongoing (Annual renewal on June 1st)',
      importantDates: [
        { label: 'Policy Coverage Period', date: 'June 1 to May 31 (Annual)' },
        { label: 'Enrollment Window', date: 'Open all year round' },
      ],
    },
    officialSource: {
      label: 'Department of Financial Services (Govt of India)',
      url: 'https://financialservices.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['health-insurance', 'motor-insurance', 'insurance-services', 'banking-related-services'],
    seo: {
      title: 'PMSBY & PMJJBY Insurance Registration in Nerul | ₹2 Lakh Govt Cover',
      description: 'Enroll in PM Jeevan Jyoti (₹436/yr) and PM Suraksha Bima (₹20/yr) schemes at Maha E-Seva Kendra Nerul. Get ₹2 Lakh life and accident insurance cover fast.',
      canonical: 'https://mahaesevakendra.in/schemes/pm-suraksha-jeevan-jyoti-bima',
    },
  },
  {
    id: 'scheme-10',
    slug: 'e-shram-welfare-scheme',
    title: 'E-Shram National Social Security Scheme (Unorganized Workers)',
    status: 'open',
    category: 'social-welfare',
    department: 'Ministry of Labour & Employment, Govt of India',
    financialAssistance: 'Universal Social Security UAN + ₹2 Lakh Free Accident Insurance',
    summary: 'National database and social security card for unorganized sector workers, construction laborers, delivery workers, and gig professionals with ₹2 Lakh accident coverage.',
    overview: 'The E-Shram portal is a landmark initiative by the Ministry of Labour & Employment to build a centralized national database of unorganized workers. Registered workers receive a 12-digit Universal Account Number (UAN) smart card, free accidental insurance coverage of ₹2,00,000 under PMSBY, and preferential access to central and state government social security benefits during crisis situations.',
    benefits: [
      'Official 12-digit Universal Account Number (UAN) E-Shram Card valid nationwide.',
      '₹2,00,000 free accidental death and permanent disability cover under PMSBY.',
      '₹1,00,000 partial disability cover in case of occupational accidents.',
      'Direct inclusion in state relief schemes, disaster support, and employment welfare programs.',
      'Instant PVC / Laminated E-Shram Card printing at our Kendra.',
    ],
    eligibility: [
      'Unorganized workers, daily wage laborers, domestic workers, drivers, tailors, construction workers, street vendors.',
      'Age between 16 and 59 years.',
      'Should NOT be an income-tax payer.',
      'Should NOT be an active member of EPFO (PF) or ESIC.',
    ],
    documents: [
      {
        name: 'Aadhaar Card',
        required: true,
        note: 'Must be present for biometric or OTP verification',
      },
      {
        name: 'Aadhaar-Linked Active Mobile Number',
        required: true,
        note: 'To receive UIDAI and E-Shram registration OTP',
      },
      {
        name: 'Bank Account Details',
        required: true,
        note: 'Bank Account number and IFSC code for direct DBT credit',
      },
      {
        name: 'Occupation & Skill Details',
        required: true,
        note: 'Self-declaration of primary trade/work',
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Aadhaar & Mobile Authentication',
        description: 'We authenticate your Aadhaar identity via OTP or biometric fingerprint on the National E-Shram portal.',
      },
      {
        step: 2,
        title: 'Personal & Address Capture',
        description: 'Verify permanent and current residence address in Nerul / Navi Mumbai / Maharashtra.',
      },
      {
        step: 3,
        title: 'Occupation & Bank Seeding',
        description: 'Map your National Classification of Occupations (NCO) skill code and verified bank account details.',
      },
      {
        step: 4,
        title: 'Instant UAN Smart Card Printing',
        description: 'Generate your official E-Shram UAN Card with QR code and print a high-durability laminated card in-house.',
      },
    ],
    dates: {
      startDate: 'August 2021',
      lastDate: 'Ongoing (No deadline)',
      importantDates: [
        { label: 'Registration Status', date: 'Active at Kendra' },
        { label: 'Card Validity', date: 'Lifetime Universal UAN' },
      ],
    },
    officialSource: {
      label: 'Ministry of Labour & Employment (E-Shram Portal)',
      url: 'https://eshram.gov.in/',
    },
    lastUpdated: 'October 2024',
    relatedServices: ['e-shram-card', 'uan-pf-card', 'aadhaar-smart-card'],
    seo: {
      title: 'E-Shram Card Registration in Nerul | Universal UAN Card Online Apply',
      description: 'Register for E-Shram Card at Maha E-Seva Kendra Nerul. Get ₹2 Lakh free accident insurance, 12-digit UAN card, and unorganized worker benefits. Instant print.',
      canonical: 'https://mahaesevakendra.in/schemes/e-shram-welfare-scheme',
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

export const getSchemesByCategory = (category: string): Scheme[] =>
  schemes.filter((s) => s.category === category);
