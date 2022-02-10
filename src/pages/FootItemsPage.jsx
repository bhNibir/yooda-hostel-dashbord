import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import apiClient from "../utilities/AllRequest";
import FoodItems from "./../components/FoodItems/FoodItems";

const FootItemsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allFoodItems, setAllFoodItems] = useState(null);
  const [deleteFoodItem, setDeleteFoodItem] = useState(null);
  const [open, setOpen] = useState(false);

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

  async function handleDeleteFoodItem(id) {
    try {
      setLoading(true);
      setError(false);
      const response = await apiClient.delete(`/foodDelete/${id}`);
      console.log("delete", response);
      setLoading(false);
      setDeleteFoodItem(response.data);
      // setShowMessage(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getAllFoodItem();
  }, [open, deleteFoodItem]);

  return (
    <>
      <DashboardLayout>
        <FoodItems
          open={open}
          setOpen={setOpen}
          allFoodItems={allFoodItems}
          loading={loading}
          deleteFoodItem={handleDeleteFoodItem}
        />
      </DashboardLayout>
    </>
  );
};

export default FootItemsPage;
