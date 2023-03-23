import { IsString } from 'class-validator';

class RandomClass {
  @IsString()
  property!: string;
}