import styled from "styled-components";
import CardBg from "../cardBg/CardBg";

import { BREAK_POINTS as bp, ROUND_CORNERS as rc } from "../../design-tokens";

const StyledSearchBar = styled(CardBg)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4063rem 0.4375rem;
  height: 4.3125rem;
  background-color: var(--clr-card-bg);

  color: var(--clr-body);

  @media (min-width: ${bp.desktop}) {
    padding: 0.5938rem 0.625rem;
  }
`;

export default StyledSearchBar;
