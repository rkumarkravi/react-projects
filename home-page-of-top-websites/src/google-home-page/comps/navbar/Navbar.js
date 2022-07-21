import React from "react";
import "./Navbar.css";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { grey } from '@mui/material/colors';
import OtherProducts from "../other-products/OtherProducts";
function Navbar() {
  return (
    <div className="navbar-style">
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        alignItems="center"
        className="stack-style"
      >
        <a href="http://www.gmail.com/">Gmail</a>
        <a href="http://photos.google.com/">Images</a>

        <div className="other-products">
          <IconButton aria-label="delete">
            <AppsOutlinedIcon sx={{ color: grey[900] }}/>
          </IconButton>
          <div className="other-products-menu">
            <OtherProducts/>
          </div>
        </div>
        <Button variant="contained">Sign in</Button>
      </Stack>
    </div>
  );
}

export default Navbar;
