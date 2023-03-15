import {categoryName} from "./orderCategorySlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ISelectedOrderCategory{
    name: string|any
}

const initialState:ISelectedOrderCategory={
    name: ""
}


export const selectedOrderCategorySlice = createSlice({
    name:"selectedOrderCategorySlice",
    initialState,
    reducers:{
        getSelectedOrderCategory:(state)=>{
            return state.name
        },
        setSelectedOrderCategory:(state,action:PayloadAction<string>)=>{
            state.name = action.payload
        }

    }

})

export default selectedOrderCategorySlice.reducer