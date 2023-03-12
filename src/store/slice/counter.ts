import {createSlice} from "@reduxjs/toolkit";

export interface ICounterState{
    counter:number
}
const initState:ICounterState={
    counter: 5
}
export const counterSlice = createSlice(
    {
        name: "counter",
        initialState:initState,
        reducers:{
            plus:(state)=>{
                state.counter += 1
            },
            minus:(state)=>{
                state.counter -= 1
            },
            custom:(state,action)=>{
              state.counter += action.payload
            },
            clear:(state)=>{
                state.counter = 0
            }
        }
    }
)

export const  {plus,minus,custom,clear} = counterSlice.actions
export default counterSlice.reducer