import React from 'react';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  return (
    <div className="App">
      <div className="calculator-app"><Calculator /></div>
      <div className="quote-app"><QuoteDisplay /></div>
    </div>
  );
}

export default App;
