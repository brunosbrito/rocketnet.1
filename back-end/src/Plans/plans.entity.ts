import { IsNumberString, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plans {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  price: string;

  @Column()
  @IsString()
  name: string;
}
