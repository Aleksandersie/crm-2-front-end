import React from "react";
import { orderItemsArray } from "../calcCore/calcCore";
import styles from "./orderItemsListStyles.module.scss";
const OrderItemsList = () => {
    return (
        <div>
            {orderItemsArray.map((item) => (
                <div className={styles.itemWrapper}>{item.orderCategory}</div>
            ))}
        </div>
    );
};

export default OrderItemsList;
