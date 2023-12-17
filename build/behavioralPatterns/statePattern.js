"use strict";
// Паттерн Состояние невозможно рассматривать в отрыве от концепции машины состояний, также известной как стейт-машина или конечный автомат.
// Конечный автомат
// Конечный автомат
// Основная идея в том, что программа может находиться в одном из нескольких состояний, которые всё время сменяют друг друга. Набор этих состояний, а также переходов между ними, предопределён и конечен. Находясь в разных состояниях, программа может по-разному реагировать на одни и те же события, которые происходят с ней.
// Такой подход можно применить и к отдельным объектам. Например, объект Документ может принимать три состояния: Черновик, Модерация или Опубликован. В каждом из этих состоянии метод опубликовать будет работать по-разному:
//     из черновика он отправит документ на модерацию;
//     из модерации – в публикацию, но при условии, что это сделал администратор;
//     в опубликованном состоянии метод не будет делать ничего.
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getStatus() {
        return this.state;
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
}
class DocumentState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentState {
    constructor() {
        super();
        this.name = "DrafttDocument";
    }
    publish() {
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log("Delete");
    }
}
class PublishDocumentItemState extends DocumentState {
    constructor() {
        super();
        this.name = "PublishDocument";
    }
    publish() {
        console.log("Нельзя опубликовать");
    }
    delete() {
        console.log("Снято с публикации");
        this.item.setState(new DraftDocumentItemState());
    }
}
const itemState = new DocumentItem();
itemState.text = "Rrrrr";
console.log(itemState.getStatus());
itemState.publishDoc();
console.log(itemState.getStatus());
itemState.publishDoc();
itemState.deleteDoc();
console.log(itemState.getStatus());
