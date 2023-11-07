// Пораждающее паттерны Factory

interface IInsurence {
    id: number
    status : string
    setVehicle(vehicle : any) : void
    submit : () => Promise<boolean>
}


class TFInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle : any
    setVehicle (vehicle: any) : void  {
        this.vehicle = vehicle
    }
    async submit (): Promise<boolean> {
        const res = await fetch("", {
            method : "POST",
            body : JSON.stringify("")
        })
        const data = await res.json();
        return data.isSucces
    }   
   
    
}
class ABInsurence implements IInsurence {
    id: number;
    status: string;
    private vehicle : any
    setVehicle (vehicle: any) : void  {
        this.vehicle = vehicle
    }
    async submit (): Promise<boolean> {
        const res = await fetch("ab", {
            method : "POST",
            body : JSON.stringify("")
        })
        const data = await res.json();
        return data.yes
    }   
   
    
}

abstract class InsurenceFactory {
    db: any
    abstract createInsurence () : IInsurence
    saveHistory (ins : IInsurence) {
        this.db.save(ins.id, ins.status)
    }
}

class TFInsurenceFactory extends InsurenceFactory {
    createInsurence(): TFInsurence {
       return new TFInsurence()
    }

}
class ABInsurencensurenceFactory extends InsurenceFactory {
    createInsurence(): ABInsurence {
       return new ABInsurence()
    }
}

const tfInsurence = new TFInsurenceFactory()
const inst = tfInsurence.createInsurence();
tfInsurence.saveHistory(inst)


const INSURENCE_TYPE = {
    tf : TFInsurence,
    ab : ABInsurence
}

type IT = typeof INSURENCE_TYPE

class InsurenceFactoryAlternative  {
    db: any
     createInsurence<T extends keyof IT> (type : T) : IT[T]  {
        return INSURENCE_TYPE[type]
     }
    saveHistory (ins : IInsurence) {
        this.db.save(ins.id, ins.status)
    }
}

const insurenceFactoryAlternative = new InsurenceFactoryAlternative()
const inst2 = new (insurenceFactoryAlternative.createInsurence("tf"))


//Шаблон «Фабричный метод» — это шаблон проектирования, который используется для создания объектов без указания точного класса объекта, который будет создан. Он часто используется, когда тип создаваемого объекта определяется во время выполнения или когда есть необходимость создать объекты разных типов на основе конкретных требований приложения.


///В TypeScript шаблон «Фабричный метод» можно реализовать с помощью функции factory, которая принимает набор параметров и возвращает объект определенного типа. Функция factoryиспользует параметры для определения типа создаваемого объекта, а затем создает и возвращает объект.


// Вот пример функции factoryв TypeScript:

// function createProduct(type: string): Product {
//   switch (type) {
//     case 'book':
//       return new Book();
//     case 'software':
//       return new Software();
//     default:
//       throw new Error('Invalid product type');
//   }
// }

// Эта factoryфункция принимает typeпараметр, определяющий тип создаваемого продукта. Затем он использует switchоператор для определения типа создаваемого объекта на основе typeпараметра. Если typeпараметр равен book, factoryфункция создает и возвращает Bookобъект. Если typeпараметр равен software, factoryфункция создает и возвращает Softwareобъект. В противном случае выдает ошибку.


// Чтобы использовать factoryфункцию, другие классы могут вызвать ее с соответствующим typeпараметром для создания объекта нужного типа.


// Вот пример использования функции factory:

// const product = createProduct('book');

// В этом примере createProductфункция вызывается с typeпараметром, установленным на book, что заставляет factoryфункцию создавать и возвращать Bookобъект.


// Шаблон «Фабричный метод» — это полезный шаблон проектирования для создания объектов без указания их точного класса. В TypeScript это можно реализовать с помощью factoryфункции, которая принимает параметры и возвращает объект соответствующего типа. Это позволяет другим классам создавать объекты разных типов в зависимости от конкретных требований приложения.