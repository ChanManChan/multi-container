import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text one', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/and save to reload./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders text two', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Multi container/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders text three', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NandaGopal tests/i);
  expect(linkElement).toBeInTheDocument();
});
