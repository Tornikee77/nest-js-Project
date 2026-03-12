import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async findOne(userId: string): Promise<UserResponseDto> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not fount');
    }
    return user;
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return users;
  }
}
