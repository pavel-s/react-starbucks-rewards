import styled, { createGlobalStyle, css } from 'styled-components/macro';

const drawerHeight = css`
  top: 64px;
  height: calc(100vh - 64px);

  @media (min-width: 375px) {
    top: 72px;
    height: calc(100vh - 72px);
  }

  @media (min-width: 768px) {
    height: calc(100vh - 83px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 99px);
  }
`;

export const DrawerMask = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  background: #000;
  opacity: 0.38;

  ${drawerHeight}
`;

export const DrawerContainer = styled.div<{ open?: boolean }>`
  /* position: relative;
  top: 0;
  z-index: 99;
  width: 100%; */
`;

export const Drawer = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 20vw;
  width: 80vw;
  background-color: #fff;
  /* overflow: auto;
  overflow-x: hidden; */
  box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
    inset 0 4px 2px -2px rgb(0 0 0 / 7%);
  transition: transform 0.3s cubic-bezier(0.75, 0, 0.5, 1);
  transform: ${({ open }) => (open ? 'translate(20vw)' : 'translateX(100vw)')};

  ${drawerHeight}
`;

export const BlockBody = createGlobalStyle`
  body {
    overflow: hidden;
    touch-action: none;
    top: 0px;
    position: fixed;
    width: 100%;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 3.2rem;
  margin: 0;
  display: flex;
  flex-direction: column;

  > li {
    list-style: none;
  }
`;

export const SubMenu = styled(Menu)<{
  open?: boolean;
}>`
  padding-top: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: transform 0.3s cubic-bezier(0.75, 0, 0.5, 1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  > :first-child > button {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #f7f7f7;
    box-shadow: inset 0 4px 5px -3px rgb(0 0 0 / 20%);

    > svg {
      position: absolute;

      left: 2.4rem;
    }
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  display: block;
  font-size: 1.9rem;
  padding: 1.6rem 3.2rem;
  cursor: pointer;
  width: 100%;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  font-size: 1.9rem;
  padding: 1.6rem 3.2rem;
  cursor: pointer;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  > svg {
    fill: rgba(0, 0, 0, 0.87);
    width: 24px;
    height: 24px;
  }
`;

export const Divider = styled.hr`
  margin: 0;
  padding: 1.6rem 3.2rem 3.2rem 3.2rem;
  border: 0;
  box-sizing: content-box;
  height: 2px;

  :before {
    content: '';
    display: block;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Group = styled.div`
  padding: 1.6rem 2.4rem 0 2.4rem;

  :nth-of-type(1) {
    padding-top: 0;
  }
`;
