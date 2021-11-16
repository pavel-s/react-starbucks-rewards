import { useState } from 'react';
import { Accordion, Section, Footer } from '../components';
import links from './../fixtures/footer-links.json';
import {
  IconSocialSpotify,
  IconSocialFacebook,
  IconSocialPinterest,
  IconSocialInstagram,
  IconSocialYoutube,
  IconSocialTwitter,
} from './../icons/index';

const socialIcons = [
  { href: 'https://google.com/', jsx: <IconSocialSpotify withHover /> },
  { href: 'https://google.com/', jsx: <IconSocialFacebook withHover /> },
  { href: 'https://google.com/', jsx: <IconSocialPinterest withHover /> },
  { href: 'https://google.com/', jsx: <IconSocialInstagram withHover /> },
  { href: 'https://google.com/', jsx: <IconSocialYoutube withHover /> },
  { href: 'https://google.com/', jsx: <IconSocialTwitter withHover /> },
];

const FooterContainer = () => {
  const [accordionsState, setAccordionsState] = useState<{
    [key: number]: boolean;
  }>({});

  return (
    <Footer>
      <Section.Container globalGutters>
        <Section.Container size='sizeXLarge_margin0auto'>
          <div>
            {links.map((category, i) => (
              <Accordion
                open={accordionsState[i]}
                hideBp='1024px'
                key={category.category_name}
              >
                <Accordion.Category
                  onClick={() =>
                    setAccordionsState((prev) => ({ ...prev, [i]: !prev[i] }))
                  }
                >
                  {category.category_name}
                </Accordion.Category>
                <Accordion.Panel>
                  {category.items.map((link) => (
                    <Accordion.Item key={link.title} href={link.href}>
                      {link.title}
                    </Accordion.Item>
                  ))}
                </Accordion.Panel>
              </Accordion>
            ))}
          </div>
          <Footer.LinksTop>
            {links.map((category) => (
              <Footer.Column key={category.category_name}>
                <Footer.Title>{category.category_name}</Footer.Title>
                {category.items.map((link) => (
                  <Footer.List>
                    <Footer.ListItem>
                      <Footer.Link href={link.href}>{link.title}</Footer.Link>
                    </Footer.ListItem>
                  </Footer.List>
                ))}
              </Footer.Column>
            ))}
          </Footer.LinksTop>
          <Footer.Divider />
          <Footer.Social>
            <Footer.List>
              {socialIcons.map((icon) => (
                <Footer.ListItem>
                  <Footer.Link href={icon.href}>{icon.jsx}</Footer.Link>
                </Footer.ListItem>
              ))}
            </Footer.List>
          </Footer.Social>
          <Footer.LinksBottom>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Link href='https://www.starbucks.com/terms/privacy-policy'>
                  Privacy Policy
                </Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='https://www.starbucks.com/terms/starbucks-terms-of-use'>
                  Terms of Use
                </Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='https://www.starbucks.com/terms/privacy-policy'>
                  CA Supply Chain Act
                </Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.TextButton>Cookie Preferences</Footer.TextButton>
              </Footer.ListItem>
            </Footer.List>
          </Footer.LinksBottom>
          <Footer.Copyright>
            © 2021 Starbucks Coffee Company. All rights reserved.
          </Footer.Copyright>
        </Section.Container>
      </Section.Container>
    </Footer>
  );
};

export default FooterContainer;
