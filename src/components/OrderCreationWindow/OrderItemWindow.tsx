import React, { useRef, useState } from "react";
import styles from "./orderItemStyles.module.scss";

import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";

import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";
import { useGetPriceQuery } from "../../RTK/priceApi";
import { usePriceSelector } from "../usePriceSelector/usePriceSelector";
import { addOrderItem } from "../calcCore/calcCore";
import { useAppSelector } from "../../store/reduxHooks/reduxHooks";

const OrderItemWindow = () => {
    const price = usePriceSelector();
    const selectedCategory = useAppSelector((state) => state.selectedOrderCategoryReducer.name);
    const selectedMaterial = useAppSelector((state) => state.selectedMaterialReducer.name);
    const widthRef = useRef(null);
    const heightRef = useRef(null);
    const piecesRef = useRef(null);

    function createOrderItem() {
        addOrderItem(
            selectedCategory,
            selectedMaterial,
            widthRef.current,
            heightRef.current,
            piecesRef.current,
            price
        );
    }
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
                    <div className={styles.name}>
                        <input
                            type="number"
                            placeholder={"Длинна"}
                            className={styles.input}
                            ref={widthRef}
                        />
                        <input
                            type="number"
                            placeholder={"Ширина"}
                            className={styles.input}
                            ref={heightRef}
                        />
                        <input
                            type="number"
                            placeholder={"Количество"}
                            className={styles.input}
                            ref={piecesRef}
                        />
                    </div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Цена за м2</p>
                    <div className={styles.name}>{price}</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Итого</p>
                    <div className={styles.name}>{price}</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Итого</p>
                    <button onClick={createOrderItem}>Go</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;
