interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;
    handle(req: any): any;
}
declare abstract class AbstractMidleware implements IMiddleware {
    private nextMidleware;
    next(mid: IMiddleware): IMiddleware;
    handle(req: any): any;
}
declare class AuthMiddleware extends AbstractMidleware {
    handle(req: any): any;
}
declare class ValidateMiddleware extends AbstractMidleware {
    handle(req: any): any;
}
declare class Controller extends AbstractMidleware {
    handle(req: any): {
        success: any;
    };
}
declare const controller: Controller;
declare const validate: ValidateMiddleware;
declare const auth: AuthMiddleware;
