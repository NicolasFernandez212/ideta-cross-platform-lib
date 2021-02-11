import { LocationAttachment, MediaAttachment } from './interfaces';

export type IncomingMessageType = 'text' | 'postback' | 'attachments';

export type Attachment = MediaAttachment | LocationAttachment;
