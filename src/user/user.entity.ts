import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column({
    type: "varchar",
    length: 100,
    nullable: false
  })
  fullName: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: false,
    unique: true
  })
  email: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: false,
    unique: true
  })
  username: string;
  @Column({
    type: "varchar",
    length: 100,
    nullable: false
  })
  password: string;
}
