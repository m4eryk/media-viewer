import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column()
  type: string;
}