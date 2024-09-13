import { Skeleton, Typography } from "@mui/material";
import PropTypes from "prop-types";

function StoryItemTitle({ loading, title }) {
  if (loading) {
    return <Skeleton variant="rounded" sx={{ mb: 1 }} />;
  }

  if (!title) return null;

  return (
    <Typography variant="body1" sx={{ mb: 1 }}>
      {title}
    </Typography>
  );
}

StoryItemTitle.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
};

export default StoryItemTitle;
