import React, {useState} from 'react';
import styles from './mainWindowStyles.module.scss'
import MainWindowHeader from "./MainWindowHeader";
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {clear, counterSlice, custom, plus} from '../../store/slice/counter';
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks/reduxHooks";
import {useGetPriceQuery} from '../../RTK/priceApi';




const MainWindow = () => {
// const count = useSelector((state:RootState)=>state.counterReducer.counter)
// const dispatch:AppDispatch = useDispatch()
//     const count = useAppSelector(state => state.counterReducer.counter)
//     const price = useAppSelector(state => state.priceReducer.vinyl)
//     const dispatch = useAppDispatch()
//     const fn = counterSlice.actions

    const {data} = useGetPriceQuery('')
    console.log(data)
    return (
        <div className={styles.mainWindowContainer}>
            <div className={styles.mainWindow}   >
                <MainWindowHeader/>
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