import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import matchers
import QuoteDisplay from '../../components/QuoteDisplay';

test('QuoteDisplay component fetches and displays a quote', async () => {
  const mockQuote = {
    quote: 'Test quote',
    author: 'Test author',
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([mockQuote]),
  }));

  const { getByText } = render(<QuoteDisplay />);

  await waitFor(() => {
    expect(getByText('Test quote')).toBeInTheDocument();
    expect(getByText('- Test author')).toBeInTheDocument();
  });
});

test('QuoteDisplay component displays loading message while fetching', async () => {
  global.fetch = jest.fn(() => new Promise(() => {}));

  const { getByText } = render(<QuoteDisplay />);

  await waitFor(() => {
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

test('QuoteDisplay component displays error message if fetch fails', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error')));

  const { getByText } = render(<QuoteDisplay />);

  await waitFor(() => {
    expect(getByText('Error: An error occurred while fetching quotes.')).toBeInTheDocument();
  });
});
