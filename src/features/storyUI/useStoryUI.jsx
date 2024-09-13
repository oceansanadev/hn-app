import { useDispatch, useSelector } from "react-redux";
import {
  selectIsExpanded,
  toggleExpanded,
  selectIsStoryIdExpanded,
  toggleExpandedIds,
} from "./storyUISlice";

function useStoryUI() {
  const dispatch = useDispatch();
  const useSelectIsExpanded = () => useSelector(selectIsExpanded);
  const useSelectIsStoryIdExpanded = (storyId) =>
    useSelector(selectIsStoryIdExpanded(storyId));

  const handleToggleExpanded = () => dispatch(toggleExpanded());
  const handleToggleExpandedId = (storyId) =>
    dispatch(toggleExpandedIds(storyId));

  return {
    useSelectIsExpanded,
    useSelectIsStoryIdExpanded,
    handleToggleExpanded,
    handleToggleExpandedId,
  };
}

export default useStoryUI;
