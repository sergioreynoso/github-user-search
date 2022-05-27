import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../Card";
import { ANIMATION_TIME, FONT_SIZE, QUERIES } from "../../utils/constants";
import Image from "next/image";
import { formatDate } from "../../utils/helpers";
import Stats from "./Stats";
import Meta from "./Meta";
import { FadeInAnimation } from "../../utils/animations";
import { GitHubUser } from "../../utils/types";

export default function UserDetail({ userData }: { userData: GitHubUser }) {
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
      <AvatarWrapper key={avatar_url}>
        <Image src={avatar_url} layout="fill" alt="Profile avatar" priority />
      </AvatarWrapper>
      <TitleWrapper>
        <Name>{name}</Name>
        <Login>@{login}</Login>
        <JoinedDate>{`Joined ${dayNum} ${month} ${year}`}</JoinedDate>
      </TitleWrapper>
      <Details>
        <Bio>{bio ? bio : "This profile has no bio."}</Bio>
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
  gap: 33px 19px;
  padding-block-start: 32px;
  padding-block-end: 48px;
  color: var(--clr-body);

  @media ${QUERIES.tabletOnly} {
    width: 573px;
    padding: 40px;
    gap: 41px 41px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 730px;
    padding-block-start: 48px;
    padding-block-end: 44px;
    padding-inline: 48px;
    gap: 37px 41px;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--clr-bg);
  ${FadeInAnimation({ timing: "500ms", delay: "250ms" })}

  @media ${QUERIES.tabletAndUp} {
    width: 117px;
    height: 117px;
  }
`;

const TitleWrapper = styled.div`
  display: grid;
  ${FadeInAnimation({ timing: "500ms", delay: "500ms" })}

  @media ${QUERIES.tabletAndUp} {
    padding: 13px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    align-self: flex-start;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 0;
  }
`;

const Name = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.625rem;
  }

  @media ${QUERIES.laptopAndUp} {
    align-self: center;
  }
`;

const Login = styled.p`
  font-size: 0.8125rem;
  color: var(--clr-accent);

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
  }
`;

const JoinedDate = styled.p`
  font-size: 0.8125rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 0.9375rem;
  }

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
  ${FadeInAnimation({ timing: "500ms", delay: "700ms" })}

  @media ${QUERIES.laptopAndUp} {
    gap: 32px;
    margin-top: -72px;
    grid-column: 2 / 3;
  }
`;

const Bio = styled.p`
  font-size: 0.8125rem;
  transition: color ${ANIMATION_TIME.med};

  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONT_SIZE[100]};
  }
`;
