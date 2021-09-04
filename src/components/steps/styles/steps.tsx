import styled from 'styled-components/macro';
import { mGlobalContainer, mMobileDesktopVariant } from '../../../mixins';

export const Container = styled.div`
  ${mGlobalContainer}

  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.385;
  font-weight: 600;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding-top: 1.6rem;

  > a {
    color: #008248;
  }
`;

export const Group = styled.div<{ variant?: 'mobile' | 'desktop' }>`
  ${({ variant }) => mMobileDesktopVariant({ variant, display: 'flex' })}
  flex-direction: column;
  padding-top: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 5vw;
  }
`;

export const Card = styled.div`
  display: flex;
  padding-bottom: 3.2rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 33.33333%;
    padding-bottom: 0;
    margin: 0 2.4rem;

    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const Icon = styled.div`
  max-width: 128px;
  padding-right: 1.6rem;
  margin: 0;
  flex-shrink: 0;
  text-align: center;

  > img {
    width: 48px;
  }

  @media (min-width: 768px) {
    padding-right: 0;
    padding-bottom: 2.4rem;
  }
`;

export const CardContent = styled.div`
  min-width: calc(100% - 128px);
  text-align: left;

  > ${Title} {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    text-align: center;

    > ${Title} {
      font-size: 1.9rem;
    }
  }
`;
