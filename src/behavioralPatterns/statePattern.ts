// Паттерн Состояние невозможно рассматривать в отрыве от концепции машины состояний, также известной как стейт-машина или конечный автомат.
// Конечный автомат
// Конечный автомат

// Основная идея в том, что программа может находиться в одном из нескольких состояний, которые всё время сменяют друг друга. Набор этих состояний, а также переходов между ними, предопределён и конечен. Находясь в разных состояниях, программа может по-разному реагировать на одни и те же события, которые происходят с ней.

// Такой подход можно применить и к отдельным объектам. Например, объект Документ может принимать три состояния: Черновик, Модерация или Опубликован. В каждом из этих состоянии метод опубликовать будет работать по-разному:

//     из черновика он отправит документ на модерацию;
//     из модерации – в публикацию, но при условии, что это сделал администратор;
//     в опубликованном состоянии метод не будет делать ничего.


class DocumentItem {
    public text : string
    private state : DocumentState
    constructor() {
        this.setState(new DraftDocumentItemState())
    }
    getStatus() {
        return this.state
    }

    publishDoc() {
        this.state.publish()
    }

    deleteDoc() {
        this.state.delete()
    }
    setState(state : DocumentState) {
        this.state = state;
        this.state.setContext(this)

    }
}

abstract class DocumentState {
    public name : string
    public item : DocumentItem

    setContext (item : DocumentItem) {
        this.item = item
    }

    public abstract publish() : void
    public abstract delete() : void
}

class DraftDocumentItemState extends DocumentState {
  
    constructor() {
        super();
        this.name = "DrafttDocument"
    }

    public publish(): void {
        this.item.setState(new PublishDocumentItemState())
    }
    public delete(): void {
       console.log("Delete")
    }
}
class PublishDocumentItemState extends DocumentState {
  
    constructor() {
        super();
        this.name = "PublishDocument"
    }

    public publish(): void {
       console.log("Нельзя опубликовать")
    }
    public delete(): void {
       console.log("Снято с публикации")
       this.item.setState(new DraftDocumentItemState())
    }
}


const itemState =  new DocumentItem();
itemState.text = "Rrrrr"
console.log(itemState.getStatus())
itemState.publishDoc()
console.log(itemState.getStatus())
itemState.publishDoc()
itemState.deleteDoc()
console.log(itemState.getStatus())



