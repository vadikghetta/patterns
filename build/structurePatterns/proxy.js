"use strict";
// Шаблон «Прокси» предполагает создание нового прокси-класса с тем же интерфейсом, что и исходный объект службы. Затем вы обновляете свое приложение, чтобы оно передавало прокси-объект всем клиентам исходного объекта. Получив запрос от клиента, прокси создает реальный сервисный объект и делегирует ему всю работу.
// Решение с использованием шаблона Proxy
class PaymentApi {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaymentDetails(id) {
        return this.data.find(d => d.id === id);
    }
}
class PaymentAccesProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetails(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log("Попытка получения данных платежа");
        return undefined;
    }
}
const proxy = new PaymentAccesProxy(new PaymentApi(), 1);
