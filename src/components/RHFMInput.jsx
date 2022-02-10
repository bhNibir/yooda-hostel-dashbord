import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const RHFMInput = ({ name, control, ...rest }) => {
  return (
    <Controller
      render={({ field }) => <TextField name={name} {...field} {...rest} />}
      name={name}
      control={control}
    />
  );
};

export default RHFMInput;
