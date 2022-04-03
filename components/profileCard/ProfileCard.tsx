import React from "react";
import styled from "styled-components";
import { BREAK_POINTS as bp } from "../../design-tokens";

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  padding: 1.5rem;
  background-color: var(--clr-search-bar-bg);

  border-radius: var(--border-radius-400);
  box-shadow: 0rem 1rem 1.875rem -0.625rem rgba(70, 96, 187, 0.198567);

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
