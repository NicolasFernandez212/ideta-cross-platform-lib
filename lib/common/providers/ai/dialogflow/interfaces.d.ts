import { AutoExpansionMode, EntityKind, ExampleType, WebhookState } from './types';
export interface Intent {
    name?: string;
    displayName: string;
    webhookState: WebhookState;
    trainingPhrases: Example[];
    parameters: IntentParameter[];
}
export interface EntityType {
    name?: string;
    displayName: string;
    kind: EntityKind;
    autoExpansionMode: AutoExpansionMode;
    entities: Entity[];
}
export interface Entity {
    id?: string;
    value: string;
    synonyms: string[];
}
export interface Example {
    name?: string;
    type: ExampleType;
    parts: ExamplePart[];
}
export interface ExamplePart {
    text: string;
    entityType?: string;
    alias?: string;
    userDefined?: boolean;
}
export interface IntentParameter {
    name?: string;
    displayName: string;
    entityTypeDisplayName: string;
}
