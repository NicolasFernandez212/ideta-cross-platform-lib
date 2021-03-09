export interface EntityValue {
    name: string;
    synonyms: string;
}
export interface Entity {
    id?: string;
    name: string;
    color?: string;
    values: EntityValue[];
}
export interface Intent {
    id?: string;
    name: string;
}
export interface Example {
    id?: string;
    intentId: string;
    text: string;
    entities: ExamplePart[];
}
export interface ExamplePart {
    entityId: string;
    text: string;
}
export interface LexiconDiff {
    intents: LexiconDiffItem;
    entities: LexiconDiffItem;
    examples: LexiconDiffItem;
}
export interface LexiconDiffItem {
    nbRemote: number;
    nbBoth: number;
    nbLocal: number;
}
export interface DialogflowCredentials {
    access_token?: string;
    refresh_token?: string;
    private_key?: string;
    client_email?: string;
    project_id?: string;
}
export interface LuisCredentials {
    appId: string;
    appVersion: string;
    authKey: string;
    endpointKey?: string;
    useAuthAsEndpointKey: boolean;
}
