import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/providers/auth.service";
import { UserCreateDto } from "../dtos/user-create.dto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";

const userList = [
  {
    id: 1,
    fullname: "minh",
    email: "m1@gmail.com",
    username: "minhkk555",
    password: "lqm1"
  },
  {
    id: 2,
    fullname: "minh",
    email: "m1@gmail.com",
    username: "minhkk555",
    password: "lqm1"
  }
];

// @Injectable()
export class UserService {

  constructor(
    /**
     * Circle inject
     */
    // @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    /**
     * Inject User Repository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  public async createUser(userCreateDto: UserCreateDto) {
    // check email exist
    const existEmail = await this.userRepository.findOne({
      where: {
        email: userCreateDto.email
      }
    });
    // if yes -> handle error
    if (existEmail) {
      // handle conflict error
    }
    //create user
    let newUser = this.userRepository.create(userCreateDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }

  public findAllUser() {
    console.log("call user service");
    return userList;
  }
  public findOneById(id: number) {
    return userList.filter((item) => item.id == id);
  }
  public getProfile(userId: number) {
    console.log(userId, this.authService.checkAuth());
    return userList[0];
  }
}
