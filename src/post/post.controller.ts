import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostService } from "./providers/post.service";
import { PostCreateDto } from "./dtos/post-create.dto";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get(":userId")
  getPostByUserId(@Param("userId") userId: string) {
    return this.postService.getPostByUserId(userId);
  }
  @Post("create")
  async createPost(@Body() postCreateDto: PostCreateDto) {
    return this.postService.createPost(postCreateDto);
  }
  @Post("like")
  async likePost(@Body() body: { userId: string; postId: string }) {
    return this.postService.likePost(body.userId, body.postId);
  }

  @Get(":postId/likes/count")
  async getTotalLikes(@Param("postId") postId: string) {
    return this.postService.getTotalLikes(postId);
  }
}
