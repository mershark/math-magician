import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/calculator.css';

const CalculatorPage = () => (
  <div className="calculator-div">
    <h2 className="calculator-h2">Lets do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
