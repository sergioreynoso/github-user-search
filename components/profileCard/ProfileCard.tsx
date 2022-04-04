import React from "react";
import styled from "styled-components";
import CardBg from "../cardBg/CardBg";
import { BREAK_POINTS as bp, ANIMATION_TIME as at } from "../../design-tokens";

const StyledProfileCard = styled(CardBg)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  padding: 1.5rem;

  color: var(--clr-body);

  & h2 {
    color: var(--clr-heading);
    transition: color ${at.med} ease-in-out;
  }

  @media (min-width: ${bp.tablet}) {
    padding: 2.5rem;
  }
  @media (min-width: ${bp.desktop}) {
    padding: 3rem;
  }
`;

export default function ProfileCard() {
  return (
    <StyledProfileCard>
      <h2>Profile Card</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </StyledProfileCard>
  );
}
