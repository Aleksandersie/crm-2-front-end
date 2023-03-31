import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IOrder {
    id: number;
    randomNumber: number;
    orderOwner: string;
    orderAuthor: string;
    orderTotalCost: number;
    orderMessage: string;
    orderTitle: string;
    orderStatus: string;
}

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes: ["orders"],
    endpoints: (builder) => ({
        getAllOrders: builder.query<IOrder, string>({
            query: () => "orders/getAllOrders",
        }),
        createOrder: builder.mutation({
            query: (payload) => ({
                url: "orders/createOrder",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["orders"],
        }),
    }),
});
export const { useGetAllOrdersQuery, useCreateOrderMutation } = ordersApi;
