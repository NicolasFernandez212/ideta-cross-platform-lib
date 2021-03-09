import { AppSubscriptionType } from './types';

export interface PermField {
  name: AppSubscriptionType;
  version: string; // Ex: 'v4.0'
}

export interface AppSubscriptionGet {
  object: 'page';
  active: boolean;
  callback_url: string;
  fields: PermField[];
}

export interface AppSubscriptionPost {
  object: 'page';
  callback_url: string;
  verify_token: string;
  fields: AppSubscriptionType[];
}
