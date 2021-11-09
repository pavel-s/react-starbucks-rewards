import { FieldMetaState } from 'react-final-form';
import styled, { css } from 'styled-components/macro';
import { mChildLink, mTextSm, mTextXxs } from '../../../mixins';

export const Form = styled.form`
  padding-top: 1.6rem;
  padding-bottom: 3.2rem;
`;

export const FormContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 16.66667%;
  }
`;

export const Label = styled.label`
  position: absolute;
  background: inherit;
  padding: 0 0.4rem;
  margin-left: -0.4rem;
  transition: transform 149ms ease, font-size 149ms ease,
    color 1ms ease-in-out 149ms;
  user-select: none;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.9);
  display: block;
  line-height: 10px;
  line-height: 1rem;
  padding: 0;
  width: 100%;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    opacity: 0;
  }
`;

export const FieldHint = styled.p<{ show?: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  padding: 0.4rem 0 0 1.2rem;
  margin: 0 0 -1px 0;
  ${mTextXxs};

  & .field-hint-text {
    margin-left: 4px;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const mLabelTop = css`
  top: 0;
  transform: translateY(-55%);
  font-size: 1.4rem;
`;

export const TextField = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 40%);
  position: relative;
  transition: border 0.2s linear 0.2s;
  ${mTextSm};

  ${TextInput}:focus + ${Label},
  ${TextInput}:not(:placeholder-shown) + ${Label} {
    ${mLabelTop};
  }
`;

export const TextFieldContainer = styled.div<{
  meta?: FieldMetaState<any>;
}>`
  padding-top: 1.2rem;
  padding-bottom: ${({ meta }) =>
    meta?.error && meta.touched ? '0' : '1.2rem'};

  ${Label} {
    color: ${({ meta }) =>
      meta?.error && meta.touched
        ? '#d62b1f'
        : meta?.valid
        ? meta?.active
          ? '#00754a'
          : 'rgba(0,0,0,.58)'
        : 'inherit'};

    ${({ meta }) =>
      meta?.active || (meta?.touched && meta.valid) ? mLabelTop : ''}
  }

  ${TextField} {
    box-shadow: ${({ meta }) =>
      meta?.error && meta.touched
        ? '0 0 0 2px #d62b1f;'
        : meta?.active && meta.valid
        ? '0 0 0 2px #00754a;'
        : '0 0 0 1px rgb(0 0 0 / 40%)'};
  }
`;

export const Submit = styled.button.attrs({ type: 'submit' })`
  display: block;
  min-width: 32px;
  min-height: 32px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  background: none;
  border: 1px solid;
  border-radius: 50px;
  padding: 7px 16px;
  margin-left: auto;
  margin-top: 0.8rem;
  transition: all 0.2s ease;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const Text = styled.p`
  ${mTextXxs};
  ${mChildLink};
  padding: 0;
  margin: 0;
`;
