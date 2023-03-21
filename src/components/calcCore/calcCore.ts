import { orderType } from "../useCategorySelector/useCategorySelector";

const orderItemsArray: IOrderItem[] = [];

export function addOrderItem(
    orderType: string,
    orderCategory: string,
    orderMaterial: string,
    width: number,
    height: number,
    pieces: number,
    selectedPrice: number | undefined
) {
    orderItemsArray.push(
        new OrderItem(orderType, orderCategory, orderMaterial, width, height, pieces, selectedPrice)
    );
    return orderItemsArray;
}
export interface IOrderItem {
    itemRandomNumber: number;
    orderType: string;
    orderCategory: string;
    orderMaterial: string;
    width: number | undefined;
    height: number | undefined;
    pieces: number | undefined;
    selectedPrice: number | undefined;
    itemArea: number;
    itemTotalArea: number;
    itemOnePscCost: number;
    itemTotalCost: number;
}
export class OrderItem implements IOrderItem {
    itemRandomNumber: number;
    orderType: string;
    orderCategory: string;
    orderMaterial: string;
    width: number;
    height: number;
    pieces: number;
    selectedPrice: number | undefined;
    itemArea: number;
    itemTotalArea: number;
    itemOnePscCost: number;
    itemTotalCost: number;

    constructor(
        orderType: string,
        orderCategory: string,
        orderMaterial: string,
        width: number,
        height: number,
        pieces: number,
        selectedPrice: number | undefined
    ) {
        this.itemRandomNumber = parseInt((Math.random() * 10000).toFixed());
        this.orderType = orderType;
        this.orderCategory = orderCategory;
        this.orderMaterial = orderMaterial;
        this.width = Number(width);
        this.height = Number(height);
        this.pieces = Number(pieces);
        this.selectedPrice = selectedPrice;
        this.itemArea = this.itemAreaCalculation();
        this.itemTotalArea = this.totalAreaCalculator();
        this.itemOnePscCost = this.itemCostCalculator();
        this.itemTotalCost = this.itemTotalCostCalculator();
    }
    itemAreaCalculation(): number {
        return Number((this.width * this.height).toFixed(3));
    }
    totalAreaCalculator(): number {
        return this.itemArea * this.pieces;
    }
    itemCostCalculator(): number {
        switch (this.orderType) {
            case orderType.interiorPrint:
                return this.interiorItemCalculator();
            case orderType.digitalPrint:
                return this.digitalItemCalculator();
            default:
                return 666;
        }
    }
    interiorItemCalculator(): number {
        // @ts-ignore
        return this.itemArea * this.selectedPrice;
    }
    digitalItemCalculator(): number {
        return 444;
    }
    itemTotalCostCalculator(): number {
        return this.itemOnePscCost * this.pieces;
    }
}
