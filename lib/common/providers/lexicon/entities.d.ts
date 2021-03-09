import { Intent, Entity, Example } from './interfaces';
import { NlpService } from './types';
import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';
export declare class Lexicon {
    intents: Intent[];
    entities: Entity[];
    examples: Example[];
    constructor(lexicon: any);
}
export declare class NlpOptions {
    active: boolean;
    options?: {
        service: NlpService;
        intents: NlpTrigger[];
        storage?: SaveNlpOptions;
    };
    constructor(nlpOptions?: any);
}
