import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import styled from "styled-components";
import Button from "../Button";
import { ROUND_CORNERS, COLORS, QUERIES } from "../../utils/constants";
import Icons from "../Icons";
import Card from "../Card";
import { GitHubUser } from "../../utils/types";
import { getUserData } from "../../utils/api";
import VisuallyHidden from "../VisuallyHidden";

export default function SearchBar({
  setUserData,
}: {
  setUserData: (data: GitHubUser) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onSubmitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    fetchUserData(inputValue);
    setIsError(false);
  };

  const fetchUserData = async (name: string) => {
    try {
      const data: GitHubUser = await getUserData(name);
      setUserData(data);
      setInputValue("");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Wrapper>
      <Form role="search" onSubmit={onSubmitHandler}>
        <Label>
          <VisuallyHidden>Search GitHub username</VisuallyHidden>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <Input
            type="text"
            placeholder="Search GitHub username"
            value={inputValue}
            onChange={onChangeHandler}
            onFocus={() => setIsError(false)}
          />
          {isError ? <Error>No Results</Error> : null}
        </Label>
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  padding: 6.5px 7px;

  @media ${QUERIES.tabletAndUp} {
    padding: 9.5px 10px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
  }
`;

const Label = styled.label`
  position: relative;
  flex-grow: 1;
  padding-inline-start: 8px;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 32px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-inline-start: 28px;

  font-size: 0.8125rem;

  border: none;
  -webkit-border-radius: ${ROUND_CORNERS.small};

  border-radius: ${ROUND_CORNERS.small};
  outline-offset: 2px;
  background-color: transparent;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  caret-color: var(--clr-accent);

  &::placeholder {
    color: var(--clr-body);
  }

  &:focus {
    outline: 2px solid var(--clr-accent);
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    padding-inline-start: 44px;
    outline-offset: 6px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1px;
  left: 10px;
  bottom: 0;
  width: 20px;
  height: 20px;
  margin: auto 0;

  @media ${QUERIES.tabletAndUp} {
    top: 0;
    left: 34px;
    width: 24px;
    height: 24px;
  }
`;

const SearchIcon = styled(Icons.Search)``;

const Error = styled.span`
  position: absolute;
  top: 1px;
  bottom: 0;
  right: 20px;

  font-weight: 700;
  font-size: 0.8125rem;
  color: ${COLORS.error};
  pointer-events: none;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
  }
`;
