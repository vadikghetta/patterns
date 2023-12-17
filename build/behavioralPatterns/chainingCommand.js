"use strict";
// Chain of command
class AbstractMidleware {
    next(mid) {
        this.nextMidleware = mid;
        return mid;
    }
    handle(req) {
        if (this.nextMidleware) {
            return this.nextMidleware.handle(req);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMidleware {
    handle(req) {
        console.log("Auth");
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: "not auth" };
    }
}
class ValidateMiddleware extends AbstractMidleware {
    handle(req) {
        console.log("Validate");
        if (req.body) {
            return super.handle(req);
        }
        return { error: "not body" };
    }
}
class Controller extends AbstractMidleware {
    handle(req) {
        console.log("Controller");
        return { success: req };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({
    userrId: 1,
    body: "Body"
}));
