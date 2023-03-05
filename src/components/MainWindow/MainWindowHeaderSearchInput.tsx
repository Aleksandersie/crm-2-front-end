import React from 'react';
import styles from "./mainWindowStyles.module.scss"
const MainWindowHeaderSearchInput = () => {
    return (
        <div>
            <input type="text" className={styles.searchInput}/>
        </div>
    );
};

export default MainWindowHeaderSearchInput;