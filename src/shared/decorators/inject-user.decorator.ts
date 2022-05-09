import { applyDecorators, UseInterceptors, UsePipes } from '@nestjs/common';
import {InjectUserInterceptor} from "../interceptors/inject-user.interceptor";
import {StripRequestContextPipe} from "../pipes/strip-request-context.pipe";

export function InjectUserToQuery(property: string = '') {
    return applyDecorators(InjectUserTo('query', property));
}

export function InjectUserToBody(property: string = '') {
    return applyDecorators(InjectUserTo('body', property));
}

export function InjectUserToParam(property: string = '') {
    return applyDecorators(InjectUserTo('params', property));
}

export function InjectUserTo(context: 'query' | 'body' | 'params', property) {
    return applyDecorators(
        UseInterceptors(new InjectUserInterceptor(context, property)),
        UsePipes(StripRequestContextPipe),
    );
}
