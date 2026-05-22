import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { UserCreateDto } from "./dtos/user-create.dto";
import { UserUpdateDto } from "./dtos/user-update.dto";
import { UserService } from "./providers/user.service";

@Controller("user")
export class UserController {
  constructor(
    // Inject providers:
    private readonly userService: UserService
  ) {}
  @Get(":id/:status")
  public getUser(
    @Param("id", ParseIntPipe) id: number,
    @Param("status") status: string,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    console.log(id);
    console.log(status);
    console.log(page);
    console.log(limit);
    this.userService.findAllUser();
    return "hi";
  }
  @Get("profile")
  public getProfile(@Query("userId", ParseIntPipe) userId: number) {
    return this.userService.getProfile(userId);
  }
  @Post("create")
  public async create(@Body() userCreateDto: UserCreateDto) {
    const newUser = await this.userService.createUser(userCreateDto);
    return newUser;
  }
  @Patch("update")
  public update(@Body() userUpdateDto: UserUpdateDto) {
    console.log(userUpdateDto);
    return userUpdateDto;
  }
}
