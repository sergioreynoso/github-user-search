import React from "react";
import styled from "styled-components";
import DarkModeToggle from "./primitives/ToggleButton";
import { Heading1 } from "./primitives/Typography";

export default function Header() {
  return (
    <Wrapper className="header">
      <Heading1>devFinder</Heading1>
      <DarkModeToggle />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
