import React from "react";
import styled from "styled-components";
import CardBg from "./primitives/CardBackground";
import { BREAK_POINTS as bp, ANIMATION_TIME as at } from "../constants";
import { Heading2, Paragraph } from "./primitives/Typography";
import { GitHubUser } from "../types";

export default function ProfileCard({ userData }: { userData: GitHubUser }) {
  const { name } = userData;
  return (
    <Wrapper>
      <Heading2>{name}</Heading2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </Paragraph>
    </Wrapper>
  );
}
const Wrapper = styled(CardBg)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  color: var(--clr-body);

  @media (min-width: ${bp.tablet}) {
    padding: 40px;
  }
  @media (min-width: ${bp.desktop}) {
    padding: 48px;
  }
`;
