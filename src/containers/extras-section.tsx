import { Section, Steps } from '../components';

const ExtrasSection = () => {
  return (
    <Section>
      <Section.Header withContainer>
        <Section.Title>Endless Extras</Section.Title>
        <Section.Text>
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </Section.Text>
      </Section.Header>

      <Steps>
        <Steps.Group variant='any'>
          <Steps.Card>
            <Steps.Icon width='112px'>
              <img src='/images/1-fun-freebies.webp' alt='' />
            </Steps.Icon>
            <Steps.CardContent>
              <Steps.Title>Fun freebies</Steps.Title>
              <Steps.Text>
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </Steps.Text>
              <Steps.Button>Learn more</Steps.Button>
            </Steps.CardContent>
          </Steps.Card>
          <Steps.Card>
            <Steps.Icon width='112px'>
              <img src='/images/2-order-and-pay-ahead.webp' alt='' />
            </Steps.Icon>
            <Steps.CardContent>
              <Steps.Title>Order & pay ahead</Steps.Title>
              <Steps.Text>
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </Steps.Text>
              <Steps.Button>Learn more</Steps.Button>
            </Steps.CardContent>
          </Steps.Card>
          <Steps.Card>
            <Steps.Icon width='112px'>
              <img src='/images/3-get-to-free-faster.webp' alt='' />
            </Steps.Icon>
            <Steps.CardContent>
              <Steps.Title>Get to free faster</Steps.Title>
              <Steps.Text>
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </Steps.Text>
              <Steps.Button>Learn more</Steps.Button>
            </Steps.CardContent>
          </Steps.Card>
        </Steps.Group>
      </Steps>
    </Section>
  );
};

export default ExtrasSection;
