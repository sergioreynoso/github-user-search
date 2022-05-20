import React from "react";
import styled from "styled-components";
import DarkModeToggle from "../Toggle";
import { FONT_SIZE, LINE_HEIGHT } from "../../utils/constants";

export default function Header() {
  return (
    <Wrapper className="header">
      <Heading>devfinder</Heading>
      <DarkModeToggle />
    </Wrapper>
  );
}

const Heading = styled.h1`
  font-size: ${FONT_SIZE[400]};
  line-height: ${LINE_HEIGHT[400]};
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
