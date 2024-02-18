// паттерн итератор Этот интерфейс позволяет получить значение из некоторой коллекции или последовательности, которая принадлежит объекту.


class Task {
    constructor(public priority : number) {

    }
}

class TasksList {
    private tasks  : Task[] = []
    public addTask(task : Task) {
        this.tasks.push(task);
    } 
    public sortByPriority() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1
            }else if(a.priority === b.priority) {
                return 0
            }
            else {
                return - 1
            }
        })
    }
    public getTasks() {
     return  this.tasks;
    }
    public count() {
        return this.tasks.length;
    }
    public getIterator () {
        return new PriorityTaskIterator(this)
    }
}

interface IIterator<T> {
    current:() => T | undefined;
    next: () => T | undefined;
    prev : () => T | undefined;
    index () : number
}

class PriorityTaskIterator implements IIterator<Task> {
    private position : number = 0
    private taskList : TasksList

    constructor (takList : TasksList) {
        this.taskList = this.taskList
    } 
    current () : Task | undefined  {
        return this.taskList.getTasks()[this.position]
    };
    next (): Task | undefined {
        this.position += 1;
        return this.taskList.getTasks()[this.position]
    };
    prev () : Task | undefined {
        this.position -= 1;
        return this.taskList.getTasks()[this.position]
    };
    index(): number {
       return this.position
    }

}