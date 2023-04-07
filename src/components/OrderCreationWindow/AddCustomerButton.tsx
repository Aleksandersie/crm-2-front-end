import React, { useState } from "react";
import styles from "./orderWindow.module.scss";
import Modal from "../Modal/Modal";
import SearchCustomerInput from "../SearchCustomerInput/SearchCustomerInput";

const AddCustomerButton: React.FC = () => {
    const [addCustomer, setAddCustomer] = useState(false);

    return (
        <>
            <div className={styles.addBtn} onClick={() => setAddCustomer(true)}>
                Выберите заказчика
            </div>
            <Modal active={addCustomer} setActive={setAddCustomer}>
                <SearchCustomerInput />
            </Modal>
        </>
    );
};

export default AddCustomerButton;
