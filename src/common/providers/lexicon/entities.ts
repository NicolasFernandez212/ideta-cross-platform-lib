import { get } from 'lodash';

import { NlpService } from './types';

import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';

export class NlpOptions {
  public active: boolean;
  public options?: {
    service: NlpService;
    intents: NlpTrigger[];
    storage?: SaveNlpOptions;
  };

  constructor(nlpOptions?: any) {
    if (nlpOptions) {
      this.active = nlpOptions.active;
      this.options = {
        service: get(nlpOptions, 'options.service'),
        intents: get(nlpOptions, 'options.intents', []),
        storage: {
          active: get(nlpOptions, 'options.storage.active'),
          options: {
            input: get(nlpOptions, 'options.storage.options.input'),
            intent: get(nlpOptions, 'options.storage.options.intent'),
            entities: get(nlpOptions, 'options.storage.options.entities', {})
          }
        }
      };
    }
  }
}


