import styled from 'styled-components/macro';
import { mGlobalContainer, mSectionHeader } from '../../../mixins';

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  ${mGlobalContainer}
  padding-top: 4.8rem;
  padding-bottom: 4.8rem;

  & span.star {
    font-size: 1.6rem;

    @media (min-width: 768px) {
      font-size: 1.9rem;
    }
  }
`;

export const ContainerHeader = styled.div`
  ${mSectionHeader};
  margin-bottom: 6.4rem;
  padding-top: 2.4rem;

  @media (min-width: 768px) {
    margin-bottom: 8rem;
    padding-top: 0;
  }

  @media (min-width: 1024px) {
    margin-bottom: 8.8rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 3.2rem;

  @media (min-width: 1024px) {
    width: 16.66667%;
  }
`;

export const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: 600;
  margin: 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  text-align: left;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 3.2rem;

  & ${Title} {
    font-size: 1.6rem;
  }

  & ${Text} {
    padding-top: 1.6rem;

    & a {
      display: inline-flex;
      align-items: center;
      color: #006241;

      & span {
        line-height: 1;
      }

      & .icon-svg {
        fill: #006241;
        width: 24px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 0.8rem;
    padding-bottom: 0;

    & ${Title} {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 1024px) {
    width: 41.66667%;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  @media (min-width: 1280px) {
    width: 33.33333%;
  }
`;

export const Image = styled.div`
  max-width: 128px;
  padding-right: 1.6rem;
  flex-shrink: 0;

  > img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  min-width: calc(100% - 128px);
`;

export const Divider = styled.hr`
  border: 0;
  margin: 0;
  padding-bottom: 4rem;
  padding-top: 1.6rem;
  height: 1px;

  ::before {
    content: '';
    display: block;
    /* border-top-width: 1px; */
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding-bottom: 4.8rem;
    padding-top: 2.4rem;
  }
`;
