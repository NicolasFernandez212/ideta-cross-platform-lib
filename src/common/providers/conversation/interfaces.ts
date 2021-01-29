/* NOTE : .types file for this collection because there is to many circular dependencies */

export interface Conversation {
  userId: string;
  status: string;
  messages: number;
  data: { [key: string]: any };
  metadata: ConversationMetadata;
  first_connection: Date;
  last_sent: Date;
  last_delivered: Date;
  last_read: Date;
  label: string;
  assigneeId: string;
}

export interface ActorMetadata {
  isTyping: boolean;
  last_sent: Date;
  last_read: Date;
}

export interface Actors {
  emitter: Actor; // the emitter of the message chain
  receiver: Actor; // the receiver of the message chain
}

export type ConversationMetadata = {
  [actor in Actor]?: ActorMetadata;
};

// C - D
export type Actor = 'bot' | 'user';
