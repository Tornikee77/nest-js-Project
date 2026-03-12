import { Request } from 'express';

export interface RequestWithUser extends Request {
  User: {
    id: string;
    email: string;
    role: string;
  };
}
