import styled from 'styled-components/macro';
import { mGlobalContainer } from '../../../mixins';

export const Wrapper = styled.div`
  background-color: #1e3932;
  position: sticky;
  top: 0;

  @media (min-width: 1024px) {
    top: 99px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%);

  ${mGlobalContainer}

  @media (min-width: 768px) {
    padding-left: 99px;

    > a {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 131px;
    /* position: static; */
  }

  @media (min-width: 1520px) {
    padding-left: 0;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 1.3rem;
  color: #fff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
