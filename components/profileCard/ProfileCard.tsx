import React from "react";
import styled from "styled-components";

const StyledProfileCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.3125rem;
  background-color: var(--clr-search-bar-bg);

  border-radius: var(--border-radius-400);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

export default function ProfileCard() {
  return <StyledProfileCard>ProfileCard</StyledProfileCard>;
}
