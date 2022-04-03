import { createGlobalStyle } from "styled-components";
import StyledNormalize from "./StyledNormalize";
import StyledVariables from "./StyledVariables";
import StyledTypography from "./StyledTypography";
import StyledUtility from "./StyledUtility";

const StyledGlobal = createGlobalStyle`
  ${StyledNormalize}
  ${StyledVariables}
  ${StyledTypography} 
  ${StyledUtility}

  .container {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    width: 730px;
    padding: 1.9375rem 1.5rem;
  }

  .main{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  #__next { 
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
`;

export default StyledGlobal;
