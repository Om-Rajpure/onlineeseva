// ============================================================
// Maha E-Seva Kendra — App Entry Point
// ============================================================

import '../styles/globals.css';
import '../styles/utilities.css';
import { AppRouter } from './router';
import { ErrorBoundary } from './providers/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
