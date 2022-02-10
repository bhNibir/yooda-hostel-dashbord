import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import FoodItems from "./../components/FoodItems/FoodItems";

const FootItemsPage = () => {
  return (
    <>
      <DashboardLayout>
        <FoodItems />
      </DashboardLayout>
    </>
  );
};

export default FootItemsPage;
