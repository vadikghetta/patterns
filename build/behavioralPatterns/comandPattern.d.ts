declare class UserCommand {
    userId: number;
    constructor(userId: number);
}
declare class CommandHisory {
    commands: ComandClass[];
    push(command: ComandClass): void;
    remove(command: ComandClass): void;
}
declare abstract class ComandClass {
    history: CommandHisory;
    comandId: number;
    abstract execute(): void;
    constructor(history: CommandHisory);
}
declare class AddUserComand extends ComandClass {
    private user;
    private reciver;
    constructor(user: UserCommand, reciver: UserServiceCommand, history: CommandHisory);
    execute(): void;
    undo(): void;
}
declare class UserServiceCommand {
    saveUser(user: UserCommand): void;
    deleteUser(user: UserCommand): void;
}
declare class ControllerComand {
    reciver: UserServiceCommand;
    history: CommandHisory;
    addReciver(receiver: UserServiceCommand): void;
    run(): void;
}
declare const controllerCommand: ControllerComand;
