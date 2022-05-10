import { createGlobalStyle } from "styled-components";
import StyledNormalize from "./StyledNormalize";
import StyledUtility from "./StyledUtility";
import StyledTheme from "./StyledTheme";
import {
  FONT_SIZES as fs,
  LINE_HEIGHT as lh,
  BREAK_POINTS as bp,
  COLORS as cl,
  SHADOWS as sh,
  ANIMATION_TIME as at,
} from "../constants";

const StyledGlobal = createGlobalStyle`
  ${StyledNormalize}
  ${StyledUtility}
  ${StyledTheme}

  body {
    font-family: "Space Mono", monospace;
    line-height: ${lh.lh200};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: var(--clr-heading);
    transition: color ${at.med} ease-in-out;
  }
  
  #__next { 
    display: flex;
    justify-content: center;
    height: 100%;
    padding:24px;
    padding-block-start: clamp(24px,10vw,144px);
    background-color: var(--clr-bg);
    transition: background-color ${at.med} ease-in-out;
  }
`;

export default StyledGlobal;
