import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma';

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;
  @ApiProperty({
    description: 'User email',
    example: 'john.doe@example.com',
  })
  email: string;
  @ApiProperty({
    description: 'User firstname',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    description: 'user role',
    enum: Role,
  })
  role: Role;

  @ApiProperty({
    description: 'Account creation date',
    example: '2023-10-01T12:34:56.789Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last acount update date',
    example: '2023-10-10T12:34:56.789Z',
  })
  updatedAt: Date;
}
