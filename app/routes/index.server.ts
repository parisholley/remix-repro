import { IsString } from 'class-validator';

class RandomClass {
  @IsString()
  property!: string;
}

export const action = function () {
  throw new Error('will not compile');
}