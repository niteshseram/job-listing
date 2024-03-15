import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">Hello</div>
    </ThemeProvider>
  );
}

export default App;
