import React, { useEffect, useRef, useState } from "react";
import styles from "./orderItemStyles.module.scss";

import CategoryDropdownSelector from "../CategoryDropdownSelector/CategoryDropdownSelector";

import MaterialDropdownSelector from "../MaterialDropdownSelector/MaterialDropdownSelector";
import { useGetPriceQuery } from "../../RTK/priceApi";
import { usePriceSelector } from "../usePriceSelector/usePriceSelector";
import { addOrderItem, IOrderItem } from "../calcCore/calcCore";
import { useAppSelector } from "../../store/reduxHooks/reduxHooks";
import { useCategorySelector } from "../useCategorySelector/useCategorySelector";
import { preCalculation } from "../preCalculation/preCalculation";

interface IOrderItemWindow{
    closeModalWindow: ()=>void
}

const OrderItemWindow:React.FC<IOrderItemWindow> = ({closeModalWindow}) => {
    const price = usePriceSelector();
    const selectedType = useAppSelector((state) => state.selectedOrderTypeReducer.orderType);
    const selectedCategory = useAppSelector((state) => state.selectedOrderCategoryReducer.name);
    const selectedMaterial = useAppSelector((state) => state.selectedMaterialReducer.name);
    const [width, setWidth] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [pieces, setPieces] = useState<string>("");
    const [preCalculationResult, setPreCalculationResult] = useState<IOrderItem>({
        height: 0,
        itemArea: 0,
        itemOnePscCost: 0,
        itemRandomNumber: 0,
        itemTotalArea: 0,
        itemTotalCost: 0,
        orderCategory: "",
        orderMaterial: "",
        orderType: "",
        pieces: 0,
        selectedPrice: 0,
        width: 0,
    });
    const piecesRef = React.useRef<HTMLInputElement>(null);
    // category selector call need to change material type in material dropdown
    useCategorySelector();

    function createOrderItem() {
        const result = addOrderItem(
            selectedType,
            selectedCategory,
            selectedMaterial,
            Number(width),
            Number(height),
            Number(piecesRef.current?.value),
            price
        );
        console.log(result);
        closeModalWindow() 
    }

    useEffect(() => {
        setPreCalculationResult(
            preCalculation(
                selectedType,
                selectedCategory,
                selectedMaterial,
                Number(width),
                Number(height),
                Number(pieces),
                price
            )
        );
        console.log(preCalculationResult);
    }, [width, height, pieces]);

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
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setWidth(e.currentTarget.value)
                            }
                        />
                        x
                        <input
                            type="number"
                            placeholder={"Ширина"}
                            className={styles.input}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setHeight(e.currentTarget.value)
                            }
                        />
                        x
                        <input
                            type="number"
                            placeholder={"Количество"}
                            className={styles.input}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setPieces(e.currentTarget.value)
                            }
                        />
                    </div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Стоимость</p>
                    <div className={styles.name}>{price}</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Итого</p>
                    <div className={styles.name}>{preCalculationResult.itemTotalCost}</div>
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
