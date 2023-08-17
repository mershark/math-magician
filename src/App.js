import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="Navigation">
          <h1>Math Magicians</h1>
          <nav>
            <ul className="navs">
              <li className="nav-link"><Link style={{ color: '#007bff' }} to="/">Home</Link></li>
              <li className="nav-link"><Link style={{ color: '#007bff', borderLeft: '1px solid black', padding: '0 10px' }} to="/calculator">Calculator</Link></li>
              <li className="nav-link"><Link style={{ color: '#007bff', borderLeft: '1px solid black', padding: '0 10px' }} to="/quote">Quote</Link></li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
