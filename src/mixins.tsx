import { css } from 'styled-components/macro';

export const mGlobalContainer = css`
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (min-width: 768px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1520px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
`;
