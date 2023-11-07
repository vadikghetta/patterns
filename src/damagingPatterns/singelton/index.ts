// Пораждающее паттерны Singltone
// Синглтон — это творческий шаблон проектирования, который позволяет гарантировать, что класс имеет только один экземпляр, предоставляя при этом глобальную точку доступа к этому экземпляру.

// В этом примере у Singletonкласса есть частный конструктор, предотвращающий прямое создание экземпляров. Этот Instanceметод предоставляет способ доступа к экземпляру синглтона. При первом вызове он создает новый экземпляр Singleton. При последующих вызовах он возвращает существующий экземпляр.

// Когда вы запустите код, вы увидите это instance1и instance обратитесь к одному и тому же объекту, указывая на то, что существует только

// Шаблон проектирования Singleton обычно используется в ситуациях, когда вам необходимо гарантировать наличие только одного экземпляра класса и предоставить глобальную точку доступа к этому экземпляру


class MyMap {
    private static instance : MyMap
    map : Map<number, string> = new Map()
    private constructor() {

    }
    public static get() : MyMap {
        if(!MyMap.instance) {
            MyMap.instance = new MyMap()
        }
        return MyMap.instance
    }
}

class Service1 {
    addMap(key : number, value: string) {
       const t =  MyMap.get()
       t.map.set(key, value)
    }
}

class Service2 {
    getKeys(key : number) {
       const t =  MyMap.get()
       t.map.get(key)
       console.log( t.map.get(key))
    }

}


new Service1().addMap(1, "Work")
new Service2().getKeys(1)