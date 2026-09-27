// ============================================================
// Maha E-Seva Kendra — Application Router
// Source: Technical Architecture §5, Implementation Phases §2
// ============================================================

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../../components/layout';

// Lazy-load page components for code splitting (Performance §17)
const Home = lazy(() => import('../../pages/Home'));
const Services = lazy(() => import('../../pages/Services'));
const ServiceDetail = lazy(() => import('../../pages/ServiceDetail'));
const Schemes = lazy(() => import('../../pages/Schemes'));
const SchemeDetail = lazy(() => import('../../pages/SchemeDetail'));
const Blog = lazy(() => import('../../pages/Blog'));
const Article = lazy(() => import('../../pages/Article'));
const About = lazy(() => import('../../pages/About'));
const FAQ = lazy(() => import('../../pages/FAQ'));
const Contact = lazy(() => import('../../pages/Contact'));
const NotFound = lazy(() => import('../../pages/NotFound'));

// Minimal PageLoader shown during route transition
function PageLoader() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-muted)',
        fontSize: 'var(--text-sm)',
      }}
      aria-label="Loading page"
    >
      Loading…
    </div>
  );
}

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

// Root layout element with Navbar, Outlet, Footer, WhatsAppFloat, MobileActionBar
function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'services',
        element: withSuspense(Services),
      },
      {
        path: 'services/:slug',
        element: withSuspense(ServiceDetail),
      },
      {
        path: 'schemes',
        element: withSuspense(Schemes),
      },
      {
        path: 'schemes/:slug',
        element: withSuspense(SchemeDetail),
      },
      {
        path: 'blog',
        element: withSuspense(Blog),
      },
      {
        path: 'blog/:slug',
        element: withSuspense(Article),
      },
      {
        path: 'about',
        element: withSuspense(About),
      },
      {
        path: 'faq',
        element: withSuspense(FAQ),
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      {
        path: '*',
        element: withSuspense(NotFound),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
