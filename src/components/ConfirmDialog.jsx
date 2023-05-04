import { Button, Typography } from "@material-tailwind/react";
import { Dialog, DialogActions, DialogTitle, Slide } from "@mui/material";
import { forwardRef } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ConfirmDialog({ open, handleClose, handleOK, title }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button
          variant={"gradient"}
          color={"blue"}
          className="mt-4 mr-6 flex items-center py-1 px-6 capitalize"
          type="button"
          onClick={handleClose}
        >
          <Typography color="inherit" className=" font-medium capitalize">
            Cancle
          </Typography>
        </Button>
        <Button
          variant={"gradient"}
          color={"red"}
          className="mt-4 mr-6 flex items-center py-1 px-6 capitalize"
          type="button"
          onClick={handleOK}
        >
          <Typography color="inherit" className=" font-medium capitalize">
            OK
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
