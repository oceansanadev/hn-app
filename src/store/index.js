import { configureStore } from "@reduxjs/toolkit";
import {
  themeReducer,
  dialogReducer,
  snackbarReducer,
  storyUIReducer,
  drawerReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    dialog: dialogReducer,
    snackbar: snackbarReducer,
    storyUI: storyUIReducer,
    drawer: drawerReducer,
  },
});
