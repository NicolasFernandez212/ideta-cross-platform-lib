import { ConversationKeepAlive } from './interfaces';
import { LastEmitter } from './types';
export declare class ConversationSession {
    botToken: string;
    updatedAt: Date;
    lastEmitter: LastEmitter;
    keepAlives?: ConversationKeepAlive[];
    constructor(session?: any);
}
