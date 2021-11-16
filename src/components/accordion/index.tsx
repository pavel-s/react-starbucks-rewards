import { createContext, useContext, useEffect, useRef } from 'react';
import { IconArrowDown } from '../../icons';
import { TRSC } from '../../types';
import {
  Accordion as AccordionBase,
  Category,
  Panel,
  Item,
  PanelWrapper,
} from './styles/accordion';

type TAccordion = TRSC<typeof AccordionBase> & {
  Category: TRSC<typeof Category>;
  Panel: TRSC<typeof Panel>;
  Item: TRSC<typeof Item>;
};

const Context = createContext<{
  open?: boolean;
}>({ open: false });

const Accordion: TAccordion = ({ open, children, ...rest }) => {
  return (
    <Context.Provider value={{ open }}>
      <AccordionBase open={open} {...rest}>
        {children}
      </AccordionBase>
    </Context.Provider>
  );
};

Accordion.Category = ({ children, ...rest }) => (
  <Category {...rest}>
    <span>{children}</span>
    <IconArrowDown className='accordion-icon' withHover />
  </Category>
);

Accordion.Panel = function AccordionPanel({ children, ...rest }) {
  const panelWrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);
  const context = useContext(Context);

  // set wrapper max-height to panel.scrollHeight if open and 0px if closed
  useEffect(() => {
    if (context.open && panelWrapperRef.current) {
      panelWrapperRef.current.style.maxHeight =
        panelRef.current?.scrollHeight + 'px';
    }
    if (!context.open && panelWrapperRef.current) {
      panelWrapperRef.current.style.maxHeight = '0px';
    }
  }, [context.open, panelWrapperRef, panelRef]);

  return (
    <PanelWrapper ref={panelWrapperRef} aria-hidden={!context.open}>
      <Panel {...rest} ref={panelRef}>
        {children}
      </Panel>
    </PanelWrapper>
  );
};

Accordion.Item = function AccordionItem({ children, ...rest }) {
  const context = useContext(Context);
  return (
    <li>
      <Item {...rest} tabIndex={context.open ? 0 : -1}>
        {children}
      </Item>
    </li>
  );
};

export default Accordion;
