import React from 'react';
import styles from "./dropdownStyles.module.scss"

interface IDropdownSelector{
   emptyTitle?: string,
   selectedTitle?:any,
   children?:any[]
}
const DropdownSelector:React.FC<IDropdownSelector> = ({emptyTitle,selectedTitle,children}) => {
    console.log(children)

    // @ts-ignore
    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}>{selectedTitle||emptyTitle}</div>
            <div className={styles.selectorBody}>

                {children?.map(el=>(
                    <div>{el.name}</div>
                ))}
            </div>
        </div>
    );
};

export default DropdownSelector;