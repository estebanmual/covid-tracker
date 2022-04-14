import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotMatch from './Pages/NotMatch/NotMatch';
import Spinner from './components/Spinner/Spinner';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const ContinentPage = React.lazy(() => import('./Pages/ContinentPage/ContinentPage'));

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:continentName" element={<ContinentPage />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
