import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelectedOrderType {
    orderType: string;
}

const initialState: ISelectedOrderType = {
    orderType: "",
};

export const selectedOrderTypeSlice = createSlice({
    name: "selectedOrderTypeSlice",
    initialState,
    reducers: {
        setOrderType: (state, action: PayloadAction<string>) => {
            state.orderType = action.payload;
        },
    },
});

export default selectedOrderTypeSlice.reducer;
