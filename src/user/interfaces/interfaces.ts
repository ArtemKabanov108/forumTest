export interface IUsers {
  _id: Object;
  name: string;
  addressed: string;
  message:string;
}

export interface IReqMessage {
  userMessages: Array<Object>;
  messagesForUser: Array<Object>;
}
