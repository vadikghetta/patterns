
// Мост — это структурный паттерн, который разделяет бизнес-логику или большой класс на несколько отдельных иерархий, которые потом можно развивать отдельно ...

interface IProviderBridge {
    sendMessage (message : string) : void
    connect(config: unknown) : void
    disconect() : void
}


class TelegrammProvider implements IProviderBridge {
    sendMessage(message: string): void {
        console.log(message)
    }
    connect<T>(config: T): void {
        console.log(config)
    }
    disconect(): void {
      console.log("Disconnect TG")
    }

}
class WhatsUpProvider implements IProviderBridge {
    sendMessage(message: string): void {
        console.log(message)
    }
    connect<T>(config: T): void {
        console.log(config)
    }
    disconect(): void {
      console.log("Disconnect WU")
    }
}

class NotificationSender {
    constructor (private provider : IProviderBridge) {

    }
    send () {
        this.provider.connect("connect")
        this.provider.sendMessage("message")
        this.provider.disconect()
    }
}


class DelayNotificationSender extends NotificationSender {
    constructor ( provider : IProviderBridge) {
        super(provider)
    }
    sendDelay() {
        this.send()
    }
}









