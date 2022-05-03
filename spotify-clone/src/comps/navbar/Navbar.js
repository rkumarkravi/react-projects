import React, { useState } from "react";
import "./Navbar.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Navbar">
      <div className="Navbar__arrows">
        <ArrowBackIosIcon fontSize="medium" />
        <ArrowForwardIosIcon fontSize="medium" />
      </div>
      <div className="Navbar__right">
        <button>Upgrade</button>
        <div className="Navbar__right-profile" onClick={handleClick}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <span>Ravi</span>
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
  );
};

export default Navbar;
