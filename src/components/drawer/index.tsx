import { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '../../icons';
import { TDrawerMenuItems, TRSC } from '../../types';
import {
  DrawerContainer,
  Drawer as DrawerBase,
  BlockBody,
  DrawerMask,
  Menu,
  MenuLink,
  MenuButton,
  Divider,
  Group,
  SubMenu,
} from './styles/drawer';

type TDrawer = TRSC<typeof DrawerBase, { handleClose?: () => void }> & {
  Menu: TRSC<typeof Menu, { menuItems?: TDrawerMenuItems }>;
  SubMenu: TRSC<
    typeof SubMenu,
    {
      subMenuItems?: TDrawerMenuItems;
      title: string;
      isOpen: boolean;
      handleClose: () => void;
    }
  >;
  MenuLink: TRSC<typeof MenuLink>;
  MenuButton: TRSC<typeof MenuButton>;
  Divider: TRSC<typeof Divider>;
  Group: TRSC<typeof Group>;
};

const Drawer: TDrawer = ({ open, handleClose, children, ...rest }) => (
  <DrawerContainer>
    {open && (
      <>
        <BlockBody />
        <DrawerMask onClick={handleClose} />
      </>
    )}
    <DrawerBase {...rest} open={open}>
      {children}
    </DrawerBase>
  </DrawerContainer>
);

const SubMenuBase: TDrawer['SubMenu'] = ({
  title,
  subMenuItems,
  isOpen,
  handleClose,
  children,
  ...rest
}) => {
  if (!subMenuItems) {
    return <SubMenu {...rest}>{children}</SubMenu>;
  }

  return (
    <SubMenu open={isOpen}>
      <li>
        <MenuButton key={title} onClick={handleClose}>
          <IconChevronLeft />
          {title}
        </MenuButton>
      </li>
      {subMenuItems.map((subItem) => (
        <li key={subItem.title}>
          <MenuLink>{subItem.title}</MenuLink>
        </li>
      ))}
    </SubMenu>
  );
};

Drawer.SubMenu = SubMenuBase;

Drawer.Menu = function DrawerMenu({ menuItems, children, ...rest }) {
  const [subMenuOpen, setSubMenuOpen] = useState('');

  if (!menuItems) {
    return <Menu {...rest}>{children}</Menu>;
  }

  let mainMenuItems: JSX.Element[] = [];
  let subMenus: JSX.Element[] = [];

  menuItems.forEach((item) => {
    mainMenuItems.push(
      <li key={item.title}>
        {'isSubMenu' in item ? (
          <MenuButton
            key={item.title}
            onClick={() => setSubMenuOpen(item.title)}
          >
            {item.title}
            <IconChevronRight />
          </MenuButton>
        ) : (
          <MenuLink href={item.href} key={item.title}>
            {item.title}
          </MenuLink>
        )}
      </li>
    );

    if ('isSubMenu' in item) {
      subMenus.push(
        <SubMenuBase
          title={item.title}
          subMenuItems={item.subMenu}
          isOpen={subMenuOpen === item.title}
          handleClose={() => setSubMenuOpen('')}
          key={'sub-' + item.title}
        />
      );
    }
  });

  return (
    <>
      <Menu {...rest}>{mainMenuItems}</Menu>
      {subMenus}
    </>
  );
};
// Drawer.Menu = ({ menuItems, children, ...rest }) =>
//   menuItems ? (
//     <>
//       {/** main menu */}
//       <Menu {...rest}>
//         {menuItems.map((item) => (
//           <li key={item.title}>
//             {'isSubMenu' in item ? (
//               <MenuButton key={item.title}>
//                 {item.title}
//                 <IconChevronRight />
//               </MenuButton>
//             ) : (
//               <MenuLink href={item.href} key={item.title}>
//                 {item.title}
//               </MenuLink>
//             )}
//           </li>
//         ))}
//       </Menu>
//       {/** sub menus */}
//       {menuItems.reduce<JSX.Element[]>((acc, item) => {
//         return 'isSubMenu' in item
//           ? [
//               ...acc,
//               <Menu key={`sub-${item.title}`}>
//                 <li key={item.title}>
//                   <MenuButton key={item.title}>
//                     {item.title}
//                     <IconChevronRight />
//                   </MenuButton>
//                 </li>
//                 {item.subMenu.map((subItem) => (
//                   <li key={subItem.title}>
//                     <MenuLink>{subItem.title}</MenuLink>
//                   </li>
//                 ))}
//               </Menu>,
//             ]
//           : acc;
//       }, [])}
//     </>
//   ) : (
//     <Menu {...rest}>{children}</Menu>
//   );

Drawer.MenuLink = ({ children, ...rest }) => (
  <li>
    <MenuLink {...rest}>{children}</MenuLink>
  </li>
);

Drawer.MenuButton = ({ children, ...rest }) => (
  <li>
    <MenuButton {...rest}>
      {children}
      <IconChevronRight />
    </MenuButton>
  </li>
);

Drawer.Divider = ({ ...rest }) => <Divider {...rest} />;

Drawer.Group = ({ children, ...rest }) => <Group {...rest}>{children}</Group>;

export default Drawer;
