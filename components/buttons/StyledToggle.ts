import styled from "styled-components";
import { ANIMATION_TIME as at } from "../../design-tokens";

const StyledToggle = styled.button`
  & {
    display: flex;
    gap: 0 16px;

    border: none;
    color: var(--clr-body);
    background-color: transparent;

    cursor: pointer;

    &:hover {
      .label {
        color: var(--clr-hover);
      }
      .moon {
        fill: var(--clr-hover);
      }
      .sun {
        fill: var(--clr-hover);
      }
    }
  }

  .label {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2.5px;
    color: var(--clr-dark-mode-toggle);
    transition: all 0.5s;
  }

  .icons {
    position: relative;
    align-self: center;
    /* overflow: hidden; */
    width: 20px;
    height: 20px;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .moon {
    z-index: 1;
    opacity: 0;
    transform: rotate(-90deg);
    fill: var(--clr-body);
    transition: transform ${at.med} ease-in-out, opacity ${at.fast} linear,
      fill ${at.fast} linear;
  }

  .sun {
    opacity: 0;
    transform: rotate(90deg);
    fill: var(--clr-body);
    transition: transform ${at.med} ease-in-out, opacity ${at.fast} linear,
      fill ${at.fast} linear;
  }

  .active {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

export default StyledToggle;
