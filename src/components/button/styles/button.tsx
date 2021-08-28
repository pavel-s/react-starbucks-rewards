import styled from 'styled-components/macro';

export const Button = styled.button<{
  variant?: 'outline' | 'filled';
  background?: string;
  color?: string;
  fontSize?: string;
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
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.4rem')};
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  color: ${({ color }) => color};
  cursor: pointer;
  flex-shrink: 0;

  :active {
    transform: scale(0.95);
  }
`;
