import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ADDRESS } from "./API_ADDRESS";

interface ICustomerResponse {
    userName: string;
    userRole: string;
    priceCategory: string;
}
interface ICustomerSearchParams {
    userName: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
    endpoints: (builder) => ({
        searchCustomer: builder.query<ICustomerResponse, ICustomerSearchParams>({
            query: (arg) => {
                const { userName } = arg;
                return {
                    url: "/users/searchCustomerByName",
                    params: { userName },
                };
            },
        }),
    }),
});

export const { useSearchCustomerQuery } = userApi;
