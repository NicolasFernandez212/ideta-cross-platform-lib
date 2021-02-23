import { ActorMetadata } from './interfaces';

/**
 * Actors of a conversation
 *
 * Representation : Front, Back, CF
 */
export type Actor = 'bot' | 'user';

/**
 * Conversation metadata model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId}/metadata)
 * Representation : Front, Back, CF
 */
export type ConversationMetadata = {
  [actor in Actor]?: ActorMetadata;
};
