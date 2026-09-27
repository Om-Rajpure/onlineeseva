import { type ReactNode, type ElementType, type HTMLAttributes } from 'react';
import styles from './Container.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: ElementType;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  noPadding?: boolean;
}

export function Container({
  children,
  as: Component = 'div',
  size = 'lg',
  className = '',
  noPadding = false,
  ...props
}: ContainerProps) {
  const cls = [
    styles.container,
    styles[`container-${size}`],
    noPadding ? styles['no-padding'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={cls} {...props}>
      {children}
    </Component>
  );
}
