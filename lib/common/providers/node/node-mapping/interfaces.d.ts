import { BodyType, DateDisplay, DateInput, DateOutput, FallbackType, FormatCheckType, MappingType, RequestType } from './types';
import { DataComparison, DataOperation, MappingAsyncAction, MappingOptions } from '../interfaces';
import { NlpService } from '../../bot/types';
export interface NodeMapping {
    type: MappingType;
    dataInput?: MappingDataInput;
    goToNode?: MappingGoToNode;
    switch?: MappingSwitch;
    actions?: MappingAsyncAction[];
    options: MappingOptions;
}
export interface MappingDataInput {
    triggers: TriggersOptions;
    nlp: NlpOptions;
    saveData: SaveDataOptions;
    fallback: FallbackOptions;
}
export interface TriggersOptions {
    active: boolean;
    options?: Trigger[];
}
export interface Trigger {
    value: string;
    targetNode: string;
}
export interface NlpOptions {
    active: boolean;
    options?: {
        service: NlpService;
        intents: NlpTrigger[];
        storage: SaveNlpOptions;
    };
}
export interface SaveNlpOptions {
    active: boolean;
    options?: {
        input?: string;
        intent?: string;
        entities?: {
            [key: string]: EntityMapping;
        };
    };
}
export interface EntityMapping {
    name?: string;
    values?: {
        key: string;
        isMultipleValue?: boolean;
    };
}
export interface NlpTrigger {
    intent: string;
    entity: string;
    targetNode: string;
}
export interface SaveDataOptions {
    active: boolean;
    options?: {
        key?: string;
        targetNode?: string;
        formatCheck?: FormatCheckType;
        customFormat?: string;
        dateDisplay?: DateDisplay;
        dateInput?: DateInput;
        dateOutput?: DateOutput;
        targetNodeIfCheckFails?: string;
    };
}
export interface FallbackOptions {
    active: boolean;
    options?: {
        type?: FallbackType;
        targetNode?: string;
        message?: string;
        url?: string;
    };
}
export interface MappingGoToNode {
    active: boolean;
    options?: {
        targetNode?: string;
        waitForInput?: boolean;
        operations?: DataOperation[];
    };
}
export interface MappingSwitch {
    assertEqual: AssertEqualOptions;
    performOperations: PerformOperationsOptions;
    sendToExternalApi: SendToExternalApiOptions;
}
export interface AssertEqualOptions {
    active: boolean;
    comparisons?: DataComparison[];
}
export interface PerformOperationsOptions {
    active: boolean;
    options?: {
        operations?: DataOperation[];
        targetNode?: string;
    };
}
export interface SendToExternalApiOptions {
    active: boolean;
    options?: {
        headers?: string;
        body?: string;
        data?: ApiData;
        fallbackNode?: string;
        method?: RequestType;
        targetNode?: string;
        timeout?: number;
        url?: string;
        bodyType?: BodyType;
    };
}
export interface ApiData {
    active?: boolean;
    arrayPath?: string;
    key?: string;
    mapping?: any;
    type?: 'object' | 'array';
}
