import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";
import { useSnackbar } from "../../../features/snackbar";

function CustomSnackbar() {
  const { useSelectIsOpen, useSelectMessage, handleHideSnackbar } =
    useSnackbar();
  const open = useSelectIsOpen();
  const message = useSelectMessage();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleHideSnackbar();
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(event, reason) => {
          console.log(reason);
          handleClose(event);
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
}

export default CustomSnackbar;
