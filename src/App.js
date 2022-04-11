import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotMatch from './Pages/NotMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
