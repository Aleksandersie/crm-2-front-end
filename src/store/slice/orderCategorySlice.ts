import {createSlice} from "@reduxjs/toolkit";

enum categoryName {
   vinyl = "Интерьерная печать",
   vinylPC =  "Печать с резкой"
}

export interface ICategoryItem{
    id:number,
    name: categoryName
}

const categoryList:ICategoryItem[] = [
    {
        id:1,
        name: categoryName.vinyl
    },
    {
        id:2,
        name:categoryName.vinylPC
    }
]

const initialState:ICategoryItem[] = [...categoryList]

export const orderCategorySlice = createSlice( {
    name: "orderCategorySlice",
    initialState,
    reducers:{
        getCategory:()=>{
            return initialState
        }
    }
})

export default orderCategorySlice.reducer