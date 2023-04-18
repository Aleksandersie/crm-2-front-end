import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ADDRESS } from "./API_ADDRESS";

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
    baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
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
