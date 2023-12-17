interface IPaymentApiProxy {
    getPaymentDetails(id: number): IPaymentProxyDetail | undefined;
}
interface IPaymentProxyDetail {
    id: number;
    sum: number;
}
declare class PaymentApi implements IPaymentApiProxy {
    private data;
    getPaymentDetails(id: number): IPaymentProxyDetail | undefined;
}
declare class PaymentAccesProxy implements IPaymentApiProxy {
    private api;
    private userId;
    constructor(api: PaymentApi, userId: number);
    getPaymentDetails(id: number): IPaymentProxyDetail | undefined;
}
declare const proxy: PaymentAccesProxy;
