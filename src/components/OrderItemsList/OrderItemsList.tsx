import React from "react";
import { orderItemsArray } from "../calcCore/calcCore";
import styles from "./orderItemsListStyles.module.scss";
const OrderItemsList = () => {
    return (
        <div>
            {orderItemsArray.map((item) => (
                <div key={item.itemRandomNumber} className={styles.itemWrapper}>
                    <div className={styles.itemElement}>{item.orderCategory}</div>
                    <div className={styles.itemElement}>{item.orderMaterial}</div>
                    <div className={styles.itemElement}>{item.width}x{item.height}</div>
                    <div className={styles.itemElement}>{item.pieces} шт</div>
                    <div className={styles.itemElement}>{item.itemOnePscCost} руб</div>
                    <div className={styles.itemElement}>{item.itemTotalCost} руб</div>
                    </div>
            ))}
        </div>
    );
};

export default OrderItemsList;
