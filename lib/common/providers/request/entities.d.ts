import { Attachment, IncomingMessageType } from './types';
import { DataOperation } from '../node/entities';
export declare class IncomingMessage {
    type: IncomingMessageType;
    text?: string;
    targetNode?: string;
    trackingParam?: string;
    operations?: DataOperation[];
    attachments?: Attachment[];
    constructor({ type, text, targetNode, trackingParam, operations, attachments }?: Partial<IncomingMessage>);
}
