import React, {useState} from 'react';
import styles from "./mainWindowStyles.module.scss"
import Modal from "../Modal/Modal";
import CreationOrderWindow from "../CreationOrderWindow/CreationOrderWindow";
import LoginWindow from "../LoginWindow/LoginWindow";
const MainWindowHeaderCreateOrderButton = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <button className={styles.createOrderButton} onClick={()=>setModalActive(true)}>Создать заказ</button>
            <Modal active={modalActive} setActive={setModalActive} >
               <LoginWindow/>
            </Modal>
        </>

    );
};

export default MainWindowHeaderCreateOrderButton;