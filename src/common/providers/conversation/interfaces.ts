import { Actor } from './types';

export interface ConversationData {
  [key: string]: any;
}

/**
 * Actors metadata model
 * Used to display infos like typing indicator or last message sending date
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId}/metadata/{actor})
 * Representation : Front, Back, CF
 */
export interface ActorMetadata {
  isTyping: boolean;
  last_sent: Date;
  last_read: Date;
}

/**
 * Informations carried along with conversations and messages processing
 * to kown who is sending, who is receiving the message
 *
 * Type : app model
 * Representation : Front, Back, CF
 */
export interface Actors {
  emitter: Actor; // the emitter of the message chain
  receiver: Actor; // the receiver of the message chain
}

/**
 * This interface is not really useful as of 24-apr-2020.
 *
 */
export interface Path {
  [id: string]: {
    [fromId: string]: string;
  };
}
