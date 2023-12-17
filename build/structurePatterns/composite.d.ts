declare abstract class DeliveryCItem {
    items: DeliveryCItem[];
    addItem(item: DeliveryCItem): void;
    abstract getPrice(): number;
    getItemPrices(): number;
}
export declare class DeliveryShop extends DeliveryCItem {
    private deliveryF;
    constructor(deliveryF: number);
    getPrice(): number;
}
export declare class Package extends DeliveryCItem {
    getPrice(): number;
}
export declare class ProductC extends DeliveryCItem {
    private price;
    constructor(price: number);
    getPrice(): number;
}
export {};
