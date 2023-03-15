import React from 'react';
import styles from "./dropdownStyles.module.scss"

interface IDropdownSelector{
   emptyTitle?: string,
   selectedTitle?:any,
   itemList?:any,
}
const DropdownSelector:React.FC<IDropdownSelector> = ({emptyTitle,selectedTitle}) => {
    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}>{selectedTitle||emptyTitle}</div>
            <div className={styles.selectorBody}>
                <div>{selectedTitle}</div>
                <div>val 2</div>
                <div>val 3</div>
            </div>
        </div>
    );
};

export default DropdownSelector;