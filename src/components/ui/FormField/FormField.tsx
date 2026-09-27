import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from 'react';
import styles from './FormField.module.css';

// ---- Label ----
interface LabelProps {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

export function Label({ htmlFor, required = false, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
      {required && <span className={styles['required-mark']} aria-hidden="true">*</span>}
    </label>
  );
}

// ---- Field Error ----
interface FieldErrorProps {
  id?: string;
  children: ReactNode;
}

export function FieldError({ id, children }: FieldErrorProps) {
  return (
    <p id={id} className={styles['field-error']} role="alert">
      {children}
    </p>
  );
}

// ---- Field Hint ----
export function FieldHint({ children }: { children: ReactNode }) {
  return <p className={styles['field-hint']}>{children}</p>;
}

// ---- Input ----
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  hint?: string;
  errorMessage?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, hint, errorMessage, id, required, wrapperClassName = '', className = '', ...rest }, ref) => {
    const errorId = id ? `${id}-error` : undefined;
    return (
      <div className={[styles.field, wrapperClassName].filter(Boolean).join(' ')}>
        {label && <Label htmlFor={id || ''} required={required}>{label}</Label>}
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={errorMessage ? errorId : undefined}
          required={required}
          className={[styles.input, error ? styles['input-error'] : '', className].filter(Boolean).join(' ')}
          {...rest}
        />
        {errorMessage && <FieldError id={errorId}>{errorMessage}</FieldError>}
        {hint && !errorMessage && <FieldHint>{hint}</FieldHint>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// ---- Textarea ----
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  label?: string;
  hint?: string;
  errorMessage?: string;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, hint, errorMessage, id, required, wrapperClassName = '', className = '', ...rest }, ref) => {
    const errorId = id ? `${id}-error` : undefined;
    return (
      <div className={[styles.field, wrapperClassName].filter(Boolean).join(' ')}>
        {label && <Label htmlFor={id || ''} required={required}>{label}</Label>}
        <textarea
          ref={ref}
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={errorMessage ? errorId : undefined}
          required={required}
          className={[styles.input, styles.textarea, error ? styles['input-error'] : '', className].filter(Boolean).join(' ')}
          {...rest}
        />
        {errorMessage && <FieldError id={errorId}>{errorMessage}</FieldError>}
        {hint && !errorMessage && <FieldHint>{hint}</FieldHint>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// ---- Select ----
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  label?: string;
  hint?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  placeholder?: string;
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, label, hint, errorMessage, id, required, placeholder, wrapperClassName = '', className = '', children, ...rest }, ref) => {
    const errorId = id ? `${id}-error` : undefined;
    return (
      <div className={[styles.field, wrapperClassName].filter(Boolean).join(' ')}>
        {label && <Label htmlFor={id || ''} required={required}>{label}</Label>}
        <select
          ref={ref}
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={errorMessage ? errorId : undefined}
          required={required}
          className={[styles.input, styles.select, error ? styles['input-error'] : '', className].filter(Boolean).join(' ')}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </select>
        {errorMessage && <FieldError id={errorId}>{errorMessage}</FieldError>}
        {hint && !errorMessage && <FieldHint>{hint}</FieldHint>}
      </div>
    );
  }
);
Select.displayName = 'Select';
