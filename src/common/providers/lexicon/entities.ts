import { get } from 'lodash';

import { Intent, Entity, Example } from './interfaces';
import { DialogflowLoginMethod, NlpService } from './types';

import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';
import { DialogflowLocation } from '../ai/dialogflow/types';

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
      if (nlpOptions.options) {
        this.options = {
          service: get(nlpOptions, 'options.service', null),
          intents: get(nlpOptions, 'options.intents', []),
          storage: {
            active: get(nlpOptions, 'options.storage.active')
          }
        };
        if (get(nlpOptions, 'options.storage.options')) {
          this.options.storage.options = {
            input: get(nlpOptions, 'options.storage.options.input', null),
            intent: get(nlpOptions, 'options.storage.options.intent', null),
            entities: get(nlpOptions, 'options.storage.options.entities', {})
          };
        }
      }
    }
  }
}

export class DialogflowCredentials {
  public access_token?: string;
  public refresh_token?: string;
  public private_key?: string;
  public client_email?: string;
  public project_id?: string;
  public project_location?: DialogflowLocation;

  constructor(credentials: any) {
    if (credentials) {
      if (credentials.access_token) this.access_token = credentials.access_token;
      if (credentials.refresh_token) this.refresh_token = credentials.refresh_token;
      if (credentials.private_key) this.private_key = credentials.private_key;
      if (credentials.client_email) this.client_email = credentials.client_email;
      if (credentials.project_id) this.project_id = credentials.project_id;
      this.project_location = credentials.project_location || 'us';
    }
  }

  loginMethod(checkProjectId?: boolean): DialogflowLoginMethod {
    if (checkProjectId && !this.project_id) return null;
    if (!!this.access_token && !!this.refresh_token) return 'oauth';
    if (!!this.client_email && !!this.private_key) return 'account';
    return null;
  }
}
