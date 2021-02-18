/**
 * Conversations model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId})
 * Representation : Front, Back, CF
 */
export interface Conversation {
    userId: string;
    status: string;
    messages: number;
    data: {
        [key: string]: any;
    };
    metadata: ConversationMetadata;
    first_connection: Date;
    last_sent: Date;
    last_delivered: Date;
    last_read: Date;
    label: string;
    assigneeId: string;
}
/**
 * Conversation metadata model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId}/metadata)
 * Representation : Front, Back, CF
 */
export declare type ConversationMetadata = {
    [actor in Actor]?: ActorMetadata;
};
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
    emitter: Actor;
    receiver: Actor;
}
/**
 * Actors of a conversation
 *
 * Representation : Front, Back, CF
 */
export declare type Actor = 'bot' | 'user';
