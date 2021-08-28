import styled from 'styled-components/macro';
import { Banner, Button, Hero, Section } from '../components';

const Content = styled.main`
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    padding-top: 99px;
  }
`;

const Main = () => {
  return (
    <Content>
      <Banner>
        <Banner.Title>Starbucks® Rewards</Banner.Title>
        <Button variant='outline' color='#fff' as='a' href='#'>
          Join in the app
        </Button>
      </Banner>
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
                background='#008248'
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
                background='#008248'
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
      <div style={{ height: '2000px', backgroundColor: 'lightgreen' }}></div>
    </Content>
  );
};

export default Main;
