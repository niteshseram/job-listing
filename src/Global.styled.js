import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Spartan', sans-serif;
    font-size: 15px;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.neutral100};
    min-height: 100vh;
  }
`;

export default GlobalStyles;
