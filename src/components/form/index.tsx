import { FieldMetaState } from 'react-final-form';
import { IconClose, IconWarning } from '../../icons';
import { TRSC } from '../../types';
import {
  Form as FormBase,
  TextField,
  TextInput,
  Label,
  Submit,
  FormContainer,
  FieldHint,
  TextFieldContainer,
  Text,
} from './styles/form';

type TForm = TRSC<typeof FormBase> & {
  TextField: TRSC<
    typeof TextInput,
    {
      name: string;
      label?: string;
      meta?: FieldMetaState<any>;
    }
  >;
  Submit: TRSC<typeof Submit>;
  FormContainer: TRSC<typeof FormContainer>;
  Text: TRSC<typeof Text>;
};

const Form: TForm = ({ children, ...rest }) => {
  return <FormBase {...rest}>{children}</FormBase>;
};

Form.TextField = ({ name, label, meta, ...rest }) => {
  return (
    <TextFieldContainer meta={meta}>
      <TextField>
        {/** any not empty placeholder for styling */}
        <TextInput placeholder=' ' id={name} {...rest} />
        <Label htmlFor={name}>{label || name}</Label>
        {meta?.error && meta.touched && <IconWarning color='#d62b1f' />}
      </TextField>
      <FieldHint show={meta?.error && meta.touched}>
        <IconClose color='#d62b1f' width='20px' />
        <span className='field-hint-text'>Please enter a Star code.</span>
      </FieldHint>
    </TextFieldContainer>
  );
};

Form.Submit = ({ children, ...rest }) => <Submit {...rest}>{children}</Submit>;

Form.FormContainer = ({ children, ...rest }) => (
  <FormContainer {...rest}>{children}</FormContainer>
);

Form.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Form;
