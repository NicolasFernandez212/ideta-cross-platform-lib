import { AsyncAction } from '../node/node-mapping/entities';
/**
 * Conversation keep alive model
 *
 * Type : DB model (bots/{botId}/oauthServices/{service})
 * Representation : Front, Back, CF
 */
export interface ConversationKeepAlive {
    delay: number;
    message: string;
    sent: boolean;
    backgroundActions: AsyncAction[];
}
