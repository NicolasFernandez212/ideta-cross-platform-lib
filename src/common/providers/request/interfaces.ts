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
  id?: string; // If 'node' type
  text?: string; // If 'text' type
  attachments?: Attachment[]; // If 'attachments' type
  // TODO: Find the format in the front
}
