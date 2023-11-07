interface IProviderBridge {
    sendMessage(message: string): void;
    connect(config: unknown): void;
    disconect(): void;
}
declare class TelegrammProvider implements IProviderBridge {
    sendMessage(message: string): void;
    connect<T>(config: T): void;
    disconect(): void;
}
declare class WhatsUpProvider implements IProviderBridge {
    sendMessage(message: string): void;
    connect<T>(config: T): void;
    disconect(): void;
}
declare class NotificationSender {
    private provider;
    constructor(provider: IProviderBridge);
    send(): void;
}
declare class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProviderBridge);
    sendDelay(): void;
}
