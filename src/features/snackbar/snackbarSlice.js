import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar(state, action) {
      state.isOpen = true;
      state.message = action.payload.message;
    },
    hideSnackbar(state) {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const selectIsOpen = createSelector(
  [(state) => state.snackbar],
  (snackbar) => snackbar.isOpen
);
export const selectMessage = createSelector(
  [(state) => state.snackbar],
  (snackbar) => snackbar.message
);

export const { hideSnackbar, showSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
