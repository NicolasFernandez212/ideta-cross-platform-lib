import { BodyType, DateDisplay, DateInput, DateOutput, FallbackType, FormatCheckType, OptionBehaviorType, RequestType } from './types';
import { DataComparison, DataOperation } from '../entities';
export interface TriggersOptions {
    active: boolean;
    options?: Trigger[];
}
export interface Trigger {
    value: string;
    targetNode: string;
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
    options?: SaveDataOptionsSettings;
}
export interface SaveDataOptionsSettings {
    key?: string;
    targetNode?: string;
    formatCheck?: FormatCheckType;
    customFormat?: string;
    dateDisplay?: DateDisplay;
    dateInput?: DateInput;
    dateOutput?: DateOutput;
    targetNodeIfCheckFails?: string;
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
        bodyType?: BodyType;
        data?: ApiData;
        fallbackNode?: string;
        isJSON?: boolean;
        method?: RequestType;
        targetNode?: string;
        timeout?: number;
        url?: string;
    };
}
export interface ApiData {
    active?: boolean;
    arrayPath?: string;
    key?: string;
    mapping?: any;
    type?: 'object' | 'array';
}
export interface MappingOptionBehavior {
    active: boolean;
    options?: {
        type?: OptionBehaviorType;
        message?: string;
        targetNode?: string;
        url?: string;
    };
}
