import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useCustomTheme } from "../../../features/theme";
import { CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function CustomThemeProvider({ children }) {
  const { useIsDarkMode } = useCustomTheme();

  const isDarkMode = useIsDarkMode();

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default CustomThemeProvider;
