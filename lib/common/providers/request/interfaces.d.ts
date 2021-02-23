import { Attachment, MediaAttachmentType } from './types';
/**
 * @deprecated
 */
export interface Sender {
    id: string;
    alternativeId: string;
}
export interface LocationAttachment {
    type: 'location';
    latitude: number;
    longitude: number;
}
export interface MediaAttachment {
    type: MediaAttachmentType;
    url: string;
}
export interface SendMessagePayload {
    type: 'node' | 'text' | 'attachments';
    id?: string;
    text?: string;
    attachments?: Attachment[];
}
