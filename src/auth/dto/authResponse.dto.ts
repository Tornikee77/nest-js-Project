import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma';

export class AuthResponseDto {
  @ApiProperty({
    description: 'The access token for authentication',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  accessToken: string;

  @ApiProperty({
    description: 'The refresh token for authentication',
    example: {
      id: '1234567890',
      email: '<Email>',
      firstName: 'John',
      lastName: 'Doe',
      role: 'USER',
    },
  })
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: Role;
  };
}
