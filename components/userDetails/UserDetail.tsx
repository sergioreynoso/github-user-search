import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../context";
import styled from "styled-components";
import CardBg from "../primitives/CardBackground";
import {
  BREAK_POINTS as bp,
  ANIMATION_TIME as at,
  COLORS as cl,
  ROUND_CORNERS as rc,
  FONT_SIZES as fs,
} from "../../constants";
import { Heading1, Heading2, Paragraph } from "../primitives/Typography";
import Image from "next/image";
import { getDate } from "../../utils/helpers";
import Stats from "./Stats";
import Meta from "./Meta";

export default function ProfileCard() {
  const appContenxt = useContext(SearchContext);
  if (!appContenxt) return null;
  const { userData } = appContenxt;
  const {
    name,
    avatar_url,
    bio,
    login,
    created_at,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = userData;
  const { dayNum, month, year } = getDate(created_at);
  console.log(userData);

  return (
    <Wrapper>
      <AvatarWrapper>
        <Image
          src={avatar_url}
          layout="fill"
          alt="Avatar image"
          priority={true}
        />
      </AvatarWrapper>
      <TitleWrapper>
        <Name>{name}</Name>
        <Login>@{login}</Login>
        <JoinedDate>{`Joined ${dayNum} ${month} ${year}`}</JoinedDate>
      </TitleWrapper>
      <Details>
        <Bio>{bio}</Bio>
        <Stats
          publicRepos={public_repos}
          followers={followers}
          following={following}
        />
        <Meta
          location={location}
          twitterUsername={twitter_username}
          blog={blog}
          company={company}
        />
      </Details>
    </Wrapper>
  );
}
const Wrapper = styled(CardBg)`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 24px 37px;
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
  background-color: var(--clr-bg);

  @media (min-width: ${bp.tablet}) {
    width: 117px;
    height: 117px;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  gap: 8px 0;

  @media (min-width: ${bp.tablet}) {
    padding: 13px 0;
  }

  @media (min-width: ${bp.desktop}) {
    align-self: flex-start;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
`;

const Name = styled(Heading2)`
  line-height: 1;
  @media (min-width: ${bp.desktop}) {
    align-self: center;
  }
`;

const Login = styled(Paragraph)`
  color: var(--clr-accent);
`;

const JoinedDate = styled(Paragraph)`
  @media (min-width: ${bp.desktop}) {
    grid-row: 1 /2;
    grid-column: 2 / 3;
    justify-self: end;
    align-self: center;
  }
`;

const Details = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${bp.desktop}) {
    gap: 40px;
    margin-top: -64px;
    grid-column: 2 / 3;
  }
`;

const Bio = styled(Paragraph)`
  flex: 1;
`;
