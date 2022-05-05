import styled from "styled-components";
import {
  FONT_SIZES as fs,
  LINE_HEIGHT as lh,
  BREAK_POINTS as bp,
  ANIMATION_TIME as at,
} from "../../constants";

export const Paragraph = styled.p`
  font-size: ${fs.fs050};
  line-height: ${lh.lh200};
  transition: color ${at.med};
  @media (min-width: ${bp.tablet}) {
    font-size: ${fs.fs100};
  }
`;

export const Heading1 = styled.h1`
  font-size: ${fs.fs400};
  line-height: ${lh.lh400};
`;

export const Heading2 = styled.h2`
  font-size: ${fs.fs200};
  line-height: ${lh.lh100};

  @media (min-width: ${bp.tablet}) {
    font-size: ${fs.fs400};
    line-height: ${lh.lh400};
  }
`;
