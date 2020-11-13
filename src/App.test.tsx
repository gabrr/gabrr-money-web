import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check if there is any text', () => {
  render(<App />);
  const linkElement = screen.getByText(/w/i);
  expect(linkElement).toBeInTheDocument();
});
