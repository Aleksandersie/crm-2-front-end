import React, { useState } from "react";
import styles from "./orderWindow.module.scss";
import AddCustomerButton from "./AddCustomerButton";
import Modal from "../Modal/Modal";
import OrderItemWindow from "../OrderItemCreationWindow/OrderItemWindow";
import OrderItemsList from "../OrderItemsList/OrderItemsList";
import { orderItemsArray } from "../calcCore/calcCore";
import { useCreateOrderMutation } from "../../RTK/ordersApi";
import { useLoginMutation } from "../../RTK/authApi";

const OrderWindow: React.FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [createOrder] = useCreateOrderMutation();
    // const [login] = useLoginMutation();

    function closeModal() {
        setActiveModal(false);
    }

    async function sendOrderToBackEnd() {
        const payload = "123";
        createOrder(orderItemsArray);
        // await login({ userName: "Test", userPass: "1234" });
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
                <button onClick={sendOrderToBackEnd}>Test save</button>
            </div>
            <Modal active={activeModal} setActive={setActiveModal}>
                <OrderItemWindow closeModalWindow={closeModal} />
            </Modal>
        </div>
    );
};

export default OrderWindow;
