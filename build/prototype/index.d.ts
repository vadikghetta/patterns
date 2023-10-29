interface IPrototype<T> {
    clone(): T;
}
declare class UserHisory implements IPrototype<UserHisory> {
    email: string;
    name: string;
    createdAt: Date;
    constructor(email: string, name: string);
    clone(): UserHisory;
}
declare let user: UserHisory;
declare let user2: UserHisory;
