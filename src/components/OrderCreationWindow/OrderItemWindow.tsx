import React, {useEffect} from 'react';
import styles from "./orderItemStyles.module.scss"
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks/reduxHooks";
import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";
import {materialSlice} from "../../store/slice/materiallSlice";
import {interiorPrintMaterialList} from "../../store/slice/materialLists/interiorPrintMaterialList";
import {digitalPrintMaterials} from "../../store/slice/materialLists/digitalPrintMaterials";
import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";

const OrderItemWindow = () => {
    const {name} = useAppSelector(state => state.selectedOrderCategoryReducer)
    const category = useAppSelector(state => state.orderCategoryReducer)

    const dispatch = useAppDispatch()
    //const setList = materialSlice.actions.setMaterialList()
    const getList = useAppSelector(state => state.materialSliceReducer)

    useEffect(()=>{
        dispatch(materialSlice.actions.setMaterialList(interiorPrintMaterialList))
        console.log("list",getList)
    },[])
    useEffect(()=>{
        dispatch(materialSlice.actions.setMaterialList(digitalPrintMaterials))
        console.log("list",getList)
    },[])

    return (
        <div className={styles.orderWindowBody}>
            <div className={styles.wrapper}>
                <div className={styles.blockWrapper}>
                    <p>Категория</p>
                    <CategoryDropdownSelector/>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                    <div className={styles.name}>Введите размеры</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                    <MaterialDropdownSelector/>
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;