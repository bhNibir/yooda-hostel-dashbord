import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import apiClient from "../../utilities/AllRequest";
import Title from "../Title";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function FoodItems() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allFoodItems, setAllFoodItems] = useState(null);

  async function getAllFoodItem() {
    try {
      setLoading(true);
      setError(false);
      const response = await apiClient.get("/allFood");
      console.log(response);
      setLoading(false);
      setAllFoodItems(response.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getAllFoodItem();
  }, []);

  return (
    <>
      <Title>Recent Distribution</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allFoodItems?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{`$${item.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more food serve
      </Link>
    </>
  );
}
