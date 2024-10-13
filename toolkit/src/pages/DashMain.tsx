import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DashMain() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <Avatar className="back-icon" onClick={goBack}>
          <ArrowBackIcon />
        </Avatar>
      <Outlet />
    </ThemeProvider>
  );
}
