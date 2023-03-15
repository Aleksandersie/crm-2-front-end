import React from 'react';
import styles from "./CategoryDropdownSelector.module.scss"
import {useAppSelector} from "../../store/reduxHooks/reduxHooks";

const CategoryDropdownSelector:React.FC = () => {
    const {name} = useAppSelector(state => state.selectedOrderCategoryReducer)
    const categories = useAppSelector(state => state.orderCategoryReducer)
    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}>{name||"Выберите категорию"}</div>
            <div className={styles.selectorBody}>
                {categories.map(category=>(
                   <div>{category.name}</div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDropdownSelector;