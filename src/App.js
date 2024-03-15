import { ThemeProvider } from "styled-components";

import GlobalStyles from "./Global.styled";
import theme from "./theme";

import BgHeader from "./components/BgHeader";
import Listing from "./components/Listing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <BgHeader />
        <Listing />
      </div>
    </ThemeProvider>
  );
}

export default App;
