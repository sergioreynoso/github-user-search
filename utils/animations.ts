import { keyframes, css } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const FadeInAnimation = (props: {
  timing: string;
  delay: string;
}) => css`
  animation: ${FadeIn} ${props.timing} ease-out;
  animation-delay: ${props.delay};
  animation-fill-mode: both;
  will-change: transform;
`;
