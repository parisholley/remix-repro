import { IsString } from 'class-validator';

export default class RandomClass {
  @IsString()
  property!: string;
}