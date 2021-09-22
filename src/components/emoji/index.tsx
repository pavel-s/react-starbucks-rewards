import { TRSC } from '../../types';
import { Container } from './styles/emoji';

const Emoji: TRSC<typeof Container> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Emoji;
