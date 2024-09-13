import { StoryItem } from "../StoryItem";
import { Alert, AlertTitle, Divider, Stack, Typography } from "@mui/material";
import { useStories } from "../../../features/stories";
import { useCallback, useRef } from "react";
import { storyTypeConfig } from "../../../config";
import PropTypes from "prop-types";

function StoryList({ filter }) {
  const {
    errorIds,
    errorStories,
    isErrorIds,
    isErrorStories,
    isLoading,
    stories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccessfullyLoaded,
  } = useStories(filter);

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasNextPage, fetchNextPage]
  );

  if (isLoading) return <StoryItem loading />;

  if (isErrorIds)
    return (
      <Alert severity="error">
        <AlertTitle>{errorIds.name}</AlertTitle>
        {errorIds.message}
      </Alert>
    );

  if (isErrorStories)
    return (
      <Alert severity="error">
        <AlertTitle>{errorStories.name}</AlertTitle>
        {errorStories.message}
      </Alert>
    );

  if (!stories || stories?.length === 0)
    return <Alert severity="warning">No Stories are available</Alert>;

  return (
    <>
      <Divider component={"div"} role="presentation" sx={{ mb: 2 }}>
        <Typography variant="h6" color="textSecondary">
          {storyTypeConfig[filter].label}
        </Typography>
      </Divider>

      <Stack
        divider={<Divider />}
        direction="column"
        gap={1}
        sx={{
          m: "auto",
          maxWidth: "md",
        }}
      >
        {stories?.map((story, index) => {
          if (stories?.length - 1 === index) {
            return <StoryItem key={story.id} {...story} ref={lastElementRef} />;
          } else {
            return <StoryItem key={story.id} {...story} />;
          }
        })}

        {isFetchingNextPage && <StoryItem loading />}

        {isSuccessfullyLoaded && !hasNextPage && (
          <Divider component={"div"} role="presentation" sx={{ mt: 2 }}>
            <Typography variant="body1" color="textSecondary">
              End of stories
            </Typography>
          </Divider>
        )}
      </Stack>
    </>
  );
}

StoryList.propTypes = {
  filter: PropTypes.string,
};

export default StoryList;
