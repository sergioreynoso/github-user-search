import React from "react";
import DarkModeToggle from "../toggle/Toggle";
import StyledHeader from "./StyledHeader";

export default function Header() {
  return (
    <StyledHeader className="header">
      <h1>devFinder</h1>
      <DarkModeToggle />
    </StyledHeader>
  );
}
