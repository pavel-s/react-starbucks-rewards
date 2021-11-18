import styled, { CSSProperties } from 'styled-components/macro';

export const Button = styled.button<{
  variant?: 'outline' | 'filled';
  background?: string;
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
}>`
  display: inline-block;
  background: ${({ variant, background }) =>
    variant === 'filled' ? background : 'none'};
  border: ${({ variant, background, color }) =>
    variant === 'filled'
      ? background
        ? `1px solid ${background}`
        : '1px solid #000'
      : color
      ? `1px solid ${color}`
      : 'rgba(0, 0, 0, 0.87)'};
  border-radius: 50px;
  padding: 7px 16px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  color: ${({ color }) => color};
  flex-shrink: 0;
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }

  :hover {
    ${({ variant }) =>
      variant === 'outline'
        ? 'background:  rgba(0,0,0,.06);'
        : `opacity: 0.7;`};
  }
`;

Button.defaultProps = {
  variant: 'outline',
  background: '#fff',
  color: 'rgba(0, 0, 0, .87)',
  fontSize: '1.4rem',
};
