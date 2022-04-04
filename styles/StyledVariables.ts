import { css } from "styled-components";
import { COLORS as cl, SHADOWS as sh } from "../design-tokens";

const StyledVariables = css`
  :root {
    --clr-body: ${cl.slate600};
    --clr-bg: ${cl.slate100};
    --clr-heading: ${cl.slate900};
    --clr-card-bg: ${cl.neutral050};
    --clr-card-shadow: ${sh.shadow100};
    --clr-hover: ${cl.slate900};
  }

  /* ------- Dark mode ------- */
  [data-theme="dark"] {
    --clr-body: ${cl.neutral050};
    --clr-bg: ${cl.slate900};
    --clr-heading: ${cl.neutral050};
    --clr-card-bg: ${cl.slate800};
    --clr-card-shadow: none;
    --clr-hover: ${cl.slate500};
  }
`;
export default StyledVariables;
