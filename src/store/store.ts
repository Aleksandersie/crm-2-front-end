import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { priceApi } from "../RTK/priceApi";
import orderCategoryReducer from "./slice/orderCategorySlice";
import selectedOrderCategoryReducer from "./slice/selectedOrderCategorySlice.";
import materialSliceReducer from "./slice/materiallSlice";
import selectedMaterialReducer from "./slice/selectedMaterialSlice";
import selectedOrderTypeReducer from "./slice/selectedOrderType";
import { ordersApi } from "../RTK/ordersApi";

const rootReducer = combineReducers({
    selectedOrderTypeReducer,
    orderCategoryReducer,
    selectedOrderCategoryReducer,
    selectedMaterialReducer,
    materialSliceReducer,
    [priceApi.reducerPath]: priceApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
});

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(priceApi.middleware, ordersApi.middleware),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
