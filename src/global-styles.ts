import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
