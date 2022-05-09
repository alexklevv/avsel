import { ValidationArguments } from 'class-validator';
import {REQUEST_CONTEXT} from "../interceptors/inject-user.interceptor";
import {User} from "../../users/schemas/user.schema";

export interface ExtendedValidationArguments extends ValidationArguments {
    object: {
        [REQUEST_CONTEXT]: {
            user: User; // User is my type for User class
        };
    };
}
