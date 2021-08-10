import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';
import GlobalStyles from './styles/globals';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyles />
    <App />
  </>, document.getElementById('root'),
);
