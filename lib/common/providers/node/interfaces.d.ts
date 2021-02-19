import { ComparisonActionType, ComparisonType, OperationOptions, OperationType, OptionBehaviorType } from './types';
import { DataRichSegment } from '../data/interfaces';
import { NodeTemplate } from './node-template/interfaces';
import { NodeMapping } from './node-mapping/interfaces';
import { RequestType } from './node-mapping/types';
export interface BotNode {
    key: string;
    name: string;
    template: NodeTemplate;
    mapping: NodeMapping;
    createdAt: Date;
    createdBy: string;
}
export interface AsyncAction {
    type: 'email' | 'api' | 'workflow' | 'operations';
    name: string;
    optionsApi?: ApiAsyncAction;
    optionsEmail?: EmailAsyncAction;
    optionsWorkflow?: WorkflowAsyncAction;
    optionsOperations?: OperationsAsyncAction;
}
export interface EmailAsyncAction {
    from: string;
    addresses: string[];
    title: string;
    content: string;
}
export interface ApiAsyncAction {
    method: RequestType;
    url: string;
    headers?: string[];
    body?: {
        type: 'TEXT' | 'JSON';
        value: string;
    };
}
export interface WorkflowAsyncAction {
    node: string;
}
export interface OperationsAsyncAction {
    operations: DataOperation[];
}
export interface MappingAsyncAction {
    trigger: 'enter' | 'leave';
    action: AsyncAction;
}
export interface MappingOptions {
    behaviorMedia: MappingOptionBehavior;
    behaviorGeoloc: MappingOptionBehavior;
    isSystemNode?: boolean;
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
export interface DataOperation {
    type: OperationType;
    key: string;
    operand?: DataRichSegment;
    options?: OperationOptions;
}
export interface DataBoundedOperationOptions {
    isInteger: boolean;
    upperBound: DataRichSegment;
    lowerBound: DataRichSegment;
}
export interface DataSearchOperationOptions {
    searchable?: string;
    key: DataRichSegment;
    type: ComparisonType;
    comparator?: DataRichSegment;
    ifTrue?: DataRichSegment;
    ifFalse?: DataRichSegment;
}
export interface DataComposedOperationOptions {
    separator?: DataRichSegment;
    replacement?: DataRichSegment;
    object?: DataRichSegment;
    source?: DataRichSegment[];
}
export interface ComparisonAction {
    type?: ComparisonActionType;
    targetNode?: string;
}
export interface DataComparison {
    key: DataRichSegment;
    type: ComparisonType;
    comparator?: DataRichSegment;
    ifTrue: ComparisonAction;
    ifFalse: ComparisonAction;
}
export interface BroadcastNode extends BotNode {
    hasChanged: boolean;
}
