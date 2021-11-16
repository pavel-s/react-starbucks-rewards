import { Banner, Content, Button } from '../components';
import ExtrasSection from '../containers/extras-section';
import FavoritesSection from '../containers/favorites-section';
import Footer from '../containers/footer';
import HeaderContainer from '../containers/header';
import HeroSection from '../containers/hero-section';
import OptInFormSection from '../containers/opt-in-form-section';
import QuestionSection from '../containers/questions-section';
import RestrictionsSection from '../containers/restrictions-section';
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
        <QuestionSection />
        <RestrictionsSection />
        <Footer />
      </Content>
    </>
  );
};

export default Rewards;
