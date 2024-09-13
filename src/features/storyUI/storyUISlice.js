import { createSelector, createSlice } from "@reduxjs/toolkit";

const storyUISlice = createSlice({
  name: "storyUI",
  initialState: {
    isExpanded: false,
    expandedIds: [],
  },
  reducers: {
    toggleExpanded(state) {
      state.isExpanded = !state.isExpanded;
    },
    toggleExpandedIds(state, action) {
      const storyId = action.payload;
      const index = state.expandedIds.indexOf(storyId);
      if (index !== -1) {
        state.expandedIds.splice(index, 1);
      } else {
        state.expandedIds.push(storyId);
      }
    },
  },
});

export const { toggleExpanded, toggleExpandedIds } = storyUISlice.actions;

export const selectIsExpanded = createSelector(
  [(state) => state.storyUI],
  (storyUI) => storyUI.isExpanded
);
export const selectIsStoryIdExpanded = (storyId) =>
  createSelector([(state) => state.storyUI], (storyUI) => {
    return storyUI.expandedIds.includes(storyId);
  });

export default storyUISlice.reducer;
