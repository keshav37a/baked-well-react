import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./main-slice";

const store = configureStore({
  reducer: {
    mainSlice: mainSlice.reducer,
  },
});

export default store;
