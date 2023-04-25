import React, { useState } from "react";
import styles from "./orderWindow.module.scss";
import Modal from "../Modal/Modal";
import SearchCustomerInput from "../SearchCustomerInput/SearchCustomerInput";
import { useAppSelector } from "../../store/reduxHooks/reduxHooks";

const AddCustomerButton: React.FC = () => {
    const [addCustomer, setAddCustomer] = useState(false);
    const { userName } = useAppSelector((state) => state.selectedCustomerSliceReducer);
    return (
        <>
            <div className={styles.addBtn} onClick={() => setAddCustomer(true)}>
                {userName || "Выберите заказчика"}
            </div>
            <Modal active={addCustomer} setActive={setAddCustomer}>
                <SearchCustomerInput setActive={setAddCustomer} />
            </Modal>
        </>
    );
};

export default AddCustomerButton;
