import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context";
import styled from "styled-components";
import CardBg from "./primitives/CardBackground";
import {
  BREAK_POINTS as bp,
  ANIMATION_TIME as at,
  COLORS as cl,
} from "../constants";
import { Heading2, Paragraph } from "./primitives/Typography";
import Image from "next/image";
import { getDate } from "../utils/helpers";

export default function ProfileCard() {
  const appContenxt = useContext(SearchContext);
  if (!appContenxt) return null;
  const { userData } = appContenxt;
  const { name, avatar_url, bio, login, created_at } = userData;
  const { dayNum, month, year } = getDate(created_at);
  // console.log(userData);

  return (
    <Wrapper>
      <HeaderWrapper>
        <AvatarWrapper>
          <Image
            src={avatar_url}
            layout="fill"
            alt="Avatar image"
            priority={true}
          />
        </AvatarWrapper>
        <TitleWrapper>
          <Heading2>{name}</Heading2>
          <UserName>@{login}</UserName>
          <Paragraph>{`Joined ${dayNum} ${month} ${year}`}</Paragraph>
        </TitleWrapper>
      </HeaderWrapper>

      <Paragraph>{bio}</Paragraph>
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  gap: 20px;
  width: 100%;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--clr-body);

  @media (min-width: ${bp.tablet}) {
    width: 117px;
    height: 117px;
  }
`;

const TitleWrapper = styled.div``;

const UserName = styled(Paragraph)`
  color: var(--clr-accent);
`;
