import React from "react";
import styles from "./orderItemStyles.module.scss";

import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";

import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";
import { useGetPriceQuery } from "../../RTK/priceApi";
import { usePriceSelector } from "../usePriceSelector/usePriceSelector";

const OrderItemWindow = () => {
    const price = usePriceSelector();
    return (
        <div className={styles.orderWindowBody}>
            <div className={styles.wrapper}>
                <div className={styles.blockWrapper}>
                    <p>Категория</p>
                    <CategoryDropdownSelector />
                </div>
                <div className={styles.blockWrapper}>
                    <p>Выберите материал</p>
                    <MaterialDropdownSelector />
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                    <div className={styles.name}>Введите размеры</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Стоимость м2</p>
                    <div className={styles.name}>{price}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;
