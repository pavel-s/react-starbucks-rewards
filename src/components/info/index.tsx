import { TRSC } from '../../types';
import {
  Info as InfoBase,
  Container,
  Caption,
  Title,
  Text,
} from './styles/info';

type TInfo = TRSC<typeof InfoBase> & {
  Container: TRSC<typeof Container>;
  Caption: TRSC<typeof Caption>;
  Title: TRSC<typeof Title>;
  Text: TRSC<typeof Text>;
};

const Info: TInfo = ({ children, ...rest }) => {
  return <InfoBase {...rest}>{children}</InfoBase>;
};

Info.Container = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

Info.Caption = ({ children, ...rest }) => (
  <Caption {...rest}>{children}</Caption>
);

Info.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

Info.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Info;
