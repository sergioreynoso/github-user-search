export const USERNAME_ONLOAD = "octocat";

export const APP_NAME = "devfinder";

export const API_URL = "https://api.github.com/users/";

export const BREAKPOINTS = {
  tabletMin: 599,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const COLORS = {
  primary: "#0079FF",
  white: "#FFFFFF",
  slate: {
    50: "#FEFEFE",
    100: "#F6F8FF",
    500: "#697C9A",
    600: "#4B6A9B",
    700: "#2B3442",
    800: "#1E2A47",
    900: "#141D2F",
  },
  error: "#F74646",
};

export const SHADOWS = {
  shadow100: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
};

export const FONT_SIZE = {
  40: `.6875rem`,
  50: `.8125rem`,
  100: `.9375rem`,
  200: `1rem`,
  250: "1.125rem",
  300: `1.375rem`,
  400: `1.625rem`,
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const LINE_HEIGHT = {
  50: `1.25rem`,
  100: `1.5rem`,
  200: `1.5625rem`,
  300: `2.0625rem`,
  400: `2.375rem`,
};

export const ROUND_CORNERS = {
  small: "5px",
  med: "10px",
  large: "15px",
};

export const ANIMATION_TIME = {
  slow: "1s",
  med: ".5s",
  fast: ".2s",
};
