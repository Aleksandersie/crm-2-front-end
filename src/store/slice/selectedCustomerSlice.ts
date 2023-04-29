import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelectedCustomer {
    customerName: string | undefined;
    priceCategory: string | undefined;
}

const initialState: ISelectedCustomer = {
    customerName: "",
    priceCategory: "",
};

export const selectedCustomerSlice = createSlice({
    name: "selectedCustomerSlice",
    initialState,
    reducers: {
        setSelectedCustomer: (state, action: PayloadAction<any>) => {
            //const { userName, priceCategory } = action.payload;
            state.customerName = action.payload.userName;
            state.priceCategory = action.payload.priceCategory;
            // state.userName = action.payload?.userName;
            // state.priceCategory = action.payload?.priceCategory;
        },
    },
});

export default selectedCustomerSlice.reducer;
