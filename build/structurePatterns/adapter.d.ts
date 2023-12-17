declare class KVDatabase {
    private db;
    save(key: string, value: string): void;
}
declare class PersistentDB {
    savePersistent(data: Object): void;
}
declare class PersistentDBAdapter extends KVDatabase {
    database: PersistentDB;
    constructor(database: PersistentDB);
    save(key: string, value: string): void;
}
declare function run(base: KVDatabase): void;
