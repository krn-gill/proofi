import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header, identity form, and footer', () => {
  render(<App />);
  
  // Check if header component is rendered
  const headerElement = screen.getByText(/Proofi - Decentralized Identity Verification/i);
  expect(headerElement).toBeInTheDocument();

  // Check if identity form component is rendered
  const identityFormElement = screen.getByText(/Request Identity Verification/i);
  expect(identityFormElement).toBeInTheDocument();

  // Check if footer component is rendered
  const footerElement = screen.getByText(/© 2024 Proofi. All rights reserved./i);
  expect(footerElement).toBeInTheDocument();
});
