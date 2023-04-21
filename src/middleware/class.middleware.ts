import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class ClassMiddlewareExample implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        console.log('****this is class middleware*****');
        req.admin = true;
        next()
    }
}