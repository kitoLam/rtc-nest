import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/providers/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  public login(email: string, password: string) {
    console.log(email, password);
    // check user exist
    this.userService.findOneById(1);
    // check match password
    // create token
    const token = 'TOKE';
    return token;
  }
  public checkAuth() {
    return true;
  }
}
