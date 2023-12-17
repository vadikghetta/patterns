"use strict";
// Шаблон Composite предполагает, что вы работаете с Productsи Boxesчерез общий интерфейс, в котором объявлен метод расчета общей цены.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductC = exports.Package = exports.DeliveryShop = void 0;
// Как будет работать этот метод? Для продукта он просто возвращает цену продукта. Для коробки он просматривает каждый предмет, содержащийся в коробке, спрашивает его цену, а затем возвращает общую сумму для этой коробки. Если бы один из этих предметов представлял собой коробку меньшего размера, эта коробка также начала бы просматривать ее содержимое и так далее, пока не были бы рассчитаны цены всех внутренних компонентов. Коробка может даже добавить к окончательной цене некоторые дополнительные расходы, например, стоимость упаковки.
// Решение, предложенное шаблоном Composite
// Шаблон Composite позволяет рекурсивно запускать поведение для всех компонентов дерева объектов.
// Самым большим преимуществом этого подхода является то, что вам не нужно заботиться о конкретных классах объектов, составляющих дерево. Вам не нужно знать, является ли объект простым продуктом или сложной коробкой. Вы можете обращаться с ними одинаково через общий интерфейс. Когда вы вызываете метод, объекты сами передают запрос вниз по дереву. 
class DeliveryCItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrices() {
        return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
    }
}
class DeliveryShop extends DeliveryCItem {
    constructor(deliveryF) {
        super();
        this.deliveryF = deliveryF;
    }
    getPrice() {
        return this.getItemPrices() + this.deliveryF;
    }
}
exports.DeliveryShop = DeliveryShop;
class Package extends DeliveryCItem {
    getPrice() {
        return this.getItemPrices();
    }
}
exports.Package = Package;
class ProductC extends DeliveryCItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.ProductC = ProductC;
const shop = new DeliveryShop(100);
shop.addItem(new ProductC(10000));
const pack = new Package();
const pack2 = new Package();
pack.addItem(new ProductC(300));
pack2.addItem(new ProductC(1300));
shop.addItem(pack);
shop.addItem(pack2);
shop.getPrice();
