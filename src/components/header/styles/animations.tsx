import { keyframes } from 'styled-components';

export const topLineOpenAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  33% {
    transform: translateY(330%) rotate(0);
  }
  66% {
    transform: translateY(330%) rotate(90deg);
  }
  100% {
    transform: translateY(330%) rotate(135deg);
  }
`;

export const topLineCloseAnimation = keyframes`
  0% {
    transform: translateY(330%) rotate(135deg);
  }
  33% {
    transform: translateY(330%) rotate(90deg);
  }
  66% {
    transform: translateY(330%) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

export const bottomLineOpenAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  33% {
    transform: translateY(calc(-1 * 330%)) rotate(0);
  }
  66% {
    transform: translateY(calc(-1 * 330%)) rotate(0);
  }
  100% {
    transform: translateY(calc(-1 * 330%)) rotate(45deg);
  }
`;

export const bottomLineCloseAnimation = keyframes`
  0% {
    transform: translateY(calc(-1 * 330%)) rotate(45deg);
  }
  33% {
    transform: translateY(calc(-1 * 330%)) rotate(0);
  }
  66% {
    transform: translateY(calc(-1 * 330%)) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;
