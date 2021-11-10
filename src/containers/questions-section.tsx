import { Section } from '../components';
import { IconOpenInNewTab } from '../icons';

const QuestionSection = () => {
  return (
    <Section>
      <Section.Container globalGutters>
        <Section.Container size='offset2of12_MdSize6of12'>
          <Section.Title>Questions?</Section.Title>
          <Section.Text paddingBottom>
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions{' '}
            <a
              href='https://customerservice.starbucks.com/app/answers/list/p/552'
              target='_blank'
              rel='noreferrer'
            >
              <span>right over here</span>
              <IconOpenInNewTab />
            </a>
            .
          </Section.Text>
        </Section.Container>
      </Section.Container>
    </Section>
  );
};

export default QuestionSection;
