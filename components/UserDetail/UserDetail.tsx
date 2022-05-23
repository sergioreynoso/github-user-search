import React, { useState, useContext, useEffect } from "react";
import SearchContext from "../SearchContext";
import styled from "styled-components";
import Card from "../Card";
import { ANIMATION_TIME, FONT_SIZE, QUERIES } from "../../utils/constants";
import Image from "next/image";
import { formatDate } from "../../utils/helpers";
import Stats from "./Stats";
import Meta from "./Meta";
import blurImg from "../../public/images/blur.png";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function UserDetail() {
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
  const { dayNum, month, year } = formatDate(created_at);
  // console.log(userData);

  return (
    <Wrapper>
      <AvatarWrapper>
        <Image
          src={avatar_url}
          layout="fill"
          alt="Avatar image"
          priority={true}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(50, 50))}`}
          placeholder="blur"
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
const Wrapper = styled(Card)`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 24px 37px;
  padding: 24px;
  color: var(--clr-body);

  @media ${QUERIES.tabletOnly} {
    width: 573px;
    padding: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 730px;
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

  @media ${QUERIES.tabletAndUp} {
    width: 117px;
    height: 117px;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  gap: 8px 0;

  @media ${QUERIES.tabletAndUp} {
    padding: 13px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    align-self: flex-start;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
`;

const Name = styled.h2`
  line-height: 1;
  @media ${QUERIES.laptopAndUp} {
    align-self: center;
  }
`;

const Login = styled.p`
  color: var(--clr-accent);
`;

const JoinedDate = styled.p`
  @media ${QUERIES.laptopAndUp} {
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
  max-width: 100%;

  @media ${QUERIES.laptopAndUp} {
    gap: 40px;
    margin-top: -64px;
    grid-column: 2 / 3;
  }
`;

const Bio = styled.p`
  transition: color ${ANIMATION_TIME.med};
  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONT_SIZE[100]};
  }
`;
