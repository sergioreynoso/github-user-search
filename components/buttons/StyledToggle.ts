import styled from "styled-components";

const StyledToggle = styled.button`
  & {
    display: flex;
    gap: 0 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:hover {
      .label {
        color: var(--clr-dark-mode-toggle-hover);
      }
      .moon {
        fill: var(--clr-dark-mode-toggle-hover);
      }
      .sun {
        fill: var(--clr-dark-mode-toggle-hover);
      }
    }
  }

  .label {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--clr-dark-mode-toggle);
  }

  .icons {
    position: relative;
    align-self: center;
    overflow: hidden;
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
    transform: translateY(20px);
    fill: var(--clr-dark-mode-toggle);
    transition: transform 0.5s ease-in-out, opacity 0.2s linear;
  }

  .sun {
    opacity: 0;
    transform: translateY(-20px);
    fill: var(--clr-dark-mode-toggle);
    transition: transform 0.5s ease-in-out, opacity 0.2s linear;
  }

  .active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default StyledToggle;
