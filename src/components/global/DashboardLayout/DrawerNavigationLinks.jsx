// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { storyTypeConfig } from "../../../config";
import { useNavigate } from "react-router-dom";
import { useDrawer } from "../../../features/drawer";
import ThemeToggleButton from "./ThemeToggleButton";

function DrawerNavigationLinks() {
  const navigate = useNavigate();
  const { handleCloseDrawer } = useDrawer();

  const handleNavigation = (path) => {
    navigate(path);
    handleCloseDrawer();
  };

  return (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton LinkComponent={Link}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
      <List>
        {Object.keys(storyTypeConfig).map((type) => {
          const { icon: Icon, label, path } = storyTypeConfig[type];

          return (
            <ListItem key={type} disablePadding>
              <ListItemButton
                aria-label={label}
                onClick={() => handleNavigation(path)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ThemeToggleButton />
        {/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </div>
  );
}

export default DrawerNavigationLinks;
