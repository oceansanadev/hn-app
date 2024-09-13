import PropTypes from "prop-types";
import { Drawer } from "@mui/material";
import DrawerNavigationLinks from "./DrawerNavigationLinks";
import { useDrawer } from "../../../features/drawer";

function CustomDrawer({ isMobile, drawerWidth }) {
  const { useSelectIsOpen, handleCloseDrawer, handleEndTransition } =
    useDrawer();

  const isOpen = useSelectIsOpen();

  return (
    <Drawer
      open={isMobile ? isOpen : true}
      variant={isMobile ? "temporary" : "permanent"}
      ModalProps={{
        keepMounted: isMobile,
      }}
      onTransitionEnd={isMobile ? handleEndTransition : undefined}
      onClose={isMobile ? handleCloseDrawer : undefined}
      sx={{
        display: {
          xs: isMobile ? "block" : "none",
          sm: isMobile ? "none" : "block",
        },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <DrawerNavigationLinks />
    </Drawer>
  );
}

CustomDrawer.propTypes = {
  isMobile: PropTypes.bool,
  drawerWidth: PropTypes.number,
};

export default CustomDrawer;
