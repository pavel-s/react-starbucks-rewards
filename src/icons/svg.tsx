import styled, { CSSProperties } from 'styled-components/macro';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  preserveAspectRatio: 'xMidYMid meet',
  ariaHidden: 'true',
  focusable: 'false',
})<{ width?: CSSProperties['width'] }>`
  display: inline-block;
  width: ${({ width }) => width};
  height: 100%;
  vertical-align: middle;
  flex-shrink: 0;
  overflow: visible;
`;
Svg.defaultProps = { width: '24px' };

export default Svg;
