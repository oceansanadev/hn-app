import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";

const isWebShareSupported = () => navigator.share !== undefined;

function ShareButton({ title, text, url }) {
  const handleShare = async () => {
    if (!isWebShareSupported) {
      console.error("Web Share API not supported");
      return;
    }
    try {
      await navigator.share({ text, title, url });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      startIcon={<ShareIcon />}
      onClick={handleShare}
      variant="outlined"
      size="small"
    >
      Share
    </Button>
  );
}

ShareButton.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default ShareButton;
