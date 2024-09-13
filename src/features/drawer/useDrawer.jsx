import { useDispatch, useSelector } from "react-redux";
import {
  closeDrawer,
  endTransition,
  selectIsClosing,
  selectIsOpen,
  toggleDrawer,
} from "./drawerSlice";

function useDrawer() {
  const dispatch = useDispatch();

  const useSelectIsClosing = () => useSelector(selectIsClosing);
  const useSelectIsOpen = () => useSelector(selectIsOpen);

  const handleCloseDrawer = () => dispatch(closeDrawer());
  const handleEndTransition = () => dispatch(endTransition());
  const handleToggleDrawer = () => dispatch(toggleDrawer());

  return {
    useSelectIsClosing,
    useSelectIsOpen,
    handleCloseDrawer,
    handleEndTransition,
    handleToggleDrawer,
  };
}

export default useDrawer;
