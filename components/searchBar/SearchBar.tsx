import React from "react";
import styled from "styled-components";
import {
  StyledSearchBar,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./StyledSearchBar";
import { StyledPrimaryButton } from "../buttons";
import {
  BREAK_POINTS as bp,
  ROUND_CORNERS as rc,
  ANIMATION_TIME as at,
} from "../../design-tokens";
import { SearchIcon } from "../Icons";

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledForm>
        <StyledLabel role="search" className="search-label" htmlFor="search">
          <SearchIcon />
          <span className="sr-only">Search GitHub username</span>
        </StyledLabel>
        <StyledInput
          id="search"
          type="search"
          placeholder="Search GitHub username"
        />
        <StyledPrimaryButton className="button" type="submit" value="Search">
          Search
        </StyledPrimaryButton>
      </StyledForm>
    </StyledSearchBar>
  );
}
