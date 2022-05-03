import React, { useState } from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./primitives/ButtonPrimary";
import {
  BREAK_POINTS as bp,
  ROUND_CORNERS as rc,
  ANIMATION_TIME as at,
} from "../constants";
import { SearchIcon } from "./primitives/Icons";
import CardBg from "./primitives/CardBackground";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSearchTerm(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Wrapper>
      <Form role="search" onSubmit={onSubmitHandler}>
        <Label>
          <span className="sr-only">Search GitHub username</span>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <Input
            type="search"
            placeholder="Search GitHub username"
            onChange={onChangeHandler}
          />
        </Label>
        <ButtonPrimary type="submit">Search</ButtonPrimary>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled(CardBg)`
  padding: 8px;

  @media (min-width: ${bp.tablet}) {
    padding: 9.5px 10px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: ${bp.tablet}) {
    gap: 16px;
  }
`;

const Label = styled.label`
  position: relative;
  flex-grow: 1;
  padding-inline-start: 8px;

  @media (min-width: ${bp.tablet}) {
    padding-inline-start: 32px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-inline-start: 28px;

  font-size: 0.8125rem;

  border: none;
  border-radius: ${rc.rc050};
  outline-offset: 4px;
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

  @media (min-width: ${bp.tablet}) {
    font-size: 1.125rem;
    padding-inline-start: 44px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  margin: auto 0;

  @media (min-width: ${bp.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
