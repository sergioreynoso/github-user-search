import { css } from "styled-components";

const StyledTypography = css`
  body {
    font-family: "Space Mono", monospace;
    font-size: var(--fs-300);
    line-height: var(--lh-400);

    @media (min-width: vars.$bp-tablet) {
      font-size: var(--fs-400);
      line-height: var(--lh-400);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: Bold;
  }

  h1 {
    font-size: var(--fs-700);
    line-height: var(--lh-700);
  }

  h2 {
    font-size: var(--fs-500);
    line-height: var(--lh-500);

    @media (min-width: vars.$bp-tablet) {
      font-size: var(--fs-700);
      line-height: var(--lh-300);
    }
  }

  h3 {
    font-size: var(--fs-500);
    line-height: var(--lh-500);
  }

  h4 {
    font-size: var(--fs-300);
    line-height: var(--lh-300);
  }

  p {
    font-size: var(--fs-300);
    line-height: var(--lh-400);

    @media (min-width: vars.$bp-tablet) {
      font-size: var(--fs-400);
      line-height: var(--lh-400);
    }
  }

  .bold {
    font-weight: 700;
  }
`;

export default StyledTypography;
