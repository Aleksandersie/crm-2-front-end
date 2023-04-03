import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
    currentUserName: string | null;
    token: string | null;
}

const initialState: IAuth = {
    currentUserName: "",
    token: "",
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export default authSlice.reducer;
