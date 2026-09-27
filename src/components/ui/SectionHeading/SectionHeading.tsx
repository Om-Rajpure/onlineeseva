import { type ReactNode, type ElementType } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center' | 'right';
  level?: 1 | 2 | 3;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  level = 2,
  className = '',
}: SectionHeadingProps) {
  const HeadingTag: ElementType = `h${level}`;

  return (
    <div
      className={[
        styles['heading-group'],
        styles[`align-${align}`],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {badge && <span className={styles.badge}>{badge}</span>}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
