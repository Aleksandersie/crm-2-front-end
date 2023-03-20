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
    orderType: string;
    orderCategory: string;
    orderMaterial: string;
    width: number | undefined;
    height: number | undefined;
    pieces: number | undefined;
    selectedPrice: number | undefined;
    itemSum: number;
}
class OrderItem implements IOrderItem {
    orderType: string;
    orderCategory: string;
    orderMaterial: string;
    width: number;
    height: number;
    pieces: number;
    selectedPrice: number | undefined;
    itemSum: number;

    constructor(
        orderType: string,
        orderCategory: string,
        orderMaterial: string,
        width: number,
        height: number,
        pieces: number,
        selectedPrice: number | undefined
        //itemSum: () => number
    ) {
        this.orderType = orderType;
        this.orderCategory = orderCategory;
        this.orderMaterial = orderMaterial;
        this.width = Number(width);
        this.height = Number(height);
        this.pieces = Number(pieces);
        this.selectedPrice = selectedPrice;
        this.itemSum = this.sumCalculation();
    }
    sumCalculation() {
        return this.width * this.height * this.pieces;
    }
}
