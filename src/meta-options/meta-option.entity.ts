import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "json",
    nullable: false
  })
  metaValue: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
