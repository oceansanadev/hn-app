import { forwardRef } from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import PropTypes from "prop-types";
import StoryItemText from "./StoryItemText";
import StoryItemMetaData from "./StoryItemMetaData";
import StoryItemTitle from "./StoryItemTitle";
import StoryItemActions from "./StoryItemActions";

// {
//     "by" : "pupppet",
//     "descendants" : 5,
//     "id" : 41311730,
//     "kids" : [ 41311984, 41311848, 41311789, 41311939 ],
//     "score" : 3,
//     "text" : "Without my having made any change to my playlists or library I&#x27;m noticing songs I&#x27;ve had in my library for years are being swapped out with re-recorded or remastered versions and they&#x27;re are almost universally WORSE than the originals.  The artists are older, their voices are no longer at their peak and the accompanying band sounds different and somehow weaker.   It&#x27;s like I&#x27;m getting the off-brand version of the original song.",
//     "time" : 1724257351,
//     "title" : "Ask HN: Have you noticed your songs being swapped out with inferior versions?",
//     "type" : "story",
//   "url" : "https://newbeelearn.com/tools/csvonline/"
//   }

const StoryItem = forwardRef(function StoryItem(
  { title, text, by, score, time, url, loading, id },
  ref
) {
  return (
    <>
      <Card ref={ref} elevation={3}>
        <CardContent>
          <StoryItemTitle loading={loading} title={title} />
          <StoryItemMetaData loading={loading} by={by} time={time} />
          <StoryItemText storyId={id} text={text} loading={loading} />
        </CardContent>
        <CardActions>
          <StoryItemActions
            loading={loading}
            text={text}
            title={title}
            score={score}
            url={url}
          />
        </CardActions>
      </Card>
    </>
  );
});

StoryItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  by: PropTypes.string,
  score: PropTypes.number,
  time: PropTypes.number,
  url: PropTypes.string,
  loading: PropTypes.bool,
  id: PropTypes.number,
};

export default StoryItem;
