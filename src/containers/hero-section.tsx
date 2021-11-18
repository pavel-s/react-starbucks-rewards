import { Button, Hero, Section } from '../components';

const HeroSection = () => {
  return (
    <Section>
      <Hero>
        <Hero.Content>
          <Hero.Title>
            Free coffee <br />
            is a tap away
          </Hero.Title>
          <Hero.Text>Join now to start earning Rewards.</Hero.Text>
          <Hero.Group variant='mobile'>
            <Button
              variant='filled'
              color='#fff'
              background='#00754a'
              as='a'
              href='#'
            >
              Join in the app
            </Button>
            <Hero.Text>
              <a href='https://www.starbucks.com/rewards/mobile-apps'>
                Or join online
              </a>
            </Hero.Text>
          </Hero.Group>
          <Hero.Group variant='desktop'>
            <Button
              variant='filled'
              color='#fff'
              background='#00754a'
              fontSize='1.6rem'
              as='a'
              href='#'
            >
              Join now
            </Button>
            <Hero.Text>
              {'Or '}
              <a href='https://www.starbucks.com/rewards/mobile-apps'>
                join in the app
              </a>
              {' for the best experience'}
            </Hero.Text>
          </Hero.Group>
        </Hero.Content>
      </Hero>
    </Section>
  );
};

export default HeroSection;
