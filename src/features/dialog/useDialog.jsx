import { useDispatch, useSelector } from "react-redux";
import {
  closeDialog,
  openDialog,
  selectDialogText,
  selectDialogTitle,
  selectIsDialogOpen,
} from "./dialogSlice";

function useDialog() {
  const dispatch = useDispatch();
  const useSelectDialogText = () => useSelector(selectDialogText);
  const useSelectDialogTitle = () => useSelector(selectDialogTitle);
  const useSelectIsDialogOpen = () => useSelector(selectIsDialogOpen);

  const handleOpenDialog = ({ title, text }) =>
    dispatch(openDialog({ title, text }));
  const handleCloseDialog = () => dispatch(closeDialog());

  return {
    useSelectDialogText,
    useSelectDialogTitle,
    useSelectIsDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
  };
}

export default useDialog;
