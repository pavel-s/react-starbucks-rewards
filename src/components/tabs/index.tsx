import { useLayoutEffect, useRef } from 'react';
import { FC, ImgHTMLAttributes } from 'react';
import { TRSC } from '../../types';
import {
  Background,
  Header,
  Title,
  Nav,
  NavItem,
  Panels,
  Panel,
  PanelTitle,
  PanelText,
  PanelImage,
  PanelContent,
  PanelsInner,
} from './styles/tabs';
import { throttle } from 'lodash';

type TTabs = TRSC<typeof Background> & {
  Header: TRSC<typeof Header>;
  Title: TRSC<typeof Title>;
  Nav: TRSC<typeof Nav, { currentItem?: number; navItemsWidths?: number[] }>;
  NavItem: TRSC<
    typeof NavItem,
    {
      emoji?: string;
      itemIndex?: number;
      setNavItemWidth?: (index: number, width: number) => void;
    }
  >;
  Panels: TRSC<typeof Panels>;
  Panel: TRSC<typeof Panel>;
  PanelTitle: TRSC<typeof PanelTitle>;
  PanelText: TRSC<typeof PanelText>;
  PanelImage: FC<ImgHTMLAttributes<HTMLImageElement>>;
  PanelContent: TRSC<typeof PanelContent>;
};

const Tabs: TTabs = ({ children, ...rest }) => {
  return <Background {...rest}>{children}</Background>;
};

Tabs.Header = ({ children, ...rest }) => <Header {...rest}>{children}</Header>;

Tabs.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

const getOffset = (widths: number[], index: number) => {
  return widths.reduce((acc, width, i) => (i < index ? acc + width : acc), 0);
};

Tabs.Nav = function TabsNav({
  currentItem = 0,
  navItemsWidths,
  children,
  ...rest
}) {
  let sliderOffset = 0;
  if (navItemsWidths) {
    sliderOffset = getOffset(navItemsWidths, currentItem);
  }

  return (
    <Nav
      {...rest}
      sliderOffset={sliderOffset}
      sliderWidth={navItemsWidths ? navItemsWidths[currentItem] : undefined}
    >
      {children}
    </Nav>
  );
};

Tabs.NavItem = function TabsNavItem({
  emoji,
  itemIndex = 0,
  setNavItemWidth,
  children,
  ...rest
}) {
  const elementRef = useRef<HTMLButtonElement>(null);

  // save element width, re-save on resize
  useLayoutEffect(() => {
    if (elementRef.current && setNavItemWidth) {
      setNavItemWidth(
        itemIndex,
        elementRef.current.getBoundingClientRect().width
      );

      const listener = throttle(() => {
        setNavItemWidth(
          itemIndex,
          elementRef.current?.getBoundingClientRect().width || 0
        );
      }, 100);

      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }
  }, [elementRef, setNavItemWidth, itemIndex]);

  return (
    <NavItem {...rest} ref={elementRef}>
      {children}
      {emoji ? <span className='nav-item-emoji'>{emoji}</span> : ''}
    </NavItem>
  );
};

Tabs.Panels = ({ children, ...rest }) => (
  <Panels {...rest}>
    <Background color='#d4e9e2'>
      <PanelsInner>{children}</PanelsInner>
    </Background>
  </Panels>
);

Tabs.Panel = ({ children, ...rest }) => <Panel {...rest}>{children}</Panel>;
Tabs.PanelContent = ({ children, ...rest }) => (
  <PanelContent {...rest}>{children}</PanelContent>
);
Tabs.PanelTitle = ({ children, ...rest }) => (
  <PanelTitle {...rest}>{children}</PanelTitle>
);
Tabs.PanelText = ({ children, ...rest }) => (
  <PanelText {...rest}>{children}</PanelText>
);

Tabs.PanelImage = ({ ...rest }) => (
  <PanelImage>
    <div className='image-wrapper'>
      <div className='image-filler' />
      <div className='image-absolute-container'>
        <img alt='' {...rest} />
      </div>
    </div>
  </PanelImage>
);

export default Tabs;
