import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";
import { useSnackbar } from "../../../features/snackbar";

function CopyLinkButton({ url }) {
  const { handleShowSnackbar } = useSnackbar();
  //   const { handleShowSnackbar } = useSnackbar();

  const handleCopy = () => {
    handleShowSnackbar({ message: "Link Copied: " + url });
  };
  return (
    <CopyToClipboard text={url} onCopy={handleCopy}>
      <Button variant="outlined" size="small" startIcon={<ContentCopyIcon />}>
        Copy
      </Button>
    </CopyToClipboard>
  );
}

CopyLinkButton.propTypes = {
  url: PropTypes.string,
};

export default CopyLinkButton;
