// Методы шаблона часто используются в средах общего назначения или библиотеках, которые будут использоваться другими разработчиками. Примером может служить объект, который запускает последовательность событий в ответ на действие, например запрос процесса. Объект генерирует событие «предварительной обработки», событие «процесса» и событие «постобработки». У разработчика есть возможность настроить ответ непосредственно перед обработкой, во время обработки и сразу после обработки.

// Шаблонный метод проще всего представить себе как алгоритм с дырами (см. диаграмму ниже). Разработчик должен заполнить эти пробелы соответствующими функциями на каждом этапе. 



class FormTemplate {
    constructor (public name : string) {

    }
}


abstract class SaveForm <T> {
    public save(form : FormTemplate) {
        const res = this.fill(form)
        this.log(res);
        this.send(res)

    }

    protected abstract fill (form : FormTemplate) : T
    protected  log (data : T) : void {
        console.log(data)
    }
    protected abstract send (data : T) : void
}


class FirstApiTemplate extends SaveForm<string> {
    protected fill(form: FormTemplate): string {
        return form.name
    }
    protected send(data: string): void {
        console.log(data)
    }
}
class SecondApiTemplate extends SaveForm<{fio : string}> {
    protected fill(form: FormTemplate): {fio : string} {
        return {fio : form.name}
    }
    protected send(data: {fio : string}): void {
        console.log(data)
    }
}


const form1 = new FirstApiTemplate()
form1.save(new FormTemplate("Вася"))

