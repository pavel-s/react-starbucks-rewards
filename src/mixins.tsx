import { css, CSSProperties } from 'styled-components/macro';

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

type TmMobileDesktopVariantProps = {
  variant?: 'mobile' | 'desktop';
  display?: CSSProperties['display'];
  breakpoint?: CSSProperties['width'];
};

// element that must be displayed only on mobile or only on desktop
export const mMobileDesktopVariant = ({
  variant = 'mobile',
  display = 'flex',
  breakpoint = '768px',
}: TmMobileDesktopVariantProps) => css<TmMobileDesktopVariantProps>`
  display: ${variant === 'mobile' ? display : 'none'};

  @media (min-width: ${breakpoint}) {
    display: ${variant === 'desktop' ? display : 'none'};
    align-items: flex-start;
  }
`;

// spread absolute element to container size
export const mAbsoluteSpread = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
