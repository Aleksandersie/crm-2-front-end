import {createSlice} from "@reduxjs/toolkit";

export enum categoryName {
   vinyl = "Интерьерная печать",
   vinylPC =  "Печать с резкой",
   vinylUV = "УФ печать",
   digitalPrint = "Цифровая печать"
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
    },
    {
        id:3,
        name:categoryName.vinylUV
    },
    {
        id:4,
        name:categoryName.digitalPrint
    }
]

const initialState:ICategoryItem[] = [...categoryList]

export const orderCategorySlice = createSlice( {
    name: "orderCategorySlice",
    initialState,
    reducers:{
        getCategory:()=>{
            return initialState
        },
    }
})

export default orderCategorySlice.reducer