import { Intent, Entity, Example } from './interfaces';
import { DialogflowLoginMethod, NlpService } from './types';
import { NlpTrigger, SaveNlpOptions } from '../node/node-mapping/interfaces';
import { DialogflowLocation } from '../ai/dialogflow/types';
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
export declare class DialogflowCredentials {
    access_token?: string;
    refresh_token?: string;
    private_key?: string;
    client_email?: string;
    project_id?: string;
    project_location?: DialogflowLocation;
    constructor(credentials: any);
    loginMethod(checkProjectId?: boolean): DialogflowLoginMethod;
}
