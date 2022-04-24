import React from 'react';
import { render, screen } from '@testing-library/react';

import Form from '../components/Form';

test('form is render', () => {
  render(<Form />);

  const formsName = screen.getAllByText(/Name/i)[0];
  const formsSub = screen.getByRole('button');

  expect(formsName).toBeInTheDocument();
  expect(formsSub).toBeInTheDocument();
});
