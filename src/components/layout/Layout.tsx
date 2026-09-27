import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { MobileActionBar } from './MobileActionBar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['layout-root']}>
      {/* Accessible skip to main content link */}
      <a href="#main-content" className={styles['skip-link']}>
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className={styles.main}>
        {children}
      </main>

      <Footer />

      <WhatsAppFloat />
      <MobileActionBar />
    </div>
  );
}
