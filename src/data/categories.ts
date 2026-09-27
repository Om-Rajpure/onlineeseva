// ============================================================
// Maha E-Seva Kendra — Service Categories
// Source: PRD §6, Technical Architecture §7, Phases §7
// ============================================================

import type { CategoryConfig, ServiceCategory } from '../types';

export const categories: CategoryConfig[] = [
  {
    id: 'identity',
    label: 'Identity & Documents',
    description: 'Aadhaar, PAN, Voter ID, and identity-related services',
  },
  {
    id: 'certificates',
    label: 'Certificates',
    description: 'Domicile, income, caste, residence and other government certificates',
  },
  {
    id: 'health-welfare',
    label: 'Health & Welfare',
    description: 'ABHA health card, Ayushman Bharat, senior citizen and welfare services',
  },
  {
    id: 'travel-transport',
    label: 'Travel & Transport',
    description: 'Passport applications and driving licence services',
  },
  {
    id: 'employment',
    label: 'Employment',
    description: 'E-Shram card, UAN/PF card and employment-related services',
  },
  {
    id: 'business-registration',
    label: 'Business & Registration',
    description: 'MSME registration, Gumasta licence, e-registration and business services',
  },
  {
    id: 'banking',
    label: 'Banking',
    description: 'Banking-related services, money transfer and bank loan assistance',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    description: 'Health insurance, motor insurance and general insurance services',
  },
  {
    id: 'photography-printing',
    label: 'Photography & Printing',
    description: 'Passport photos, lamination and document digitization',
  },
  {
    id: 'government-forms',
    label: 'Government Forms',
    description: 'Online form filling for government jobs, schemes and applications',
  },
  {
    id: 'other',
    label: 'Other Services',
    description: 'Name change, police verification and other miscellaneous services',
  },
];

export const getCategoryById = (id: ServiceCategory): CategoryConfig | undefined =>
  categories.find((c) => c.id === id);

export const categoryLabels: Record<ServiceCategory, string> = Object.fromEntries(
  categories.map((c) => [c.id, c.label])
) as Record<ServiceCategory, string>;
