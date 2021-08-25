import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

describe('Hero section links', () => {
  test('CTA Button points to Search page', () => {
    const { history } = setup();

    const link = screen.getByRole('link', { name: /show me the best time/i });
    userEvent.click(link);

    expect(screen.getByRole('heading', { name: /search/i })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/search/javascript');
  });

  test('Heatmap is a Link that points to Search Page', () => {
    const { history } = setup();

    const img = screen.getByRole('img');
    userEvent.click(img);

    expect(screen.getByRole('heading', { name: /search/i })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/search/javascript');
  });
});
