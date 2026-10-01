// ============================================================
// Maha E-Seva Kendra — Services Data
// Source: PRD §6, Technical Architecture §7
// Approved 32-Service Architecture
//
// PRICING RULES:
// - Services 1-27: prices sourced from owner-provided data
// - Services 28-32: price NOT supplied — show "Contact for pricing"
// - Passport: centre charge (₹300) + govt fee (₹1,500) shown separately
// - All 32 services have dedicated, service-specific realistic visual assets
// ============================================================

import type { Service, ServiceCategory } from '../types';

export const services: Service[] = [
  {
    "id": "1",
    "slug": "aadhaar-smart-card",
    "name": "Aadhaar Smart Card",
    "category": "identity",
    "shortDescription": "Assistance with PVC Aadhaar Smart Card printing, biometric updates, and address corrections.",
    "description": "Get your official high-durability PVC Aadhaar Smart Card printed with micro-security QR code, hologram, and ghost image. We also provide guided assistance for Aadhaar demographic details update, address change, and biometric linkage.",
    "price": 40,
    "priceLabel": "\u20b940",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card Number / Enrollment ID Slip",
        "required": true,
        "note": "Original or digital copy"
      },
      {
        "name": "Registered Mobile Number (for OTP verification)",
        "required": true,
        "note": "Must be active to receive UIDAI OTP"
      },
      {
        "name": "Proof of Address (for address change only)",
        "required": false,
        "note": "Electricity bill, voter ID, rent agreement, or bank passbook"
      }
    ],
    "eligibility": [
      "Any Indian resident possessing an issued Aadhaar number or enrollment slip.",
      "Applicant or guardian must have access to the mobile number registered with Aadhaar."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Verification & OTP",
        "description": "We verify your 12-digit Aadhaar number and trigger official UIDAI verification OTP."
      },
      {
        "step": 2,
        "title": "Data Review & Order",
        "description": "We verify photo and address preview on the official portal."
      },
      {
        "step": 3,
        "title": "PVC Printing & Delivery",
        "description": "Instant high-gloss PVC smart card printed in-house or official speed post order confirmation."
      }
    ],
    "processingInfo": "Instant in-kendra PVC print within 5 minutes. Official UIDAI Speed Post delivery within 7\u201310 working days.",
    "faqs": [
      {
        "question": "Is the PVC Aadhaar Card valid everywhere?",
        "answer": "Yes, UIDAI-compliant PVC Aadhaar Smart Cards have full legal validity across India for all banking, travel, and government purposes."
      },
      {
        "question": "What if my mobile number is not linked to Aadhaar?",
        "answer": "You can visit our Kendra; we will assist you with biometric verification and appointment booking for mobile linking."
      }
    ],
    "popular": true,
    "featured": true,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "pan-card",
      "voter-id",
      "lost-aadhaar-pan-card"
    ],
    "icon": "CreditCard",
    "image": "/images/services/aadhaar-smart-card.jpg",
    "imageAlt": "Aadhaar Smart Card Identity Assistance at Maha E-Seva Kendra Nerul",
    "seo": {
      "title": "Aadhaar Smart Card Print & Update in Nerul | Maha E-Seva Kendra",
      "description": "Fast PVC Aadhaar Smart Card printing, address change, and UIDAI updates at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service charge \u20b940."
    }
  },
  {
    "id": "2",
    "slug": "pan-card",
    "name": "PAN Card",
    "category": "identity",
    "shortDescription": "New PAN card application, correction, reprint, and Aadhaar-PAN linking assistance.",
    "description": "Complete guided assistance for New PAN Card (Form 49A), Minor to Major PAN conversion, name/DOB corrections, duplicate reprint for lost cards, and Aadhaar-PAN linking. Accurate filing ensures zero rejection by NSDL/UTIITSL.",
    "price": 150,
    "priceLabel": "\u20b9150",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card (Original / Clear Copy)",
        "required": true,
        "note": "Primary proof of identity, date of birth & address"
      },
      {
        "name": "2 Passport Size Color Photographs",
        "required": true,
        "note": "White background, recent 35mm x 45mm (we print in-house)"
      },
      {
        "name": "Active Mobile Number & Email ID",
        "required": true,
        "note": "To receive e-PAN digital copy and tracking updates"
      },
      {
        "name": "Existing PAN Copy / Number (for corrections or reprint)",
        "required": false,
        "note": "Required only if applying for correction or duplicate card"
      }
    ],
    "eligibility": [
      "Any Indian citizen, NRI, firm, or HUF requiring an Income Tax Permanent Account Number.",
      "Minors can apply with father/mother as representative assessee.",
      "Individuals seeking name correction after marriage or gazette notification."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Verification",
        "description": "We verify your Aadhaar details, spelling, date of birth, and photo at our Nerul Kendra."
      },
      {
        "step": 2,
        "title": "Online Application Submission",
        "description": "Our certified operator accurately fills Form 49A/Correction form on the official NSDL/UTIITSL portal."
      },
      {
        "step": 3,
        "title": "Acknowledgment & e-PAN",
        "description": "You receive an instant 15-digit Acknowledgement Number. Digital e-PAN is delivered to your email in 2\u20134 days."
      },
      {
        "step": 4,
        "title": "Physical Card Delivery",
        "description": "Official laminated plastic PAN card is delivered by India Post speed post to your doorstep."
      }
    ],
    "processingInfo": "Digital e-PAN delivered via email in 2\u20134 days. Physical card arrives by Speed Post in 7\u201312 working days.",
    "faqs": [
      {
        "question": "Can I apply for a PAN card without Aadhaar?",
        "answer": "Yes, alternative documents like Voter ID, Passport, Driving Licence, or Bank Passbook can be used as proof of identity and address."
      },
      {
        "question": "Can I get my lost PAN card number recovered?",
        "answer": "Yes, if you lost your card, visit our Kendra with your Aadhaar and we will assist you in retrieving your PAN details and ordering a reprint."
      },
      {
        "question": "Do I need to link PAN with Aadhaar?",
        "answer": "Yes, PAN-Aadhaar linkage is mandatory for IT returns, bank transactions, and active status. We assist with instant status check and linking."
      }
    ],
    "popular": true,
    "featured": true,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "aadhaar-smart-card",
      "lost-aadhaar-pan-card",
      "passport-size-photo"
    ],
    "icon": "CreditCard",
    "image": "/images/services/pan-card.jpg",
    "imageAlt": "PAN Card Application and Correction Assistance at Maha E-Seva Kendra Nerul",
    "seo": {
      "title": "PAN Card Application & Correction in Nerul East | Maha E-Seva Kendra",
      "description": "Fast & hassle-free PAN Card application assistance in Nerul, Navi Mumbai. New PAN, corrections, duplicate cards. Centre fee \u20b9150. Visit Shop No-15 Janta Market Bridge."
    }
  },
  {
    "id": "3",
    "slug": "voter-id",
    "name": "Voter ID",
    "category": "identity",
    "shortDescription": "New Voter ID registration (Form 6), address shift, corrections (Form 8), and e-EPIC download.",
    "description": "Complete voter assistance service under Election Commission of India (ECI). We assist with new voter registration (Form 6), constituency shift/address update (Form 8), name/photo corrections, and digital e-EPIC card download.",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card / Age Proof",
        "required": true,
        "note": "Birth certificate, 10th marksheet, or Aadhaar showing complete DOB"
      },
      {
        "name": "Address Proof for Nerul / Navi Mumbai Constituency",
        "required": true,
        "note": "Electricity bill, rent agreement, bank passbook, or water bill"
      },
      {
        "name": "1 Passport Size Photograph",
        "required": true,
        "note": "Recent color photograph"
      }
    ],
    "eligibility": [
      "Indian citizen aged 18 years or above on the qualifying date.",
      "Resident of the assembly constituency (e.g., Belapur / Nerul)."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Form Filling on EC Portal",
        "description": "We upload your documents and submit Form 6/8 on the National Voters Service Portal (NVSP)."
      },
      {
        "step": 2,
        "title": "Reference Tracking ID",
        "description": "You receive an official tracking reference ID to monitor BLO (Booth Level Officer) verification."
      },
      {
        "step": 3,
        "title": "EPIC Card Issuance",
        "description": "Download e-EPIC PDF or receive the official color EPIC smart card from the election office."
      }
    ],
    "processingInfo": "Application acknowledgment generated instantly. Official electoral roll inclusion and EPIC card issuance takes 2\u20134 weeks.",
    "faqs": [
      {
        "question": "Can I transfer my Voter ID from another state to Navi Mumbai?",
        "answer": "Yes, we file Form 8 for shifting of residence to transfer your name to the Nerul/Belapur constituency smoothly."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "aadhaar-smart-card",
      "domicile-certificate"
    ],
    "icon": "Vote",
    "image": "/images/services/voter-id.jpg",
    "imageAlt": "Voter ID Card Registration and Correction in Nerul",
    "seo": {
      "title": "Voter ID Card Online Registration in Nerul | Maha E-Seva Kendra",
      "description": "New Voter ID card application, address shift, correction, and e-EPIC download at Maha E-Seva Kendra Nerul, Navi Mumbai. Service charge \u20b9100."
    }
  },
  {
    "id": "4",
    "slug": "passport-online-application",
    "name": "Passport Online Application",
    "category": "travel-transport",
    "shortDescription": "Fresh passport application, renewal, tatkaal guidance, document checklist, and PSK appointment booking.",
    "description": "Comprehensive guided assistance for Fresh Normal / Tatkaal Indian Passport, Passport Renewal / Re-issue on expiry, Minor Passport, and Police Clearance Certificate (PCC). We ensure error-free documentation and book convenient appointment slots at Passport Seva Kendra (PSK) / Post Office PSK.",
    "price": 300,
    "priceLabel": "\u20b9300 (Centre Service Charge)",
    "governmentFee": "\u20b91,500 Government Fee (Normal 36 pages, payable directly on passport portal)",
    "documents": [
      {
        "name": "Aadhaar Card (Original)",
        "required": true,
        "note": "Ensure name, father name, and DOB match standard records"
      },
      {
        "name": "Proof of Date of Birth",
        "required": true,
        "note": "Birth Certificate, School Leaving Certificate, or 10th Passing Certificate"
      },
      {
        "name": "Proof of Address (Navi Mumbai)",
        "required": true,
        "note": "Aadhaar card, Bank Passbook with photo, Electricity bill, or Registered Rent Agreement"
      },
      {
        "name": "Old Passport Booklet (for Renewal/Re-issue)",
        "required": false,
        "note": "Original old passport with self-attested copies of first and last 2 pages"
      },
      {
        "name": "Educational Qualification Certificate (for ECNR status)",
        "required": false,
        "note": "10th standard passing certificate / degree for Non-ECR status"
      }
    ],
    "eligibility": [
      "Indian citizens residing in Navi Mumbai / Thane / Mumbai Metropolitan Region.",
      "Minors (both parents' passport and consent required).",
      "Individuals holding expired or about-to-expire passports."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Audit & Eligibility Check",
        "description": "We thoroughly check all your original proofs against official Passport Seva guidelines to eliminate any rejection risk."
      },
      {
        "step": 2,
        "title": "Passport Portal Application",
        "description": "Our specialist creates and accurately submits your application on the official Passport Seva portal."
      },
      {
        "step": 3,
        "title": "Government Fee Payment & Slot Booking",
        "description": "Official government fee (\u20b91,500) is paid securely, and your preferred appointment slot at PSK (Thane / Mumbai) is confirmed."
      },
      {
        "step": 4,
        "title": "Appointment Dossier & Guidance",
        "description": "You receive a complete printed appointment dossier, document folder checklist, and interview instructions."
      }
    ],
    "processingInfo": "Appointment booking within 24 hours. PSK processing + Police Verification + Speed Post delivery takes 10\u201320 working days for Normal, 3\u20137 days for Tatkaal.",
    "faqs": [
      {
        "question": "Does Maha E-Seva Kendra issue the passport directly?",
        "answer": "No. Passports are issued solely by the Ministry of External Affairs, Government of India. Our Kendra provides expert guided application filing, document preparation, fee payment, and PSK appointment booking."
      },
      {
        "question": "What is the difference between Centre Service Charge and Government Fee?",
        "answer": "The Centre Service Charge is \u20b9300 for our full filing and appointment service. The Government Fee (\u20b91,500 for normal 36 pages) is the official fee charged by the Ministry of External Affairs."
      },
      {
        "question": "Where do I have to go for biometric appointment?",
        "answer": "You will visit the nearest Passport Seva Kendra (PSK) such as PSK Thane or Mumbai for photo and fingerprint biometrics on your booked appointment date."
      }
    ],
    "popular": true,
    "featured": true,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "police-verification",
      "driving-licence",
      "passport-size-photo"
    ],
    "icon": "BookOpen",
    "image": "/images/services/passport.jpg",
    "imageAlt": "Passport Online Application Guidance and Appointment Booking at Maha E-Seva Kendra Nerul",
    "seo": {
      "title": "Passport Online Application Assistance in Nerul | Maha E-Seva Kendra",
      "description": "Expert guided assistance for Fresh Passport, Renewal, and Tatkaal appointment booking in Nerul, Navi Mumbai. Centre fee \u20b9300 + \u20b91,500 govt fee. Visit Shop No-15 Janta Market Bridge."
    }
  },
  {
    "id": "5",
    "slug": "driving-licence",
    "name": "Driving Licence",
    "category": "travel-transport",
    "shortDescription": "Learner licence test booking, permanent licence slot, renewal, and address change on Sarathi Parivahan.",
    "description": "End-to-end online assistance for Driving Licences through the official Parivahan Sarathi portal. We handle Learner's Licence (LL) applications, Permanent Driving Licence (DL) test slot booking at RTO MH-43 (Vashi/Navi Mumbai), DL Renewal, Duplicate DL, and International Driving Permits.",
    "price": 300,
    "priceLabel": "\u20b9300",
    "governmentFee": "RTO Test & Card Fee payable separately on Parivahan as per vehicle class",
    "documents": [
      {
        "name": "Aadhaar Card (Original / Copy)",
        "required": true,
        "note": "Primary proof of address and identity"
      },
      {
        "name": "Age Proof (10th marksheet, Birth Certificate, or School Leaving)",
        "required": true,
        "note": "Must show complete date of birth"
      },
      {
        "name": "Passport Size Photograph & Signature Specimen",
        "required": true,
        "note": "We take photo and digital signature scan in-house"
      },
      {
        "name": "Existing Learner Licence / Old DL (if applicable)",
        "required": false,
        "note": "Required for Permanent DL test slot or renewal"
      }
    ],
    "eligibility": [
      "Aged 16+ for gearless 2-wheeler up to 50cc with parental consent.",
      "Aged 18+ for Light Motor Vehicle (LMV Cars) & Motor Cycles with Gear (MCWG).",
      "Resident of Navi Mumbai (MH-43) or Maharashtra."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Online Form & Slot Booking",
        "description": "We submit your application and book your LL test or RTO driving test slot on Parivahan Sarathi."
      },
      {
        "step": 2,
        "title": "Fee Payment & Learning Material",
        "description": "Official RTO test fees paid online and acknowledgment receipt with road sign practice guide provided."
      },
      {
        "step": 3,
        "title": "Test & Smart Card Delivery",
        "description": "Complete your test at RTO Vashi / online LL test. Smart Card DL delivered by Speed Post."
      }
    ],
    "processingInfo": "Online Learner Licence test approval in 1\u20132 days. Permanent DL card delivered by Speed Post after RTO practical test.",
    "faqs": [
      {
        "question": "Can I take the Learner Licence test from home?",
        "answer": "Yes, with Aadhaar authentication, contactless online LL tests can be completed from home. We assist with full application setup and mock questions."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "passport-online-application",
      "motor-insurance"
    ],
    "icon": "Car",
    "image": "/images/services/driving-licence.jpg",
    "imageAlt": "Driving Licence Online Application and Slot Booking in Nerul",
    "seo": {
      "title": "Driving Licence Application in Nerul Navi Mumbai | Maha E-Seva Kendra",
      "description": "Get Learner Licence, Permanent DL slot booking, and DL renewal assistance at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9300."
    }
  },
  {
    "id": "6",
    "slug": "abha-health-card",
    "name": "ABHA Health Card",
    "category": "health-welfare",
    "shortDescription": "Create your 14-digit Ayushman Bharat Health Account (ABHA) ID and get instant laminated card print.",
    "description": "Creation and printing of your unique 14-digit ABHA (Ayushman Bharat Health Account) Digital Health ID under the National Health Authority. Link your medical records, lab reports, and prescriptions securely across hospitals and doctors throughout India.",
    "price": 50,
    "priceLabel": "\u20b950",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card Number",
        "required": true,
        "note": "For instant biometric / OTP verification"
      },
      {
        "name": "Aadhaar Linked Mobile Number",
        "required": true,
        "note": "To receive authentication OTP"
      }
    ],
    "eligibility": [
      "Any Indian resident of any age (adults and children)."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Aadhaar OTP Authentication",
        "description": "Instant verification via National Health Authority portal."
      },
      {
        "step": 2,
        "title": "ABHA Address Generation",
        "description": "Selection of preferred health handle (e.g. name@abdm)."
      },
      {
        "step": 3,
        "title": "Card Download & Lamination",
        "description": "Instant high-resolution digital print with QR code."
      }
    ],
    "processingInfo": "Instant generation in 5 minutes at our Kendra.",
    "faqs": [
      {
        "question": "What is the benefit of ABHA card?",
        "answer": "It enables seamless digital sharing of your medical test reports and treatment history with participating clinics and hospitals, eliminating paper files."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "ayushman-bharat-card",
      "health-insurance"
    ],
    "icon": "HeartPulse",
    "image": "/images/services/abha-health-card.jpg",
    "imageAlt": "ABHA Health Card Registration and Print in Nerul",
    "seo": {
      "title": "ABHA Digital Health Card in Nerul | Maha E-Seva Kendra",
      "description": "Create and print your 14-digit ABHA Health Card under Ayushman Bharat at Maha E-Seva Kendra Nerul East, Navi Mumbai. Instant service \u20b950."
    }
  },
  {
    "id": "7",
    "slug": "ayushman-bharat-card",
    "name": "Ayushman Bharat Card",
    "category": "health-welfare",
    "shortDescription": "PM-JAY Golden Card eligibility check, e-KYC verification, and \u20b95 Lakh cashless health card print.",
    "description": "Assistance for Pradhan Mantri Jan Arogya Yojana (PM-JAY) / Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY). We check SECC/Ration Card database eligibility, complete biometric e-KYC, and print official Ayushman Golden Cards offering up to \u20b95 Lakh free annual medical treatment at empanelled hospitals.",
    "price": 50,
    "priceLabel": "\u20b950",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card (Original)",
        "required": true,
        "note": "Mandatory for biometric/OTP e-KYC"
      },
      {
        "name": "Ration Card (Yellow / Orange / BPL / Priority Card)",
        "required": true,
        "note": "To verify family eligibility in government health database"
      },
      {
        "name": "Active Mobile Number",
        "required": true,
        "note": "For verification SMS"
      }
    ],
    "eligibility": [
      "Families listed in SECC 2011 database or holding eligible Maharashtra Ration Cards under PM-JAY / MJPJAY.",
      "All family members listed in the eligible ration card."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Database Search & Eligibility Check",
        "description": "We search the national PM-JAY beneficiary portal with your Ration/Aadhaar number."
      },
      {
        "step": 2,
        "title": "Biometric e-KYC Submission",
        "description": "Instant biometric / mobile OTP verification."
      },
      {
        "step": 3,
        "title": "Golden Card PVC Print",
        "description": "Instant generation and plastic printout of your Ayushman PMJAY card."
      }
    ],
    "processingInfo": "Instant verification and card print in 5\u201310 minutes.",
    "faqs": [
      {
        "question": "Which hospitals in Navi Mumbai accept Ayushman Card?",
        "answer": "All major government hospitals and dozens of top private empanelled hospitals across Navi Mumbai and Maharashtra accept the Ayushman Golden Card for cashless admissions."
      }
    ],
    "popular": true,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "abha-health-card",
      "senior-citizen-card",
      "health-insurance"
    ],
    "icon": "ShieldCheck",
    "image": "/images/services/ayushman-bharat-card.jpg",
    "imageAlt": "Ayushman Bharat PM-JAY Golden Card Print in Nerul",
    "seo": {
      "title": "Ayushman Bharat PM-JAY Card in Nerul | Maha E-Seva Kendra",
      "description": "Check PM-JAY eligibility and get Ayushman Bharat Golden Health Card printed at Maha E-Seva Kendra Nerul East, Navi Mumbai. \u20b95 Lakh cover. Fee \u20b950."
    }
  },
  {
    "id": "8",
    "slug": "senior-citizen-card",
    "name": "Senior Citizen Card",
    "category": "health-welfare",
    "shortDescription": "Official Maharashtra Senior Citizen Identity Card (Age 60+) for travel concessions and healthcare benefits.",
    "description": "Application assistance for the official Maharashtra Government Senior Citizen Identity Card. Provides recognized proof of age for senior citizen railway/bus fare concessions, priority hospital OPD services, special banking interest rates, and municipal benefits.",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card / Age Proof",
        "required": true,
        "note": "Showing age 60 years or above"
      },
      {
        "name": "Address Proof of Maharashtra (Nerul / Navi Mumbai)",
        "required": true,
        "note": "Electricity bill, ration card, or Aadhaar"
      },
      {
        "name": "2 Passport Size Color Photos",
        "required": true,
        "note": "We take photo in-house"
      },
      {
        "name": "Doctor Blood Group Certificate / Report",
        "required": false,
        "note": "If blood group is to be printed on card"
      }
    ],
    "eligibility": [
      "Indian citizens residing in Maharashtra who have completed 60 years of age."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Verification",
        "description": "We verify age and local residence proofs."
      },
      {
        "step": 2,
        "title": "Social Welfare Portal Submission",
        "description": "We register and submit the application on the state social justice department portal."
      },
      {
        "step": 3,
        "title": "Card Printing & Handover",
        "description": "Laminated Senior Citizen Identity Card issued with official authorization."
      }
    ],
    "processingInfo": "Processing and card handover within 3\u20137 working days.",
    "faqs": [
      {
        "question": "What benefits do I get with Senior Citizen Card?",
        "answer": "It provides proof for MSRTC bus concessions, railway lower-berth quotas, bank senior fixed-deposit rates, and priority hospital counters."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "digital-life-certificate-pensioners",
      "ayushman-bharat-card"
    ],
    "icon": "Award",
    "image": "/images/services/senior-citizen-card.jpg",
    "imageAlt": "Senior Citizen Identity Card in Nerul Navi Mumbai",
    "seo": {
      "title": "Senior Citizen Card Application in Nerul | Maha E-Seva Kendra",
      "description": "Apply for Maharashtra Senior Citizen Identity Card (60+ years) at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9100."
    }
  },
  {
    "id": "9",
    "slug": "e-shram-card",
    "name": "E-Shram Card",
    "category": "employment",
    "shortDescription": "National Unorganised Workers Database registration with 12-digit UAN and \u20b92 Lakh PMSBY insurance cover.",
    "description": "Registration and instant plastic card printing for e-SHRAM (National Database of Unorganised Workers) under the Ministry of Labour & Employment. Eligible unorganised workers get a 12-digit UAN number and direct access to Central & State social security schemes.",
    "price": 50,
    "priceLabel": "\u20b950",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "note": "Original or copy"
      },
      {
        "name": "Aadhaar Linked Mobile Number",
        "required": true,
        "note": "Must be able to receive OTP"
      },
      {
        "name": "Bank Account Details (Passbook / Cancelled Cheque)",
        "required": true,
        "note": "For direct DBT government financial benefit transfers"
      }
    ],
    "eligibility": [
      "Any unorganised worker aged between 16 and 59 years.",
      "Must not be an Income Tax payee or an active EPFO/ESIC member."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Aadhaar Authentication",
        "description": "Instant verification on the official e-Shram portal."
      },
      {
        "step": 2,
        "title": "Occupation & Bank Entry",
        "description": "Accurate recording of trade/profession and bank DBT details."
      },
      {
        "step": 3,
        "title": "Instant UAN Card Print",
        "description": "High-quality color e-Shram UAN card handed over immediately."
      }
    ],
    "processingInfo": "Instant generation in 5 minutes at our Kendra.",
    "faqs": [
      {
        "question": "Who is eligible for e-Shram card?",
        "answer": "Construction workers, drivers, housemaids, shop assistants, gig workers, street vendors, and general informal workers."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "uan-pf-card",
      "ayushman-bharat-card"
    ],
    "icon": "Briefcase",
    "image": "/images/services/e-shram-card.jpg",
    "imageAlt": "e-Shram Card Registration and Print in Nerul",
    "seo": {
      "title": "e-Shram Card Online Registration in Nerul | Maha E-Seva Kendra",
      "description": "Instant e-Shram card registration and PVC print at Maha E-Seva Kendra Nerul East, Navi Mumbai. 12-digit UAN card. Fee \u20b950."
    }
  },
  {
    "id": "10",
    "slug": "uan-pf-card",
    "name": "UAN / PF Card",
    "category": "employment",
    "shortDescription": "EPFO UAN activation, PF passbook download, KYC update, and online PF withdrawal claim assistance.",
    "description": "Comprehensive EPFO provident fund assistance. We help private sector and industrial employees with UAN (Universal Account Number) Activation, Aadhaar/Bank/PAN KYC seeding, PF Passbook download, Member Card printout, and Online PF Withdrawal / Advance claims (Form 31, 19, 10C).",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "UAN Number or Member ID / Salary Slip",
        "required": true,
        "note": "Provided by employer"
      },
      {
        "name": "Aadhaar Card & Aadhaar Linked Mobile",
        "required": true,
        "note": "Required for EPFO OTP authentication"
      },
      {
        "name": "Bank Passbook / Cancelled Cheque with Name",
        "required": true,
        "note": "For KYC seeding and withdrawal claims"
      },
      {
        "name": "PAN Card Copy",
        "required": false,
        "note": "For TDS exemption on PF withdrawal above \u20b950,000"
      }
    ],
    "eligibility": [
      "Any salaried employee contributing to Employee Provident Fund (EPFO)."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "UAN Lookup & Activation",
        "description": "We activate your UAN on the Unified Member Portal."
      },
      {
        "step": 2,
        "title": "KYC & Profile Update",
        "description": "We upload Aadhaar, PAN, and Bank details for employer approval."
      },
      {
        "step": 3,
        "title": "Claim Submission / Passbook Print",
        "description": "Online PF claim filing or detailed passbook statement printout."
      }
    ],
    "processingInfo": "Instant passbook and UAN card print. Online claim settlement takes 7\u201315 working days by EPFO.",
    "faqs": [
      {
        "question": "Can I withdraw PF money online if I left my job?",
        "answer": "Yes, we help submit Form 19 (Full PF) and Form 10C (Pension) online with direct bank transfer upon employer mark-exit."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "e-shram-card",
      "banking-related-services",
      "pan-card"
    ],
    "icon": "FileText",
    "image": "/images/services/uan-pf-card.jpg",
    "imageAlt": "EPFO UAN and PF Card Services in Nerul",
    "seo": {
      "title": "UAN & PF Online Claim Assistance in Nerul | Maha E-Seva Kendra",
      "description": "EPFO UAN activation, PF passbook, KYC update, and online PF withdrawal claims at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9100."
    }
  },
  {
    "id": "11",
    "slug": "domicile-certificate",
    "name": "Domicile Certificate",
    "category": "certificates",
    "shortDescription": "Age, Nationality & Domicile Certificate application on Aaple Sarkar portal for Maharashtra residence proof.",
    "description": "Complete assistance for obtaining the official Maharashtra State Domicile and Nationality Certificate issued by the Revenue Department / Tahsildar. Essential for Maharashtra engineering/medical college admissions, government jobs, MPSC exams, housing schemes, and scholarship quotas.",
    "price": 300,
    "priceLabel": "\u20b9300",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card of Applicant",
        "required": true,
        "note": "Showing local address"
      },
      {
        "name": "15-Year Residence Proof in Maharashtra",
        "required": true,
        "note": "School leaving certificate, ration card, electricity bills (15 yrs), property tax, or rent agreement"
      },
      {
        "name": "School Leaving Certificate (LC / TC) or Birth Certificate",
        "required": true,
        "note": "Indicating place and date of birth in Maharashtra"
      },
      {
        "name": "Father / Mother Domicile or Proof of Residence",
        "required": false,
        "note": "Helpful if applicant is a student/minor"
      },
      {
        "name": "Self-Declaration / Affidavit",
        "required": true,
        "note": "We draft and notarize the standard affidavit in-house"
      }
    ],
    "eligibility": [
      "Any citizen residing continuously in Maharashtra for a minimum of 15 years.",
      "Students born and educated in Maharashtra applying for state quota admissions."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Verification & Affidavit",
        "description": "We verify your 15-year residence proof records and prepare the official self-declaration."
      },
      {
        "step": 2,
        "title": "Aaple Sarkar Portal Submission",
        "description": "Our certified operator uploads verified scans and files your application on the official Maharashtra portal."
      },
      {
        "step": 3,
        "title": "Official Tracking & Delivery",
        "description": "You receive an official Application ID. Digitally signed, barcoded government certificate is printed upon Tahsildar approval."
      }
    ],
    "processingInfo": "Official government verification takes 7 to 15 working days. Immediate tracking receipt provided upon submission.",
    "faqs": [
      {
        "question": "Why is a Domicile Certificate needed?",
        "answer": "It is mandatory to claim the 85% Maharashtra State Quota in engineering, medical (NEET/MHT-CET), pharmacy colleges, and Maharashtra Government jobs."
      },
      {
        "question": "What if I do not have 15 years continuous electricity bills?",
        "answer": "You can provide school admission records, birth certificates, parent domicile certificates, ration cards, or society maintenance receipts covering the period."
      }
    ],
    "popular": true,
    "featured": true,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "income-certificate",
      "non-creamy-layer-certificate",
      "caste-certificate"
    ],
    "icon": "FileCheck",
    "image": "/images/services/domicile-certificate.jpg",
    "imageAlt": "Domicile and Nationality Certificate Application at Maha E-Seva Kendra Nerul",
    "seo": {
      "title": "Domicile Certificate Application in Nerul Navi Mumbai | Maha E-Seva Kendra",
      "description": "Fast & authorized Domicile Certificate application on Aaple Sarkar in Nerul East, Navi Mumbai. Centre charge \u20b9300. Check 15-year residence documents checklist."
    }
  },
  {
    "id": "12",
    "slug": "income-certificate",
    "name": "Income Certificate",
    "category": "certificates",
    "shortDescription": "Annual Income Certificate (1 Year / 3 Years) from Tahsildar for scholarships, fee waivers & schemes.",
    "description": "Assistance for obtaining the official Revenue Department Income Certificate (Utpannacha Dakhla) on Aaple Sarkar. Required for MahaDBT scholarships, EBC college fee concessions, RTE school admissions, Ayushman Bharat, and government subsidy schemes.",
    "price": 300,
    "priceLabel": "\u20b9300",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card of Applicant & Family Head",
        "required": true,
        "note": "Identity and address proof"
      },
      {
        "name": "Ration Card (All Pages Copy)",
        "required": true,
        "note": "To verify family member count"
      },
      {
        "name": "Income Proof (Any One)",
        "required": true,
        "note": "Salary Slip / Form 16 / ITR / Employer Letter / Talathi Income Report / Affidavit"
      },
      {
        "name": "Electricity Bill / Address Proof",
        "required": true,
        "note": "Recent bill showing residence"
      },
      {
        "name": "Self-Declaration Affidavit of Income",
        "required": true,
        "note": "Prepared at our Kendra"
      }
    ],
    "eligibility": [
      "Any resident of Maharashtra needing official income verification for education, scholarships, or welfare schemes."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Income Audit & Form Preparation",
        "description": "We verify income proofs (salary slip / ITR / Talathi declaration) and prepare the application dossier."
      },
      {
        "step": 2,
        "title": "Aaple Sarkar Submission",
        "description": "Form submitted to the Sub-Divisional Officer (SDO) / Tahsildar jurisdiction."
      },
      {
        "step": 3,
        "title": "Digitally Signed Certificate",
        "description": "Direct download and high-resolution print of the official barcoded Income Certificate."
      }
    ],
    "processingInfo": "Official Tahsil processing takes 5 to 10 working days. Fast-track assistance available.",
    "faqs": [
      {
        "question": "How long is an Income Certificate valid?",
        "answer": "A 1-year income certificate is valid for the current financial year (April 1 to March 31). A 3-year certificate is valid for 3 consecutive financial years."
      },
      {
        "question": "Is this certificate valid for MahaDBT Scholarship?",
        "answer": "Yes, our digitally signed Aaple Sarkar Income Certificates are 100% verified and accepted on the MahaDBT portal."
      }
    ],
    "popular": true,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "domicile-certificate",
      "non-creamy-layer-certificate",
      "caste-certificate"
    ],
    "icon": "FileText",
    "image": "/images/services/income-certificate.jpg",
    "imageAlt": "Income Certificate Utpannacha Dakhla in Nerul",
    "seo": {
      "title": "Income Certificate Application in Nerul | Maha E-Seva Kendra",
      "description": "Apply for Tahsildar Income Certificate (1 yr / 3 yrs) on Aaple Sarkar in Nerul East, Navi Mumbai. Required for MahaDBT & scholarships. Fee \u20b9300."
    }
  },
  {
    "id": "13",
    "slug": "residence-certificate",
    "name": "Residence Certificate",
    "category": "certificates",
    "shortDescription": "Official proof of local residence (Rahivasi Dakhla) for school admissions, utilities & local verification.",
    "description": "Application assistance for official Residence Proof Certificate (Rahivasi Dakhla) issued through competent municipal / revenue authority. Ideal for residents requiring local address proof for bank accounts, court affidavits, school admissions, and utility connections.",
    "price": 300,
    "priceLabel": "\u20b9300",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "note": "Showing local address"
      },
      {
        "name": "Electricity Bill / Gas Connection Book",
        "required": true,
        "note": "Recent 3 months proof"
      },
      {
        "name": "Society Maintenance Bill / Rent Agreement",
        "required": true,
        "note": "To confirm building / sector in Nerul"
      },
      {
        "name": "Passport Size Photograph",
        "required": true,
        "note": "Color photograph"
      }
    ],
    "eligibility": [
      "Any individual residing in Nerul, Navi Mumbai or nearby areas."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Address Audit",
        "description": "Verification of local utility and residence bills."
      },
      {
        "step": 2,
        "title": "Portal Submission",
        "description": "Application filed with local municipal/revenue jurisdiction."
      },
      {
        "step": 3,
        "title": "Certificate Delivery",
        "description": "Issuance of authenticated Residence Certificate."
      }
    ],
    "processingInfo": "Processing takes 5 to 10 working days.",
    "faqs": [
      {
        "question": "What is the difference between Domicile and Residence Certificate?",
        "answer": "A Residence Certificate proves current local living address, whereas a Domicile Certificate proves 15+ years permanent settlement in Maharashtra for state quotas."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "domicile-certificate",
      "e-registration-rent"
    ],
    "icon": "Home",
    "image": "/images/services/residence-certificate.jpg",
    "imageAlt": "Residence Certificate Rahivasi Dakhla in Nerul",
    "seo": {
      "title": "Residence Certificate (Rahivasi Dakhla) in Nerul | Maha E-Seva Kendra",
      "description": "Get official Residence Certificate in Nerul East, Navi Mumbai for address verification, admissions, and utilities. Service fee \u20b9300."
    }
  },
  {
    "id": "14",
    "slug": "non-creamy-layer-certificate",
    "name": "Non-Creamy Layer Certificate",
    "category": "certificates",
    "shortDescription": "NCL Certificate for OBC, VJNT, and SBC category candidates to claim reservation benefits.",
    "description": "Expert application assistance for Non-Creamy Layer Certificate (NCL) on Aaple Sarkar. Essential for OBC, VJNT, and SBC category students and job aspirants in Maharashtra to avail government reservation in college admissions and competitive recruitments.",
    "price": 700,
    "priceLabel": "\u20b9700",
    "governmentFee": null,
    "documents": [
      {
        "name": "Caste Certificate of Applicant",
        "required": true,
        "note": "Original / verified copy showing OBC/VJNT/SBC"
      },
      {
        "name": "3 Consecutive Financial Years Income Proof",
        "required": true,
        "note": "Form 16 / ITR / Tahsildar Income Certificate for last 3 years"
      },
      {
        "name": "Aadhaar Card & Ration Card",
        "required": true,
        "note": "Identity & family proof"
      },
      {
        "name": "School Leaving Certificate / Father's LC",
        "required": true,
        "note": "Showing caste and nationality"
      },
      {
        "name": "Self-Declaration Affidavit",
        "required": true,
        "note": "Drafted and notarized at our Kendra"
      }
    ],
    "eligibility": [
      "Applicants belonging to recognized OBC, VJNT, or SBC categories in Maharashtra whose family gross annual income is below the statutory Creamy Layer threshold (\u20b98 Lakh/year)."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "3-Year Income & Caste Audit",
        "description": "We verify your 3 consecutive financial years income proofs and caste validity papers."
      },
      {
        "step": 2,
        "title": "Aaple Sarkar SDO Filing",
        "description": "Submission to Sub-Divisional Officer (SDO) / Competent Authority."
      },
      {
        "step": 3,
        "title": "Certificate Print with Barcode",
        "description": "Issuance of official digitally signed NCL Certificate valid for 3 years."
      }
    ],
    "processingInfo": "Official SDO revenue processing takes 10 to 20 working days.",
    "faqs": [
      {
        "question": "What is the validity of Non-Creamy Layer Certificate?",
        "answer": "The NCL certificate is typically issued with validity for 3 financial years (up to March 31 of the 3rd year)."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "caste-certificate",
      "income-certificate",
      "domicile-certificate"
    ],
    "icon": "FileCheck2",
    "image": "/images/services/non-creamy-layer.jpg",
    "imageAlt": "Non-Creamy Layer NCL Certificate Application in Nerul",
    "seo": {
      "title": "Non-Creamy Layer Certificate (NCL) in Nerul | Maha E-Seva Kendra",
      "description": "Apply for OBC / VJNT Non-Creamy Layer Certificate on Aaple Sarkar in Nerul East, Navi Mumbai. Service fee \u20b9700. Check 3-year income checklist."
    }
  },
  {
    "id": "15",
    "slug": "caste-certificate",
    "name": "Caste Certificate",
    "category": "certificates",
    "shortDescription": "SC, ST, OBC, VJNT, and SBC Caste Certificate application on Aaple Sarkar portal.",
    "description": "Complete guidance and online submission for Maharashtra Government Caste / Community Certificates on Aaple Sarkar. We assist in collecting proper genealogy proofs (1950/1961/1967 revenue entries), school records, and filing with the Sub-Divisional Magistrate.",
    "price": 300,
    "priceLabel": "\u20b9300",
    "governmentFee": null,
    "documents": [
      {
        "name": "Applicant's School Leaving Certificate & Aadhaar",
        "required": true,
        "note": "Showing caste mention"
      },
      {
        "name": "Father / Grandfather School Leaving Certificate or Caste Certificate",
        "required": true,
        "note": "Showing caste entry before cutoff year (1950 for SC/ST, 1967 for OBC)"
      },
      {
        "name": "Family Ration Card & Electricity Bill",
        "required": true,
        "note": "Residence and genealogy link"
      },
      {
        "name": "Affidavit / Genealogic Tree (Vamshaval)",
        "required": true,
        "note": "Prepared at Kendra"
      }
    ],
    "eligibility": [
      "Residents belonging to recognized SC, ST, OBC, VJNT, or SBC communities in Maharashtra with pre-cutoff domicile proofs."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Genealogy & Cutoff Year Verification",
        "description": "Audit of historical family school and land records."
      },
      {
        "step": 2,
        "title": "SDO Portal Submission",
        "description": "Filing on Aaple Sarkar with all notarized annexures."
      },
      {
        "step": 3,
        "title": "Official Certificate Issuance",
        "description": "Barcoded, digitally signed certificate delivered."
      }
    ],
    "processingInfo": "Official scrutiny takes 15 to 30 working days.",
    "faqs": [
      {
        "question": "What is the cutoff year for OBC Caste Certificate in Maharashtra?",
        "answer": "The deemed date/cutoff year is 1967 for OBC/VJNT and 1950 for SC/ST. Proof of family residence in Maharashtra before this year is required."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "non-creamy-layer-certificate",
      "domicile-certificate",
      "income-certificate"
    ],
    "icon": "FileCheck",
    "image": "/images/services/caste-certificate.jpg",
    "imageAlt": "Caste Certificate Application in Nerul Navi Mumbai",
    "seo": {
      "title": "Caste Certificate Application in Nerul | Maha E-Seva Kendra",
      "description": "Apply for SC, ST, OBC, VJNT Caste Certificate on Aaple Sarkar at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9300."
    }
  },
  {
    "id": "16",
    "slug": "police-verification",
    "name": "Police Verification",
    "category": "other",
    "shortDescription": "Police Clearance Certificate (PCC) online application and tenant verification filing.",
    "description": "Online application filing for Police Clearance Certificate (PCC) / Character Certificate through the Maharashtra Police Citizen Portal. Essential for employment background checks, overseas visas, bank security jobs, tenant verifications, and licensing.",
    "price": 500,
    "priceLabel": "\u20b9500",
    "governmentFee": "Government challan fee payable on police portal",
    "documents": [
      {
        "name": "Aadhaar Card (Original / Copy)",
        "required": true,
        "note": "Local address proof in Navi Mumbai"
      },
      {
        "name": "Passport Copy (for Visa PCC) or Company Letter (for Job PCC)",
        "required": true,
        "note": "Stating purpose of verification"
      },
      {
        "name": "Proof of Residence in Navi Mumbai for 1+ Year",
        "required": true,
        "note": "Electricity bill or registered rent agreement"
      },
      {
        "name": "Passport Size Photograph",
        "required": true,
        "note": "Recent color photo"
      }
    ],
    "eligibility": [
      "Any resident requiring an official character / police clearance certificate for employment, visa, or tenant records."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Portal Registration & Form Filling",
        "description": "We submit your PCC form on Maharashtra Police Citizen Services."
      },
      {
        "step": 2,
        "title": "Challan Payment & Police Station Mapping",
        "description": "Challan paid and application routed to Nerul Police Station / Navi Mumbai Commissionerate."
      },
      {
        "step": 3,
        "title": "Verification & Digital PCC Download",
        "description": "After local station physical check, digitally signed PCC PDF is issued."
      }
    ],
    "processingInfo": "Police department verification takes 7 to 15 working days.",
    "faqs": [
      {
        "question": "Do I need to visit the local police station?",
        "answer": "Yes, after online filing, the local police station (Nerul Police Station) may call you once with your original documents for identity sign-off."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "passport-online-application",
      "e-registration-rent"
    ],
    "icon": "Shield",
    "image": "/images/services/police-verification.jpg",
    "imageAlt": "Police Verification PCC in Nerul Navi Mumbai",
    "seo": {
      "title": "Police Clearance Certificate (PCC) in Nerul | Maha E-Seva Kendra",
      "description": "Online Police Verification and PCC application for job, visa, and tenant verification at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9500."
    }
  },
  {
    "id": "17",
    "slug": "e-registration-rent",
    "name": "E-Registration Rent",
    "category": "business-registration",
    "shortDescription": "Government Registered Leave & License (Rent) Agreement with biometric e-signing at Kendra.",
    "description": "Official online Leave and License (Rent Agreement) registration with the Department of Registration and Stamps, Government of Maharashtra. We draft legal clauses, calculate stamp duty, take biometric fingerprint e-signatures of owner, tenant, and witnesses, and provide government registered PDF.",
    "price": 1000,
    "priceLabel": "\u20b91,000",
    "governmentFee": "Government Stamp Duty + Registration Fee calculated as per rent and deposit",
    "documents": [
      {
        "name": "Aadhaar Card & PAN Card of Property Owner (Licensor)",
        "required": true,
        "note": "Mandatory for biometric sign"
      },
      {
        "name": "Aadhaar Card & PAN Card of Tenant (Licensee)",
        "required": true,
        "note": "Mandatory for biometric sign"
      },
      {
        "name": "Aadhaar Cards of 2 Witnesses",
        "required": true,
        "note": "Any two adults"
      },
      {
        "name": "Property Tax Receipt / Index II / Electricity Bill",
        "required": true,
        "note": "To verify property address and ownership"
      }
    ],
    "eligibility": [
      "Property owners and tenants leasing residential or commercial property in Navi Mumbai / Maharashtra."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Drafting Agreement Terms",
        "description": "We prepare the standard government template with agreed rent, deposit, lock-in, and notice periods."
      },
      {
        "step": 2,
        "title": "Stamp Duty & Registration Payment",
        "description": "Official GRAS e-challan paid online."
      },
      {
        "step": 3,
        "title": "Biometric e-Signing",
        "description": "Owner, tenant, and witnesses provide biometric thumb impressions at our Kendra."
      },
      {
        "step": 4,
        "title": "Sub-Registrar Approval & Registered PDF",
        "description": "Official government registered agreement with digital GRN and barcode delivered in 24\u201348 hours."
      }
    ],
    "processingInfo": "Biometrics in 15 minutes. Government Sub-Registrar approval in 24\u201348 hours.",
    "faqs": [
      {
        "question": "Is online e-registered rent agreement accepted by police and banks?",
        "answer": "Yes, it is the highest official legal proof accepted for Police Verification, Passport, Bank Accounts, and Court evidence."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "police-verification",
      "shop-establishment-licence-gumasta"
    ],
    "icon": "FileCheck2",
    "image": "/images/services/e-registration-rent.jpg",
    "imageAlt": "Online Rent Agreement E-Registration in Nerul Navi Mumbai",
    "seo": {
      "title": "Registered Rent Agreement in Nerul | Maha E-Seva Kendra",
      "description": "Government Registered Leave & License agreement with biometric signing in Nerul East, Navi Mumbai. Fast 24-hr delivery. Centre fee \u20b91,000."
    }
  },
  {
    "id": "18",
    "slug": "lost-aadhaar-pan-card",
    "name": "Lost Aadhaar / PAN Card",
    "category": "identity",
    "shortDescription": "Quick search, recovery, and duplicate reprint for lost Aadhaar and PAN cards.",
    "description": "Specialized identity recovery service if you have misplaced or lost your physical Aadhaar or PAN card. We assist in retrieving your lost card number using biometric/name records, ordering official duplicate reprints, and delivering instant e-copies.",
    "price": 100,
    "priceLabel": "\u20b9100 / \u20b9200",
    "governmentFee": null,
    "documents": [
      {
        "name": "Basic Details (Full Name, Date of Birth, Father's Name)",
        "required": true,
        "note": "To search government database"
      },
      {
        "name": "Linked Mobile Number (if active) or Biometric Thumb",
        "required": true,
        "note": "For verification authentication"
      }
    ],
    "eligibility": [
      "Any individual who already holds an Aadhaar or PAN number but has lost the physical document."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Database Number Search",
        "description": "We locate your official enrollment/PAN record."
      },
      {
        "step": 2,
        "title": "Verification & e-Copy Download",
        "description": "Instant download of digitally authenticated e-document."
      },
      {
        "step": 3,
        "title": "PVC Smart Card Reprint",
        "description": "Instant high-durability plastic reprint handed over."
      }
    ],
    "processingInfo": "Instant number lookup and reprint in 5 to 10 minutes at Kendra.",
    "faqs": [
      {
        "question": "What if I do not remember my PAN number?",
        "answer": "Visit our Kendra with your Aadhaar Card. We use official portal search tools to trace your active PAN number."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "aadhaar-smart-card",
      "pan-card"
    ],
    "icon": "Search",
    "image": "/images/services/lost-aadhaar-pan.jpg",
    "imageAlt": "Lost Aadhaar and PAN Card Recovery in Nerul",
    "seo": {
      "title": "Lost Aadhaar & PAN Card Recovery in Nerul | Maha E-Seva Kendra",
      "description": "Recover lost PAN number and print duplicate PVC Aadhaar/PAN cards at Maha E-Seva Kendra Nerul East, Navi Mumbai. Instant assistance."
    }
  },
  {
    "id": "19",
    "slug": "small-scale-business-msme-licence",
    "name": "Small Scale Business (MSME) Licence",
    "category": "business-registration",
    "shortDescription": "Udyam MSME Registration Certificate for small businesses, shops, startups, and traders.",
    "description": "Online registration for Government of India Udyam MSME Certificate under the Ministry of Micro, Small & Medium Enterprises. Essential for business loans under Mudra/PMEGP schemes, collateral-free credit, government tender concessions, and opening current bank accounts.",
    "price": 500,
    "priceLabel": "\u20b9500",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card of Business Owner / Proprietor",
        "required": true,
        "note": "Must be linked to mobile"
      },
      {
        "name": "PAN Card of Proprietor / Firm",
        "required": true,
        "note": "Mandatory for Udyam portal"
      },
      {
        "name": "Business Name & Business Address Proof",
        "required": true,
        "note": "Electricity bill / Rent agreement of shop or office"
      },
      {
        "name": "Bank Account Details (Account No & IFSC)",
        "required": true,
        "note": "For business financial records"
      }
    ],
    "eligibility": [
      "Any micro, small, or medium enterprise, proprietor, freelancer, trader, service provider, or manufacturer."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "NIC Code & Category Selection",
        "description": "We identify the exact National Industrial Classification (NIC) code for your trade."
      },
      {
        "step": 2,
        "title": "Udyam Portal Registration",
        "description": "Filing on the official Ministry of MSME portal."
      },
      {
        "step": 3,
        "title": "Instant Certificate Print",
        "description": "Official Udyam Registration Certificate with lifetime validity issued with QR code."
      }
    ],
    "processingInfo": "Instant certificate generation in 10\u201315 minutes.",
    "faqs": [
      {
        "question": "Is MSME Udyam registration free from government?",
        "answer": "The Government of India does not charge a fee for Udyam registration; our \u20b9500 fee covers expert classification, documentation, filing, and laminated certificate printout."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "shop-establishment-licence-gumasta",
      "all-types-bank-loan",
      "banking-related-services"
    ],
    "icon": "Building2",
    "image": "/images/services/msme-registration.jpg",
    "imageAlt": "MSME Udyam Registration Certificate in Nerul Navi Mumbai",
    "seo": {
      "title": "MSME Udyam Registration in Nerul Navi Mumbai | Maha E-Seva Kendra",
      "description": "Get official MSME Udyam Business Registration Certificate in Nerul East, Navi Mumbai. Required for current accounts & bank loans. Service fee \u20b9500."
    }
  },
  {
    "id": "20",
    "slug": "shop-establishment-licence-gumasta",
    "name": "Shop & Establishment Licence (Gumasta)",
    "category": "business-registration",
    "shortDescription": "Municipal Corporation Gumasta Licence (Intimation / Registration) for shops & commercial establishments.",
    "description": "Assistance for obtaining the mandatory Shop and Establishment Registration Certificate (Gumasta Licence) under the Maharashtra Shops and Establishments Act. Mandatory for all retail shops, commercial offices, clinics, salons, and food outlets in Navi Mumbai.",
    "price": 500,
    "priceLabel": "\u20b9500",
    "governmentFee": "Municipal fee payable on Aaple Sarkar portal as per employee count",
    "documents": [
      {
        "name": "Aadhaar Card & PAN Card of Employer / Owner",
        "required": true,
        "note": "Identity proof"
      },
      {
        "name": "Shop / Office Address Proof in Navi Mumbai",
        "required": true,
        "note": "Electricity bill / Index II / Registered Rent Agreement"
      },
      {
        "name": "Photo of Shop Front with Nameboard in Marathi/English",
        "required": true,
        "note": "Clear photo showing signboard"
      },
      {
        "name": "Partnership Deed / Incorporation (if company)",
        "required": false,
        "note": "For non-proprietorship entities"
      }
    ],
    "eligibility": [
      "Any commercial establishment, shop, firm, or office operating in Navi Mumbai (NMMC jurisdiction) or Maharashtra."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Verification & Photo Upload",
        "description": "We verify shop address proofs and signboard photo."
      },
      {
        "step": 2,
        "title": "Aaple Sarkar Labour Dept Filing",
        "description": "Submission under Form F / Intimation Form."
      },
      {
        "step": 3,
        "title": "Gumasta Certificate Print",
        "description": "Issuance of official digitally signed Gumasta Licence."
      }
    ],
    "processingInfo": "Intimation (0-9 employees) is instant to 24 hours. Registration (10+ employees) takes 3\u20137 working days.",
    "faqs": [
      {
        "question": "Why is a Gumasta Licence required?",
        "answer": "It is the primary legal trade licence required by banks to open a Business Current Account, register for GST, and operate legally without municipal penalties."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "small-scale-business-msme-licence",
      "e-registration-rent",
      "banking-related-services"
    ],
    "icon": "Store",
    "image": "/images/services/gumasta-licence.jpg",
    "imageAlt": "Shop and Establishment Gumasta Licence in Nerul Navi Mumbai",
    "seo": {
      "title": "Gumasta Licence in Nerul Navi Mumbai | Maha E-Seva Kendra",
      "description": "Apply for Shop & Establishment Gumasta Licence in Nerul East, Navi Mumbai. Essential for shop operation & current bank account. Service fee \u20b9500."
    }
  },
  {
    "id": "21",
    "slug": "name-change-e-gazette",
    "name": "Name Change E-Gazette",
    "category": "other",
    "shortDescription": "Official Maharashtra Government Gazette notification for name change, marriage & religion updates.",
    "description": "Complete legal assistance for publishing an official Name Change Notification in the Maharashtra Government Gazette (Rajpatra). The only legally irrefutable document required by Passport offices, Banks, PAN department, and Educational Boards to update your name after marriage, adoption, or astrological change.",
    "price": 1200,
    "priceLabel": "\u20b91,200",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card (with Old Name)",
        "required": true,
        "note": "Showing identity and address"
      },
      {
        "name": "Proof of New Name / Reason Proof",
        "required": true,
        "note": "Marriage Certificate (for women), PAN, or Notarized Name Change Affidavit"
      },
      {
        "name": "Passport Size Photograph & Signature",
        "required": true,
        "note": "Taken in-house"
      },
      {
        "name": "School Leaving Certificate / Marksheet",
        "required": true,
        "note": "To verify existing recorded name"
      }
    ],
    "eligibility": [
      "Any Maharashtra resident desiring to legally change their first name, middle name, surname, or correct spelling errors."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Affidavit & Application Drafting",
        "description": "We prepare the legal name change affidavit and notification format."
      },
      {
        "step": 2,
        "title": "Directorate of Govt Printing Submission",
        "description": "Filing on the official e-Gazette Maharashtra portal."
      },
      {
        "step": 3,
        "title": "Official Gazette Download",
        "description": "Download of published Maharashtra State Gazette PDF with official verification link."
      }
    ],
    "processingInfo": "Gazette notification publication takes 10 to 15 working days.",
    "faqs": [
      {
        "question": "Is an e-Gazette copy valid for Passport name change?",
        "answer": "Yes, Maharashtra Government e-Gazette is the standard document accepted by all Regional Passport Offices and banks across India."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "pan-card",
      "passport-online-application",
      "aadhaar-smart-card"
    ],
    "icon": "FileText",
    "image": "/images/services/name-change-gazette.jpg",
    "imageAlt": "Name Change E-Gazette Maharashtra in Nerul",
    "seo": {
      "title": "Name Change Gazette Online in Nerul | Maha E-Seva Kendra",
      "description": "Publish official Name Change in Maharashtra Government Gazette in Nerul East, Navi Mumbai. Required for Passport, PAN & Bank name change. Fee \u20b91,200."
    }
  },
  {
    "id": "22",
    "slug": "banking-related-services",
    "name": "Banking Related Services",
    "category": "banking",
    "shortDescription": "Zero balance savings account opening, re-KYC update, DBT subsidy linking, and passbook print.",
    "description": "Assistance with customer banking facilitation: Jan Dhan / Zero-Balance Savings Account opening assistance, re-KYC document uploading, Aadhaar-Bank Account Seeding for government DBT subsidies, and Debit Card service facilitation.",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card (Original)",
        "required": true,
        "note": "Primary KYC"
      },
      {
        "name": "PAN Card (or Form 60)",
        "required": true,
        "note": "Mandatory for banking"
      },
      {
        "name": "2 Passport Size Photos",
        "required": true,
        "note": "Color photos"
      },
      {
        "name": "Active Mobile Number",
        "required": true,
        "note": "For bank SMS alerts"
      }
    ],
    "eligibility": [
      "Any individual resident seeking banking facilitation or KYC compliance assistance."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "KYC Verification",
        "description": "Verification of Aadhaar and PAN documents."
      },
      {
        "step": 2,
        "title": "Portal Submission",
        "description": "Assistance with online banking onboarding / DBT linking portal."
      },
      {
        "step": 3,
        "title": "Confirmation Receipt",
        "description": "Receipt provided with reference number."
      }
    ],
    "processingInfo": "Instant facilitation at Kendra.",
    "faqs": [
      {
        "question": "Why is Aadhaar DBT linking needed in my bank account?",
        "answer": "Direct Benefit Transfer (DBT) linking is required to receive PM-Kisan, Ladki Bahin Yojana, scholarships, and gas subsidies directly into your bank account."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "money-transfer-withdrawal",
      "all-types-bank-loan"
    ],
    "icon": "Landmark",
    "image": "/images/services/banking-services.jpg",
    "imageAlt": "Banking Related Services at Maha E-Seva Kendra Nerul",
    "seo": {
      "title": "Banking Services & DBT Linking in Nerul | Maha E-Seva Kendra",
      "description": "Bank account opening guidance, KYC update, and Aadhaar DBT seeding at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9100."
    }
  },
  {
    "id": "23",
    "slug": "health-insurance",
    "name": "Health Insurance",
    "category": "insurance",
    "shortDescription": "Compare family health insurance policies, calculate premium quotes, and instant policy renewal.",
    "description": "Assistance with exploring and comparing IRDAI-approved comprehensive Health Insurance plans from top insurers (Star Health, HDFC Ergo, Care, Niva Bupa). We help compare family floater coverage, cashless hospital networks in Navi Mumbai, and assist with instant renewals.",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card of Proposer / Family Members",
        "required": true,
        "note": "Age and address proof"
      },
      {
        "name": "PAN Card of Proposer",
        "required": true,
        "note": "For policy issuance"
      },
      {
        "name": "Previous Policy Copy (for renewals / porting)",
        "required": false,
        "note": "To maintain No Claim Bonus & waiting period benefits"
      }
    ],
    "eligibility": [
      "Individuals and families seeking medical insurance protection."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Coverage Need Assessment",
        "description": "We evaluate family age, sum insured (\u20b95L\u2013\u20b950L), and cashless network requirements."
      },
      {
        "step": 2,
        "title": "Insurer Comparison & Proposal Filing",
        "description": "We compare transparent benefits, exclusions, and submit the proposal."
      },
      {
        "step": 3,
        "title": "Instant Policy Issue",
        "description": "Official policy document with cashless card PDF delivered immediately."
      }
    ],
    "processingInfo": "Instant policy quotation and issuance in 10 minutes.",
    "faqs": [
      {
        "question": "Are pre-existing diseases covered?",
        "answer": "Most plans cover pre-existing conditions after a waiting period (typically 2 to 3 years). We guide you to the policy with the shortest waiting period."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "motor-insurance",
      "insurance-services",
      "ayushman-bharat-card"
    ],
    "icon": "ShieldPlus",
    "image": "/images/services/health-insurance.jpg",
    "imageAlt": "Health Insurance Policy Assistance in Nerul Navi Mumbai",
    "seo": {
      "title": "Health Insurance Policy Assistance in Nerul | Maha E-Seva Kendra",
      "description": "Compare family health insurance plans, get instant quotes, and cashless policy issuance at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9100."
    }
  },
  {
    "id": "24",
    "slug": "motor-insurance",
    "name": "Motor Insurance",
    "category": "insurance",
    "shortDescription": "Instant 2-wheeler, car, and commercial vehicle insurance policy renewal in 5 minutes.",
    "description": "Fast online Motor Vehicle Insurance issuance for Bikes, Scooters, Private Cars, Auto Rickshaws, and Commercial Vehicles. We compare quotes across leading insurance companies with maximum No Claim Bonus (NCB) discount and instant PDF delivery.",
    "price": 100,
    "priceLabel": "\u20b9100",
    "governmentFee": null,
    "documents": [
      {
        "name": "Vehicle RC (Registration Certificate) Book / Card",
        "required": true,
        "note": "Showing chassis & engine number"
      },
      {
        "name": "Previous Policy Copy (even if expired)",
        "required": false,
        "note": "To check existing NCB discount"
      },
      {
        "name": "Owner's Aadhaar & PAN Card",
        "required": true,
        "note": "For KYC compliance"
      }
    ],
    "eligibility": [
      "Any two-wheeler, four-wheeler, or commercial vehicle owner in India."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "RC Number Lookup",
        "description": "We fetch vehicle details and check past policy NCB status."
      },
      {
        "step": 2,
        "title": "Plan Selection & Add-ons",
        "description": "Selection of Third Party Only or Comprehensive (Zero Depreciation, Roadside Assistance)."
      },
      {
        "step": 3,
        "title": "Instant Policy Print",
        "description": "Official IRDAI-approved policy PDF handed over in 5 minutes."
      }
    ],
    "processingInfo": "Instant policy issuance in 5 minutes at our Kendra.",
    "faqs": [
      {
        "question": "Can I renew my bike insurance if it expired 6 months ago?",
        "answer": "Yes, we can issue a fresh policy instantly with zero hassle and avoid traffic challans."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "driving-licence",
      "health-insurance",
      "insurance-services"
    ],
    "icon": "Car",
    "image": "/images/services/motor-insurance.jpg",
    "imageAlt": "Motor Vehicle Bike and Car Insurance Renewal in Nerul",
    "seo": {
      "title": "Bike & Car Insurance Renewal in Nerul | Maha E-Seva Kendra",
      "description": "Instant two-wheeler and car insurance renewal in 5 minutes at Maha E-Seva Kendra Nerul East, Navi Mumbai. Lowest premium quotes. Service fee \u20b9100."
    }
  },
  {
    "id": "25",
    "slug": "digital-life-certificate-pensioners",
    "name": "Digital Life Certificate for Pensioners",
    "category": "health-welfare",
    "shortDescription": "Jeevan Pramaan biometric digital life certificate generation for central & state government pensioners.",
    "description": "Biometric Digital Life Certificate (Jeevan Pramaan) generation for Central Government, State Government, Defense, Railway, Post Office, and EPFO EPS-95 pensioners. No need to stand in long queues at bank branches; biometrics verified at Kendra in 5 minutes.",
    "price": 200,
    "priceLabel": "\u20b9200",
    "governmentFee": null,
    "documents": [
      {
        "name": "Pensioner Aadhaar Card",
        "required": true,
        "note": "Original for biometric authentication"
      },
      {
        "name": "PPO Number (Pension Payment Order)",
        "required": true,
        "note": "Mentioned in pension book / slip"
      },
      {
        "name": "Pension Disbursing Bank Account Number & IFSC",
        "required": true,
        "note": "Bank where monthly pension is credited"
      },
      {
        "name": "Pension Sanctioning Authority & Agency Name",
        "required": true,
        "note": "e.g. Central Govt, Maharashtra Govt, EPFO"
      }
    ],
    "eligibility": [
      "Any retired pensioner receiving monthly pension from Central/State Government, Armed Forces, Railways, Telecom, or EPFO."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "PPO & Bank Details Entry",
        "description": "Accurate recording on the official Jeevan Pramaan portal."
      },
      {
        "step": 2,
        "title": "Biometric Fingerprint Authentication",
        "description": "Instant live biometric scan via UIDAI-certified optical scanner."
      },
      {
        "step": 3,
        "title": "Pramaan ID & Acknowledgment Slip",
        "description": "Instant generation of official Pramaan ID and printed confirmation receipt."
      }
    ],
    "processingInfo": "Instant generation in 5 minutes. Direct electronic update to your pension disbursing bank.",
    "faqs": [
      {
        "question": "Do I still need to submit a physical life certificate to my bank branch?",
        "answer": "No. The Jeevan Pramaan digital certificate is electronically sent directly to your pension disbursing agency/bank, fulfilling your annual life certificate requirement."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "senior-citizen-card",
      "uan-pf-card",
      "banking-related-services"
    ],
    "icon": "Heart",
    "image": "/images/services/digital-life-certificate.jpg",
    "imageAlt": "Jeevan Pramaan Digital Life Certificate for Pensioners in Nerul",
    "seo": {
      "title": "Digital Life Certificate (Jeevan Pramaan) in Nerul | Maha E-Seva Kendra",
      "description": "Instant biometric Jeevan Pramaan Digital Life Certificate for pensioners at Maha E-Seva Kendra Nerul East, Navi Mumbai. Service fee \u20b9200."
    }
  },
  {
    "id": "26",
    "slug": "passport-size-photo",
    "name": "Passport Size Photo",
    "category": "photography-printing",
    "shortDescription": "Instant studio-quality passport size color photos (30 copies for \u20b9100) printed in 5 minutes.",
    "description": "High-resolution studio photography and instant photo printing on premium glossy photographic paper. We deliver 30 copies for \u20b9100 in official passport size (35mm x 45mm), visa format, or stamp size with custom white/blue background.",
    "price": 100,
    "priceLabel": "\u20b9100 / 30 photos",
    "governmentFee": null,
    "documents": [
      {
        "name": "Physical presence at Kendra",
        "required": true,
        "note": "We take photo with DSLR camera and studio lighting"
      }
    ],
    "eligibility": [
      "Anyone requiring photos for Passport, Visa, Exam Admit Cards, Licences, or Job Applications."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Studio Photo Capture",
        "description": "Clean photo taken with proper posture and neutral background."
      },
      {
        "step": 2,
        "title": "Digital Retouching & Sizing",
        "description": "Professional cropping as per government guidelines."
      },
      {
        "step": 3,
        "title": "High-Gloss Print & Precision Cutting",
        "description": "30 glossy photographs handed over in 5 minutes."
      }
    ],
    "processingInfo": "Instant 5-minute handover at Kendra.",
    "faqs": [
      {
        "question": "Can I get soft copy (JPEG) on WhatsApp or email?",
        "answer": "Yes, we can send the properly sized digital passport photo JPEG directly to your WhatsApp or email for online job/college form filling."
      }
    ],
    "popular": true,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "passport-online-application",
      "pan-card",
      "government-job-scheme-online-form-filling"
    ],
    "icon": "Camera",
    "image": "/images/services/passport-photo.jpg",
    "imageAlt": "Instant Passport Size Photos Studio Print in Nerul",
    "seo": {
      "title": "Passport Size Photos Studio Print in Nerul | Maha E-Seva Kendra",
      "description": "Instant passport size photo studio print in Nerul East, Navi Mumbai. 30 photos for \u20b9100. High-gloss photographic paper. Ready in 5 minutes."
    }
  },
  {
    "id": "27",
    "slug": "a4-card-lamination",
    "name": "A4 & Card Lamination",
    "category": "photography-printing",
    "shortDescription": "Heavy-duty thermal pouch lamination for original certificates, marksheets, and smart ID cards.",
    "description": "High-grade 250-micron thermal pouch lamination service for A4 size government certificates, school/degree marksheets, property deeds, and pocket-size ID cards (Aadhaar, PAN, Voter ID). Protects original documents from water, dust, tearing, and aging.",
    "price": 10,
    "priceLabel": "\u20b910 / 5 units",
    "governmentFee": null,
    "documents": [
      {
        "name": "Original documents / smart cards to be laminated",
        "required": true,
        "note": "Check that documents are dry and flat"
      }
    ],
    "eligibility": [
      "Open to all citizens wanting document preservation."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Inspection",
        "description": "Inspection and alignment into protective thermal pouch."
      },
      {
        "step": 2,
        "title": "Thermal Roller Lamination",
        "description": "Even heat sealing ensuring zero air bubbles."
      },
      {
        "step": 3,
        "title": "Handover",
        "description": "Instant delivery with smooth edge finish."
      }
    ],
    "processingInfo": "Instant 2-minute service.",
    "faqs": [
      {
        "question": "Will lamination damage my original government seal?",
        "answer": "No, we use commercial low-heat thermal pouches specifically designed for preserving certificates without blurring stamps."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "passport-size-photo",
      "digital-album-photo-quality-family-documents"
    ],
    "icon": "Printer",
    "image": "/images/services/lamination.jpg",
    "imageAlt": "A4 and Card Lamination Services in Nerul Navi Mumbai",
    "seo": {
      "title": "A4 Document & Card Lamination in Nerul | Maha E-Seva Kendra",
      "description": "Professional thermal lamination for A4 certificates and smart cards at Maha E-Seva Kendra Nerul East, Navi Mumbai. 5 units for \u20b910."
    }
  },
  {
    "id": "28",
    "slug": "money-transfer-withdrawal",
    "name": "Money Transfer & Withdrawal",
    "category": "banking",
    "shortDescription": "AePS Aadhaar fingerprint cash withdrawal, domestic money transfer (DMT), and mini-statement.",
    "description": "Aadhaar Enabled Payment System (AePS) Micro-ATM and Domestic Money Transfer (IMPS/NEFT) service. Withdraw cash instantly using your Aadhaar fingerprint from any bank account in India, check bank balance, or send money to any bank account 7 days a week.",
    "price": null,
    "priceLabel": "Contact for pricing",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card / Aadhaar Linked Bank Name",
        "required": true,
        "note": "For AePS cash withdrawal"
      },
      {
        "name": "Beneficiary Account Number & IFSC Code",
        "required": false,
        "note": "For domestic money transfer"
      }
    ],
    "eligibility": [
      "Any bank account holder in India whose account is linked with Aadhaar."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Bank Selection & Amount Entry",
        "description": "Enter transaction amount and select bank."
      },
      {
        "step": 2,
        "title": "Biometric Authentication",
        "description": "Customer places finger on certified AePS Micro-ATM terminal."
      },
      {
        "step": 3,
        "title": "Instant Cash & SMS Receipt",
        "description": "Immediate cash handover with printed/SMS receipt."
      }
    ],
    "processingInfo": "Instant transaction completed in 1 minute.",
    "faqs": [
      {
        "question": "What is the daily cash withdrawal limit on AePS?",
        "answer": "Limits are set by your respective bank (typically \u20b910,000 to \u20b925,000 per day)."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "banking-related-services",
      "all-types-bank-loan"
    ],
    "icon": "DollarSign",
    "image": "/images/services/money-transfer.jpg",
    "imageAlt": "Money Transfer and AePS Cash Withdrawal in Nerul",
    "seo": {
      "title": "Money Transfer & AePS Cash Withdrawal in Nerul | Maha E-Seva Kendra",
      "description": "Instant Aadhaar fingerprint cash withdrawal and money transfer to all banks at Maha E-Seva Kendra Nerul East, Navi Mumbai. Open daily 9 AM - 10 PM."
    }
  },
  {
    "id": "29",
    "slug": "digital-album-photo-quality-family-documents",
    "name": "Digital Album Photo Quality of Family Documents",
    "category": "photography-printing",
    "shortDescription": "High-resolution 600 DPI scanning, color correction, and digital archival of family property & identity papers.",
    "description": "Professional document archiving service to safeguard your family's vital records (Property 7/12 extracts, Sale Deeds, Birth/Marriage Certificates, Old Degrees, Wills). We perform 600 DPI high-resolution scanning, enhancement, indexing, and deliver a secure Digital Album folder on pendrive/WhatsApp/DigiLocker.",
    "price": null,
    "priceLabel": "Contact for pricing",
    "governmentFee": null,
    "documents": [
      {
        "name": "Family property papers, marksheets, or certificates to be scanned",
        "required": true,
        "note": "All originals safely handled and returned immediately"
      }
    ],
    "eligibility": [
      "Families, property owners, and professionals wanting lifelong digital backup of crucial documents."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "High-Resolution Scanning",
        "description": "600 DPI flatbed color scanning of each document."
      },
      {
        "step": 2,
        "title": "Digital Cleanup & PDF Indexing",
        "description": "Color correction, sharpness boost, and organized folder structure."
      },
      {
        "step": 3,
        "title": "Digital Delivery & Lamination",
        "description": "Delivery via USB, email, and WhatsApp with optional thermal lamination."
      }
    ],
    "processingInfo": "Completed in 15 to 30 minutes depending on page volume.",
    "faqs": [
      {
        "question": "Can I use these digital scans for online government applications?",
        "answer": "Yes, our scanned PDFs are formatted to exact government size and resolution specifications for instant portal upload."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "a4-card-lamination",
      "passport-size-photo"
    ],
    "icon": "FolderArchive",
    "image": "/images/services/digital-document-album.jpg",
    "imageAlt": "Family Document Digital Album Scanning in Nerul Navi Mumbai",
    "seo": {
      "title": "Digital Document Scanning & Album in Nerul | Maha E-Seva Kendra",
      "description": "High-resolution 600 DPI scanning and digital preservation of property deeds and family certificates at Maha E-Seva Kendra Nerul East, Navi Mumbai."
    }
  },
  {
    "id": "30",
    "slug": "government-job-scheme-online-form-filling",
    "name": "Government Job & Scheme Online Form Filling",
    "category": "government-forms",
    "shortDescription": "Error-free online application form filling for MPSC, UPSC, SSC, Railway, Police Bharti & welfare schemes.",
    "description": "Expert online form filling assistance for all Central & Maharashtra Government recruitments (MPSC, UPSC, Staff Selection Commission, Railway RRB, Maharashtra Police Bharti, Banking IBPS, Talathi, Zilla Parishad) and government welfare schemes (Majhi Ladki Bahin, PM-Kisan, Namo Shetkari). We ensure accurate photo/signature resizing, category eligibility, and fee submission.",
    "price": null,
    "priceLabel": "Contact for pricing",
    "governmentFee": "Official examination fee as per recruitment notification",
    "documents": [
      {
        "name": "Aadhaar Card & Photo Identity Proof",
        "required": true,
        "note": "Primary identity"
      },
      {
        "name": "Educational Marksheets & Certificates (10th, 12th, Degree)",
        "required": true,
        "note": "To enter accurate marks and passing dates"
      },
      {
        "name": "Caste / NCL / EWS Certificate (if applying under quota)",
        "required": false,
        "note": "To enter valid certificate number"
      },
      {
        "name": "Passport Size Photograph & Signature",
        "required": true,
        "note": "Resized strictly as per exam KB/pixel specifications in-house"
      }
    ],
    "eligibility": [
      "Candidates meeting the age and educational criteria specified in the respective recruitment advertisement."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Notification Review & Eligibility Check",
        "description": "We verify post eligibility, age limits, and required attachments."
      },
      {
        "step": 2,
        "title": "Online Form Submission & Photo Resizing",
        "description": "Error-free data entry and photo/signature upload."
      },
      {
        "step": 3,
        "title": "Fee Payment & Application Printout",
        "description": "Online payment confirmation and printed copy of submitted application with roll reference."
      }
    ],
    "processingInfo": "Completed in 15\u201320 minutes at Kendra.",
    "faqs": [
      {
        "question": "Do you assist with Admit Card downloads?",
        "answer": "Yes, we provide admit card download and hall ticket color printout services once issued by the exam authority."
      }
    ],
    "popular": true,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "passport-size-photo",
      "caste-certificate",
      "non-creamy-layer-certificate"
    ],
    "icon": "FileCheck",
    "image": "/images/services/govt-job-forms.jpg",
    "imageAlt": "Government Job and Scheme Online Form Filling in Nerul",
    "seo": {
      "title": "Govt Job & Scheme Online Form Filling in Nerul | Maha E-Seva Kendra",
      "description": "Expert online form filling for MPSC, Police Bharti, SSC, Railway exams and state schemes at Maha E-Seva Kendra Nerul East, Navi Mumbai."
    }
  },
  {
    "id": "31",
    "slug": "all-types-bank-loan",
    "name": "All Types of Bank Loan",
    "category": "banking",
    "shortDescription": "Guidance and document dossier preparation for Home Loans, Mudra Business Loans & Personal Loans.",
    "description": "Assistance and guidance for preparing complete loan application files for Home Loans, Business Loans, Pradhan Mantri Mudra Yojana (PMMY), PMEGP subsidies, and Personal Loans. We assist with KYC compilation, ITR dossiers, bank statement indexing, and property document organization.",
    "price": null,
    "priceLabel": "Contact for pricing",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card & PAN Card of Applicant & Co-applicant",
        "required": true,
        "note": "Identity and address proofs"
      },
      {
        "name": "Income Proof (ITR 3 years / Salary Slips 6 months / Form 16)",
        "required": true,
        "note": "To establish repayment capacity"
      },
      {
        "name": "Bank Statement (Last 6 to 12 months)",
        "required": true,
        "note": "Showing regular salary / turnover"
      },
      {
        "name": "Business Proof / Property Documents (for Secured/Business Loans)",
        "required": false,
        "note": "MSME Udyam, Gumasta, Sale Deed, or 7/12"
      }
    ],
    "eligibility": [
      "Salaried individuals, self-employed professionals, and small business owners seeking bank loan assistance."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Eligibility & CIBIL Assessment",
        "description": "Review of income, credit profile, and required loan amount."
      },
      {
        "step": 2,
        "title": "Document Dossier Compilation",
        "description": "Organizing KYC, tax returns, bank statements, and business licences into bank-ready file."
      },
      {
        "step": 3,
        "title": "Application Guidance",
        "description": "Guidance on connecting with leading public and private bank loan desks."
      }
    ],
    "processingInfo": "File preparation within 1\u20132 days.",
    "faqs": [
      {
        "question": "Do you assist with Mudra Business Loan documentation?",
        "answer": "Yes, we help small shopkeepers and micro-enterprises prepare Udyam MSME registrations, project estimates, and loan dossier for Mudra Shishu, Kishore, or Tarun loans."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "small-scale-business-msme-licence",
      "banking-related-services",
      "shop-establishment-licence-gumasta"
    ],
    "icon": "Building",
    "image": "/images/services/bank-loan.jpg",
    "imageAlt": "Bank Loan Documentation Assistance in Nerul Navi Mumbai",
    "seo": {
      "title": "Bank Loan Documentation & Guidance in Nerul | Maha E-Seva Kendra",
      "description": "Assistance for Home Loans, Personal Loans, and Mudra MSME Loans documentation at Maha E-Seva Kendra Nerul East, Navi Mumbai."
    }
  },
  {
    "id": "32",
    "slug": "insurance-services",
    "name": "Insurance Services",
    "category": "insurance",
    "shortDescription": "Comprehensive insurance guidance covering Life, Health, Motor, Term, and Shop protection.",
    "description": "All-in-one insurance consultation and facilitation desk. We help citizens compare, buy, and service policies across Life Insurance (LIC, HDFC Life), Term Insurance with \u20b91 Crore cover, Health Insurance, Motor Insurance, and Shop Commercial Property Insurance.",
    "price": null,
    "priceLabel": "Contact for pricing",
    "governmentFee": null,
    "documents": [
      {
        "name": "Aadhaar Card & PAN Card",
        "required": true,
        "note": "Mandatory for insurance proposal KYC"
      },
      {
        "name": "Income Proof (for high-value Term Life Insurance)",
        "required": false,
        "note": "Salary slips or ITR"
      },
      {
        "name": "Existing Policy Details (for renewal or revival)",
        "required": false,
        "note": "Policy number and premium notice"
      }
    ],
    "eligibility": [
      "Any individual, family, or business owner seeking insurance protection."
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Portfolio Evaluation",
        "description": "Assessing family life, health, and asset insurance requirements."
      },
      {
        "step": 2,
        "title": "Comparative Plan Analysis",
        "description": "Evaluating claim settlement ratios, premium costs, and benefits across top IRDAI insurers."
      },
      {
        "step": 3,
        "title": "Proposal Submission & Policy Issue",
        "description": "Instant digital policy issuance and document handover."
      }
    ],
    "processingInfo": "Instant policy quote and digital issuance in 10 minutes.",
    "faqs": [
      {
        "question": "Can you help revive an old lapsed LIC policy?",
        "answer": "Yes, we check policy revival quotations and assist with premium payment and nomination updates."
      }
    ],
    "popular": false,
    "featured": false,
    "status": "active",
    "lastUpdated": "2026-10-01",
    "relatedServices": [
      "health-insurance",
      "motor-insurance"
    ],
    "icon": "ShieldCheck",
    "image": "/images/services/insurance-services.jpg",
    "imageAlt": "Complete Insurance Services Desk in Nerul Navi Mumbai",
    "seo": {
      "title": "Insurance Services & Policy Advisory in Nerul | Maha E-Seva Kendra",
      "description": "Explore Life, Health, Vehicle, and Term Insurance plans from top providers at Maha E-Seva Kendra Nerul East, Navi Mumbai. Transparent advice."
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getPopularServices(): Service[] {
  return services.filter((s) => s.popular);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getRelatedServices(slugs: string[]): Service[] {
  if (!slugs || slugs.length === 0) return [];
  return services.filter((s) => slugs.includes(s.slug));
}

export function searchServices(query: string): Service[] {
  const q = query.trim().toLowerCase();
  if (!q) return services;
  return services.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.documents.some((d) => d.name.toLowerCase().includes(q))
  );
}
