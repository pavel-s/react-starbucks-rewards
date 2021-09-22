import styled, { CSSProperties } from 'styled-components/macro';

export const Container = styled.span<{ color?: CSSProperties['color'] }>`
  color: ${({ color }) => color};
`;

Container.defaultProps = { color: 'inherit' };
