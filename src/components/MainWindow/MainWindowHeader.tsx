import React from 'react';
import styles from "./mainWindowStyles.module.scss";
import MainWindowHeaderSearchInput from "./MainWindowHeaderSearchInput";
import MainWindowHeaderCreateOrderButton from "./MainWindowHeaderCreateOrderButton";

const MainWindowHeader = () => {
    return (
        <div>
            <div className={styles.mainWindowHeader}>
                <div className={styles.searchWrapper}>
                    <MainWindowHeaderSearchInput/>
                     <MainWindowHeaderCreateOrderButton/>
                </div>
            </div>
        </div>
    );
};

export default MainWindowHeader;