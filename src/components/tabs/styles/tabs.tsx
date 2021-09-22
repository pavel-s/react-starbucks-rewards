import styled, { css, CSSProperties } from 'styled-components/macro';
import { mAbsoluteSpread } from '../../../mixins';

export const Background = styled.div<{ color?: CSSProperties['color'] }>`
  background-color: ${({ color }) => color};
`;
Background.defaultProps = { color: 'rgba(212, 233, 226, 0.33)' };

export const Header = styled.div`
  padding-top: 4.8rem;

  @media (min-width: 768px) {
    max-width: 540px;
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.385;
  text-align: center;
  padding-bottom: 1.6rem;
  margin: 0;

  @media (min-width: 375px) {
    font-size: 2.4rem;
  }

  @media (min-width: 375px) {
    font-size: 2.8rem;
    padding-bottom: 4.8rem;
  }
`;

export const NavItem = styled.button<{ active?: boolean; offset?: number }>`
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 0.8rem 0.8rem 1.6rem 0.8rem;
  font-weight: 600;
  font-size: 1.9rem;
  text-align: center;
  margin: 0;
  width: 100%;
  position: relative;
  cursor: pointer;

  > .nav-item-emoji {
    color: #cba258;
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Nav = styled.div<{ sliderOffset?: number; sliderWidth?: number }>`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;

  > ${NavItem}:first-of-type {
    ::after {
      content: '';
      transition: transform 0.3s ease;
      transform: ${({ sliderOffset }) => `translateX(${sliderOffset}px)`};
      background: #008248;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: ${({ sliderWidth }) =>
        sliderWidth ? `${sliderWidth}px` : '100%'};
    }
  }
`;

export const Panels = styled.div`
  ${Background} {
    box-shadow: inset 0 7px 9px -7px rgb(0 0 0 / 14%);
  }
`;

export const PanelsInner = styled.div`
  position: relative;
  padding-bottom: 4.8rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const panelActive = css`
  opacity: 1;
  visibility: visible;
`;
const panelInactive = css`
  opacity: 0;
  visibility: hidden;
  ${mAbsoluteSpread};
`;

export const Panel = styled.div<{ active?: boolean }>`
  text-align: center;
  transition: 0.3s ease-out;
  transition-property: opacity, visibility;
  ${({ active }) => (active ? panelActive : panelInactive)}

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 3.2rem 0;
  }
`;

export const PanelContent = styled.div`
  padding: 0 1.6rem;

  @media (min-width: 768px) {
    max-width: 375px;
    text-align: left;
  }
`;

export const PanelTitle = styled.h4`
  font-size: 1.9rem;
  font-weight: 600;
  padding-bottom: 1.6rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const PanelText = styled.p`
  margin: 0;
`;

export const PanelImage = styled.div`
  max-width: 100%;
  padding: 3.2rem 0;

  .image-wrapper {
    position: relative;
  }

  .image-filler {
    padding-top: 56.25%; // set same image height across all tabs
    width: 100%;
  }

  .image-absolute-container {
    ${mAbsoluteSpread}

    > img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    max-width: 375px;
    flex-grow: 1;
    padding: 0;
    margin-right: 4.8rem;
  }
`;
