import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import { BreedType } from "../../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<BreedType[], number | void>({
        query(page = 0) {
          return `/breeds?limit=10&page=${page}`;
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
