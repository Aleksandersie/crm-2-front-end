import React from 'react';
import styles from "./orderWindow.module.scss"
import AddCustomerButton from "./AddCustomerButton";
const OrderWindow = () => {
    return (
        <div className={styles.creationOrderWindowBody}>
            <div className={styles.header}>
                <AddCustomerButton/>
            </div>
            <div className={styles.orderItemsBorder}>

            </div>

        </div>
    );
};

export default OrderWindow;