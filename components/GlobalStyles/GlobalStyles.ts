import { createGlobalStyle } from "styled-components";
import Normalize from "./Normalize";
import Theme from "./Theme";
import {
  ANIMATION_TIME,
  FONT_SIZE,
  LINE_HEIGHT,
  WEIGHTS,
} from "../../utils/constants";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Theme}

  body {
    font-family: "Space Mono", monospace;
    line-height:${LINE_HEIGHT[200]}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight:${WEIGHTS.bold};
    color: var(--clr-heading);
    transition: color ${ANIMATION_TIME.med} ease-in-out;
  }

  p{
    font-weight:${WEIGHTS.normal};
    font-size:${FONT_SIZE[100]}
  }
  
  #__next { 
    display: flex;
    justify-content: center;

    height: 100%;
    padding:24px;
    padding-block-start: clamp(30px,6vw + 1px,144px);
    background-color: var(--clr-bg);
    transition: background-color ${ANIMATION_TIME.med} ease-in-out;
  }
`;

export default GlobalStyles;
