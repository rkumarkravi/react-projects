import React, { useState } from "react";
import "./Navbar.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
const Navbar = () => {
  const state = useSelector((state) => state.state);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const backwardHist=()=>{
      window.history.back()
  }

  const forwardHist=()=>{
    window.history.forward();
  }

  return (
    <>
      <div className="Navbar">
        <div className="Navbar__arrows">
          <ArrowBackIosIcon fontSize="medium" onClick={()=>{backwardHist()}}/>
          <ArrowForwardIosIcon fontSize="medium" onClick={()=>{forwardHist()}}/>
        </div>
        <div className="Navbar__right">
          <button>Upgrade</button>
          <div className="Navbar__right-profile" onClick={handleClick}>
            <Avatar sx={{ width: 24, height: 24 }} />
            <span>{state.userData.name}</span>
            <ArrowDropDownIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            color="primary"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      {state.loading && (
        <LinearProgress color="primary" size="lg"  sx={{
          backgroundColor: `#101010b4`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: `#1fdf64`
          }
        }}/>
      )}
    </>
  );
};

export default Navbar;
