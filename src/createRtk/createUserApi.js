import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userCreateApi = createApi({
  reducerPath: "jobit",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63a67aaaf8f3f6d4ab0ca1f2.mockapi.io/",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUserApi: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserApiQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userCreateApi;
