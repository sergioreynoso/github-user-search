import styled from "styled-components";
import CardBg from "../cardBg/CardBg";

import { BREAK_POINTS as bp, ROUND_CORNERS as rc } from "../../design-tokens";

export const StyledSearchBar = styled(CardBg)`
  display: flex;
  align-items: center;

  padding: 0.4063rem 0.4375rem 0.4063rem 1rem;
  height: 3.75rem;

  background-color: var(--clr-card-bg);
  color: var(--clr-body);

  @media (min-width: ${bp.tablet}) {
    padding: 0.5938rem 0.625rem 0.5938rem 2rem;
    height: 4.3125rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4375rem;

  width: 100%;

  @media (min-width: ${bp.tablet}) {
    gap: 1.5rem;
  }
`;

export const StyledInput = styled.input`
  flex-grow: 1;

  padding: 0 0.5rem;
  margin: 0;

  border: none;
  border-radius: ${rc.rc050};
  background: transparent;
  outline: none;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  caret-color: var(--clr-accent);

  &::placeholder {
    color: var(--clr-body);
  }

  &:focus {
    outline: solid 2px var(--clr-accent);
    outline-offset: 2px;
  }

  @media (min-width: ${bp.tablet}) {
    &:focus {
      outline: solid 2px var(--clr-accent);
      outline-offset: 10px;
    }
  }
`;

export const StyledLabel = styled.label`
  width: 20px;
  height: 20px;

  @media (min-width: ${bp.tablet}) {
    width: 25px;
    height: 25px;
  }
`;
