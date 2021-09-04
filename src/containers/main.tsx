import styled from 'styled-components/macro';
import { Banner, Button, Hero, Section, Steps } from '../components';

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
      <Section>
        <Steps>
          <Steps.Title>Getting started is easy</Steps.Title>
          <Steps.Text>
            Earn Stars and get rewarded in a few easy steps.
          </Steps.Text>
          <Steps.Group>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-1@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Download the Starbucks® app</Steps.Title>
                <Steps.Text>
                  <a href='https://starbucks.app.link/VLa2I3inh9'>
                    Join in the app
                  </a>{' '}
                  to get access to the full range of Starbucks® Rewards
                  benefits. You can also{' '}
                  <a href='https://www.starbucks.com/account/create'>
                    join online
                  </a>
                  .
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-2@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Order and pay how you’d like</Steps.Title>
                <Steps.Text>
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.{' '}
                  <a href='https://www.starbucks.com/rewards#waystopay'>
                    Learn how
                  </a>
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-3@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Earn Stars, get Rewards</Steps.Title>
                <Steps.Text>
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
          </Steps.Group>
          <Steps.Group variant='desktop'>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-1@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Create an account</Steps.Title>
                <Steps.Text>
                  To get started,{' '}
                  <a href='https://www.starbucks.com/account/create'>
                    join now
                  </a>
                  . You can also{' '}
                  <a href='https://starbucks.app.link/VLa2I3inh9'>
                    join in the app
                  </a>{' '}
                  to get access to the full range of Starbucks® Rewards
                  benefits.
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-2@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Order and pay how you’d like</Steps.Title>
                <Steps.Text>
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.{' '}
                  <a href='https://www.starbucks.com/rewards#waystopay'>
                    Learn how
                  </a>
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
            <Steps.Card>
              <Steps.Icon>
                <img src='/images/getting-started-3@2x.webp' alt='' />
              </Steps.Icon>
              <Steps.CardContent>
                <Steps.Title>Earn Stars, get Rewards</Steps.Title>
                <Steps.Text>
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </Steps.Text>
              </Steps.CardContent>
            </Steps.Card>
          </Steps.Group>
        </Steps>
      </Section>
      <Section></Section>
      <div style={{ height: '2000px', backgroundColor: 'lightgreen' }}></div>
    </Content>
  );
};

export default Main;
