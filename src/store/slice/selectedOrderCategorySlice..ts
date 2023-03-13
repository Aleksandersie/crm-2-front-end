import {categoryName} from "./orderCategorySlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ISelectedOrderCategory{
    name: string|categoryName
}

const initialState:ISelectedOrderCategory={
    name: "test"
}


export const selectedOrderCategorySlice = createSlice({
    name:"selectedOrderCategorySlice",
    initialState,
    reducers:{
        // @ts-ignore
        getSelectedOrderCategory:(state)=>{
            return state.name
        },
        setSelectedOrderCategory:(state,action:PayloadAction<categoryName>)=>{
            state.name = action.payload
        }

    }

})

export default selectedOrderCategorySlice.reducer