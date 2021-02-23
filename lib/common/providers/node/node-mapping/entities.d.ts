import { AssertEqualOptions, FallbackOptions, MappingOptionBehavior, PerformOperationsOptions, SaveDataOptions, SendToExternalApiOptions, TriggersOptions } from './interfaces';
import { BodyType, MappingActionTrigger, MappingType, RequestType } from './types';
import { NlpOptions } from '../../lexicon/entities';
import { DataOperation } from '../entities';
export declare class MappingDataInput {
    saveData: SaveDataOptions;
    triggers: TriggersOptions;
    nlp: NlpOptions;
    fallback: FallbackOptions;
    constructor(mappingDataInput?: any);
}
export declare class MappingGoToNode {
    active: boolean;
    options?: {
        targetNode?: string;
        waitForInput?: boolean;
        operations?: DataOperation[];
    };
    constructor(mappingGoToNode?: any);
}
export declare class MappingSwitch {
    assertEqual: AssertEqualOptions;
    performOperations: PerformOperationsOptions;
    sendToExternalApi: SendToExternalApiOptions;
    constructor(switchOptions?: any);
}
export declare class ApiAsyncAction {
    url: string;
    method: RequestType;
    headers?: string[];
    body?: {
        type: BodyType;
        value: string;
    };
    constructor(action?: any);
}
export declare class EmailAsyncAction {
    from: string;
    addresses: string[];
    title: string;
    content: string;
    constructor(action?: any);
}
export declare class OperationsAsyncAction {
    operations: DataOperation[];
    constructor(action?: any);
}
export declare class WorkflowAsyncAction {
    node: string;
    constructor(action?: any);
}
export declare class AsyncAction {
    type: 'email' | 'api' | 'workflow' | 'operations';
    name: string;
    optionsApi?: ApiAsyncAction;
    optionsEmail?: EmailAsyncAction;
    optionsWorkflow?: WorkflowAsyncAction;
    optionsOperations?: OperationsAsyncAction;
    constructor(action?: any);
}
export declare class MappingAsyncAction {
    trigger: MappingActionTrigger;
    action: AsyncAction;
    constructor(mappingAction?: any);
}
export declare class MappingOptions {
    behaviorMedia: MappingOptionBehavior;
    behaviorGeoloc: MappingOptionBehavior;
    isSystemNode?: boolean;
    constructor(mappingOptions?: any);
}
export declare class NodeMapping {
    type: MappingType;
    dataInput?: MappingDataInput;
    goToNode?: MappingGoToNode;
    switch?: MappingSwitch;
    actions: MappingAsyncAction[];
    options: MappingOptions;
    constructor(mapping?: any);
}
