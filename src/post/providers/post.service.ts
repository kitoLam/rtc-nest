import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/providers/user.service";
import { PostCreateDto } from "../dtos/post-create.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "../post.entity";
import { Repository } from "typeorm";
import { MetaOptionsService } from "src/meta-options/meta-options.service";
import { Neo4jService } from "src/neo4j/neo4j.service";

@Injectable()
export class PostService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    /**
     * Inject Meta Option Service
     */
    private readonly metaOptionsService: MetaOptionsService,
    /**
     * Inject Neo4j Service
     */
    private readonly neo4jService: Neo4jService
  ) {}
  public getPostByUserId(userId: string) {
    console.log(userId);
    console.log(">>>my log::",this.userService);
    // Giả sử dùng userService:
    this.userService.findOneById(Number(userId));
    return "";
  }
  public async createPost(postCreateDto: PostCreateDto) {
    // const metaOption = await this.metaOptionsService.create(
    //   postCreateDto.metaOptions
    // );
    // let newPost = this.postRepository.create(postCreateDto);
    // newPost.metaOptions = metaOption;
    // newPost = await this.postRepository.save(newPost);
    return null;
  }
  public async likePost(userId: string, postId: string) {
    const cypher = `
      MERGE (u:User { id: $userId })
      MERGE (p:Post { id: $postId })
      MERGE (u)-[r:LIKES]->(p)
      RETURN u, p, r
    `;
    await this.neo4jService.write(cypher, { userId, postId });
    return {
      message: "User liked post successfully in Neo4j!",
      userId,
      postId
    };
  }

  public async getTotalLikes(postId: string) {
    const cypher = `
      MATCH (:User)-[r:LIKES]->(p:Post { id: $postId })
      RETURN count(r) AS totalLikes
    `;
    const result = await this.neo4jService.read(cypher, { postId });
    
    let totalLikes = 0;
    if (result.records.length > 0) {
      const value = result.records[0].get('totalLikes');
      totalLikes = typeof value.toNumber === 'function' ? value.toNumber() : Number(value);
    }
    
    return {
      postId,
      totalLikes
    };
  }
}
