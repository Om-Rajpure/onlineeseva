import { type HTMLAttributes } from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'title' | 'avatar' | 'rect' | 'card';
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  borderRadius,
  className = '',
  style,
  ...props
}: SkeletonProps) {
  const customStyles: React.CSSProperties = {
    ...style,
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    ...(borderRadius !== undefined ? { borderRadius } : {}),
  };

  return (
    <div
      className={[styles.skeleton, styles[`skeleton-${variant}`], className]
        .filter(Boolean)
        .join(' ')}
      style={customStyles}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className={styles['skeleton-card-wrap']}>
      <Skeleton variant="avatar" width={48} height={48} />
      <Skeleton variant="title" width="70%" height={24} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="85%" height={16} />
      <div className={styles['skeleton-card-footer']}>
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="30%" height={36} borderRadius="8px" />
      </div>
    </div>
  );
}
