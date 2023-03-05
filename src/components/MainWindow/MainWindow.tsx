import React from 'react';
import styles from './mainWindowStyles.module.scss'
import MainWindowHeader from "./MainWindowHeader";
const MainWindow = () => {
    return (
        <div className={styles.mainWindowContainer}>
            <div className={styles.mainWindow} >
                <MainWindowHeader/>

            </div>
        </div>

    );
};

export default MainWindow;