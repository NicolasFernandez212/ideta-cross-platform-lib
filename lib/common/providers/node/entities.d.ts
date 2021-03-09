import { ComparisonAction } from './interfaces';
import { ComparisonType, OperationOptions, OperationType } from './types';
import { DataRichSegment } from '../data/interfaces';
import { NodeMapping } from './node-mapping/entities';
import { NodeTemplate } from './node-template/entities';
export declare class BotNode {
    id: string;
    key: string;
    name: string;
    category?: string;
    template: NodeTemplate;
    mapping: NodeMapping;
    createdAt: Date;
    createdBy: string;
    constructor(node: any);
    get abstractType(): string;
    get isSwitchNode(): boolean;
    get isGoToNode(): boolean;
    get isDataInputNode(): boolean;
    get isSystemNode(): boolean;
}
export declare class DataBoundedOperationOptions {
    isInteger: boolean;
    upperBound: DataRichSegment;
    lowerBound: DataRichSegment;
    constructor(options?: any);
}
export declare class DataComposedOperationOptions {
    separator?: DataRichSegment;
    replacement?: DataRichSegment;
    object?: DataRichSegment;
    source?: DataRichSegment[];
    constructor(options?: any);
}
export declare class DataSearchOperationOptions implements Omit<DataComparison, 'ifTrue' | 'ifFalse'> {
    searchable?: string;
    key: DataRichSegment;
    type: ComparisonType;
    comparator: DataRichSegment;
    ifTrue: DataRichSegment;
    ifFalse: DataRichSegment;
    constructor(options?: any);
}
export declare class DataOperation {
    type: OperationType;
    key: string;
    operand?: DataRichSegment;
    options?: OperationOptions;
    constructor(operation?: any);
}
export declare class DataComparison {
    key: DataRichSegment;
    type: ComparisonType;
    comparator?: DataRichSegment;
    ifTrue: ComparisonAction;
    ifFalse: ComparisonAction;
    constructor(comparison?: any);
}
