import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useForm } from "react-hook-form";
import AddFoodForm from "./AddFoodForm";

const AddFood = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <Button
              sx={{
                m: 1,
              }}
              variant="contained"
              type="submit"
            >
              ADD
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddFood;
