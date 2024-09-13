import { axiosInstance } from "../config";

export const PER_PAGE = 10;

export const fetchStoryIds = async (filter) => {
  const response = await axiosInstance.get(`${filter}stories.json`);
  return response.data;
};

export const fetchStory = async (id) => {
  const response = await axiosInstance.get(`item/${id}.json`);
  return response.data;
};

export const fetchStories = async ({ pageParam, storyIds }) => {
  const storyIdsToFetch = storyIds.slice(
    (pageParam - 1) * PER_PAGE,
    pageParam * PER_PAGE
  );

  const storyPromises = storyIdsToFetch.map((id) => fetchStory(id));
  const stories = await Promise.all(storyPromises);
  return { stories, total: storyIds.length };
};
