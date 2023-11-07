// Prortype клонирует обьект

interface IPrototype<T> {
    clone  () :  T
}

class UserHisory implements IPrototype<UserHisory> {
    createdAt : Date
    constructor(public email : string, public name : string) {
        this.createdAt = new Date()
    }
    clone () : UserHisory {
        let target = new UserHisory(this.email, this.name)
        target.createdAt = this.createdAt
        return target;
    }
}

let user = new UserHisory("a@a.ru", "a")

let user2 = user.clone()