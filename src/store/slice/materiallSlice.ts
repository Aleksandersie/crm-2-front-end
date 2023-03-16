import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IMaterialList{
    id:number,
    name:string
}

// @ts-ignore
const initialState=[]


export const materialSlice = createSlice({
    name:"materialSlice",
    // @ts-ignore
    initialState,
    reducers:{
        setMaterialList:(state, action:PayloadAction<IMaterialList[]>)=>{
           state = action.payload
        },
        getMaterialList:(state)=>{
            return state
        }
    }
})

export default materialSlice.reducer