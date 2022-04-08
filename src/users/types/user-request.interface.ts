import { Request } from 'express';
import { User } from "../schemas/user.scema";

export interface UserRequestInterface extends Request {
  user?: User;
  refreshToken?: boolean;
}
