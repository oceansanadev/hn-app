import { createSelector, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleThemeMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;

export const selectIsDarkMode = createSelector(
  [(state) => state.theme],
  (theme) => theme.isDarkMode
);

export default themeSlice.reducer;
