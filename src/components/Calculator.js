import React from 'react';
import './Calculator.css';
import Button from './Buttons';

const Calculator = () => (
  <div className="calculator">
    <div className="calculator-display">0</div>
    <div className="calculator-grid">
      <Button>AC</Button>
      <Button>+/-</Button>
      <Button>%</Button>
      <Button>÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>x</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
    </div>
  </div>
);

export default Calculator;
