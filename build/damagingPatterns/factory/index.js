"use strict";
// Пораждающее паттерны Factory
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TFInsurence {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch("", {
                method: "POST",
                body: JSON.stringify("")
            });
            const data = yield res.json();
            return data.isSucces;
        });
    }
}
class ABInsurence {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch("ab", {
                method: "POST",
                body: JSON.stringify("")
            });
            const data = yield res.json();
            return data.yes;
        });
    }
}
class InsurenceFactory {
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
class TFInsurenceFactory extends InsurenceFactory {
    createInsurence() {
        return new TFInsurence();
    }
}
class ABInsurencensurenceFactory extends InsurenceFactory {
    createInsurence() {
        return new ABInsurence();
    }
}
const tfInsurence = new TFInsurenceFactory();
const inst = tfInsurence.createInsurence();
tfInsurence.saveHistory(inst);
const INSURENCE_TYPE = {
    tf: TFInsurence,
    ab: ABInsurence
};
class InsurenceFactoryAlternative {
    createInsurence(type) {
        return INSURENCE_TYPE[type];
    }
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
const insurenceFactoryAlternative = new InsurenceFactoryAlternative();
const inst2 = new (insurenceFactoryAlternative.createInsurence("tf"));
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
