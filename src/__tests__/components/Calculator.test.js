import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../components/Calculator';

test('Calculator component renders correctly', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('Calculator component handles button clicks correctly', () => {
  const { getByText, getByTestId } = render(<Calculator />);

  // Simulate button clicks
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  // Check if the displayValue is updated
  const displayValue = getByTestId('calculator-display');
  expect(displayValue.textContent).toBe('3');
});
