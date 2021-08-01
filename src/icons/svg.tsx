import styled from 'styled-components/macro';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  preserveAspectRatio: 'xMidYMid meet',
  ariaHidden: 'true',
  focusable: 'false',
})`
  width: 100%;
  height: 100%;
`;

export default Svg;
