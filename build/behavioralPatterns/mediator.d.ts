interface Mediator {
    notify(sender: string, event: string): void;
}
declare abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator): void;
}
declare class NotificationMadiator {
    send(): void;
}
declare class LogMediator {
    log(message: string): void;
}
declare class EventHandeler extends Mediated {
    myEvent(): void;
}
declare class NotifyMediatorMain implements Mediator {
    notifications: NotificationMadiator;
    logger: LogMediator;
    handeler: EventHandeler;
    constructor(notifications: NotificationMadiator, logger: LogMediator, handeler: EventHandeler);
    notify(sender: string, event: string): void;
}
declare const handle: EventHandeler;
declare const loogger: LogMediator;
declare const notify: NotificationMadiator;
declare const m: NotifyMediatorMain;
