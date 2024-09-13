import { createSelector, createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isOpen: false,
    title: "",
    text: "",
  },
  reducers: {
    openDialog(state, action) {
      state.isOpen = true;
      state.title = action.payload.title;
      state.text = action.payload.text;
    },
    closeDialog(state) {
      state.isOpen = false;
      state.title = "";
      state.text = "";
    },
  },
});

export const { closeDialog, openDialog } = dialogSlice.actions;

export const selectIsDialogOpen = createSelector(
  [(state) => state.dialog],
  (dialog) => dialog.isOpen
);
export const selectDialogTitle = createSelector(
  [(state) => state.dialog],
  (dialog) => dialog.title
);
export const selectDialogText = createSelector(
  [(state) => state.dialog],
  (dialog) => dialog.text
);

export default dialogSlice.reducer;
