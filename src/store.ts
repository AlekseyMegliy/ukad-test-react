import { configureStore } from "@reduxjs/toolkit";
import chengePage from "./components/ui/redux-paginstion-slice/fetch-slice";
import { apiSlice } from "./components/ui/redux-paginstion-slice/fetch-slice";

export const store = configureStore({
  reducer: { page: chengePage, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
