import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'));
const Calculator = lazy(() => import('./pages/Calculator'))
function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/calculator'>Calculator</Link>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
