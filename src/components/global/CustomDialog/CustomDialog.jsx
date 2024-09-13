import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDialog } from "../../../features/dialog";

function CustomDialog() {
  const {
    handleCloseDialog,
    useSelectDialogText,
    useSelectDialogTitle,
    useSelectIsDialogOpen,
  } = useDialog();
  const text = useSelectDialogText();
  const title = useSelectDialogTitle();
  const isOpen = useSelectIsDialogOpen();

  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" size="small" onClick={handleCloseDialog}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
