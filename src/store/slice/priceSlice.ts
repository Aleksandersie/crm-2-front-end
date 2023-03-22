import {createSlice} from "@reduxjs/toolkit";


export interface IPrice{
    vinyl:number,
    vinylPC:number,
    vinylUV:number

}
const initialState:IPrice = {
    vinyl: 0,
    vinylPC: 0,
    vinylUV: 0
}

export const priceSlice = createSlice({
    name:"priceSlice",
    initialState,
    reducers:{

    }

})

export default priceSlice.reducer