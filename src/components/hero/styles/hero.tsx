import styled from 'styled-components/macro';

export const Background = styled.div`
  background-color: rgb(212, 233, 226);
  background-image: url(/images/hero-mobile_2021.webp);
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url(/images/xl-hero-desktop_2021.webp);
    background-position: 50%;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ::before {
    content: '';
    display: block;
    float: left;
    width: 0;
    padding-bottom: 133.333%;
  }

  ::after {
    clear: both;
    content: '';
    display: block;
  }

  @media (min-width: 768px) {
    align-items: center;

    ::before {
      padding-bottom: 56.25%;
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 3.2rem 1.6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 48%;
    margin-left: 0;
    padding: 3.2rem 2.4rem;
    text-align: left;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 3.2rem 4rem;
  }

  @media (min-width: 1520px) {
    padding: 3.2rem 0;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 1.29;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const Text = styled.p<{ bp?: string }>`
  font-size: 1.6rem;
  margin: 0;
  padding-top: 1.6rem;

  ${({ bp }) => (bp ? `@media (${bp}) {display: none}` : '')}

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const Group = styled.div<{ variant: 'mobile' | 'desktop' }>`
  padding-top: 3.2rem;
  display: ${({ variant }) => (variant === 'mobile' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: ${({ variant }) => (variant === 'desktop' ? 'flex' : 'none')};
    align-items: flex-start;
  }
`;

export const Link = styled.a``;
