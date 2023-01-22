import React from "react";
import "./SideNav.css";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BookIcon from "@mui/icons-material/Book";
import Logout from "@mui/icons-material/Logout";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import MergeIcon from "@mui/icons-material/Merge";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../../config/Theme";
import Tooltip from "@mui/material/Tooltip";
import TopicIcon from '@mui/icons-material/Topic';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Link } from "react-router-dom";
import constants from "./../../config/config";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const sideNavMenus = {
  "user": [
    { text: "Home", icon: <HomeIcon color="primary" />, routePath: "/user" },
    {
      text: "Languages",
      icon: <DeveloperModeIcon color="primary" />,
      routePath: "/user",
    },
    {
      text: "Bookmarks",
      icon: <BookIcon color="primary" />,
      routePath: "/user",
    },
    {
      text: "Road Maps",
      icon: <MergeIcon color="primary" />,
      routePath: "/user/roadmaps",
    },{
      text: "Logout",
      icon: <Logout color="primary" />,
      routePath: "/",
      break:true
    },
  ],
  "admin": [
    { text: "Home", icon: <HomeIcon color="primary" />, routePath: "/admin" },
    { text: "Show Courses", icon: <FolderCopyIcon color="primary" />, routePath: "/admin/showCourses" },
  ],
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function SideNav() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const currentRoutePath = location.pathname;
  const user=useSelector(state=>state.user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return currentRoutePath !== "/" ? (
    <nav>
      {
        <ThemeProvider theme={defaultTheme}>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              {!open && (
                <Tooltip title="Expand Drawer" placement="right">
                  <IconButton onClick={handleDrawerOpen}>
                    <ChevronRightIcon />
                  </IconButton>
                </Tooltip>
              )}
              {open && (
                <Tooltip title="Collapse Drawer" placement="right">
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Tooltip>
              )}
              {open && (
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "flex" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {constants.brandName}
                </Typography>
              )}
            </DrawerHeader>
            <h1>Welcome {user.name}</h1>
            <Divider />
            <List >
              {sideNavMenus[currentRoutePath.split("/")[1]].map((data, index) => (
                <>
                {data.break && <Divider key={data.text+"_"+index}/>}
                <Tooltip title={data.text} placement="right" key={data.text+index}>
                  <Link to={data.routePath} relative="route">
                    <ListItem
                      key={data.text+index}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {data.icon ? data.icon : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={data.text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </Tooltip>
                </>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
      }
    </nav>
  ) : (
    <></>
  );
}

export default SideNav;
