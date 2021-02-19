import { DataBoundedOperationOptions, DataComposedOperationOptions, DataSearchOperationOptions } from './interfaces';
export declare type OptionBehaviorType = 'message' | 'api';
export declare type OperationType = 'set' | 'delete' | 'erase' | 'dateNow' | 'concatenate' | 'split' | 'replace' | 'match' | 'toString' | 'toUpperCase' | 'toLowerCase' | 'stringify' | 'add' | 'remove' | 'divide' | 'multiply' | 'random' | 'round' | 'maximum' | 'minimum' | 'formula' | 'toNumber' | 'push' | 'slice' | 'find' | 'filter' | 'sort' | 'invertedSort' | 'join' | 'get' | 'merge' | 'parse' | 'conditional';
export declare type OperationOptions = DataBoundedOperationOptions | DataComposedOperationOptions | DataSearchOperationOptions;
export declare type ComparisonType = '!' | '.!' | '==' | '<>' | '<' | '<=' | '>' | '>=' | '^$';
export declare type ComparisonActionType = 'exit' | 'next';
