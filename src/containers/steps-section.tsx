import { Section, Steps } from '../components';

const StepsSection = () => {
  return (
    <Section>
      <Section.Header withContainer>
        <Section.Title>Getting started is easy</Section.Title>
        <Section.Text>
          Earn Stars and get rewarded in a few easy steps.
        </Section.Text>
      </Section.Header>
      <Steps>
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
                to get access to the full range of Starbucks® Rewards benefits.
                You can also{' '}
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
                <a href='https://www.starbucks.com/account/create'>join now</a>.
                You can also{' '}
                <a href='https://starbucks.app.link/VLa2I3inh9'>
                  join in the app
                </a>{' '}
                to get access to the full range of Starbucks® Rewards benefits.
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
  );
};

export default StepsSection;
