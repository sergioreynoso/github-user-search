import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context";
import styled from "styled-components";
import CardBg from "./primitives/CardBackground";
import { BREAK_POINTS as bp, ANIMATION_TIME as at } from "../constants";
import { Heading2, Paragraph } from "./primitives/Typography";
import Image from "next/image";
import { GitHubUser } from "../types";

export default function ProfileCard() {
  const appContenxt = useContext(SearchContext);
  if (!appContenxt) return null;
  const { userData } = appContenxt;
  const { name, avatar_url } = userData;

  return (
    <Wrapper>
      <Heading2>{name}</Heading2>
      <AvatarWrapper>
        <Image src={avatar_url} layout="fill" alt="Avatar image" />
      </AvatarWrapper>
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

const AvatarWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: ${bp.tablet}) {
    width: 117px;
    height: 117px;
  }
`;
