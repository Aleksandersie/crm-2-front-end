import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPrice {
    vinyl: number;
    vinylPC: number;
    vinylUV: number;
}

export const priceApi = createApi({
    reducerPath: "priceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        getPrice: builder.query<IPrice, string>({
            query: () => "/prices/getPriceList",
        }),
    }),
});

export const { useGetPriceQuery } = priceApi;