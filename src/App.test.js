import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

const setup = () => {
  render(<MemoryRouter><App /></MemoryRouter>);
};

describe('Header Links', () => {
  const table = [['AbouT', 'About'], ['how it works', 'How it works'], ['redditLogo.svg', 'Home']];

  test.each(table)('"%s" link points to the "%s" page', (linkName, heading) => {
    setup();
    const link = screen.getByRole('link', { name: new RegExp(linkName, 'i') });
    userEvent.click(link);
    expect(screen.getByRole('heading', { name: new RegExp(heading, 'i') })).toBeInTheDocument();
  });
});
