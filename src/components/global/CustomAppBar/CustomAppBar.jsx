import { AppBar, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import DrawerToggleButton from "./DrawerToggleButton";
import HNLogo from "../HNLogo/HNLogo";

function CustomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        // width: { sm: `calc(100% - ${drawerWidth}px)` },
        // ml: { sm: `${drawerWidth}px` },
        zIndex: ({ zIndex }) => zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <DrawerToggleButton />
        <HNLogo />
        {/* <Typography variant="h6" noWrap component="div">
          Top Stories
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
}

CustomAppBar.propTypes = {
  drawerWidth: PropTypes.number,
  onDrawerToggle: PropTypes.func,
};

export default CustomAppBar;
