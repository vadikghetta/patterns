declare class Notify {
    send(template: string, to: string): void;
}
declare class LogsFacade {
    log(message: string): void;
}
declare class TemplateFascade {
    private templates;
    getByName(name: string): {
        name: string;
        template: string;
    } | undefined;
}
declare class FacadeNotification {
    private notify;
    private log;
    private template;
    constructor();
    send(to: string, templateName: string): void;
}
declare const notif: void;
