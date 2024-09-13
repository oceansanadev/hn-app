import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCustomTheme } from "../../../features/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

function ThemeToggleButton() {
  const { handleToggleThemeMode, useIsDarkMode } = useCustomTheme();

  const isDarkMode = useIsDarkMode();

  return (
    <ListItem disablePadding>
      <ListItemButton
        aria-label="Switch Theme Mode"
        onClick={handleToggleThemeMode}
      >
        <ListItemIcon>
          {isDarkMode ? <NightlightIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText primary="Switch Theme" />
      </ListItemButton>
    </ListItem>
  );
}

export default ThemeToggleButton;
