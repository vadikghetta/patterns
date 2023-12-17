declare class DocumentItem {
    text: string;
    private state;
    constructor();
    getStatus(): DocumentState;
    publishDoc(): void;
    deleteDoc(): void;
    setState(state: DocumentState): void;
}
declare abstract class DocumentState {
    name: string;
    item: DocumentItem;
    setContext(item: DocumentItem): void;
    abstract publish(): void;
    abstract delete(): void;
}
declare class DraftDocumentItemState extends DocumentState {
    constructor();
    publish(): void;
    delete(): void;
}
declare class PublishDocumentItemState extends DocumentState {
    constructor();
    publish(): void;
    delete(): void;
}
declare const itemState: DocumentItem;
