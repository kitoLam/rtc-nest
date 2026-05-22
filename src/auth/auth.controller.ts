import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    const token = this.authService.login(email, password);
    return token;
  }
}
