import React from 'react';
import { render, screen } from '@testing-library/react';
import RichTextEditor from './RichTextEditor';

test('renders learn react link', () => {
  render(<RichTextEditor />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
