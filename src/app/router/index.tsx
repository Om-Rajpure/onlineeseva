import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../../components/layout';
import { ErrorBoundary } from '../../components/common/ErrorBoundary';

const Home = lazy(() => import('../../pages/Home'));
const Services = lazy(() => import('../../pages/Services'));
const ServiceDetail = lazy(() => import('../../pages/ServiceDetail'));
const Schemes = lazy(() => import('../../pages/Schemes'));
const SchemeDetail = lazy(() => import('../../pages/SchemeDetail'));
const Blog = lazy(() => import('../../pages/Blog'));
const Article = lazy(() => import('../../pages/Article'));
const Documents = lazy(() => import('../../pages/Documents'));
const About = lazy(() => import('../../pages/About'));
const FAQ = lazy(() => import('../../pages/FAQ'));
const Contact = lazy(() => import('../../pages/Contact'));
const Privacy = lazy(() => import('../../pages/Privacy'));
const Terms = lazy(() => import('../../pages/Terms'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        color: 'var(--color-muted, #6B5E4C)',
        fontSize: 'var(--text-sm, 0.875rem)',
      }}
      aria-label="Loading page"
    >
      <img
        src="/images/maha-eseva-logo.png"
        alt="Online e-Seva logo"
        style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '3px solid #E5DECA',
          borderTopColor: '#E8650A',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <span>Loading Online e-Seva…</span>
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

function RootLayout() {
  return (
    <ErrorBoundary>
      <Layout>
        <Outlet />
      </Layout>
    </ErrorBoundary>
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
        path: 'documents',
        element: withSuspense(Documents),
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
        path: 'privacy',
        element: withSuspense(Privacy),
      },
      {
        path: 'terms',
        element: withSuspense(Terms),
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
