import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { postType, statusType } from "./enums/postType.enum";
import { MetaOption } from "src/meta-options/meta-option.entity";
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "varchar",
    length: 512,
    nullable: false
  })
  title: string;
  @Column({
    type: "text",
    nullable: false
  })
  content: string;
  @Column({
    type: "varchar",
    length: 512,
    nullable: false,
    unique: true
  })
  slug: string;
  @Column({
    type: "enum",
    enum: postType,
    nullable: false,
    default: postType.PAGE
  })
  postType: postType;
  @Column({
    type: "enum",
    enum: statusType,
    nullable: false,
    default: statusType.DRAFT
  })
  status: statusType;
  @Column({
    type: "text",
    nullable: false
  })
  schema: string;
  @Column({
    type: "varchar",
    length: 1024,
    nullable: true
  })
  imageUrl: string;
  @Column({
    type: "timestamp", // datetime in mysql
    nullable: true
  })
  publishedOn: Date;
  tags: string[];
  // 1 Post chỉ có 1 metaOption
  @OneToOne(() => MetaOption)
  // tạo khóa ngoại metaOptionId bên trong Post table
  @JoinColumn()
  metaOptions: MetaOption;
}
