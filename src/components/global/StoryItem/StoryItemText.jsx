import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useStoryUI } from "../../../features/storyUI";
import { Button, Skeleton, Typography } from "@mui/material";

const textTrimLength = 200;

function StoryItemText({ text, storyId, loading }) {
  const { useSelectIsStoryIdExpanded, handleToggleExpandedId } = useStoryUI();
  const isTextExpanded = useSelectIsStoryIdExpanded(storyId);

  if (loading) {
    return (
      <>
        <Skeleton variant="text" width={"100%"} />
        <Skeleton variant="text" width={"75%"} />
        <Skeleton variant="text" width={"50%"} />
      </>
    );
  }

  if (!text) return null;

  const sanitizedHTML = DOMPurify.sanitize(text);
  const handleToggle = () => handleToggleExpandedId(storyId);
  const trimmedText = sanitizedHTML.substring(
    0,
    isTextExpanded ? undefined : textTrimLength
  );
  const isButtonRequired = trimmedText.length <= textTrimLength;
  let displayText = trimmedText;
  if (isButtonRequired) {
    displayText = displayText + "...";
  }

  return (
    <>
      <Typography
        variant="body2"
        sx={{ mt: 1 }}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />
      {isButtonRequired && (
        <Button onClick={handleToggle} size="small">
          {isTextExpanded ? "See less" : "See more"}
        </Button>
      )}
    </>
  );
}

StoryItemText.propTypes = {
  text: PropTypes.string,
  storyId: PropTypes.number,
  loading: PropTypes.bool,
};

export default StoryItemText;
