import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ADDRESS } from "./API_ADDRESS";

export interface ICustomerResponse {
    userName: string;
    userRole: string;
    priceCategory: string;
}
interface ICustomerSearchParams {
    customerName: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_ADDRESS }),
    endpoints: (builder) => ({
        searchCustomer: builder.query<ICustomerResponse[], ICustomerSearchParams>({
            query: (arg) => {
                const { customerName } = arg;
                return {
                    url: "/users/searchCustomerByName",
                    params: { customerName },
                };
            },
        }),
    }),
});

export const { useSearchCustomerQuery } = userApi;
