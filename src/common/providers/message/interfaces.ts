import { MessageTemplate } from './types';
import { Actor } from '../conversation/interfaces';
import { MappingDataInput } from '../node/interfaces';

export interface Message {
  id: string;
  sender: Actor;
  userId: string;
  template: MessageTemplate;
  node: {
    id: string;
    name: string;
    dataInput?: MappingDataInput;
  };
  sent_at?: Date;
}
