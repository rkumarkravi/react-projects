import React from 'react';
import './Header.css';
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { IconButton, Menu, MenuItem } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useStateValue } from '../../StateProvider';
import {auth,provider} from '../../firebase';
import { signOut } from 'firebase/auth';
export function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (type) => {
        if(type==='signOut'){
            signOut(auth).then(() => {
                console.log("signout successfull!!");
              }).catch((error) => {
                // An error happened.
              });
        }
            setAnchorEl(null);
    };
    const [{user},dispatch]=useStateValue();
    return (
      <div className="header">
        <div className="header__branding">
            <img className="header__logo"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            alt="logo"
            />
            <div className="header__input">
                <SearchIcon/>
                <input placeholder="Search facebook" name="search"/>
            </div>
        </div>
        <div className="header__mid">
            <div className="header__mid_icon header__mid_icon--active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header__mid_icon">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header__mid_icon">
                <SubscriptionsOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__mid_icon">
                <StorefrontOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__mid_icon">
                <SupervisedUserCircleOutlinedIcon fontSize="large"/>
            </div>
        </div>
        <div className="header__user">
            <div className="header__user_inf">
                <Avatar src={user.photoURL}/>
                <span>{user.displayName}</span>
            </div>
            <div className="header__small_icons">
                <IconButton>
                    <AddOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ForumOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <CircleNotificationsOutlinedIcon/>
                </IconButton>
                <IconButton onClick={handleClick}>
                    <ExpandCircleDownOutlinedIcon/>
                </IconButton>
            </div>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={()=>handleClose('signOut')}>Sign Out</MenuItem>
        </Menu>
      </div>
    );
}

export default Header;
