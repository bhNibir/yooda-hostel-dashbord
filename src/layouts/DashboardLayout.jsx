import { Box, CssBaseline } from "@mui/material";
import React from "react";
import NavBar from "./../components/Navbar/NavBar";

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
