import { TRSC } from '../../types';
import {
  Category,
  Container,
  Header,
  Title,
  Text,
  Card,
  Image,
  Content,
  Divider,
  ContainerHeader,
} from './styles/star-card';

type TStarCard = TRSC<typeof Card> & {
  Category: TRSC<typeof Category>;
  Container: TRSC<typeof Container>;
  Header: TRSC<typeof Header>;
  Title: TRSC<typeof Title>;
  Text: TRSC<typeof Text>;
  Image: TRSC<typeof Image>;
  Content: TRSC<typeof Content>;
  Divider: TRSC<typeof Divider>;
  ContainerHeader: TRSC<typeof ContainerHeader>;
};

const StarCard: TStarCard = ({ children, ...rest }) => (
  <Card {...rest}>{children}</Card>
);

StarCard.Category = ({ children, ...rest }) => (
  <Category {...rest}>{children}</Category>
);

StarCard.Container = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

StarCard.Header = ({ children, ...rest }) => (
  <Header {...rest}>{children}</Header>
);

StarCard.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

StarCard.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;
StarCard.Image = ({ children, ...rest }) => <Image {...rest}>{children}</Image>;

StarCard.Content = ({ children, ...rest }) => (
  <Content {...rest}>{children}</Content>
);

StarCard.Divider = ({ ...rest }) => <Divider {...rest} />;
StarCard.ContainerHeader = ({ children, ...rest }) => (
  <ContainerHeader {...rest}>{children}</ContainerHeader>
);

export default StarCard;
