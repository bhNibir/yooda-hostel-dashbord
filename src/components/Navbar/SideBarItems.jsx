import DashboardIcon from "@mui/icons-material/Dashboard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PeopleIcon from "@mui/icons-material/People";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const SideBarItems = () => {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Food Items" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DeliveryDiningIcon />
        </ListItemIcon>
        <ListItemText primary="Distribution" />
      </ListItemButton>
    </>
  );
};

export default SideBarItems;
