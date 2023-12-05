// Chain of command

// Короче говоря, этот шаблон включает в себя последовательность слабо связанных программных модулей или объектов -обработчиков . Эти объекты соединяются вместе, образуя звенья в цепочке обработчиков.

// Каждый обработчик выполняет свою логику обработки, а затем потенциально передает запрос обработки следующему звену (т. е. обработчику) в цепочке. Клиент, использующий цепочку, сделает только один запрос на обработку. После этого запроса обработчики цепочки выполняют обработку. 




interface IMiddleware {
    next( mid : IMiddleware): IMiddleware
    handle (req : any) : any
}


abstract class AbstractMidleware  implements IMiddleware {
    private nextMidleware : IMiddleware;
    
    next(mid: IMiddleware): IMiddleware {
        this.nextMidleware = mid;
        return mid;
    }
    handle(req: any) {
        if(this.nextMidleware) {
            return this.nextMidleware.handle(req)
        }
        return;
    }
     
}


class AuthMiddleware extends AbstractMidleware {
    override handle(req: any) {
        console.log("Auth")
        if(req.userId === 1) {
            return super.handle(req)
        }
        return {error : "not auth"}
    }
}

class ValidateMiddleware extends AbstractMidleware {
    override handle(req: any) {
        console.log("Validate")
        if(req.body) {
            return super.handle(req)
        }
        return {error : "not body"}
    }
}

class Controller extends AbstractMidleware {
    override handle(req: any) {
        console.log("Controller")
        return {success : req}
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);


console.log(auth.handle({
    userrId : 1,
    body : "Body"
}))