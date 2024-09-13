import { IconButton } from "@mui/material";
import { useDrawer } from "../../../features/drawer";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerToggleButton() {
  const { handleToggleDrawer } = useDrawer();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleToggleDrawer}
      sx={{ mr: 0, display: { sm: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default DrawerToggleButton;
