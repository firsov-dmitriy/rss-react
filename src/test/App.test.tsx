import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('render CardList', () => {
  render(<App />);
  const renderNav = screen.getAllByText(/MainPage/i)[0];
  const btn = screen.getAllByRole('button')[1];
  expect(renderNav).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});
