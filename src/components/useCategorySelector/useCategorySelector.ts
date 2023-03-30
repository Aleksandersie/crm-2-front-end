import { useAppDispatch, useAppSelector } from "../../store/reduxHooks/reduxHooks";
import { materialSlice } from "../../store/slice/materiallSlice";
import { digitalPrintMaterials } from "../../store/slice/materialLists/digitalPrintMaterials";
import { interiorPrintMaterialList } from "../../store/slice/materialLists/interiorPrintMaterialList";
import { useEffect } from "react";
import { selectedMaterialSlice } from "../../store/slice/selectedMaterialSlice";
import { selectedOrderTypeSlice } from "../../store/slice/selectedOrderType";

export enum orderType {
    interiorPrint = "interiorPrint",
    digitalPrint = "digitalPrint",
}
export const useCategorySelector = () => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector((state) => state.selectedOrderCategoryReducer);

    const intPrintConstArray = ["Печать с резкой", "УФ печать", "Интерьерная печать"];
    const digitalPrintArray = ["Цифровая печать"];

    useEffect(() => {
        console.log("effect");
        if (digitalPrintArray.includes(name)) {
            console.log("Values from digitalPrintArray");
            dispatch(selectedMaterialSlice.actions.setSelectedMaterial(""));
            dispatch(materialSlice.actions.setMaterialList(digitalPrintMaterials));
            //adding order type
            dispatch(selectedOrderTypeSlice.actions.setOrderType(orderType.digitalPrint));
        } else if (intPrintConstArray.includes(name)) {
            console.log("Values from intPrintArray");
            dispatch(selectedMaterialSlice.actions.setSelectedMaterial(""));
            dispatch(materialSlice.actions.setMaterialList(interiorPrintMaterialList));
            //adding order type
            dispatch(selectedOrderTypeSlice.actions.setOrderType(orderType.interiorPrint));
        }
    }, [name]);
};