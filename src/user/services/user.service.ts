import {Injectable, InternalServerErrorException, NotFoundException, ServiceUnavailableException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Messages, UserDocument} from '../schemas/user-schema';
import { Model } from 'mongoose';
import { NewMessageUserDto, UserDto } from '../dto/user.dto';
import {IReqMessage, IUsers} from "../interfaces/interfaces";
import {users} from "../users/users";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Messages.name) private readonly userModel: Model<UserDocument>,
  ) {}
  
  async createMessage(CreateMessage: NewMessageUserDto): Promise<IUsers> {
    try {
      const {_id, name, addressed, message} = await this.userModel.create(CreateMessage);
      return {_id, name, addressed, message}
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

  async getMessageList(name: UserDto): Promise<IReqMessage> {
    const userMessages = await this.userModel.find({name: name.name})
    const messagesForUser = await this.userModel.find({addressed: name.name})
    return {userMessages, messagesForUser}
  }

  public isUserExist (name: string, addressed?: string): boolean {
    let isUserExist: boolean = false
    let isAddressedExist: boolean = false
    users.forEach((user: UserDto): void => {
      if( name === user.name ) isUserExist = true;
      if(addressed === user.name) isAddressedExist = true
    } )
    if(isUserExist && addressed === undefined) return true;
    if(isUserExist && isAddressedExist) {
      return true
    } else if (!isUserExist || !isAddressedExist) {
      return false
    }
  }

}
