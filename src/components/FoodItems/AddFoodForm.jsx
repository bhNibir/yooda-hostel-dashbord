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
        required
      />
      <RHFMInput
        name="price"
        control={control}
        margin="dense"
        id="price"
        label="Price"
        type="text"
        fullWidth
        variant="outlined"
        required
      />
    </>
  );
};

export default AddFoodForm;
