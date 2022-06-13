import React from "react";
import Main from "./components/Main/Main";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
