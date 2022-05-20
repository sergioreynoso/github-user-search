import React from "react";
import styled from "styled-components";
import {
  ANIMATION_TIME,
  ROUND_CORNERS,
  FONT_SIZE,
  QUERIES,
  WEIGHTS,
  COLORS,
} from "../../utils/constants";

export default function Stats({
  publicRepos,
  followers,
  following,
}: {
  publicRepos: number;
  followers: number;
  following: number;
}) {
  return (
    <Wrapper>
      <Item>
        <Heading>Repos</Heading>
        <Stat>{publicRepos}</Stat>
      </Item>
      <Item>
        <Heading>Followers</Heading>
        <Stat>{followers}</Stat>
      </Item>
      <Item>
        <Heading>Following</Heading>
        <Stat>{following}</Stat>
      </Item>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 15px 15px;
  background-color: var(--clr-bg);
  border-radius: ${ROUND_CORNERS.med};
  transition: background-color ${ANIMATION_TIME.med};

  @media ${QUERIES.tabletAndUp} {
    padding: 15px 32px;
  }
`;

const Item = styled.div`
  flex: 1;
`;

const Heading = styled.h3`
  font-size: ${FONT_SIZE[40]};
  font-weight: ${WEIGHTS.normal};
  text-align: center;
  color: var(--clr-body);
  margin-bottom: 5px;
  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONT_SIZE[50]};
    text-align: left;
  }
`;

const Stat = styled.span`
  display: block;
  font-size: ${FONT_SIZE[200]};
  font-weight: ${WEIGHTS.bold};
  text-align: center;
  color: var(--clr-heading);
  @media ${QUERIES.tabletAndUp} {
    font-size: ${FONT_SIZE[300]};
    text-align: left;
  }
`;
