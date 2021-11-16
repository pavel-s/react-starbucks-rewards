import styled from 'styled-components/macro';
import { mIconSvgHover, mTextSm, mTextXxs } from '../../../mixins';

export const Footer = styled.footer`
  box-shadow: 0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
  margin-top: 4.8rem;
  padding-bottom: 3.2rem;
  padding-top: 3.2rem;

  @media (min-width: 1024px) {
    padding-top: 4.8rem;
  }
`;

export const Divider = styled.hr`
  border: 0;
  margin: 0;
  padding: 3.2rem 0;
  height: auto;

  :before {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    content: '';
    display: block;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const LinksTop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Column = styled.div`
  max-width: 190px;
  width: 190px;

  :not(:first-child) {
    margin-left: 3.2rem;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  margin: 0 0 2.4rem 0;
  ${mTextSm};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;

  ${Link} {
    display: inline-block;
    color: rgba(0, 0, 0, 0.58);
    padding-bottom: 0.8rem;
    padding-top: 0.8rem;
    margin-bottom: 0.8rem;

    :hover {
      color: rgba(0, 0, 0, 0.87);
    }
  }
`;

export const TextButton = styled.button`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  padding: 0.8rem 0;
  margin: 0 0 0.4rem 0;
  border: none;
  cursor: pointer;
  background: none;

  :hover {
    text-decoration: underline;
  }
`;

export const LinksBottom = styled.div`
  margin-bottom: 0.4rem;
  margin-top: 1.6rem;

  ${List} {
    ${Link} {
      display: block;
      color: rgba(0, 0, 0, 0.87);
      margin-bottom: 0.4rem;

      :hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 1024px) {
      display: flex;

      ${ListItem} {
        display: flex;
      }

      ${ListItem}:not(:last-of-type)::after {
        content: '|';
        padding: 0 0.8rem;
        color: rgba(0, 0, 0, 0.58);
      }

      ${ListItem}:not(:first-of-type) {
        padding-left: 1.6rem;
      }

      ${Link}, ${TextButton} {
        margin-bottom: 0;
        padding-right: 1.6rem;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;
  margin-left: -5px;

  ${List} {
    display: flex;
    padding-bottom: 0.6rem;

    @media (min-width: 768px) {
      padding-bottom: 0.7rem;
    }
  }

  ${ListItem} {
    @media (min-width: 480px) {
      margin-right: 0.4rem;
    }
  }

  ${Link} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    min-width: 44px;
    min-height: 44px;
    text-decoration: underline;

    .icon-svg {
      width: 3.2rem;
      display: block;
    }

    :hover {
      color: rgba(0, 0, 0, 0.87);

      .icon-svg-hover {
        ${mIconSvgHover}
      }
    }
  }
`;

export const Copyright = styled.p`
  padding: 1.6rem 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.58);
  ${mTextXxs}
`;
