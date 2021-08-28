import { Banner as BannerBase, Title, Wrapper } from './styles/banner';
import { TRSC } from '../../types';

type TBanner = TRSC<typeof BannerBase> & {
  Title: TRSC<typeof Title>;
};

const Banner: TBanner = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <BannerBase {...rest}>{children}</BannerBase>
    </Wrapper>
  );
};

Banner.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

export default Banner;
