import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render CardList', () => {
  render(<App />);
  const linkCards = screen.getAllByText(/список карточек/i);
  expect(linkCards).toBeInTheDocument;
});
