import styled, { css } from 'styled-components/macro';
import { mChildLink, mTextXxs } from '../../../mixins';

const paddingBottom32 = css`
  padding-bottom: 3.2rem;
`;
const paddingBottom16 = css`
  padding-bottom: 1.6rem;
`;

export const Container = styled.div`
  padding-bottom: 1.6rem;
  padding-top: 4.8rem;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  ${paddingBottom16}
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 50%;
    :nth-child(2n + 1) {
      padding-left: 3.2rem;
    }
  }
`;

export const Caption = styled.p`
  ${mTextXxs}
  ${paddingBottom32}
  margin: 0;
  width: 100%;
`;

export const Title = styled.h3`
  ${mTextXxs}
  ${paddingBottom16}
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.58);
`;

export const Text = styled.p`
  ${mTextXxs}
  ${paddingBottom16}
  ${mChildLink}
  margin: 0;
`;
