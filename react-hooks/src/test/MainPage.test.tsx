import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('MainPage is render', async () => {
  render(<App />);
  const btn = screen.getAllByRole('button')[1];
  const cardrender = await screen.findAllByText(/alive/i);
  expect(btn).toBeInTheDocument();
  expect(cardrender[0]).toBeInTheDocument();
});
