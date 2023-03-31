import React from 'react';
import styles from "./orderWindow.module.scss"


const AddCustomerButton: React.FC = () => {
    return (
        <>
           <div className={styles.addBtn}>Выберите заказчика</div>
        </>
    );
};

export default AddCustomerButton;