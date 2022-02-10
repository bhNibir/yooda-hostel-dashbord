import DashboardIcon from "@mui/icons-material/Dashboard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PeopleIcon from "@mui/icons-material/People";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SideBarItems = () => {
  return (
    <>
      <ListItemButton component={RouterLink} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="/students">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="/fooditems">
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Food Items" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="/serve">
        <ListItemIcon>
          <DeliveryDiningIcon />
        </ListItemIcon>
        <ListItemText primary="Distribution" />
      </ListItemButton>
    </>
  );
};

export default SideBarItems;
