import { Body, Controller, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/authResponse.dto';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register(@Body() registerDto: RegisterDto): Promise<AuthResponseDto> {
    return await this.authService.register(registerDto);
  }

  @UseGuards(RefreshTokenGuard)
  async refresh(@GetUser('id') userId: string): Promise<AuthResponseDto> {
    return await this.authService.refreshTokens(userId);
  }

  @UseGuards(JwtAuthGuard)
  async logout(@GetUser('id') userId: string): Promise<{ message: string }> {
    await this.authService.logout(userId);
    return { message: 'Logged out successfully' };
  }
}
