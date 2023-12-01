import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";

import Example from "./components/examples/Example";
import Presentation from "./components/presentation/Presentation";
import { theme } from "./assets/theme";

export const IndexContext = createContext();

function App() {
  const storedIndex = localStorage.getItem("slideIndex");
  const [index, setIndex] = useState(parseFloat(storedIndex));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IndexContext.Provider value={{ index, setIndex }}>
        <Example />
      </IndexContext.Provider>
    </ThemeProvider>
  );
}

export default App;
