import { TRSC } from '../../types';
import { Section as SectionBase } from './styles/section';

const Section: TRSC<typeof SectionBase> = ({ children, ...rest }) => {
  return <SectionBase {...rest}>{children}</SectionBase>;
};

export default Section;
