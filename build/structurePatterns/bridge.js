"use strict";
// Мост — это структурный паттерн, который разделяет бизнес-логику или большой класс на несколько отдельных иерархий, которые потом можно развивать отдельно ...
class TelegrammProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconect() {
        console.log("Disconnect TG");
    }
}
class WhatsUpProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconect() {
        console.log("Disconnect WU");
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect("connect");
        this.provider.sendMessage("message");
        this.provider.disconect();
    }
}
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelay() {
        this.send();
    }
}
