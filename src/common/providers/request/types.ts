import { LocationAttachment, MediaAttachment } from './interfaces';

export type MediaAttachmentType = 'image' | 'video' | 'audio' | 'file';

export type IncomingMessageType = 'text' | 'postback' | 'attachments';

export type Attachment = MediaAttachment | LocationAttachment;
