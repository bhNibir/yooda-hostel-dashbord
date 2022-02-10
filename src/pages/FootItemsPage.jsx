import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import apiClient from "../utilities/AllRequest";
import FoodItems from "./../components/FoodItems/FoodItems";

const FootItemsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  async function getFoodItem() {
    try {
      setLoading(true);
      setError(false);
      const response = await apiClient.get("/allFood");
      console.log(response);
      setLoading(false);
      setResult(response.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getFoodItem();
  }, [open]);

  return (
    <>
      <DashboardLayout>
        <FoodItems
          open={open}
          setOpen={setOpen}
          result={result}
          loading={loading}
        />
      </DashboardLayout>
    </>
  );
};

export default FootItemsPage;
