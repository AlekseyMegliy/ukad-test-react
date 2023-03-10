import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { BreedType } from "../../../types";

const API_KEY =
  "live_jqEjeWcvbhhdBxZtu7bOsxtMvUUqyhQzkkddEZtbqsk1FtS9h9CvuBdc1lHddY8T";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<BreedType[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const pageSlice = createSlice({
  name: "pageChanger",
  initialState: { page: 1 },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { useFetchBreedsQuery } = apiSlice;

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
