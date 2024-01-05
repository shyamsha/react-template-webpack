import axiosBaseQuery from "./axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `/auth/login`,
        method: "POST",
        data: user,
      }),
    }),
    update: builder.mutation({
      query: ({ updateProduct, id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        data: updateProduct,
      }),
    }),
  }),
});

export const { useGetProductQuery, useLoginMutation, useUpdateMutation } =
  apiSlice;
