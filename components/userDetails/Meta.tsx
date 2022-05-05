import React from "react";
import styled from "styled-components";
import {
  BREAK_POINTS as bp,
  ANIMATION_TIME as at,
  COLORS as cl,
  ROUND_CORNERS as rc,
  FONT_SIZES as fs,
} from "../../constants";
import { Company, Link, Location, Twitter } from "../primitives/Icons";

export default function Meta({
  location,
  twitterUsername,
  blog,
  company,
}: {
  location: string;
  twitterUsername: string | null;
  blog: string;
  company: string;
}) {
  const validateItem = (item: string | null) => {
    return item ? item : "Not Available";
  };

  return (
    <MetaWrapper>
      <List>
        <ListItem>
          <IconWrapper>
            <LocationIcon />
          </IconWrapper>
          <Label>{validateItem(location)}</Label>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <TwitterIcon />
          </IconWrapper>
          <Label>{validateItem(twitterUsername)}</Label>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <LinkIcon />
          </IconWrapper>
          <Label>{validateItem(blog)}</Label>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <CompanyIcon />
          </IconWrapper>
          <Label>{validateItem(company)}</Label>
        </ListItem>
      </List>
    </MetaWrapper>
  );
}

const MetaWrapper = styled.div``;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px 0;
  list-style: none;

  @media (min-width: ${bp.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 48px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const Label = styled.span`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color ${at.med};
`;

const LocationIcon = styled(Location)`
  fill: var(--clr-body);
  margin-left: 3.5px;
  transition: fill ${at.med};
`;

const TwitterIcon = styled(Twitter)`
  fill: var(--clr-body);
  transition: fill ${at.med};
`;

const LinkIcon = styled(Link)`
  fill: var(--clr-body);
  transition: fill ${at.med};
`;

const CompanyIcon = styled(Company)`
  fill: var(--clr-body);
  transition: fill ${at.med};
`;
