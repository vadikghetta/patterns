// Примеры использования: шаблон Observer довольно часто встречается в коде TypeScript, особенно в компонентах графического интерфейса. Он предоставляет способ реагировать на события, происходящие в других объектах, без привязки к их классам.

// Идентификация: шаблон можно распознать с помощью методов подписки, которые хранят объекты в списке, а также с помощью вызовов метода обновления, выдаваемого объектам в этом списке. 


interface Subject {
    attach(observer : Observer) : void
    detach(observer : Observer) : void
    notify() : void
}


interface Observer {
    update (subject : Subject) : void
}


class Lead {
    constructor(public  name : string , public phone : string) {

    }
}


class NewLead implements Subject {
    private observers : Observer[]
    public state :Lead

    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return
        }else {
            this.observers.push(observer)
        }
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if( observerIndex == -1) {
            return
        }else {
            this.observers.splice(observerIndex, 1)
        }
    }
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

}


class NotificationService implements Observer {
    update(subject: Subject): void {
       console.log("new notify")
       console.log(subject)
    }

}
class LeadServisce implements Observer {
    update(subject: Subject): void {
       console.log("new notify lead")
       console.log(subject)
    }

}


const subject1 = new NewLead();
subject1.state = new Lead("Anton", "000")
const s1 = new NotificationService()
subject1.attach(s1)