import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Fab, Grid, IconButton, Paper, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import Title from "./../Title";

// Generate Order Data
function createData(id, name, price) {
  return { id, name, price };
}

const rows = [
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
  return (
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

            <Fab variant="extended" color="secondary" aria-label="add">
              <AddIcon sx={{ mr: 1 }} />
              ADD FOOD
            </Fab>
          </Stack>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{`৳ ${row.price}`}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more food serve
        </Link>
      </Paper>
    </Grid>
  );
};

export default FoodItems;
