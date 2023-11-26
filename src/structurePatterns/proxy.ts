// Шаблон «Прокси» предполагает создание нового прокси-класса с тем же интерфейсом, что и исходный объект службы. Затем вы обновляете свое приложение, чтобы оно передавало прокси-объект всем клиентам исходного объекта. Получив запрос от клиента, прокси создает реальный сервисный объект и делегирует ему всю работу.
// Решение с использованием шаблона Proxy

// Прокси маскируется под объект базы данных. Он может обрабатывать отложенную инициализацию и кэширование результатов без ведома клиента или реального объекта базы данных.

// Но в чем выгода? Если вам нужно выполнить что-то до или после основной логики класса, прокси позволит вам сделать это без изменения этого класса. Поскольку прокси реализует тот же интерфейс, что и исходный класс, его можно передать любому клиенту, который ожидает реальный объект службы. 



interface IPaymentApiProxy {
    getPaymentDetails (id: number) : IPaymentProxyDetail | undefined
}

interface IPaymentProxyDetail {
    id: number
    sum : number
}


class PaymentApi implements IPaymentApiProxy {
    private data = [{id : 1, sum : 10000}]
    getPaymentDetails(id: number): IPaymentProxyDetail | undefined {
      return this.data.find(d => d.id === id)
    }
}

class PaymentAccesProxy implements IPaymentApiProxy {
    constructor(private api : PaymentApi, private userId : number) {

    }
    getPaymentDetails(id: number): IPaymentProxyDetail | undefined {
        if(this.userId === 1) {
            return this.api.getPaymentDetails(id)
        }
        console.log("Попытка получения данных платежа")
        return undefined;
    }
}


const proxy = new PaymentAccesProxy(new PaymentApi(), 1)