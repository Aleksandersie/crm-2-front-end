import React, { useState } from "react";
import styles from "./orderWindow.module.scss";
import AddCustomerButton from "./AddCustomerButton";
import Modal from "../Modal/Modal";
import OrderItemWindow from "../OrderCreationWindow/OrderItemWindow";
import OrderItemsList from "../OrderItemsList/OrderItemsList";

const OrderWindow: React.FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    function closeModal(){
        setActiveModal(false)
    }
    return (
        <div className={styles.creationOrderWindowBody}>
            <div className={styles.header}>
                <AddCustomerButton />
            </div>
            <div className={styles.orderItemsBorder}>
                <OrderItemsList />
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.addOrderStringBtn} onClick={() => setActiveModal(true)}>
                    Добавить
                </div>
                <textarea className={styles.textArea}></textarea>
            </div>
            <Modal active={activeModal} setActive={setActiveModal}>
                <OrderItemWindow closeModalWindow={closeModal} />
            </Modal>
        </div>
    );
};

export default OrderWindow;