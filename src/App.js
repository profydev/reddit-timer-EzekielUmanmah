/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Container } from './AppStyles';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Header />
      <Container>
        <Switch>
          <Route path="/search"><h1>Search</h1></Route>
          <Route path="/">
            <h1>Home</h1>
            <Hero />
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
