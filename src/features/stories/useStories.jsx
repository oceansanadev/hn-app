import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { PER_PAGE, fetchStories, fetchStoryIds } from "../../helpers";
// import { useStoryFilter } from "../storyFilter";

function useStories(filter) {
  // const { useSelectStoryFilterType } = useStoryFilter();
  // const filterType = useSelectStoryFilterType();
  // const selectedFilterName = filter ?? filterType;
  const selectedFilterName = filter;

  const {
    data: storyIds,
    isLoading: isLoadingIds,
    isError: isErrorIds,
    error: errorIds,
  } = useQuery({
    queryKey: ["storyIds", selectedFilterName],
    queryFn: () => fetchStoryIds(selectedFilterName),
    // staleTime: Infinity,
    enabled: true,
  });

  const {
    isPending,
    data,
    fetchNextPage,
    isError: isErrorStories,
    error: errorStories,
    hasNextPage,
    isLoading: isLoadingStories,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["stories", storyIds],
    queryFn: async ({ pageParam = 1 }) =>
      fetchStories({ pageParam, storyIds: storyIds || [] }),
    enabled: !!storyIds,
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return nextPage <= Math.ceil(lastPage.total / PER_PAGE)
        ? nextPage
        : undefined;
    },
  });

  const stories = data?.pages.flatMap((page) => page.stories);

  return {
    isLoading: isLoadingIds || isLoadingStories,
    fetchNextPage,
    isErrorIds,
    isErrorStories,
    stories,
    errorIds,
    errorStories,
    hasNextPage,
    isPending,
    isFetchingNextPage,
    status,
    isSuccessfullyLoaded: status === "success",
  };
}

export default useStories;
