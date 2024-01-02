import axiosBaseQuery from "./axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = apiSlice;
