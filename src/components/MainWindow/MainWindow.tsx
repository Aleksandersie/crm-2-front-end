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
import { useGetAllOrdersQuery } from "../../RTK/ordersApi";

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
    const test = useGetAllOrdersQuery("");
    console.log(test);

    function action(el: string) {
        console.log(el);
        dispatch(selectedOrderCategorySlice.actions.setSelectedOrderCategory(el));
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
            </div>
        </div>
    );
};
export default MainWindow;
