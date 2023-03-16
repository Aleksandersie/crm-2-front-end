import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IMaterialItem{
    id:number,
    name:string
}

// @ts-ignore
const initialState:IMaterialList[]=[]


export const materialSlice = createSlice({
    name:"materialSlice",
    // @ts-ignore
    initialState,
    reducers:{
        setMaterialList:(state, action:PayloadAction<IMaterialItem[]>)=>{
           // @ts-ignore
            //state.push(action.payload)
            return [...action.payload]
        },
        getMaterialList:(state)=>{
            return state
        }
    }
})

export default materialSlice.reducer