import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('render Card', () => {
  render(<App />);
  const linkCards = screen.getAllByPlaceholderText(/Search/i)[0];
  expect(linkCards).toBeInTheDocument();
});
// jest.mock('./components/Header', () => ({
//   PostContent: jest.fn(() => <input data-testid="PostContent" />),
// }));
