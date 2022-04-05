import styled from "styled-components";
import {
  BREAK_POINTS as bp,
  ROUND_CORNERS as rc,
  ANIMATION_TIME as at,
} from "../design-tokens";

export const StyledPrimaryButton = styled.button`
  width: 84px;
  height: 46px;
  border: none;

  color: var(--clr-primary-button-text);
  background-color: var(--clr-primary-button);
  border-radius: ${rc.rc050};

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  @media (min-width: ${bp.tablet}) {
    width: 6.625rem;
    height: 3.125rem;
  }
`;
