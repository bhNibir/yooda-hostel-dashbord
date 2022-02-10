import React from "react";
import RHFMInput from "./../RHFMInput";

const AddFoodForm = ({ control }) => {
  return (
    <>
      <RHFMInput
        name="name"
        control={control}
        autoFocus
        margin="dense"
        id="name"
        label="Food name"
        type="text"
        fullWidth
        variant="outlined"
      />
      <RHFMInput
        name="price"
        control={control}
        autoFocus
        margin="dense"
        id="price"
        label="Price"
        type="text"
        fullWidth
        variant="outlined"
      />
    </>
  );
};

export default AddFoodForm;
