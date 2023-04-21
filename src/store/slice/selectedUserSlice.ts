import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISelectedUser {
    userName: string | undefined;
    priceCategory: string | undefined;
}

const initialState: ISelectedUser = {
    userName: "",
    priceCategory: "",
};

export const selectedUserSlice = createSlice({
    name: "selectedUserSlice",
    initialState,
    reducers: {
        setSelectedUser: (state, action: PayloadAction<any>) => {
            console.log("payload", action.payload);
            //const { userName, priceCategory } = action.payload;
            state.userName = action.payload.userName;
            //state.priceCategory = priceCategory;
            // state.userName = action.payload?.userName;
            // state.priceCategory = action.payload?.priceCategory;
        },
    },
});

export default selectedUserSlice.reducer;
