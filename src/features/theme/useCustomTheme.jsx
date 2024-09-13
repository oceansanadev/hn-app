import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleThemeMode } from "./themeSlice";

function useCustomTheme() {
  const dispatch = useDispatch();

  const useIsDarkMode = () => useSelector(selectIsDarkMode);
  const handleToggleThemeMode = () => dispatch(toggleThemeMode());

  return { handleToggleThemeMode, useIsDarkMode };
}

export default useCustomTheme;
