import { Form, Section } from '../components';
import { HeaderContainer } from '../components/section/styles/section';
import { IconOpenInNewTab } from '../icons';
import { Form as FinalForm, Field } from 'react-final-form';

const OptInFormSection = () => {
  return (
    <Section>
      <HeaderContainer>
        <Form.FormContainer>
          <Section.Title>Star Codes</Section.Title>
          <Section.Text>
            Yesssss. You’ve got Stars in your hand. Enter your code here and
            we’ll add Stars to your account.
          </Section.Text>
          <FinalForm
            initialValues={{
              'star-code': '',
            }}
            onSubmit={(values) => console.log('submit form', values)}
            render={({ handleSubmit, submitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name='star-code'
                  validate={(value) => !value}
                  type='text'
                >
                  {({ input, meta }) => (
                    <Form.TextField
                      {...input}
                      meta={meta}
                      type='text'
                      label='Enter your Star Code'
                    />
                  )}
                </Field>
                <Form.Submit disabled={submitting}>Submit</Form.Submit>
              </Form>
            )}
          />
          <Form.Text>Have a receipt but don't have a code?</Form.Text>
          <Form.Text>
            Go to{' '}
            <a
              href='https://starbucks-stars.com/en-us/'
              target='_blank'
              rel='noreferrer'
            >
              <span>starbucks-stars.com</span>
              <IconOpenInNewTab />
            </a>{' '}
            to upload your receipt and collect your Stars.
          </Form.Text>
        </Form.FormContainer>
      </HeaderContainer>
    </Section>
  );
};

export default OptInFormSection;
