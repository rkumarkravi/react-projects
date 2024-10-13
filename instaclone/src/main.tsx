import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WelcomePage from "./pages/WelcomePage";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { red } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: red[500],
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WelcomePage />
    </ThemeProvider>
  </React.StrictMode>
);
