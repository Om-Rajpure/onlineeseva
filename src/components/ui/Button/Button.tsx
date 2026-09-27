import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'call';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type Props = ButtonProps | AnchorProps;

function buildClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  full = false,
  loading = false,
  iconOnly = false,
  extra = ''
) {
  return [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    full ? styles['btn-full'] : '',
    loading ? styles['btn-loading'] : '',
    iconOnly ? styles['btn-icon'] : '',
    extra,
  ]
    .filter(Boolean)
    .join(' ');
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      full = false,
      loading = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      as,
      ...rest
    } = props;

    const cls = buildClassName(variant, size, full, loading, iconOnly, className);

    const content = (
      <>
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        {loading && <span aria-hidden="true" style={{ marginLeft: 4 }}>…</span>}
      </>
    );

    if (as === 'a') {
      const { as: _as, ...anchorRest } = rest as AnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        disabled={(rest as ButtonProps).disabled || loading}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
