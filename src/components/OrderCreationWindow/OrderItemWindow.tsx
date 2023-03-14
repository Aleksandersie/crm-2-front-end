import React from 'react';
import styles from "./orderItemStyles.module.scss"
import DropdownSelector from "../DropdownSelector/DropdownSelector";
const OrderItemWindow = () => {
    return (
        <div className={styles.orderWindowBody}>
            <div className={styles.wrapper}>
                <div className={styles.blockWrapper}>
                    <p>Категория</p>
                    <div className={styles.name}>Выберите категорию</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                    <div className={styles.name}>Введите размеры</div>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                    <DropdownSelector />
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;