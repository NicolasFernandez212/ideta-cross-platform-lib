import { MessageTemplate } from './types';
import { Channel } from '../bot/types';
import { Actor } from '../conversation/types';
import { MappingDataInput } from '../node/node-mapping/entities';
export declare class Message {
    _id: string;
    botId: string;
    channel: Channel;
    userId: string;
    sender: Actor;
    template: MessageTemplate;
    node: {
        id: string;
        name: string;
        dataInput?: MappingDataInput;
    };
    sent_at: Date;
    constructor(message?: Partial<Message>);
}
