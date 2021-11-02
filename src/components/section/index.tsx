import { TRSC } from '../../types';
import {
  Section as SectionBase,
  Background,
  Header,
  Title,
  Text,
  HeaderContainer,
} from './styles/section';

type TSection = TRSC<typeof SectionBase> & {
  Background: TRSC<typeof Background>;
  Header: TRSC<typeof Header, { withContainer?: boolean }>;
  Title: TRSC<typeof Title>;
  Text: TRSC<typeof Text>;
};

const Section: TSection = ({ children, ...rest }) => {
  return <SectionBase {...rest}>{children}</SectionBase>;
};
Section.Background = ({ children, ...rest }) => (
  <Background {...rest}>{children}</Background>
);
Section.Header = ({ withContainer = false, children, ...rest }) =>
  withContainer ? (
    <HeaderContainer>
      <Header {...rest}>{children}</Header>
    </HeaderContainer>
  ) : (
    <Header {...rest}>{children}</Header>
  );

Section.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;
Section.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Section;
