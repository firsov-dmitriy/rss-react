import React from 'react';
import { render, screen } from '@testing-library/react';

import Form from '../components/Form';

test('form is render', () => {
  render(<Form />);
  const forms = screen.getAllByText(/CardPerson/i);
  expect(forms).toBeInTheDocument;
});
test('input is render', () => {
  render(<Form />);
  const forms = screen.getAllByText(/Name/i);
  expect(forms).toBeInTheDocument;
});
test('button is render', () => {
  render(<Form />);
  const forms = screen.getAllByText(/Submit/i);
  expect(forms).toBeInTheDocument;
});
