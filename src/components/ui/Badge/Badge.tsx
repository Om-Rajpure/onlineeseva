import type { ReactNode } from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'ink';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ variant = 'primary', children, dot = false, className = '' }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[`badge-${variant}`], className].filter(Boolean).join(' ')}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
