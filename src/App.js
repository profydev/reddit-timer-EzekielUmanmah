import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'montserrat' }}>This is a test of the fonts</div>
      <div style={{ fontFamily: 'bitter' }}>This is a test of the fonts</div>
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
