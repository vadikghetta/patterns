"use strict";
// Шаблон команд — это шаблон проектирования, управляемый данными, который подпадает под категорию поведенческих шаблонов. Запрос помещается в объект как команда и передается объекту, вызывающему вызов. Объект Invoker ищет соответствующий объект, который может обработать эту команду, и передает команду соответствующему объекту, который выполняет команду
class UserCommand {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHisory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands.filter(c => c.comandId !== command.comandId);
    }
}
class ComandClass {
    constructor(history) {
        this.history = history;
        this.comandId = Math.random();
    }
}
class AddUserComand extends ComandClass {
    constructor(user, reciver, history) {
        super(history);
        this.user = user;
        this.reciver = reciver;
    }
    execute() {
        this.reciver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.reciver.deleteUser(this.user);
        this.history.remove(this);
    }
}
class UserServiceCommand {
    saveUser(user) {
        console.log(`Save User ${user.userId}`);
    }
    deleteUser(user) {
        console.log(`Delete User ${user.userId}`);
    }
}
class ControllerComand {
    constructor() {
        this.history = new CommandHisory();
    }
    addReciver(receiver) {
        this.reciver = receiver;
    }
    run() {
        const addUserCommand = new AddUserComand(new UserCommand(1), this.reciver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controllerCommand = new ControllerComand();
controllerCommand.addReciver(new UserServiceCommand());
controllerCommand.run();
