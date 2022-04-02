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

  body {
    font-family: "Space Mono", monospace;
  }

  .bg-color{
    background-color: var(--clr-bg);
  }
  
  #__next { 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default StyledGlobal;
