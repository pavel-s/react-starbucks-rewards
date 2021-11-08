import styled, { CSSProperties } from 'styled-components/macro';
import { mGlobalContainer, mSectionHeader } from '../../../mixins';

export const Section = styled.section`
  margin-bottom: 72px;

  :last-of-type {
    margin-bottom: 4.8rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 128px;
  }
`;

export const Background = styled.div<{ color?: CSSProperties['color'] }>`
  background-color: ${({ color }) => color};
`;
Background.defaultProps = { color: 'rgba(212, 233, 226, 0.33)' };

export const Header = styled.div<{ textAlign?: CSSProperties['textAlign'] }>`
  ${mSectionHeader};
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign}` : '')}
`;

export const HeaderContainer = styled.div`
  ${mGlobalContainer}
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
