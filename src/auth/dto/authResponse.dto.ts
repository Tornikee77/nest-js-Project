import { Role } from 'generated/prisma';

export class AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firsName: string | null;
    lastName: string | null;
    role: Role;
  };
}
