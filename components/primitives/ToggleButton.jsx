import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ANIMATION_TIME as at, ROUND_CORNERS as rc } from "../../constants";
import { useTheme } from "next-themes";
import { MoonIcon as Moon, SunIcon as Sun } from "./Icons";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const onClickHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ToggleButton onClick={onClickHandler}>
      <Label>{theme === "light" ? "dark" : "light"}</Label>
      <IconWrapper>
        <MoonIcon theme={theme} />
        <SunIcon theme={theme} />
      </IconWrapper>
    </ToggleButton>
  );
}

const Label = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
  color: var(--clr-dark-mode-toggle);
  transition: all ${at.fast};
`;

const IconWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 20px;
  height: 20px;
`;

const MoonIcon = styled(Moon)`
  position: absolute;
  top: 0;
  left: 0;
  fill: var(--clr-body);
  opacity: ${({ theme }) => (theme === "light" ? "1" : "0")};
  transform: rotate(${({ theme }) => (theme === "light" ? "0" : "-90deg")});
  transition: transform ${at.med} ease-in-out, opacity ${at.fast} linear,
    fill ${at.fast} linear;
`;

const SunIcon = styled(Sun)`
  position: absolute;
  top: 0;
  left: 0;
  fill: var(--clr-body);
  opacity: ${({ theme }) => (theme === "dark" ? "1" : "0")};
  transform: rotate(${({ theme }) => (theme === "light" ? "90deg" : "0")});
  transition: transform ${at.med} ease-in-out, opacity ${at.fast} linear,
    fill ${at.fast} linear;
`;

const ToggleButton = styled.button`
  display: flex;
  gap: 0 16px;
  border: none;
  color: var(--clr-body);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-radius: ${rc.rc050};

  &:focus-visible {
    outline: solid 2px var(--clr-accent);
    outline-offset: 10px;
  }

  /* Hover will only work on none-touch devices */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${Label} {
        color: var(--clr-hover);
      }
      ${MoonIcon},${SunIcon} {
        fill: var(--clr-hover);
      }
    }
  }
`;
