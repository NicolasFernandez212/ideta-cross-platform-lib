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
export interface ActorMetadata {
    isTyping: boolean;
    last_sent: Date;
    last_read: Date;
}
export interface Actors {
    emitter: Actor;
    receiver: Actor;
}
export declare type ConversationMetadata = {
    [actor in Actor]?: ActorMetadata;
};
export declare type Actor = 'bot' | 'user';
