import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "auth/login",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
