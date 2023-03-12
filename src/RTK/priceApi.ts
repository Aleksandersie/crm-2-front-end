import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const priceApi= createApi({
    reducerPath: 'priceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getPrice: builder.query({
            query: () => '/getPriceList',
        }),
    }),
})

export const {useGetPriceQuery} = priceApi