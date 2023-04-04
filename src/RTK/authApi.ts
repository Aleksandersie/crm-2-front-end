import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ILoginRequest {
    userName: string;
    userPass: string;
}
interface IAuthResponse {
    userName: string;
    token: any;
}
//<IAuthResponse, ILoginRequest>
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
            // transformResponse: (response: IAuthResponse) => response.token,
        }),
    }),
});

export const { useLoginMutation } = authApi;
