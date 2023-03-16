import React, {useState} from 'react';
import styles from "./CategoryDropdownSelector.module.scss"
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks/reduxHooks";
import {ICategoryItem} from "../../store/slice/orderCategorySlice";
import {selectedOrderCategorySlice} from "../../store/slice/selectedOrderCategorySlice.";

const CategoryDropdownSelector:React.FC = () => {
    
    const dispatch = useAppDispatch()

    const [activeDropdown,setActiveDropdown] = useState<boolean>(false)

    function categoryHandler(category:ICategoryItem){
        setActiveDropdown(false)
        dispatch(selectedOrderCategorySlice.actions.setSelectedOrderCategory(category.name))
    }

    const {name} = useAppSelector(state => state.selectedOrderCategoryReducer)
    const categories = useAppSelector(state => state.orderCategoryReducer)

    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}
            onClick={()=>setActiveDropdown(true)}
            >{name||"Выберите категорию"}</div>
            <div className={activeDropdown? styles.selectorBody:styles.selectorBodyInactive}>
                {categories.map(category=>(
                   <div className={styles.listItem} onClick={()=>categoryHandler(category)}>{category.name}</div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDropdownSelector;