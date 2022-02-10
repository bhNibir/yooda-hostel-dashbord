import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid, Paper, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";
import Title from "./../Title";
import AddFood from "./AddFood";
import ItemTable from "./ItemTable";

function preventDefault(event) {
  event.preventDefault();
}

const FoodItems = ({
  open,
  setOpen,
  allFoodItems,
  loading,
  deleteFoodItem,
}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}
            >
              <Title>FOOD ITEMS</Title>

              <Fab
                variant="extended"
                color="secondary"
                aria-label="add"
                onClick={handleClickOpen}
              >
                <AddIcon sx={{ mr: 1 }} />
                ADD FOOD
              </Fab>
            </Stack>
          </Box>
          <ItemTable
            allFoodItems={allFoodItems}
            deleteFoodItem={deleteFoodItem}
          />
          <Link
            color="primary"
            href="#"
            onClick={preventDefault}
            sx={{ mt: 3 }}
          >
            See more
          </Link>
        </Paper>
      </Grid>
      <AddFood open={open} handleClose={handleClose} />
    </>
  );
};

export default FoodItems;
