import { TRSC } from '../../types';
import {
  Container,
  Title,
  Text,
  Group,
  Content,
  Background,
  Inner,
} from './styles/hero';

type THero = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  Text: TRSC<typeof Text>;
  Group: TRSC<typeof Group>;
  Content: TRSC<typeof Content>;
};

const Hero: THero = ({ children, ...rest }) => {
  return (
    <Background>
      <Container>
        <Inner {...rest}>{children}</Inner>
      </Container>
    </Background>
  );
};

Hero.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;
Hero.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;
Hero.Group = ({ children, ...rest }) => <Group {...rest}>{children}</Group>;
Hero.Content = ({ children, ...rest }) => (
  <Content {...rest}>{children}</Content>
);

export default Hero;
