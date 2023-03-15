import React from 'react';
import styles from "./orderItemStyles.module.scss"
import DropdownSelector from "../DropdownSelector/DropdownSelector";
import {useAppSelector} from "../../store/reduxHooks/reduxHooks";
import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";
const OrderItemWindow = () => {
    const {name} = useAppSelector(state => state.selectedOrderCategoryReducer)
    const category = useAppSelector(state => state.orderCategoryReducer)
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
                    <DropdownSelector emptyTitle={"Выберите категорию"} selectedTitle={name} >{category}</DropdownSelector>
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;