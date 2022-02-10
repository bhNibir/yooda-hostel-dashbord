import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import FoodItems from "./FoodItems";

function DashboardContent() {
  return (
    <>
      {/* Recent Distribution */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <FoodItems />
        </Paper>
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
