import { FC } from 'react';

/**
 * infer props from styled component
 * @param C - typeof component
 * @param P - props
 * @example
 * const StyledDiv = styled.div<{ bgColor: CSSObject['backgroundColor'] }>`
 *  background-color: ${({ bgColor }) => bgColor};
 * `;
 * const MyComponent: TRSC<typeof StyledDiv> = ({ bgColor }) => <StyledDiv bgColor={bgColor}>Hello!</StyledDiv>
 */
export type TRSC<C extends React.ComponentType, P = {}> = FC<
  C extends React.ComponentType<infer CP> ? CP & P : P
>;

export type TDrawerMenuItemBase = {
  title: string;
  href?: string;
};

export type TDrawerMenuItemWithSub = {
  title: string;
  isSubMenu: true;
  href?: string;
  subMenu: Omit<TDrawerMenuItem, 'isSubMenu' | 'subMenu'>[];
};

export type TDrawerMenuItem = TDrawerMenuItemBase | TDrawerMenuItemWithSub;

// export type TDrawerMenuItem = {
//   title: string;
//   isSubMenu?: boolean;
//   href?: string;
//   subMenu?: Omit<TDrawerMenuItem, 'isSubMenu' | 'subMenu'>[];
// };

export type TDrawerMenuItems = TDrawerMenuItem[];
