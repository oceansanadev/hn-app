import { useDispatch, useSelector } from "react-redux";
import {
  hideSnackbar,
  selectIsOpen,
  selectMessage,
  showSnackbar,
} from "./snackbarSlice";

function useSnackbar() {
  const dispatch = useDispatch();
  const useSelectIsOpen = () => useSelector(selectIsOpen);
  const useSelectMessage = () => useSelector(selectMessage);

  const handleShowSnackbar = ({ message }) =>
    dispatch(showSnackbar({ message }));

  const handleHideSnackbar = () => dispatch(hideSnackbar());

  return {
    useSelectIsOpen,
    useSelectMessage,
    handleShowSnackbar,
    handleHideSnackbar,
  };
}

export default useSnackbar;
