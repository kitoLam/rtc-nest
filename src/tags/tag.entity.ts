import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tag_id: number;
  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
    unique: true
  })
  name: string;
  @Column({
    type: "varchar",
    length: 512,
    nullable: false,
    unique: true
  })
  slug: string;
  @Column({
    type: "varchar",
    length: 1024,
    nullable: true
  })
  description: string;
  @Column({
    type: "text",
    nullable: true
  })
  schema: string;
  @Column({
    type: "varchar",
    length: 1024,
    nullable: true
  })
  featureImageUrl: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @DeleteDateColumn()
  deleted_at: Date;
}
