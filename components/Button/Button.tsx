import styled from "styled-components";
import { QUERIES, ROUND_CORNERS, WEIGHTS } from "../../utils/constants";

const Button = styled.button`
  padding: 12.5px 16px;
  border: none;
  outline: none;
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.bold};

  color: var(--clr-primary-button-text);
  background-color: var(--clr-primary-button);
  border-radius: ${ROUND_CORNERS.med};

  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 80%;
    }
  }

  &:focus-visible {
    outline: solid 2px var(--clr-accent);
    outline-offset: 2px;
    color: white;
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
    padding: 12.5px 24px;
  }
`;

export default Button;
