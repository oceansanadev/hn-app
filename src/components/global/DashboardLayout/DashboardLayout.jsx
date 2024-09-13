import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { CustomAppBar } from "../CustomAppBar";
import CustomDrawer from "./CustomDrawer";
import { Container } from "@mui/material";

const drawerWidth = 240;

function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <CustomDrawer drawerWidth={drawerWidth} isMobile />
        <CustomDrawer drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          py: 2,
          px: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;
