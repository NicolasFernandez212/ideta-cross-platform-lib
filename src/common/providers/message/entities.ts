import { Entity, ObjectIdColumn, Column } from 'typeorm';

import { MessageTemplate } from './types';

import { Channel } from '../bot/types';
import { Actor } from '../conversation/types';
import { MappingDataInput } from '../node/node-mapping/entities';

@Entity({ name: 'messages' })
export class Message {
  @ObjectIdColumn() public _id: string;
  @Column() public botId: string;
  @Column() public channel: Channel;
  @Column() public userId: string;
  @Column() public sender: Actor;
  @Column() public template: MessageTemplate;
  @Column() public node: {
    id: string;
    name: string;
    dataInput?: MappingDataInput;
  };
  @Column() public sent_at: Date;

  constructor(message?: Partial<Message>) {
    if (message) {
      if (message._id) this._id = message._id;
      if (message.botId) this.botId = message.botId;
      if (message.channel) this.channel = message.channel;
      this.userId = message.userId;
      this.sender = message.sender;
      this.template = message.template; // should be {} ?
      this.node = message.node; // should be {} ?
      this.sent_at = message.sent_at ? new Date(message.sent_at) : new Date();
    }
  }
}
