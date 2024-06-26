import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000",
    baseUrl: "https://auth-backend-ebon.vercel.app",
    // credentials: "include",
  }),
  endpoints: () => ({}),
});
