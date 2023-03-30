import React from "react";
import { orderItemsArray } from "../calcCore/calcCore";
import styles from "./orderItemsListStyles.module.scss";
const OrderItemsList = () => {
    return (
        <div>
            <div className={styles.itemPlaceholder}>
                <div className={styles.categoryPlaceholder}>категория</div>
                <div className={styles.materialPlaceholder}>материал</div>
                <div className={styles.itemElement}>размеры</div>
                <div className={styles.itemElement}>кол-во</div>
                <div className={styles.itemElement}>цена за шт</div>
                <div className={styles.itemElement}>итого</div>
            </div>
            {orderItemsArray.map((item) => (
                <div key={item.itemRandomNumber} className={styles.itemWrapper}>
                    <div className={styles.categoryElement}>{item.orderCategory}</div>
                    <div className={styles.materialElement}>{item.orderMaterial}</div>
                    <div className={styles.itemElement}>
                        {item.width}x{item.height} м.
                    </div>
                    <div className={styles.itemElement}>{item.pieces} шт</div>
                    <div className={styles.itemElement}>{item.itemOnePscCost} руб</div>
                    <div className={styles.itemElement}>{item.itemTotalCost} руб</div>
                </div>
            ))}
        </div>
    );
};

export default OrderItemsList;
