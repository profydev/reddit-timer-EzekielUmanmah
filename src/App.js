import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

import Header from './Components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyles />
        <Header />
        <h1>Reddit Analytics</h1>
        <Switch>
          <Route path="/search"><h1>Search</h1></Route>
          <Route path="/"><h1>Home</h1></Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
