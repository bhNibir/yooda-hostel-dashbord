import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid, Paper, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import Title from "./../Title";
import AddFood from "./AddFood";
import ItemTable from "./ItemTable";

// Generate Order Data
function createData(id, name, price) {
  return { id, name, price };
}

const itemList = [
  createData(0, "Elvis Presley", 312.44),
  createData(1, "Paul McCartney", 866.99),
  createData(2, "Tom Scholz", 100.81),
  createData(3, "Michael Jackson", 654.39),
  createData(4, "Bruce Springsteen", 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const FoodItems = () => {
  const [open, setOpen] = useState(false);

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
          <ItemTable itemList={itemList} />
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
