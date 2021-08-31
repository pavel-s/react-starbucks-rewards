import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './fonts.css'; // import fonts here instead of createGlobalStyle to avoid font flickering in dev mode
import GlobalStyles from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
