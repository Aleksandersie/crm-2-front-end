const orderItemsArray: IOrderItem[] = [];

export function addOrderItem(
    orderCategory: string,
    orderMaterial: string,
    width: number,
    height: number,
    pieces: number,
    selectedPrice: number | undefined
) {
    orderItemsArray.push(
        new OrderItem(orderCategory, orderMaterial, width, height, pieces, selectedPrice)
    );
    return orderItemsArray;
}
export interface IOrderItem {
    orderCategory: string;
    orderMaterial: string;
    width: number | undefined;
    height: number | undefined;
    pieces: number | undefined;
    selectedPrice: number | undefined;
    itemSum: number;
}
class OrderItem implements IOrderItem {
    orderCategory: string;
    orderMaterial: string;
    width: number;
    height: number;
    pieces: number;
    selectedPrice: number | undefined;
    itemSum: number;

    constructor(
        orderCategory: string,
        orderMaterial: string,
        width: number,
        height: number,
        pieces: number,
        selectedPrice: number | undefined
        //itemSum: () => number
    ) {
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
