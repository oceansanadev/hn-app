import { createSelector, createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
    isClosing: false,
  },
  reducers: {
    closeDrawer(state) {
      state.isClosing = true;
      state.isOpen = false;
    },
    endTransition(state) {
      state.isClosing = false;
    },
    toggleDrawer(state) {
      if (!state.isClosing) {
        state.isOpen = !state.isOpen;
      }
    },
  },
});

export const { closeDrawer, endTransition, toggleDrawer } = drawerSlice.actions;

export const selectIsClosing = createSelector(
  [(state) => state.drawer],
  (drawer) => drawer.isClosing
);

export const selectIsOpen = createSelector(
  [(state) => state.drawer],
  (drawer) => drawer.isOpen
);

export default drawerSlice.reducer;
