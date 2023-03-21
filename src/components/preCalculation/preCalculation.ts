import { orderType } from "../useCategorySelector/useCategorySelector";
import { OrderItem } from "../calcCore/calcCore";

export function preCalculation(
    orderType: string,
    orderCategory: string,
    orderMaterial: string,
    width: number,
    height: number,
    pieces: number,
    selectedPrice: number | undefined
) {
    return new OrderItem(
        orderType,
        orderCategory,
        orderMaterial,
        width,
        height,
        pieces,
        selectedPrice
    );
}
