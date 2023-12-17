"use strict";
// Фасад — это простой интерфейс для работы со сложной подсистемой, содержащей множество классов. Фасад может иметь урезанный интерфейс, не имеющий 100% функциональности, которой можно достичь, используя сложную подсистему напрямую. Но он предоставляет именно те фичи, которые нужны клиенту, и скрывает все остальные.
// Фасад полезен, если вы используете какую-то сложную библиотеку со множеством подвижных частей, но вам нужна только часть её возможностей.
// К примеру, программа, заливающая видео котиков в социальные сети, может использовать профессиональную библиотеку сжатия видео. Но все, что нужно клиентскому коду этой программы — простой метод encode(filename, format). Создав класс с таким методом, вы реализуете свой первый фасад.
class Notify {
    send(template, to) {
        console.log(`Отправляю ${template}, в ${to}`);
    }
}
class LogsFacade {
    log(message) {
        console.log(message);
    }
}
class TemplateFascade {
    constructor() {
        this.templates = [{ name: "other", template: "h1" }];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class FacadeNotification {
    constructor() {
        this.notify = new Notify();
        this.log = new LogsFacade();
        this.template = new TemplateFascade();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.log.log("Not found");
        }
        else {
            this.notify.send(data.template, "to");
        }
    }
}
const notif = new FacadeNotification().send("a@.ru", "other");
