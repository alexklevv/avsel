import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import {User} from "../../users/schemas/user.schema";

export const REQUEST_CONTEXT = '_requestContext';

@Injectable()
export class InjectUserInterceptor implements NestInterceptor {
    constructor(
        private type?: NonNullable<'query' | 'body' | 'params'>,
        private property?: string
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        if (this.type && request[this.type]) {
            const user: User = request.user;
            if(this.property){
                request[this.type][this.property][REQUEST_CONTEXT] = {
                    user: {
                        _id: user['_id'].toString(),
                    }
                };
            } else {
                request[this.type][REQUEST_CONTEXT] = {
                    user: {
                        _id: user['_id'].toString(),
                    }
                };
            }
        }

        return next.handle();
    }
}
