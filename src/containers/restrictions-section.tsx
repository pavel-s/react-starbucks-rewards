import { Info, Section } from '../components';
import { IconOpenInNewTab } from '../icons';

const RestrictionsSection = () => {
  return (
    <Section marginBottom='4.8rem'>
      <Section.Background color='#f9f9f9'>
        <Section.Container globalGutters>
          <Info.Container>
            <Info.Caption>
              At participating stores. Restrictions apply.
            </Info.Caption>
            <Info>
              <Info.Title>EARNING STARS</Info.Title>
              <Info.Text>
                Stars cannot be earned on purchases of alcohol, Starbucks Cards
                or Starbucks Card reloads.
              </Info.Text>
              <Info.Text>
                Earn 1 Star per $1 spent when you scan your member barcode in
                the app, then pay with cash, credit/debit cards or mobile
                wallets at participating stores. You can also earn 1 Star per $1
                spent when you link a payment method and pay directly through
                the app.
              </Info.Text>
              <Info.Text>
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks Card in the app. You can also earn 2 Stars per
                $1 spent when you pay in-person at a participating store with
                your registered physical Starbucks Card or scan your member
                barcode in the app, and then use any physical Starbucks Card
                (regardless of whether it is registered) to complete the
                purchase.
              </Info.Text>
            </Info>
            <Info>
              <Info.Title>TERMS OF USE</Info.Title>
              <Info.Text>
                For full program details visit{' '}
                <a
                  href='https://www.starbucks.com/terms'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>starbucks.com/rewards/terms</span>
                  <IconOpenInNewTab />
                </a>
                .
              </Info.Text>
              <Info.Text>
                * Earn 1 Star per $1 when digitally loading your Starbucks Card
                with your Starbucks® Rewards Visa® Card: See your Card Rewards
                Program Agreement for more details.
              </Info.Text>
              <Info.Text>
                Starbucks® Rewards benefits are available at participating
                Starbucks stores. Not all stores have the ability to honor
                Rewards at this time. Visit the{' '}
                <a
                  href='https://www.starbucks.com/store-locator'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Starbucks Store Locator</span>
                  <IconOpenInNewTab />
                </a>{' '}
                and search for locations honoring “Redeem Rewards”.
              </Info.Text>
              <Info.Text>
                Deposit and credit card products provided by JPMorgan Chase
                Bank, N.A. Member FDIC
              </Info.Text>
            </Info>

            <Info>
              <Info.Title>BENEFITS</Info.Title>
              <Info.Text>
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward, you must have made at least one
                Star-earning transaction.
              </Info.Text>
            </Info>
            <Info>
              <Info.Title>REDEEMING REWARDS</Info.Title>
              <Info.Text>
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. Not all stores honor tiered Rewards. Select
                stores redeem 150 Stars for free food or drink items only.
              </Info.Text>
            </Info>
          </Info.Container>
        </Section.Container>
      </Section.Background>
    </Section>
  );
};

export default RestrictionsSection;
