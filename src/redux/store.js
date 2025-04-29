import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlise";

export const store = configureStore({
  reducer: {
    filter,
  },
});
