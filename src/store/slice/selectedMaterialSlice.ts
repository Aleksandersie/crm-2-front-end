import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISelectedMaterial{
    name:string|any,
}

const initialState:ISelectedMaterial={
    name: ""
}


export const selectedMaterialSlice = createSlice({
    name:"selectedMaterialSlice",
    initialState,
    reducers:{
        getSelectedMaterial:(state)=>{
            return state.name
        },
        setSelectedMaterial:(state, action:PayloadAction<string>)=>{
            state.name = action.payload
        }

    }

})

export default selectedMaterialSlice.reducer