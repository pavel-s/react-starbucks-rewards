import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/use-media-query';
import { Drawer, Header, Logo, Button } from './../components';

const navLinks = [
  { title: 'Menu', href: '#' },
  { title: 'Rewards', href: '#' },
  { title: 'Gift Cards', href: '#' },
];

const drawerNavLinks = [
  {
    title: 'Menu',
    isSubMenu: true,
    subMenu: [
      { title: 'All products', href: '#' },
      { title: 'Featured', href: '#' },
      { title: 'Previous', href: '#' },
      { title: 'Favorites', href: '#' },
    ],
  },
  { title: 'Rewards', href: '#' },
  { title: 'Gift Cards', href: '#' },
];

const HeaderContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerMediaQuery = useMediaQuery('(min-width: 799px)');

  // close drawer when screen too wide
  useEffect(() => {
    if (drawerMediaQuery) {
      setDrawerOpen(false);
    }
  }, [drawerMediaQuery]);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Header>
      <Header.Nav>
        <Header.Logo href='#'>
          <Logo />
        </Header.Logo>
        <Header.Group>
          <Header.MainNav>
            {navLinks.map((link) => (
              <Header.MainNavItem key={link.title}>
                <Header.Link href={link.href} active={link.title === 'Rewards'}>
                  {link.title}
                </Header.Link>
              </Header.MainNavItem>
            ))}
          </Header.MainNav>
        </Header.Group>
        <Header.Group>
          <Header.Map href='#'>Find a store</Header.Map>
          <Button>Sign in</Button>
          <Button
            as='a'
            href='https://www.starbucks.com/account/create'
            variant='filled'
            background='#000'
            color='#fff'
          >
            Join now
          </Button>
        </Header.Group>
        <Header.Hamburger open={drawerOpen} onClick={toggleDrawer} />
      </Header.Nav>
      <Drawer open={drawerOpen} handleClose={toggleDrawer}>
        <Drawer.Menu menuItems={drawerNavLinks} />
        <Drawer.Divider />
        <Drawer.Group>
          <Button>Sign in</Button>
          <Button
            as='a'
            href='https://www.starbucks.com/account/create'
            variant='filled'
            background='#000'
            color='#fff'
          >
            Join now
          </Button>
        </Drawer.Group>
        <Drawer.Group>
          <Header.Map href='#'>Find a store</Header.Map>
        </Drawer.Group>
      </Drawer>
    </Header>
  );
};

export default HeaderContainer;
