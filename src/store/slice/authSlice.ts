import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
    currentUserName: any;
    token: any;
}
export interface IData {
    data: IAuth;
}
const initialState = {
    currentUserName: "",
    token: "",
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<any>) => {
            state.token = action.payload.data.token;
            state.currentUserName = action.payload.data.currentUserName;
        },
        getToken: (state): any => {
            return state.token;
        },
    },
});

export const { setToken, getToken } = authSlice.actions;
export default authSlice.reducer;
