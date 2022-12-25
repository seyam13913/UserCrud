import { configureStore } from "@reduxjs/toolkit";
import { userCreateApi } from "./createUserApi";

export const store = configureStore({
  reducer: {
    [userCreateApi.reducerPath]: userCreateApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userCreateApi.middleware),
});
