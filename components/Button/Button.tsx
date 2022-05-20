import styled from "styled-components";
import { BREAKPOINTS, QUERIES, ROUND_CORNERS } from "../../utils/constants";

const Button = styled.button`
  padding: 12.5px 14px;
  border: none;
  outline: none;
  font-weight: 700;

  color: var(--clr-primary-button-text);
  background-color: var(--clr-primary-button);
  border-radius: ${ROUND_CORNERS.med};

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  &:focus-visible {
    outline: solid 2px var(--clr-accent);
    outline-offset: 2px;
    color: white;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 12.5px 24px;
  }
`;

export default Button;
