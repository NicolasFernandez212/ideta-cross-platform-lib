import { LocationAttachment, MediaAttachment } from './interfaces';
export declare type MediaAttachmentType = 'image' | 'video' | 'audio' | 'file';
export declare type IncomingMessageType = 'text' | 'postback' | 'attachments';
export declare type Attachment = MediaAttachment | LocationAttachment;
