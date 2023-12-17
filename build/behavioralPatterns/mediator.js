"use strict";
// Медиатор выступает в качестве посредника в общении между различными модулями, инкапсулируя их взаимодействие. Кроме того, этот шаблон проектирования, предотвращая прямое взаимодействие различных компонентов системы, способствует ослаблению связей в коде. В нашей системе он также помогает в решении проблем, связанных с зависимостями модулей.
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class NotificationMadiator {
    send() {
        console.log("sendd");
    }
}
class LogMediator {
    log(message) {
        console.log(message);
    }
}
class EventHandeler extends Mediated {
    myEvent() {
        this.mediator.notify("eventHandler", "myEvent");
    }
}
class NotifyMediatorMain {
    constructor(notifications, logger, handeler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handeler = handeler;
    }
    notify(sender, event) {
        switch (event) {
            case "myEvent": {
                this.notifications.send();
                this.logger.log("send");
                break;
            }
        }
    }
}
const handle = new EventHandeler();
const loogger = new LogMediator();
const notify = new NotificationMadiator();
const m = new NotifyMediatorMain(notify, loogger, handle);
handle.setMediator(m);
handle.myEvent();
