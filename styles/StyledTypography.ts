import { css } from "styled-components";
import {
  FONT_SIZES as fs,
  LINE_HEIGHT as lh,
  BREAK_POINTS as bp,
} from "../design-tokens";

const StyledTypography = css`
  body {
    font-family: "Space Mono", monospace;
    font-size: ${fs.fz050};
    line-height: ${lh.lh200};

    @media (min-width: ${bp.tablet}) {
      font-size: ${fs.fz100};
      line-height: ${lh.lh200};
    }
  }

  h1,
  h2 {
    font-weight: 700;
  }

  h1 {
    font-size: ${fs.fz400};
    line-height: ${lh.lh400};
  }

  h2 {
    font-size: ${fs.fz200};
    line-height: ${lh.lh100};

    @media (min-width: ${bp.tablet}) {
      font-size: ${fs.fz400};
      line-height: ${lh.lh400};
    }
  }

  p {
  }
`;

export default StyledTypography;
