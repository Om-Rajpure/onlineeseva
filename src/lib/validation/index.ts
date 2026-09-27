// ============================================================
// Maha E-Seva Kendra — Form Validation Utilities
// Source: Technical Architecture §15, Design System §14
// ============================================================

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
  preferredContact?: string;
}

/**
 * Validate the contact enquiry form
 * SECURITY NOTE: Do NOT add Aadhaar/PAN/OTP/bank credential fields.
 * See Technical Architecture §15.
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Name
  if (!data.name?.trim()) {
    errors.name = 'Please enter your name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be less than 100 characters.';
  }

  // Phone
  if (!data.phone?.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else {
    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 12) {
      errors.phone = 'Please enter a valid Indian mobile number.';
    }
  }

  // Service (optional but encouraged)
  // No validation error for empty service — it's helpful but not required

  // Message length (optional field)
  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitize a plain text string (basic XSS protection)
 * Never render unsanitized user input as HTML.
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}
