import { NlpService } from './types';
import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';
export declare class NlpOptions {
    active: boolean;
    options?: {
        service: NlpService;
        intents: NlpTrigger[];
        storage?: SaveNlpOptions;
    };
    constructor(nlpOptions?: any);
}
