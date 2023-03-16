import React, {useState} from 'react';
import styles from "./materialDropdownSelector.module.scss"
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks/reduxHooks";
import {ICategoryItem} from "../../store/slice/orderCategorySlice";
import {selectedOrderCategorySlice} from "../../store/slice/selectedOrderCategorySlice.";
import {IMaterialItem, materialSlice} from "../../store/slice/materiallSlice";
import {interiorPrintMaterialList} from "../../store/slice/materialLists/interiorPrintMaterialList";
import {digitalPrintMaterials} from "../../store/slice/materialLists/digitalPrintMaterials";
const MaterialDropdownSelector = () => {

    const dispatch = useAppDispatch()

    const [activeDropdown,setActiveDropdown] = useState<boolean>(false)

    function categoryHandler(category:IMaterialItem){
        setActiveDropdown(false)
        //dispatch(selectedOrderCategorySlice.actions.setSelectedOrderCategory(category.name))
    }

    const {name} = useAppSelector(state => state.selectedOrderCategoryReducer)
    const materials = useAppSelector(state => state.materialSliceReducer)

    function inter(){
        dispatch(materialSlice.actions.setMaterialList(interiorPrintMaterialList))
    }

    function digital(){
        dispatch(materialSlice.actions.setMaterialList(digitalPrintMaterials))
    }
    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}
                 onClick={()=>setActiveDropdown(true)}
            >{name||"Выберите категорию"}</div>
            <button onClick={inter}>interior</button>
            <button onClick={digital}>digital</button>
            <div className={activeDropdown? styles.selectorBody:styles.selectorBodyInactive}>
                {materials.map(material=>(
                    <div className={styles.listItem} onClick={()=>categoryHandler(material)}>{material.name}</div>
                ))}
            </div>
        </div>
    );
};

export default MaterialDropdownSelector;