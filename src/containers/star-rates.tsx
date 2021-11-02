import { Section, StarCard } from '../components';
import cards from './../fixtures/star-rates.json';
import ReactDOMServer from 'react-dom/server';
import { IconOpenInNewTab } from '../icons';

// type TRatesCard = {
//   category: string;
//   text: string;
//   cards: {
//     image: string;
//     title: string;
//     text: string;
//   }[];
// };
// console.log(ReactDOMServer.renderToString(<IconOpenInNewTab />));
const addIconsToLinks = (html: string) => {
  // const icon = document.createElement('span');
  // icon.textContent = 'ICON';
  const icon = ReactDOMServer.renderToString(<IconOpenInNewTab />);

  return html.replace(/(_blank['"][^>]*?>[\s\S]*?)(<\/a>)/gi, `$1${icon}$2`);
  // return html.replace(/_blank['"][^>]*?>[^<]*?<\/a>/gi, `$&${icon}`);
};

const StarRatesSection = () => {
  return (
    <Section>
      <Section.Background color='#f2f0eb'>
        <StarCard.Container>
          <StarCard.ContainerHeader>
            <Section.Title>Cash or card, you earn Stars</Section.Title>
            <Section.Text>
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </Section.Text>
          </StarCard.ContainerHeader>
          {cards.map((item, index) => (
            <div key={item.category}>
              <StarCard.Category>
                <StarCard.Header>
                  <StarCard.Title
                    dangerouslySetInnerHTML={{ __html: item.category }}
                  />
                  <StarCard.Text>{item.text}</StarCard.Text>
                </StarCard.Header>
                {item.cards.map((card) => (
                  <StarCard key={card.title}>
                    <StarCard.Image>
                      <img src={card.image} alt='' />
                    </StarCard.Image>
                    <StarCard.Content>
                      <StarCard.Title>{card.title}</StarCard.Title>
                      <StarCard.Text
                        dangerouslySetInnerHTML={{
                          __html: addIconsToLinks(card.text),
                        }}
                      />
                    </StarCard.Content>
                  </StarCard>
                ))}
                <StarCard.Divider />
              </StarCard.Category>
              {index < cards.length - 1 && <StarCard.Divider />}
            </div>
          ))}
        </StarCard.Container>
      </Section.Background>
    </Section>
  );
};

export default StarRatesSection;
