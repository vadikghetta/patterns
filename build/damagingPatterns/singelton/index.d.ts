declare class MyMap {
    private static instance;
    map: Map<number, string>;
    private constructor();
    static get(): MyMap;
}
declare class Service1 {
    addMap(key: number, value: string): void;
}
declare class Service2 {
    getKeys(key: number): void;
}
