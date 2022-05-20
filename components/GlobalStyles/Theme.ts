import { css } from "styled-components";
import { COLORS, SHADOWS } from "../../utils/constants";

const StyledTheme = css`
  /* ------- Light-Mode Color Variables ------- */
  html {
    --clr-accent: ${COLORS.primary};
    --clr-primary-button-text: ${COLORS.white};
    --clr-primary-button: var(--clr-accent);
    --clr-body: ${COLORS.slate[600]};
    --clr-bg: ${COLORS.slate[100]};
    --clr-heading: ${COLORS.slate[900]};
    --clr-card-bg: ${COLORS.white};
    --clr-card-shadow: ${SHADOWS.shadow100};
    --clr-hover: ${COLORS.slate[900]};
  }

  /* ------- Dark-Mode Color Variables ------- */
  [data-theme="dark"] {
    --clr-body: ${COLORS.white};
    --clr-bg: ${COLORS.slate[900]};
    --clr-heading: ${COLORS.white};
    --clr-card-bg: ${COLORS.slate[800]};
    --clr-card-shadow: none;
    --clr-hover: ${COLORS.slate[500]};
  }
`;

export default StyledTheme;
