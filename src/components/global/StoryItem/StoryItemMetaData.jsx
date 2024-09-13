import PropTypes from "prop-types";
import { calculateTimeAgo } from "../../../helpers";
import { Skeleton, Typography } from "@mui/material";

function StoryItemMetaData({ by, time, loading }) {
  if (loading) {
    return <Skeleton variant="text" width={"25%"} sx={{ mb: 1 }} />;
  }

  if (!by && !time) return null;

  return (
    <Typography variant="caption" color="textSecondary">
      {by && `Posted by ${by}`} {time && calculateTimeAgo(time)}
    </Typography>
  );
}

StoryItemMetaData.propTypes = {
  by: PropTypes.string,
  time: PropTypes.number,
  loading: PropTypes.bool,
};

export default StoryItemMetaData;
