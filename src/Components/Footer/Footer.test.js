import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';

import App from '../../App';

const setup = () => {
  let history;
  render(
    <MemoryRouter>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

describe('Footer links', () => {
  test('profy.dev link points to correct url', () => {
    setup();

    const container = document.querySelector('footer');
    const link = within(container).getByRole('link', { name: /profy\.dev/i });
    userEvent.click(link);

    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
  });

  test('logo points to home', () => {
    setup();

    const logo = screen.getByRole('link', { name: /^logo\.svg/i });
    userEvent.click(logo);

    expect(screen.getByRole('heading', { name: /no reactions/i })).toBeInTheDocument();
  });

  test('Terms & Privacy points to /terms', () => {
    const { history } = setup();

    const link = screen.getByRole('link', { name: /terms & privacy/i });
    userEvent.click(link);

    expect(history.location.pathname).toBe('/terms');
  });
});
