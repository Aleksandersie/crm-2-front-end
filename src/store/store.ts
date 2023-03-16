import {combineReducers, configureStore} from "@reduxjs/toolkit";
import priceReducer from  "./slice/priceSlice"
import {priceApi} from "../RTK/priceApi";
import orderCategoryReducer from "./slice/orderCategorySlice"
import selectedOrderCategoryReducer from "./slice/selectedOrderCategorySlice."
import materialSliceReducer from "./slice/materiallSlice"


const rootReducer = combineReducers(
    {
        orderCategoryReducer,
        selectedOrderCategoryReducer,
        materialSliceReducer,
        [priceApi.reducerPath]: priceApi.reducer
    }
)

export const setupStore =()=> configureStore( {
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(priceApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]