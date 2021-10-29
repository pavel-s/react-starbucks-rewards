import { TRSC } from '../../types';
import {
  Container,
  Text,
  Title,
  Group,
  Card,
  Icon,
  CardContent,
  Button,
} from './styles/steps';

type TSteps = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  Text: TRSC<typeof Text>;
  Group: TRSC<typeof Group>;
  Card: TRSC<typeof Card>;
  Icon: TRSC<typeof Icon>;
  CardContent: TRSC<typeof CardContent>;
  Button: TRSC<typeof Button>;
};

const Steps: TSteps = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Steps.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;
Steps.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;
Steps.Group = ({ children, ...rest }) => <Group {...rest}>{children}</Group>;
Steps.Card = ({ children, ...rest }) => <Card {...rest}>{children}</Card>;
Steps.Icon = ({ children, ...rest }) => <Icon {...rest}>{children}</Icon>;
Steps.CardContent = ({ children, ...rest }) => (
  <CardContent {...rest}>{children}</CardContent>
);
Steps.Button = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

export default Steps;
