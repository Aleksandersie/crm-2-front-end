import React, { useEffect, useState } from "react";
import styles from "./mainWindowStyles.module.scss";
import MainWindowHeader from "./MainWindowHeader";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks/reduxHooks";
import { useGetPriceQuery } from "../../RTK/priceApi";
import { IPrice } from "../../store/slice/priceSlice";
import { selectedOrderCategorySlice } from "../../store/slice/selectedOrderCategorySlice.";
import { useLoginMutation } from "../../RTK/authApi";
import jwt_decode from "jwt-decode";
import { getToken, setToken } from "../../store/slice/authSlice";
const MainWindow = () => {
    // const count = useSelector((state:RootState)=>state.counterReducer.counter)
    // const dispatch:AppDispatch = useDispatch()
    //     const count = useAppSelector(state => state.counterReducer.counter)
    //     const price = useAppSelector(state => state.priceReducer.vinyl)
    const dispatch = useAppDispatch();
    //     const fn = counterSlice.actions
    const category = useAppSelector((state) => state.orderCategoryReducer);
    const { name } = useAppSelector((state) => state.selectedOrderCategoryReducer);
    const get = selectedOrderCategorySlice.actions.setSelectedOrderCategory("asd");
    const { data } = useGetPriceQuery("");
    const [login] = useLoginMutation();
    const { currentUserName } = useAppSelector((state) => state.authSliceReducer);

    function action(el: string) {
        console.log(el);
        dispatch(selectedOrderCategorySlice.actions.setSelectedOrderCategory(el));
    }
    async function loginUser() {
        try {
            const data = await login({ userName: "Test", userPass: "1234" });
            dispatch(setToken(data));
            const storeToken = getToken();

            console.log(data);
            console.log("token", currentUserName);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className={styles.mainWindowContainer}>
            <div className={styles.mainWindow}>
                <MainWindowHeader />
                {category.map((el) => (
                    <button onClick={() => action(el.name)}>{el.name}</button>
                ))}
                {/*<button onClick={action}>action</button>*/}
                {name}
                {/*{count}*/}
                {/*{price}*/}
                {/*<button onClick={()=>dispatch(plus())}>+</button>*/}
                {/*<button onClick={()=>dispatch(custom(100))}>100</button>*/}
                {/*<button onClick={()=>dispatch(fn.clear())}>Clear</button>*/}
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    );
};
export default MainWindow;
