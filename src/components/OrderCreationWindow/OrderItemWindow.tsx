import React from 'react';
import styles from "./orderItemStyles.module.scss"
import Modal from "../Modal/Modal";
import Selector from "../Selector/Selector";
const OrderItemWindow = () => {
    const [categoryActive, setCategoryActive] = React.useState<boolean>(false)

    return (
        <div className={styles.orderWindowBody}>
            <div className={styles.wrapper}>
                <div className={styles.blockWrapper}>
                    <p>Категория</p>
                    <div className={styles.name} onClick={()=>setCategoryActive(true)}>Выберите категорию</div>
                    <Modal active={categoryActive} setActive={setCategoryActive} children={123}/>
                </div>
                <div className={styles.blockWrapper}>
                    <p>Введите размеры</p>
                   <Selector/>
                </div>
            </div>
        </div>
    );
};

export default OrderItemWindow;