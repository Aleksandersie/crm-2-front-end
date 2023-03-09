import React, {useState} from 'react';
import styles from './mainWindowStyles.module.scss'
import MainWindowHeader from "./MainWindowHeader";
import Modal from "../Modal/Modal";
const MainWindow = () => {


    return (
        <div className={styles.mainWindowContainer}>
            <div className={styles.mainWindow}   >
                <MainWindowHeader/>

            </div>
        </div>

    );
};

export default MainWindow;