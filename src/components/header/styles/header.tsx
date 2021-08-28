import styled from 'styled-components/macro';
import { mGlobalContainer } from '../../../mixins';
import {
  bottomLineCloseAnimation,
  bottomLineOpenAnimation,
  topLineCloseAnimation,
  topLineOpenAnimation,
} from './animations';

const BP_HAMBURGER = '799px';

export const Container = styled.header`
  position: relative;
  z-index: 99;
  background-color: #fff;

  @media (min-width: 1024px) {
    position: fixed;
    width: 100%;
  }
`;

export const Group = styled.div`
  display: none;
  align-items: center;

  @media (min-width: ${BP_HAMBURGER}) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${Group} + ${Group} {
    margin-left: auto;
  }

  ${mGlobalContainer}
`;

export const LogoWrapper = styled.div`
  position: relative;
`;

export const Logo = styled.a`
  width: 32px;
  height: 32px;
  margin: 1.6rem 1.6rem 1.6rem 0;
  flex-shrink: 0;
  display: inline-block;

  @media (min-width: 375px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 51px;
    height: 51px;
    margin-right: 2.4rem;
  }

  @media (min-width: 1024px) {
    margin-right: 4rem;
  }

  @media (min-width: 1702px) {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    margin: 0 4rem 0 0;
  }
`;

export const MainNav = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const MainNavItem = styled.li`
  padding-left: 2.4rem;

  :first-of-type {
    padding-left: 0;
  }
`;

export const Link = styled.a<{
  active?: boolean;
}>`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  box-shadow: ${({ active }) => (active ? 'inset 0 -6px #008248' : 'none')};

  :hover {
    color: #008248;
  }

  @media (min-width: 768px) {
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
  }

  @media (min-width: 1024px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const Map = styled.a`
  text-decoration: none;
  font-weight: 600;
  padding-right: 0.8rem;
  margin-right: 4rem;
  display: inline-block;
  font-size: 1.4rem;

  :hover {
    color: #008248;
  }

  > svg {
    width: 3.2rem;
    height: 3.2rem;
    padding-right: 0.8rem;
    fill: rgba(0, 0, 0, 0.87);
    flex-shrink: 0;
    vertical-align: middle;
  }

  :hover > svg {
    fill: #008248;
  }
`;

export const Button = styled.button<{
  variant?: 'outline' | 'filled';
  background?: string;
}>`
  display: inline-block;
  background: ${({ variant, background }) =>
    variant === 'filled' ? background : 'none'};
  border: ${({ variant }) =>
    variant === 'filled' ? '1px solid #000' : '1px solid #1E3932'};
  border-radius: 50px;
  padding: 7px 16px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  color: ${({ color }) => color};
  margin-right: 1.6rem;
  letter-spacing: ${({ variant }) =>
    variant === 'filled' ? '-.01em' : 'normal'};
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }

  :active {
    transform: scale(0.95);
  }
`;

Button.defaultProps = {
  variant: 'outline',
  background: '#fff',
  color: 'rgba(0, 0, 0, .87)',
};

export const SvgBase = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  preserveAspectRatio: 'xMidYMid meet',
  ariaHidden: 'true',
  focusable: 'false',
})`
  width: 100%;
  height: 100%;
`;

export const Hamburger = styled.button<{ open?: boolean; animate?: boolean }>`
  border: none;
  background: none;
  min-width: 44px;
  min-height: 44px;
  margin-left: auto;
  cursor: pointer;

  > svg {
    height: 2.4rem;
    width: 2.4rem;
    vertical-align: middle;
    position: relative;
    overflow: visible;
    fill: rgba(0, 0, 0, 0.56);

    > circle {
      fill: rgba(0, 0, 0, 0);
      opacity: 0.1;
      transition: all 0.2s ease-out;
      transform-origin: center;
      transform: scale(0.4);
      fill: transparent;
    }

    > path {
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
      transform-box: fill-box;
      transform-origin: center;
    }

    > path:nth-child(1) {
      animation-name: ${({ animate, open }) =>
        animate ? (open ? topLineOpenAnimation : topLineCloseAnimation) : null};

      transform: ${({ open }) =>
        open ? 'translateY(330%) rotate(-45deg)' : 'translateY(0) rotate(0)'};
    }

    > path:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    > path:nth-child(3) {
      animation-name: ${({ animate, open }) =>
        animate
          ? open
            ? bottomLineOpenAnimation
            : bottomLineCloseAnimation
          : null};
      transform: ${({ open }) =>
        open
          ? 'translateY(calc(-1 * 330%)) rotate(-135deg)'
          : 'translateY(0) rotate(0)'};
    }
  }

  :hover > svg > circle {
    fill: rgba(0, 0, 0, 0.56);
    opacity: 0.1;
    transform: scale(1);
  }

  @media (min-width: ${BP_HAMBURGER}) {
    display: none;
  }
`;
