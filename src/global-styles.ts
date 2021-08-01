import { createGlobalStyle } from 'styled-components';
import SoDoSansRegularWoff from './fonts/SoDoSans-Regular.woff';
import SoDoSansRegularWoff2 from './fonts/SoDoSans-Regular.woff2';
import SoDoSansSemiBoldWoff from './fonts/SoDoSans-SemiBold.woff';
import SoDoSansSemiBoldWoff2 from './fonts/SoDoSans-SemiBold.woff2';
import SoDoSansBoldWoff from './fonts/SoDoSans-Bold.woff';
import SoDoSansBoldWoff2 from './fonts/SoDoSans-Bold.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SoDoSans';
    src: url(${SoDoSansRegularWoff2}) format('woff2'),
        url(${SoDoSansRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SoDoSans';
    src: url(${SoDoSansSemiBoldWoff2}) format('woff2'),
        url(${SoDoSansSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SoDoSans';
    src: url(${SoDoSansBoldWoff2}) format('woff2'),
        url(${SoDoSansBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  :focus-visible {
    outline: 2px solid #00a862;
  }

  @media (pointer: coarse) {
    :focus {
      outline: none;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100%;
    margin: 0;
    background-color: #ffffff;
    color: rgba(0, 0, 0, .87);
    font-family: 'SoDoSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "calt";
  }

  @media (min-width: 768px) {
    body {
      font-size: 1.6rem;
    }
  }

  a {
    color: rgba(0, 0, 0, .87);
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit; /* 1 */
    font: inherit; /* 2 */
    margin: 0; /* 3 */
  }
`;

export default GlobalStyles;
