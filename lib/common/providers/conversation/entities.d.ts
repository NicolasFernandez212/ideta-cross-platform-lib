import { ConversationData, Path } from './interfaces';
import { ConversationMetadata } from './types';
import { Channel } from '../bot/types';
/**
 * Conversations model
 *
 * Type : DB model (conversations/{botId}/{channel}/{userId})
 * Representation : Front, Back, CF
 */
export declare class Conversation {
    _id: string;
    botId: string;
    channel: Channel;
    userId: string;
    status: string;
    messages: number;
    path: Path;
    data: ConversationData;
    metadata: ConversationMetadata;
    first_connection: Date;
    last_delivered: Date;
    last_read: Date;
    last_sent: Date;
    last_message: string;
    isRead: boolean;
    label: string;
    assigneeId: string;
    constructor(conversation?: Partial<Conversation>);
}
