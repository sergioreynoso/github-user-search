import { createGlobalStyle } from "styled-components";
import StyledNormalize from "./StyledNormalize";
import StyledVariables from "./StyledVariables";
import StyledTypography from "./StyledTypography";

const StyledGlobal = createGlobalStyle`
  ${StyledNormalize}
  ${StyledVariables}
  ${StyledTypography}

  .container {
    width: 730px;
    padding: 1.9375rem 1.5rem;
  }
  
  #__next { 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--clr-bg);
  }
`;

export default StyledGlobal;