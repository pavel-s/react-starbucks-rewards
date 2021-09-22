import { useCallback, useState } from 'react';
import { Section, Tabs } from '../components';

const TABS_CONTENT = [
  {
    stars: 25,
    title: 'Customize your drink',
    text: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.',
    img: '/images/025.webp',
  },
  {
    stars: 50,
    title: 'Brewed hot coffee, bakery item or hot tea',
    text: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
    img: '/images/050.webp',
  },
  {
    stars: 150,
    title: 'Handcrafted drink, hot breakfast or parfait',
    text: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
    img: '/images/150.webp',
  },
  {
    stars: 200,
    title: 'Salad, sandwich or protein box',
    text: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
    img: '/images/200.webp',
  },
  {
    stars: 400,
    title: 'Select merchandise or at-home coffee',
    text: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
    img: '/images/400.webp',
  },
];

const FavoritesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [navItemsWidths, setNavItemsWidths] = useState<number[]>([]);

  const setNavItemWidth = useCallback(
    (index: number, width: number) => {
      setNavItemsWidths((prev) => {
        const copy = [...prev];
        copy.splice(index, 1, width);
        return copy;
      });
    },
    [setNavItemsWidths]
  );

  return (
    <Section>
      <Tabs>
        <Tabs.Header>
          <Tabs.Title>Get your favorites for free</Tabs.Title>
          <Tabs.Nav currentItem={activeTab} navItemsWidths={navItemsWidths}>
            {TABS_CONTENT.map(({ stars }, index) => (
              <Tabs.NavItem
                active={index === activeTab}
                emoji={'★'}
                onClick={() => setActiveTab(index)}
                key={index}
                setNavItemWidth={setNavItemWidth}
                itemIndex={index}
              >
                {stars}
              </Tabs.NavItem>
            ))}
          </Tabs.Nav>
        </Tabs.Header>
        <Tabs.Panels>
          {TABS_CONTENT.map(({ title, text, img }, index) => (
            <Tabs.Panel active={index === activeTab} key={index}>
              <Tabs.PanelImage src={img} alt={`tab ${index + 1} image`} />
              <Tabs.PanelContent>
                <Tabs.PanelTitle>{title}</Tabs.PanelTitle>
                <Tabs.PanelText>{text}</Tabs.PanelText>
              </Tabs.PanelContent>
            </Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </Section>
  );
};

export default FavoritesSection;
