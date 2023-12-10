// Шаблон команд — это шаблон проектирования, управляемый данными, который подпадает под категорию поведенческих шаблонов. Запрос помещается в объект как команда и передается объекту, вызывающему вызов. Объект Invoker ищет соответствующий объект, который может обработать эту команду, и передает команду соответствующему объекту, который выполняет команду


class UserCommand {
    constructor(public userId : number) {

    }
}

class CommandHisory {
    public commands : ComandClass[] = []
    push(command : ComandClass) {
        this.commands.push(command);
    }
    remove(command : ComandClass) {
        this.commands.filter(c => c.comandId !== command.comandId)
    }
}
abstract class ComandClass {
    public comandId : number;
    abstract execute() : void
    constructor(public history : CommandHisory) {
        this.comandId = Math.random()
    }
}
class AddUserComand extends ComandClass {
    constructor(private user: UserCommand,private reciver : UserServiceCommand, history : CommandHisory) {
        super(history);
    }
    execute(): void {
       this.reciver.saveUser(this.user)
       this.history.push(this)
    }
    undo() {
        this.reciver.deleteUser(this.user)
        this.history.remove(this)
    }
} 

class UserServiceCommand {
    saveUser (user : UserCommand) {
        console.log(`Save User ${user.userId}`)
    }
    deleteUser (user : UserCommand) {
        console.log(`Delete User ${user.userId}`)
    }
}


class ControllerComand {
    reciver :UserServiceCommand
    history : CommandHisory = new CommandHisory()
    addReciver(receiver : UserServiceCommand) {
        this.reciver = receiver;
    }
    run() {
        const addUserCommand = new AddUserComand(new UserCommand(1),this.reciver, this.history);
        addUserCommand.execute()
        console.log(addUserCommand.history)
        addUserCommand.undo()
        console.log(addUserCommand.history)
    }
}


const controllerCommand = new ControllerComand()
controllerCommand.addReciver(new UserServiceCommand())
controllerCommand.run()








