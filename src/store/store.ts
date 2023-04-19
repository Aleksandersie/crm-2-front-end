import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { priceApi } from "../RTK/priceApi";
import orderCategoryReducer from "./slice/orderCategorySlice";
import selectedOrderCategoryReducer from "./slice/selectedOrderCategorySlice.";
import materialSliceReducer from "./slice/materiallSlice";
import selectedMaterialReducer from "./slice/selectedMaterialSlice";
import selectedOrderTypeReducer from "./slice/selectedOrderType";
import authSliceReducer from "../store/slice/authSlice";
import { ordersApi } from "../RTK/ordersApi";
import { authApi } from "../RTK/authApi";
import { userApi } from "../RTK/userApi";

const rootReducer = combineReducers({
    selectedOrderTypeReducer,
    orderCategoryReducer,
    selectedOrderCategoryReducer,
    selectedMaterialReducer,
    materialSliceReducer,
    authSliceReducer,
    [priceApi.reducerPath]: priceApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                priceApi.middleware,
                ordersApi.middleware,
                authApi.middleware,
                userApi.middleware
            ),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
