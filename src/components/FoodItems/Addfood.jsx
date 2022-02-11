import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { IconButton, Toolbar, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../utilities/AllRequest";
import ShowMessage from "../ErrorMessages/ShowMessage";
import AddFoodForm from "./AddFoodForm";

const AddFood = ({ open, handleClose, showMessage, setShowMessage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, control, reset } = useForm();

  async function addFoodItem(data) {
    try {
      setLoading(true);
      setError(false);
      const response = await apiClient.post("/addFood", data);
      console.log(response);
      setLoading(false);
      setResult(response.data);
      reset({ name: "", price: "" });
      setShowMessage(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  }

  const onSubmit = (data) => {
    addFoodItem(data);
    console.log(data);
  };

  return (
    <div>
      <Dialog open={open} fullScreen={fullScreen}>
        <Toolbar>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
            Add Food Item
          </Typography>
          <IconButton
            edge="start"
            color="error"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <AddFoodForm control={control} />
          </DialogContent>
          <DialogActions>
            <LoadingButton
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              type="submit"
              sx={{
                m: 1,
              }}
            >
              ADD
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
      <ShowMessage
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        message="Food item Added Successfully !"
      />
    </div>
  );
};

export default AddFood;
