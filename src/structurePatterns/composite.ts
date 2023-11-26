// Шаблон Composite предполагает, что вы работаете с Productsи Boxesчерез общий интерфейс, в котором объявлен метод расчета общей цены.

// Как будет работать этот метод? Для продукта он просто возвращает цену продукта. Для коробки он просматривает каждый предмет, содержащийся в коробке, спрашивает его цену, а затем возвращает общую сумму для этой коробки. Если бы один из этих предметов представлял собой коробку меньшего размера, эта коробка также начала бы просматривать ее содержимое и так далее, пока не были бы рассчитаны цены всех внутренних компонентов. Коробка может даже добавить к окончательной цене некоторые дополнительные расходы, например, стоимость упаковки.
// Решение, предложенное шаблоном Composite

// Шаблон Composite позволяет рекурсивно запускать поведение для всех компонентов дерева объектов.

// Самым большим преимуществом этого подхода является то, что вам не нужно заботиться о конкретных классах объектов, составляющих дерево. Вам не нужно знать, является ли объект простым продуктом или сложной коробкой. Вы можете обращаться с ними одинаково через общий интерфейс. Когда вы вызываете метод, объекты сами передают запрос вниз по дереву. 






abstract class DeliveryCItem {
    items : DeliveryCItem[] = []
    addItem (item : DeliveryCItem) {
        this.items.push(item)
    }

    abstract getPrice ( ) : number 
     getItemPrices ( )  : number  {
       return this.items.reduce((acc : number, item : DeliveryCItem) =>  acc + item.getPrice(), 0) 
     }

}


export class DeliveryShop extends DeliveryCItem {
    constructor(private deliveryF : number) {
        super()
    }
    getPrice(): number {
       return this.getItemPrices() + this.deliveryF 
    }

}


export class Package extends DeliveryCItem {
    getPrice(): number {
       return this.getItemPrices()
     }
}


export class ProductC extends DeliveryCItem {
    constructor(private price : number) {
        super()
    }
    getPrice(): number {
        return this.price
    }
}


const shop = new DeliveryShop(100);
shop.addItem(new ProductC(10000));
const pack = new Package();
const pack2 = new Package();
pack.addItem(new ProductC(300))
pack2.addItem(new ProductC(1300));
shop.addItem(pack);
shop.addItem(pack2);

shop.getPrice()