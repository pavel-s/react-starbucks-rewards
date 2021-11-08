import { Banner, Content, Button } from '../components';
import { Section } from '../components/section/styles/section';
import ExtrasSection from '../containers/extras-section';
import FavoritesSection from '../containers/favorites-section';
import HeaderContainer from '../containers/header';
import HeroSection from '../containers/hero-section';
import OptInFormSection from '../containers/opt-in-form-section';
import StarRatesSection from '../containers/star-rates';
import StepsSection from '../containers/steps-section';

const Rewards = () => {
  return (
    <>
      <HeaderContainer />
      <Content>
        <Banner>
          <Banner.Title>Starbucks® Rewards</Banner.Title>
          <Button variant='outline' color='#fff' as='a' href='#'>
            Join in the app
          </Button>
        </Banner>
        <HeroSection />
        <StepsSection />
        <FavoritesSection />
        <ExtrasSection />
        <StarRatesSection />
        <OptInFormSection />
        <Section style={{ height: '1000px' }}></Section>
      </Content>
    </>
  );
};

export default Rewards;
