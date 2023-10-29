"use strict";
// Prortype клонирует обьект
class UserHisory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHisory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let user = new UserHisory("a@a.ru", "a");
let user2 = user.clone();
