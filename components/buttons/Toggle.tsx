import React, { useState, useEffect } from "react";
import StyledToggle from "./StyledToggle";
import { useTheme } from "next-themes";

const MoonIcon: React.FC<{ theme: string }> = ({ theme }) => (
  <svg
    className={`icon moon ${theme === "light" ? "active" : ""}`}
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.513 11.397a.701.701 0 0 0-.588.128 7.496 7.496 0 0 1-2.276 1.336 7.101 7.101 0 0 1-2.583.462 7.505 7.505 0 0 1-5.32-2.209 7.568 7.568 0 0 1-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 0 1 1.227-2.21.657.657 0 0 0-.102-.924.701.701 0 0 0-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 0 0 0 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 0 0 7.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 0 0 3.58-5.624.623.623 0 0 0-.46-.796z" />
  </svg>
);

const SunIcon: React.FC<{ theme: string }> = ({ theme }) => (
  <svg
    className={`icon sun ${theme === "dark" ? "active" : ""}`}
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 0 0-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 0 0 3.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 0 0-1.481-3.545zM10 3.413a.7.7 0 0 0 .688-.688V.688A.7.7 0 0 0 10 0a.7.7 0 0 0-.688.688v2.037a.7.7 0 0 0 .688.688zm5.635 1.931 1.455-1.455a.67.67 0 0 0 0-.952.67.67 0 0 0-.952 0l-1.455 1.455a.67.67 0 0 0 0 .952c.238.264.66.264.952 0zm3.677 3.968h-2.037a.7.7 0 0 0-.688.688.7.7 0 0 0 .688.688h2.037A.7.7 0 0 0 20 10a.7.7 0 0 0-.688-.688zm-3.704 5.344a.67.67 0 0 0-.952 0 .67.67 0 0 0 0 .952l1.455 1.455a.67.67 0 0 0 .952 0 .67.67 0 0 0 0-.952l-1.455-1.455zM10 16.587a.7.7 0 0 0-.688.688v2.037A.7.7 0 0 0 10 20a.7.7 0 0 0 .688-.688v-2.037a.7.7 0 0 0-.688-.688zm-5.635-1.931L2.91 16.111a.67.67 0 0 0 0 .952.67.67 0 0 0 .952 0l1.455-1.455a.67.67 0 0 0 0-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 0 0-.688-.688H.688A.7.7 0 0 0 0 10a.7.7 0 0 0 .688.688h2.037A.7.7 0 0 0 3.413 10zm.952-4.656a.67.67 0 0 0 .952 0 .67.67 0 0 0 0-.952L3.862 2.937a.67.67 0 0 0-.952 0 .67.67 0 0 0 0 .952l1.455 1.455z" />
  </svg>
);

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const onClickHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  console.log(theme);
  return (
    <StyledToggle onClick={onClickHandler}>
      <span className="label">{theme}</span>
      <div className="icons">
        <MoonIcon theme={theme} />
        <SunIcon theme={theme} />
      </div>
    </StyledToggle>
  );
}
