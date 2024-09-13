import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import PropTypes from "prop-types";

function VisitButton({ href }) {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<LaunchIcon />}
      target="_blank"
      href={href}
    >
      Visit
    </Button>
  );
}

VisitButton.propTypes = {
  href: PropTypes.string,
};

export default VisitButton;
