import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
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

describe('Header', () => {
  test('logo points to the home page', () => {
    setup('/search/javascript');

    const logo = screen.getByRole('link', { name: /redditLogo\.svg/i });
    userEvent.click(logo);

    expect(screen.getByRole('heading', { name: /no reactions/i })).toBeInTheDocument();
  });

  test('Search points to the Search page', () => {
    const { history } = setup();

    const search = screen.getByRole('link', { name: /search/i });
    userEvent.click(search);

    expect(screen.getByRole('heading', { name: /search/i })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/search/javascript');
  });

  test('About link adds hash to home url', () => {
    const { history } = setup();

    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);

    expect(history.location.hash).toBe('#about');
  });

  test('How it works link adds hash to home url', () => {
    const { history } = setup();

    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);

    expect(history.location.hash).toBe('#how-it-works');
  });
});
