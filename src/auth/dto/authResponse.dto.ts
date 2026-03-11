import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma';

export class AuthResponseDto {
  @ApiProperty({
    description: 'The access token',
    example: 'eyJhbGciOiJIUzI1Ni...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'The refresh token',
    example: 'eyJhbGciOiJIUzI1Ni...',
  })
  refreshToken: string;

  @ApiProperty({
    example: {
      id: 'uuid-123',
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'USER',
    },
  })
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: Role;
  };
}
