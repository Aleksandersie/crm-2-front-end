import React from 'react';
import styles from "./dropdownStyles.module.scss"
const DropdownSelector = () => {
    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}>123</div>
            <div className={styles.selectorBody}>
                <div>val 1</div>
                <div>val 2</div>
                <div>val 3</div>
            </div>
        </div>
    );
};

export default DropdownSelector;