import React from "react";
import styled from "styled-components";
import { ANIMATION_TIME, QUERIES } from "../../utils/constants";
import Icons from "../Icons";

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
  const validateItemLabel = (item: string | null): string => {
    return item ? item : "Not Available";
  };

  return (
    <MetaWrapper>
      <List>
        <ListItem isValid={location}>
          <IconWrapper>
            <LocationIcon />
          </IconWrapper>
          <Label>{validateItemLabel(location)}</Label>
        </ListItem>
        <ListItem isValid={twitterUsername}>
          <IconWrapper>
            <TwitterIcon />
          </IconWrapper>
          <Label>{validateItemLabel(twitterUsername)}</Label>
        </ListItem>
        <ListItem isValid={location}>
          <IconWrapper>
            <LinkIcon />
          </IconWrapper>
          <Label>
            {blog ? (
              <LinkWrapper
                href={validateItemLabel(blog)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={4}
              >
                {validateItemLabel(blog)
                  .replace("https://", "")
                  .replace("www.", "")}
              </LinkWrapper>
            ) : (
              validateItemLabel(blog)
            )}
          </Label>
        </ListItem>
        <ListItem isValid={company}>
          <IconWrapper>
            <CompanyIcon />
          </IconWrapper>
          <Label>{validateItemLabel(company)}</Label>
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

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 48px;
  }
`;

const ListItem = styled.li<{ isValid: string | null }>`
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: ${props => (props.isValid ? 1 : 0.5)};
  will-change: transform;
`;

const IconWrapper = styled.div`
  flex-basis: 20px;
`;

const Label = styled.span`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color ${ANIMATION_TIME.med};
`;

const LinkWrapper = styled.a`
  outline-color: var(--clr-accent);
  outline-offset: 4px;
  @media (hover: hover) and (pointer: fine) {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LocationIcon = styled(Icons.Location)`
  fill: var(--clr-body);
  margin-left: 3.5px;
  transition: fill ${ANIMATION_TIME.med};
`;

const TwitterIcon = styled(Icons.Twitter)`
  fill: var(--clr-body);
  transition: fill ${ANIMATION_TIME.med};
`;

const LinkIcon = styled(Icons.Link)`
  fill: var(--clr-body);
  transition: fill ${ANIMATION_TIME.med};
`;

const CompanyIcon = styled(Icons.Company)`
  fill: var(--clr-body);
  transition: fill ${ANIMATION_TIME.med};
`;
