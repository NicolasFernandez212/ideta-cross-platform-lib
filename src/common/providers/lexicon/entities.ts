import { get } from 'lodash';

import { Intent, Entity, Example } from './interfaces';
import { NlpService } from './types';

import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';

export class Lexicon {
  public intents: Intent[];
  public entities: Entity[];
  public examples: Example[];

  constructor(lexicon: any) {
    this.intents = Object.keys(lexicon.intents || {}).map((intentId: string) => ({
      id: intentId,
      ...lexicon.intents[intentId]
    }));
    this.entities = Object.keys(lexicon.entities || {}).map((entityId: string) => ({
      id: entityId,
      ...lexicon.entities[entityId]
    }));
    this.examples = Object.keys(lexicon.examples || {}).map((exampleId: string) => ({
      id: exampleId,
      ...lexicon.examples[exampleId]
    }));
  }
}

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
