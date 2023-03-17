import React, {useEffect} from 'react';
import styles from "./orderItemStyles.module.scss"

import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";

import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";

const OrderItemWindow = () => {


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