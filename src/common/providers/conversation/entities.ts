import { Entity, Column, CreateDateColumn, ObjectIdColumn } from 'typeorm';

import { ConversationData, Path } from './interfaces';
import { ConversationMetadata } from './types';

import { Channel } from '../bot/types';

/**
 * Conversations model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId})
 * Representation : Front, Back, CF
 */
@Entity({ name: 'conversations' })
export class Conversation {
  @ObjectIdColumn() public _id: string;
  @Column() public botId: string; // no such propety in DB
  @Column() public channel: Channel; // no such property in DB
  @Column() public userId: string;
  @Column({ default: 'noeud_0' }) public status: string;
  @Column({ default: 0 }) public messages: number;
  @Column({ default: {} }) public path: Path;
  @Column({ default: {} }) public data: ConversationData;
  @Column({ default: {} }) public metadata: ConversationMetadata;
  @CreateDateColumn() public first_connection: Date;
  @Column() public last_delivered: Date;
  @Column() public last_read: Date;
  @Column() public last_sent: Date;
  // Cockpit
  @Column({ default: false }) public isRead: boolean;
  @Column() public label: string;
  @Column() public assigneeId: string;

  constructor(conversation?: Partial<Conversation>) {
    if (conversation) {
      if (conversation._id) this._id = conversation._id;
      if (conversation.botId) this.botId = conversation.botId;
      if (conversation.channel) this.channel = conversation.channel;
      if (conversation.userId) this.userId = conversation.userId;
      this.status = conversation.status || 'noeud_0';
      this.messages = conversation.messages || 0;
      this.path = conversation.path || {};
      this.data = conversation.data || {};
      this.metadata = conversation.metadata || {};
      this.first_connection = conversation.first_connection ? new Date(conversation.first_connection) : new Date();
      this.last_delivered = conversation.last_delivered ? new Date(conversation.last_delivered) : new Date();
      this.last_read = conversation.last_read ? new Date(conversation.last_read) : new Date();
      this.last_sent = conversation.last_sent ? new Date(conversation.last_sent) : new Date();
      this.isRead = conversation.isRead || false;
      this.label = conversation.label || null;
      if (conversation.assigneeId) this.assigneeId = conversation.assigneeId;
    }
  }
}
