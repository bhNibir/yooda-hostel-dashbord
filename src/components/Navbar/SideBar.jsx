import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  styled,
  Toolbar,
} from "@mui/material";
import React from "react";
import SideBarItems from "./SideBarItems";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SideBar = ({ toggleDrawer, open }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <SideBarItems />
        {/* {mainListItems} */}
        <Divider sx={{ my: 1 }} />
        {/* {secondaryListItems} */}
      </List>
    </Drawer>
  );
};

export default SideBar;
