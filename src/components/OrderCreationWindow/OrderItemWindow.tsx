import React, { useRef, useState } from "react";
import styles from "./orderItemStyles.module.scss";

import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";

import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";
import { useGetPriceQuery } from "../../RTK/priceApi";
import { usePriceSelector } from "../usePriceSelector/usePriceSelector";
import { addOrderItem } from "../calcCore/calcCore";
import { useAppSelector } from "../../store/reduxHooks/reduxHooks";
import { useCategorySelector } from "../useCategorySelector/useCategorySelector";

const OrderItemWindow = () => {
    const price = usePriceSelector();
    const selectedType = useAppSelector((state) => state.selectedOrderTypeReducer.orderType);
    const selectedCategory = useAppSelector((state) => state.selectedOrderCategoryReducer.name);
    const selectedMaterial = useAppSelector((state) => state.selectedMaterialReducer.name);
    const widthRef = React.useRef<HTMLInputElement>(null);
    const heightRef = React.useRef<HTMLInputElement>(null);
    const piecesRef = React.useRef<HTMLInputElement>(null);

    const res = useCategorySelector();
    console.log("res", res);

    function createOrderItem() {
        const result = addOrderItem(
            selectedType,
            selectedCategory,
            selectedMaterial,
            Number(widthRef.current?.value),
            Number(heightRef.current?.value),
            Number(piecesRef.current?.value),
            price
        );
        console.log(result);
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
