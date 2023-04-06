import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ILoginRequest {
    userName: string;
    userPass: string;
}
interface IAuthResponse {
    currentUserName: string;
    token: any;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        login: builder.mutation<IAuthResponse, ILoginRequest>({
            query: (payload) => ({
                url: "auth/login",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
