export interface AppVersion {
    version: string;
    createdDateTime: string;
    lastModifiedDateTime: string;
    lastTrainedDateTime: string;
    lastPublishedDateTime: string;
    endpointUrl: string;
    assignedEndpointKey: {
        SubscriptionKey: string;
        SubscriptionRegion: string;
        SubscriptionName: string;
    };
    intentsCount: number;
    entitiesCount: number;
    endpointHitsCount: number;
    trainingStatus: string;
}
export interface Intent {
    id?: string;
    name: string;
}
export interface EntityList {
    id?: string;
    name: string;
    subLists: EntitySubList[];
}
export interface EntitySubList {
    id?: string;
    canonicalForm: string;
    list: string[];
}
export interface ExampleFromDownload {
    id: string;
    text: string;
    intentLabel: string;
    tokenizedText: string[];
    intentPredictions: {
        name: string;
        score: number;
    }[];
    entityPredictions: ExamplePartDownload[];
}
export interface ExamplePartDownload {
    entityName: string;
    startTokenIndex: number;
    endTokenIndex: number;
    phrase: string;
}
export interface ExampleToUpload {
    text: string;
    intentName: string;
    entityLabels: ExamplePartUpload[];
}
export interface ExamplePartUpload {
    entityName: string;
    startCharIndex: number;
    endCharIndex: number;
}
