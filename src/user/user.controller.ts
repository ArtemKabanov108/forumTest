import {
  BadRequestException, Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res, UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './services/user.service';
import {NewMessageUserDto, UserDto} from "./dto/user.dto";

@Controller('massages')
export class UserController {
  constructor(private readonly getUserData: UserService) {}

  @Post('/send')
  async createMessage(
    @Res() response: Response,
    @Body() body: NewMessageUserDto,
  ): Promise<Object> {
    const messages = await this.getUserData.createMessage(body)
    const isUserExist = this.getUserData.isUserExist(body.name, body.addressed)
    if(!isUserExist) throw new UnauthorizedException('User or addressed is undefined!')
    if (!messages) throw new BadRequestException(['Create Error']);
    return response.status(HttpStatus.OK).json({message: 'the message was send.'});
  }

  @Get('/get-messages')
  async getAllChat(
    @Body() body: UserDto,
    @Res() response: Response,
  ): Promise<Response> {
    const isUserExist = this.getUserData.isUserExist(body.name)
    if(!isUserExist) throw new UnauthorizedException('User is undefined!')
    const {userMessages, messagesForUser} = await this.getUserData.getMessageList(body);
    if (!userMessages && !messagesForUser) {
      throw new BadRequestException(['User haven`t a messages.']);
    }
    return response.status(HttpStatus.OK).json({userMessages, messagesForUser})
  }
}
