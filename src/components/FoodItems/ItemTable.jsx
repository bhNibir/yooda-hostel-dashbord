import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

const ItemTable = ({ allFoodItems, deleteFoodItem }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  const handleDelete = ({ _id }) => {
    deleteFoodItem(_id);
    console.log(_id);
  };

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
        {allFoodItems &&
          allFoodItems.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{`৳ ${item.price}`}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="Delete"
                  onClick={() => handleDelete(item)}
                >
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
