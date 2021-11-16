import { TRSC } from '../../types';
import {
  Footer as FooterBase,
  Divider,
  Link,
  LinksTop,
  LinksBottom,
  Column,
  Title,
  List,
  ListItem,
  Social,
  Copyright,
  TextButton,
} from './styles/footer';

type TFooter = TRSC<typeof FooterBase> & {
  Divider: TRSC<typeof Divider>;
  Link: TRSC<typeof Link>;
  LinksTop: TRSC<typeof LinksTop>;
  LinksBottom: TRSC<typeof LinksBottom>;
  Column: TRSC<typeof Column>;
  Title: TRSC<typeof Title>;
  List: TRSC<typeof List>;
  ListItem: TRSC<typeof ListItem>;
  Social: TRSC<typeof Social>;
  Copyright: TRSC<typeof Copyright>;
  TextButton: TRSC<typeof TextButton>;
};

const Footer: TFooter = ({ children, ...rest }) => {
  return <FooterBase {...rest}>{children}</FooterBase>;
};

Footer.Divider = ({ ...rest }) => <Divider {...rest} />;

Footer.Link = ({ children, ...rest }) => <Link {...rest}>{children}</Link>;

Footer.LinksTop = ({ children, ...rest }) => (
  <LinksTop {...rest}>{children}</LinksTop>
);

Footer.LinksBottom = ({ children, ...rest }) => (
  <LinksBottom {...rest}>{children}</LinksBottom>
);

Footer.Column = ({ children, ...rest }) => (
  <Column {...rest}>{children}</Column>
);

Footer.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

Footer.List = ({ children, ...rest }) => <List {...rest}>{children}</List>;

Footer.ListItem = ({ children, ...rest }) => (
  <ListItem {...rest}>{children}</ListItem>
);
Footer.Social = ({ children, ...rest }) => (
  <Social {...rest}>{children}</Social>
);
Footer.Copyright = ({ children, ...rest }) => (
  <Copyright {...rest}>{children}</Copyright>
);
Footer.TextButton = ({ children, ...rest }) => (
  <TextButton {...rest}>{children}</TextButton>
);

export default Footer;
