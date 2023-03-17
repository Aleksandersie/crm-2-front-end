import {useAppDispatch} from "../../store/reduxHooks/reduxHooks";
import {materialSlice} from "../../store/slice/materiallSlice";
import {digitalPrintMaterials} from "../../store/slice/materialLists/digitalPrintMaterials";




export  const  useMaterialSelector = (category:string) => {
    const dispatch = useAppDispatch()
    console.log("category",category)
        if(category === "Цифровая печать" ) {
           return  console.log("name is")
           dispatch(materialSlice.actions.setMaterialList(digitalPrintMaterials))
        }
}