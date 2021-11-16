import styled, { CSSProperties, css } from 'styled-components/macro';
import { mIconSvgHover, mTextSm } from '../../../mixins';

export const Category = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  padding: 0.8rem 0;
  margin-bottom: 0.8rem;
  cursor: pointer;
  letter-spacing: inherit;
  ${mTextSm};

  @media (min-width: 768px) {
    margin-bottom: 1.6rem;
  }
`;

export const Panel = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const Item = styled.a`
  display: block;
  padding: 0.8rem 0;
  margin-bottom: 0.8rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.58);

  :hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const hideMediaBp = (hideBp?: CSSProperties['width']) =>
  hideBp
    ? css`
        @media (min-width: ${hideBp}) {
          display: none;
        }
      `
    : '';

export const Accordion = styled.div<{
  open?: boolean;
  hideBp?: CSSProperties['width'];
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ hideBp }) => hideMediaBp(hideBp)};

  ${Category} {
    .accordion-icon {
      transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
      width: 4.4rem;
      padding: 0.6rem;
      transition: all 0.2s ease-out;
      overflow: visible;

      :hover .icon-svg-hover {
        ${mIconSvgHover}
      }
    }
  }

  :last-child ${Category} {
    margin-bottom: 0;
  }
`;

/*

      .icon-svg-hover {
        transition: all 0.2s ease-out;
        transform: scale(0.4);
        transform-origin: center;
        z-index: 999;
        position: absolute;
        opacity: 0.1;
      }

      :hover .icon-svg-hover {
        fill: rgba(0, 0, 0, 0.87);
        opacity: 0.1;
        transform: scale(1);
      }

      */
