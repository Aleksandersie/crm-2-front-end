import React, { useState } from "react";
import styles from "./mainWindowStyles.module.scss";
import Modal from "../Modal/Modal";
import LoginWindow from "../LoginWindow/LoginWindow";
import OrderWindow from "../OrderCreationWindow/OrderWindow";
const MainWindowHeaderCreateOrderButton = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <button className={styles.createOrderButton} onClick={() => setModalActive(true)}>
                Создать заказ
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <OrderWindow />
            </Modal>
        </>
    );
};

export default MainWindowHeaderCreateOrderButton;
