import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counter"
import priceReducer from  "./slice/priceSlice"
import {priceApi} from "../RTK/priceApi";
import orderCategoryReducer from "./slice/orderCategorySlice"


const rootReducer = combineReducers(
    {
        counterReducer,
        priceReducer,
        orderCategoryReducer,
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