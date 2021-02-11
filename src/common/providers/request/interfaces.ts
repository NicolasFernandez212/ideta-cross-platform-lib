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
  type: 'image' | 'video' | 'audio' | 'file';
  url: string;
}
