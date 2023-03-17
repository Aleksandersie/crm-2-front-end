import React, { useEffect, useState } from "react";
import styles from "./CategoryDropdownSelector.module.scss";
import {
    useAppDispatch,
    useAppSelector,
} from "../../store/reduxHooks/reduxHooks";
import { ICategoryItem } from "../../store/slice/orderCategorySlice";
import { selectedOrderCategorySlice } from "../../store/slice/selectedOrderCategorySlice.";
import { materialSlice } from "../../store/slice/materiallSlice";
import { digitalPrintMaterials } from "../../store/slice/materialLists/digitalPrintMaterials";
import { interiorPrintMaterialList } from "../../store/slice/materialLists/interiorPrintMaterialList";
import { selectedMaterialSlice } from "../../store/slice/selectedMaterialSlice";

const CategoryDropdownSelector: React.FC = () => {
    const dispatch = useAppDispatch();

    const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

    function categoryHandler(category: ICategoryItem) {
        setActiveDropdown(false);
        dispatch(
            selectedOrderCategorySlice.actions.setSelectedOrderCategory(
                category.name
            )
        );
    }

    const { name } = useAppSelector(
        (state) => state.selectedOrderCategoryReducer
    );
    const categories = useAppSelector((state) => state.orderCategoryReducer);

    useEffect(() => {
        console.log("category is", name);
        if (name === "Цифровая печать") {
            console.log("digital");
            dispatch(selectedMaterialSlice.actions.setSelectedMaterial(""));
            dispatch(
                materialSlice.actions.setMaterialList(digitalPrintMaterials)
            );
        }
        if (name === "Печать с резкой") {
            console.log("intPrint");
            dispatch(selectedMaterialSlice.actions.setSelectedMaterial(""));
            dispatch(
                materialSlice.actions.setMaterialList(interiorPrintMaterialList)
            );
        }
    }, [categoryHandler]);

    return (
        <div className={styles.selector}>
            <div
                className={styles.selectorHeader}
                onClick={() => setActiveDropdown(true)}
            >
                {name || "Выберите категорию"}
            </div>
            <div
                className={
                    activeDropdown
                        ? styles.selectorBody
                        : styles.selectorBodyInactive
                }
            >
                {categories.map((category) => (
                    <div
                        className={styles.listItem}
                        onClick={() => categoryHandler(category)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDropdownSelector;
