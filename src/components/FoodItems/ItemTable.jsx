import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

const ItemTable = ({ itemList }) => {
  return (
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
        {itemList.map((row) => (
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
  );
};

export default ItemTable;
