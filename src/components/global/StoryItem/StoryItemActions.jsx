import { Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import { ShareButton } from "../ShareButton";
import { CopyLinkButton } from "../CopyLinkButton";
import { VisitButton } from "../VisitButton";
import { ScoreButton } from "../ScoreButton";
import { useDialog } from "../../../features/dialog";

function StoryItemActions({ loading, text, title, url, score }) {
  const { handleOpenDialog } = useDialog();

  if (loading) {
    return <Skeleton variant="rounded" width={"50%"} sx={{ ml: 1 }} />;
  }

  const handleScoreButton = () => {
    handleOpenDialog({
      title: "Score for cuurent post",
      text: `Total score is ${score}`,
    });
  };

  return (
    <>
      {url && <ShareButton text={text} title={title} url={url} />}
      {url && <CopyLinkButton url={url} />}
      {url && <VisitButton href={url} />}
      {score && <ScoreButton score={score} onClick={handleScoreButton} />}
    </>
  );
}

StoryItemActions.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  score: PropTypes.number,
};

export default StoryItemActions;
