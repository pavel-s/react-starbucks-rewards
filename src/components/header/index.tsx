import { TRSC } from '../../types';
import {
  Container,
  Group,
  Nav,
  Logo,
  MainNav,
  MainNavItem,
  Link,
  Map,
  Button,
  Hamburger,
  LogoWrapper,
  SvgBase,
} from './styles/header';
import { IconMapMark } from './../../icons';
import { useEffect, useRef } from 'react';

type THeader = TRSC<typeof Container> & {
  Group: TRSC<typeof Group>;
  Nav: TRSC<typeof Nav>;
  Logo: TRSC<typeof Logo>;
  MainNav: TRSC<typeof MainNav>;
  MainNavItem: TRSC<typeof MainNavItem>;
  Link: TRSC<typeof Link>;
  Map: TRSC<typeof Map>;
  Button: TRSC<typeof Button>;
  Hamburger: TRSC<typeof Hamburger>;
};

const Header: THeader = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Header.Group = ({ children, ...rest }) => <Group {...rest}>{children}</Group>;

Header.Nav = ({ children, ...rest }) => <Nav {...rest}>{children}</Nav>;

Header.Logo = ({ children, ...rest }) => (
  <LogoWrapper>
    <Logo {...rest}>{children}</Logo>
  </LogoWrapper>
);

Header.MainNav = ({ children, ...rest }) => (
  <MainNav {...rest}>{children}</MainNav>
);

Header.MainNavItem = ({ children, ...rest }) => (
  <MainNavItem {...rest}>{children}</MainNavItem>
);

Header.Link = ({ children, ...rest }) => <Link {...rest}>{children}</Link>;

Header.Map = ({ children, ...rest }) => (
  <Map {...rest}>
    <IconMapMark />
    {children}
  </Map>
);

Header.Button = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

Header.Hamburger = function HeaderHamburger({ open, ...rest }) {
  const prevOpen = useRef(open);
  const animate = prevOpen.current !== open;

  useEffect(() => {
    prevOpen.current = open;
  }, [open]);

  return (
    <Hamburger open={open} animate={animate} {...rest}>
      <SvgBase viewBox='0 0 24 24'>
        <path d='M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z'></path>
        <path d='M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z'></path>
        <path d='M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z'></path>
        <circle cx='50%' cy='50%' r='75%'></circle>
      </SvgBase>
    </Hamburger>
  );
};

export default Header;
