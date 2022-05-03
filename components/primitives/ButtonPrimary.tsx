import styled from "styled-components";
import {
  BREAK_POINTS as bp,
  ROUND_CORNERS as rc,
  ANIMATION_TIME as at,
} from "../../constants";

export const ButtonPrimary = styled.button`
  padding: 12.5px 14px;
  border: none;
  outline: none;
  font-weight: 700;

  color: var(--clr-primary-button-text);
  background-color: var(--clr-primary-button);
  border-radius: ${rc.rc050};

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  &:focus-visible {
    outline: solid 2px var(--clr-accent);
    outline-offset: 2px;
    color: white;
  }

  @media (min-width: ${bp.tablet}) {
    padding: 12.5px 24px;
  }
`;
