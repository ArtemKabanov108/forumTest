import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Messages & Document;

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
export class Messages {
  @Prop()
  name: string;

  @Prop()
  addressed: string;

  @Prop()
  message: string;
}

export const UserSchema = SchemaFactory.createForClass(Messages);
