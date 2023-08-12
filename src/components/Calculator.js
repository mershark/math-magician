import React, { useState } from 'react';
import './Calculator.css';
import Button from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    // Update displayValue immediately after setting the state
    const newDisplayValue = newState.next || newState.total || '0';
    setDisplayValue(newDisplayValue);
    // Update calculator state after updating displayValue
    setCalculatorState(newState);
  };
  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-grid">
        {/* Attaching the event handler to each Button */}
        <Button onClick={() => handleButtonClick('AC')}>AC</Button>
        <Button onClick={() => handleButtonClick('+/-')}>+/-</Button>
        <Button onClick={() => handleButtonClick('%')}>%</Button>
        <Button onClick={() => handleButtonClick('÷')}>÷</Button>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('x')}>x</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={() => handleButtonClick('=')}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
