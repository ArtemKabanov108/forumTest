import {IsNotEmpty, IsString} from 'class-validator';

export class UserDto {
  name: string;
}

export class NewMessageUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  addressed: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}

